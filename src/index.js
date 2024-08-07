import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import "./index.css";
import Nav from "./navbar/Nav";
import Digi from "./pages/Digi/Digi";

function Main() {
  const location = useLocation();
  let show;
  if (location.pathname.includes("/digi")) {
    show = <Digi />;
  } else {
    show = <Nav />;
  }

  return <>{show}</>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Main />
    </Router>
  </React.StrictMode>
);
