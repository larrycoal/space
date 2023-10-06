import React from "react";
import headerLogo from "../../assets/MainLogo.svg";
import "./index.css";
import { Route, Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
const Header = () => {
  const location = useLocation();
  const [currLocation, setCurrLocation] = useState("home");
  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setCurrLocation("home");
        break;
      case "/destination":
        setCurrLocation("destination");
        break;
      case "/crew":
        setCurrLocation("crew");
        break;
      case "/technology":
        setCurrLocation("technology");
        break;
      default:
        break;
    }
  }, [location]);
  return (
    <div className="header_wrapper" onClick={() => console.log("clicked")}>
      <img src={headerLogo} alt="header logo" className="header_logo" />
      <div className="horizontal_line-wrapper">
        <div className="horizontal_line"></div>
      </div>
      <div className="tabs">
        <ul>
          <li className={currLocation === "home" ? "active" : ""}>
            <Link to="/">
              <span>00</span> <span>HOME</span>
            </Link>
          </li>
          <li className={currLocation === "destination" ? "active" : ""}>
            <Link to="/destination">
              <span>01</span> <span>DESTINATION</span>
            </Link>
          </li>
          <li className={currLocation === "crew" ? "active" : ""}>
            <Link to="/crew">
              <span>02</span> <span>CREW</span>
            </Link>
          </li>
          <li className={currLocation === "technology" ? "active" : ""}>
            <Link to="/technology">
              <span>03</span> <span>TECHNOLOGY</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
