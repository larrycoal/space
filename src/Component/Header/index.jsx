import React from 'react';
import headerLogo from "../../assets/MainLogo.svg"
import "./index.css"
const Header = () => {
    return (
      <div className="header_wrapper" onClick={() => console.log("clicked")}>
        <img src={headerLogo} alt="header logo" className="header_logo" />
        <div className="horizontal_line-wrapper">
          <div className="horizontal_line"></div>
        </div>
        <div className="tabs">
          <ul>
            <li>
              <span>00</span> <span>HOME</span>
            </li>
            <li>
              <span>01</span> <span>DESTINATION</span>
            </li>
            <li>
              <span>02</span> <span>CREW</span>
            </li>
            <li>
              <span>03</span> <span>TECHNOLOGY</span>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default Header;