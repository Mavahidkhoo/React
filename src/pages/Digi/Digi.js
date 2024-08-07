import React from "react";
import Diginav from "../Digi/Diginav/Diginav";
import Picslider from "./Picslider/picslider";
import Card from "./Card/Card";
import Slidercard from "./Slidercard/Slidercard";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import "../../../src/Font.css";
import Register from "./Register/Register";
import Footer from "./Footer/Footer";
import Login from "./Login/Login";

function Digi() {
  const location = useLocation();
  if (location.pathname === "/digi") {
    return (
      <div>
        <Diginav />
        <Picslider />
        <Card />
        <Slidercard />
        <Footer />
      </div>
    );
  } else if (location.pathname === "/digi/register") {
    return (
      <div>
        <Register />
      </div>
    );
  }else if (location.pathname === "/digi/login") {
    return (
      <div>
        <Login />
      </div>
    );
  }
}

export default Digi;
