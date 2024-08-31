import React, { useContext } from "react";
import "./Shop.css";
import { CARDS } from "../Products/Products";
import { ShopContext } from "../Context/Shopcontext";
import Nav from "../Diginav/Diginav";
import Carditem from "../Card/Carditem";
import { useNavigate } from "react-router-dom";

function Shop() {
  const { cardItems, clearCart } = useContext(ShopContext);
  const itemsInCart = CARDS.filter((p) =>
    cardItems.some((i) => i.id === p.id)
  );
  const navigate = useNavigate();

  const handleCheckout = () => {
    alert("از خرید شما متشکریم!"); // نمایش پیام Alert
    clearCart(); // خالی کردن سبد خرید
    navigate("/digi"); // هدایت به صفحه اصلی
  };

  return (
    <div>
      <Nav />
      <div className="text-center text-success">
        {itemsInCart.length > 0 ? (
          <h1>سبد خرید شما</h1>
        ) : (
          <h1>سبد خرید شما خالی است.</h1>
        )}
        <div className="container mt-5">
          <div className="row">
            {itemsInCart.length > 0 &&
              itemsInCart.map((p) => (
                <Carditem key={p.id} card={p} showAddToCartButton={false} />
              ))}
          </div>
          {itemsInCart.length > 0 && (
            <div className="mt-4">
              <button className="btn btn-primary" onClick={handleCheckout}>
                نهایی کردن خرید
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Shop;
