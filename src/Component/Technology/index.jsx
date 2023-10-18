import React from "react";
import Header from "../Header";
import "./index.css";
import launch from "../../assets/launch.svg";
import capsule from "../../assets/capsule.svg";
import spacesport from "../../assets/spacesport.png";
const index = () => {
  return (
    <>
      <Header />
      <div className="technology_wrapper">
        <div className="container">
          <div className="header">
            <h2>
              <span>02</span>
              <span>Space launch 101</span>
            </h2>
          </div>
          <div className="content_wrapper">
            <div className="navigation">
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
            </div>
            <div className="content">
              <div className="launch">
                <div className="left">
                  <p>The terminology...</p>
                  <h1>Launch Vehicle</h1>
                  <p>
                    A launch vehicle or carrier rocket is a rocket-propelled
                    vehicle used to carry a payload from Earth's surface to
                    space, usually to Earth orbit or beyond. Our WEB-X carrier
                    rocket is the most powerful in operation. Standing 150
                    metres tall, it's quite an awe-inspiring sight on the launch
                    pad!
                  </p>
                </div>

                <div className="right">
                  <img src={launch} alt="launch vehicle" />
                </div>
              </div>
              <div className="spacesport">
                <div className="left">
                  <p>The terminology...</p>
                  <h1>SPACEPORT</h1>
                  <p>
                    A spaceport or cosmodrome is a site for launching (or
                    receiving) spacecraft, by analogy to the seaport for ships
                    or airport for aircraft. Based in the famous Cape Canaveral,
                    our spaceport is ideally situated to take advantage of the
                    Earth’s rotation for launch.
                  </p>
                </div>

                <div className="right">
                  <img src={spacesport} alt="launch vehicle" />
                </div>
              </div>
              <div className="capsule">
                <div className="left">
                  <p>The terminology...</p>
                  <h1>SPACE CAPSULE</h1>
                  <p>
                    A space capsule is an often-crewed spacecraft that uses a
                    blunt-body reentry capsule to reenter the Earth's atmosphere
                    without wings. Our capsule is where you'll spend your time
                    during the flight. It includes a space gym, cinema, and
                    plenty of other activities to keep you entertained.
                  </p>
                </div>

                <div className="right">
                  <img src={capsule} alt="launch vehicle" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
