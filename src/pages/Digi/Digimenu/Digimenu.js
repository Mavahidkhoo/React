import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faHome, faCar, faBomb, faPercent, faBasketShopping, faCreditCard, faMobileScreenButton, faCouch } from "@fortawesome/free-solid-svg-icons";
import "./Digimenu.css";

const menuItems = [
  { icon: faHome, label:"خانه" },
  { icon: faBomb, label: "شگفت انگیزها" },
  { icon: faBasketShopping, label: "سوپرمارکت" },
  { icon: faCreditCard, label: "کارت هدیه" },
  { icon: faPercent, label: "پرفروش ترین" },
];
const products = [
  { icon: faMobileScreenButton, label: "موبایل" },
  { icon: faCouch, label: "مبلمان" },
  { icon: faCar, label: "خودرو" },
];

function Digimenu() {
  return (
    <div className="menu-container">
      <nav className="row">
        <div className="d-flex products align-items-center">
          <div className="menu-item position-relative d-flex align-items-center">
            <FontAwesomeIcon icon={faBars} className="align-item-start ms-2 menuhamber" />
            <span className="menu">محصولات</span>
            <div className="underline"></div>
            <div className="submenu">
              <ul className="d-flex flex-column w-100">
                {products.map((item, index) => (
                  <li key={index} className="d-flex justify-content-around text-muted">
                    <div className="d-flex flex-column-reverse">
                      <FontAwesomeIcon icon={item.icon} />
                    </div>
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <strong className="me-3">|</strong>
          <div className="d-flex align-items-center">
            {menuItems.map((item, index) => (
              <div key={index} className="menu-item position-relative d-flex align-items-center">
                <FontAwesomeIcon icon={item.icon} className="me-3" />
                <span className="me-2 menu icon-spacing">{item.label}</span>
                <div className="underline"></div>
              </div>
            ))}
          </div>
        </div>
      </nav>
      <div className="hr"></div>
    </div>
  );
}

export default Digimenu;
