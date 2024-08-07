import React, { useState, useEffect } from "react";
import { Route, Routes, NavLink, useNavigate } from "react-router-dom";
import { Dropdown } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from "../../Home/Home";
import Logo from "../../../assets/pic/digi/logo.svg";
import Register from "../Register/Register";
import Login from "../Login/Login";
import "./Diginav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
import Digimenu from "../Digimenu/Digimenu";

function Nav() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    if (user) {
      setIsLoggedIn(true);
      setUsername(user.username);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setIsLoggedIn(false);
    setUsername('');
    navigate('/digi');
  };

  return (
    <div className="container-fluid p-0 digi">
      <nav className="navbar navbar-expand-lg row">
        {/* Right Navbar Design */}
        <div className="d-flex flex-row w-50">
          <div className="col-2 ms-5">
            <NavLink className="navbar-brand" to="/">
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
          <div className="col-1 me-2">
            <FontAwesomeIcon icon={faCartShopping} className="cart-shoping" />
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
      </Routes>
    </div>
  );
}

export default Nav;
