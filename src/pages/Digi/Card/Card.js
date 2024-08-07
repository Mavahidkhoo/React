import React, { useState } from 'react';
import "./Card.css";
import Card1 from "../../../assets/pic/digi/Card/card1.jpg";
import Card2 from "../../../assets/pic/digi/Card/card2.jpg";
import Card3 from "../../../assets/pic/digi/Card/card3.jpg";
import Card4 from "../../../assets/pic/digi/Card/card4.jpg";

function Card() {
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
    }
  ];

  return (
    <div className='container mt-5'>
      <div className='row'>
        {cardsData.map((card, index) => (
          <CardItem key={index} card={card} />
        ))}
      </div>
    </div>
  );
}

function CardItem({ card }) {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className='col-md-3'>
      <div className='card mb-4'>
        <img src={card.img} className='card-img-top' alt={card.title} />
        <div className='card-body'>
          <h5 className='card-title'>{card.title}</h5>
          <p className='card-text'>{card.text}</p>
          <p className='card-price text-muted'>{card.price}</p>
          <div className="d-flex justify-content-between align-items-center">
            <button className="btn btn-danger" onClick={decrement} disabled={count === 0}>-</button>
            <span>{count}</span>
            <button className="btn btn-success" onClick={increment}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
