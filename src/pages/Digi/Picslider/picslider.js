import React from "react";
import "./picslider.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Carousel1 from "../../../assets/pic/digi/Carousel/carousel1.jpg";
import Carousel2 from "../../../assets/pic/digi/Carousel/carousel2.jpg";
import Carousel3 from "../../../assets/pic/digi/Carousel/carousel3.jpg";

function Picslider() {
  const Slider = [
    {
      pic: Carousel1,
      altPic: "اسلاید اول",
      sub: "برچسب اسلاید اول",
      text: "لورم 1 ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    },
    {
      pic: Carousel2,
      altPic: "اسلاید دوم",
      sub: "برچسب اسلاید دوم",
      text: "لورم 2 ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    },
    {
      pic: Carousel3,
      altPic: "اسلاید سوم",
      sub: "برچسب اسلاید سوم",
      text: "لورم 3 ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    },
  ];
  return (
    <div id="picslider" className="container">
      <Carousel>
        {Slider.map((item, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100" src={item.pic} alt={item.altPic} />
            <Carousel.Caption>
              <h3>{item.sub}</h3>
             <p>{item.text}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Picslider;
