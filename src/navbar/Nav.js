import React from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from "../pages/Home/Home";
import Digi from "../pages/Digi/Digi";
import Contact from "../pages/Contact/Contact";
import NotFound from "../pages/NotFound/NotFound";
import About from "../pages/About/About";
import Logo from "../assets/pic/logo/logo.png";
import "./Nav.css";
import Register from "../pages/Digi/Register/Register";

function Nav() {
  return (
    <div className="container p-0">
      <nav className="navbar navbar-expand-lg navcolor">
        <NavLink className="navbar-brand" to="/">
          <img src={Logo} alt="Logo" />
        </NavLink>

        <div className="collapse navbar-collapse me-5" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/" activeClassName="active">
                خانه
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/digi" activeClassName="active">
                نمونه دیجی کالا
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" activeClassName="active">
                ارتباط با من
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about" activeClassName="active">
                درباره من
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/digi" element={<Digi />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/digi/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default Nav;
