import React from "react";
import headerLogo from "../../assets/MainLogo.svg";
import hamburger from "../../assets/hamburger.svg";
import closeBtn from "../../assets/close.svg";
import "./index.css";
import { Route, Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
const Header = () => {
  const location = useLocation();
  const [currLocation, setCurrLocation] = useState("home");
  const [showSideBar, setShowSideBar] = useState(false);
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
    <>
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
        <div
          className="hamburger"
          onClick={() => setShowSideBar(!showSideBar)}
        >
          <img src={hamburger} alt="hamburger logo" />
        </div>
      </div>
      <div
        className="sidebar"
        style={{ display: showSideBar ? "flex" : "", width:showSideBar && "300px" }}
      >
        <div className="close_btn" onClick={() => setShowSideBar(!showSideBar)}>
          <img src={closeBtn} alt="close botton" />
        </div>
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
    </>
  );
};

export default Header;
