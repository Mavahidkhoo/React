import React from "react";
import Diginav from "../Digi/Diginav/Diginav";
import Picslider from "./Picslider/picslider";
import Card from "./Card/Card";
import Slidercard from "./Slidercard/Slidercard";
import { useLocation } from "react-router-dom";
import "../../../src/Font.css";
import Register from "./Register/Register";
import Footer from "./Footer/Footer";
import Login from "./Login/Login";
import Shop from "./Shop/Shop";
import { ShopContextProvider } from "./Context/Shopcontext";

function Digi() {
  const location = useLocation();

  return (
    <ShopContextProvider>
      {location.pathname === "/digi" && (
        <div>
          <Diginav />
          <Picslider />
          <Card />
          <Slidercard />
          <Footer />
        </div>
      )}
      {location.pathname === "/digi/register" && (
        <div>
          <Register />
        </div>
      )}
      {location.pathname === "/digi/login" && (
        <div>
          <Login />
        </div>
      )}
      {location.pathname === "/digi/shop" && (
        <div>
          <Shop />
        </div>
      )}
    </ShopContextProvider>
  );
}

export default Digi;
