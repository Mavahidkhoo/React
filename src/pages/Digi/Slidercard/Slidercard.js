import React ,{useState} from 'react'
import "./Slidercard.css"
import { Carousel, Container, Row, Col, Card as BootstrapCard, Button } from 'react-bootstrap';
import Card1 from "../../../assets/pic/digi/Card/card1.jpg";
import Card2 from "../../../assets/pic/digi/Card/card2.jpg";
import Card3 from "../../../assets/pic/digi/Card/card3.jpg";
import Card4 from "../../../assets/pic/digi/Card/card4.jpg";

function Slidercard() {
    const cardsData = [
        {
          img: Card1,
          title: "کارت اول",
          text: "این یک توضیح برای کارت اول است.",
          price: "100,000 تومان"
        },
        {
          img: Card2,
          title: "کارت دوم",
          text: "این یک توضیح برای کارت دوم است.",
          price: "200,000 تومان"
        },
        {
          img: Card3,
          title: "کارت سوم",
          text: "این یک توضیح برای کارت سوم است.",
          price: "300,000 تومان"
        },
        {
          img: Card4,
          title: "کارت چهارم",
          text: "این یک توضیح برای کارت چهارم است.",
          price: "400,000 تومان"
        },
        {
          img: Card2,
          title: "کارت پنجم",
          text: "این یک توضیح برای کارت پنجم است.",
          price: "500,000 تومان"
        },
        {
          img: Card1,
          title: "کارت ششم",
          text: "این یک توضیح برای کارت ششم است.",
          price: "600,000 تومان"
        },
        {
          img: Card4,
          title: "کارت هفتم",
          text: "این یک توضیح برای کارت هفتم است.",
          price: "700,000 تومان"
        },
        {
          img: Card3,
          title: "کارت هشتم",
          text: "این یک توضیح برای کارت هشتم است.",
          price: "800,000 تومان"
        }
      ];
    
      const chunkArray = (array, size) => {
        const result = [];
        for (let i = 0; i < array.length; i += size) {
          result.push(array.slice(i, i + size));
        }
        return result;
      };
    
      const cardChunks = chunkArray(cardsData, 4);
    
      return (
        <Container className='mt-5'>
        <Carousel>
          {cardChunks.map((chunk, index) => (
            <Carousel.Item key={index}>
              <Row>
                {chunk.map((card, idx) => (
                  <Col md={3} key={idx}>
                    <CardItem card={card} />
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    );
    }
    function CardItem({ card }) {
        const [count, setCount] = useState(0);
      
        const increment = () => setCount(count + 1);
        const decrement = () => setCount(count > 0 ? count - 1 : 0);
      
        return (
          <BootstrapCard className='mb-4'>
            <BootstrapCard.Img variant="top" src={card.img} className='card-img-top' alt={card.title} />
            <BootstrapCard.Body>
              <BootstrapCard.Title>{card.title}</BootstrapCard.Title>
              <BootstrapCard.Text>{card.text}</BootstrapCard.Text>
              <p className='card-price text-muted'>{card.price}</p>
              <div className="d-flex justify-content-between align-items-center">
                <Button variant="danger" onClick={decrement} disabled={count === 0}>-</Button>
                <span>{count}</span>
                <Button variant="success" onClick={increment}>+</Button>
              </div>
            </BootstrapCard.Body>
          </BootstrapCard>
        );
      }

export default Slidercard