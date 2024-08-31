import React, { useState, useEffect, useContext } from "react";
import "./Card.css";
import { ShopContext } from "../Context/Shopcontext";

function Carditem({ card, showAddToCartButton }) {
  const { cardItems, AddToCart, IncrementItem, RemoveFromCart } = useContext(ShopContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const itemInCart = cardItems?.find((item) => item.id === card.id);
  const itemCount = itemInCart?.count || 0;

  const handleAddToCart = () => {
    AddToCart(card.id);
  };

  return (
    <div className="col-md-3">
      <div className="card mb-4">
        <img src={card.img} className="card-img-top" alt={card.title} />
        <div className="card-body">
          <h5 className="card-title">{card.title}</h5>
          <p className="card-text">{card.text}</p>
          <p className="card-price text-muted">{card.price}</p>
          {itemInCart ? (
            <div className="d-flex justify-content-between align-items-center">
              <button
                className="btn btn-danger"
                onClick={() => RemoveFromCart(card.id)}
                disabled={itemCount === 0}
              >
                -
              </button>
              <span>{itemCount}</span>
              <button
                className="btn btn-success"
                onClick={() => IncrementItem(card.id)}
              >
                +
              </button>
            </div>
          ) : (
            isLoggedIn &&
            showAddToCartButton && (
              <button
                className="btn btn-danger mt-2"
                onClick={handleAddToCart}
              >
                افزودن به سبد خرید
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Carditem;
