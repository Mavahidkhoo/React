import React from "react";
import "./Card.css";
import { CARDS } from "../Products/Products";
import Carditem from "./Carditem";

function Card() {
  return (
      <div className="container mt-5">
        <div className="row">
          {CARDS.map((card, index) => (
            <Carditem key={index} card={card} showAddToCartButton={true}/>
          ))}
        </div>
      </div>
  );
}

export default Card;
