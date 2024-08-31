import React, { useState, useEffect, useContext } from "react";
import { Route, Routes, NavLink, useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from "../../Home/Home";
import Logo from "../../../assets/pic/digi/logo.svg";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Shop from "../Shop/Shop";
import "./Diginav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
import Digimenu from "../Digimenu/Digimenu";
import { ShopContext } from "../Context/Shopcontext"; // اضافه کردن این خط

function Nav() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const { uniqueItemsCount } = useContext(ShopContext); // استفاده از مقدار جدید

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (user) {
      setIsLoggedIn(true);
      setUsername(user.username);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setIsLoggedIn(false);
    setUsername("");
    navigate("/");
  };

  return (
      <div className="container-fluid p-0 digi">
        <nav className="navbar navbar-expand-lg row">
          {/* Right Navbar Design */}
          <div className="d-flex flex-row w-50">
            <div className="col-2 ms-5">
              <NavLink className="navbar-brand" to="/digi">
                <img
                  src={Logo}
                  alt="Home"
                  title="Home"
                  style={{
                    width: "150px",
                    height: "30px",
                  }}
                />
              </NavLink>
            </div>
            <div className="search-bar col-10">
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
              <input className="w-100 search-input" type="text" placeholder="جـسـتـجـو"></input>
            </div>
          </div>
          {/* Left Navbar Design */}
          <div className="d-flex flex-row-reverse w-50">
            <div className="col-1 me-2 position-relative">
              <NavLink className="text-dark" to="/digi/shop">
                <FontAwesomeIcon icon={faCartShopping} className="cart-shoping" />
                {uniqueItemsCount > 0 && (
                  <span className="badge bg-danger rounded-pill position-absolute top-0 start-100 translate-middle">
                    {uniqueItemsCount}
                  </span>
                )}
              </NavLink>
            </div>
            <span className="pip"> | </span>
            <div className="col-2">
              {isLoggedIn ? (
                <Dropdown>
                  <Dropdown.Toggle className="dp" variant="outline-secondary" id="dropdown-basic">
                    {username}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={handleLogout}>خروج</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <NavLink to="/digi/register">
                  <button type="button" className="btn btn-outline-primary bolder">
                    ثبت نام | ورود
                  </button>
                </NavLink>
              )}
            </div>
          </div>
          {/* Menu */}
        </nav>
        <Digimenu />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </div>
  );
}

export default Nav;
