import React from "react";
import Header from "../Header";
import moon from "../../assets/moon.svg";
import "./index.css";
const Destination = () => {
  return (
    <>
      <Header />
      <div className="destination_wrapper">
        <div className="top">
          <h3>
            <span>01</span> PICK YOUR DESTINATION
          </h3>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={moon} alt="the moon" />
          </div>
          <div className="right">
            <ul>
              <li>MOON</li>
              <li>MARS</li>
              <li>EUROPA</li>
              <li>TITAN</li>
            </ul>
            <h1>MOON</h1>
            <p>
              See our planet as you’ve never seen it before. A perfect relaxing
              trip away to help regain perspective and come back refreshed.
              While you’re there, take in some history by visiting the Luna 2
              and Apollo 11 landing sites.
            </p>
            <hr />
            <div>
              <p>
                <span>AVG. DISTANCE</span>
                <span>225 MIL. km</span>
              </p>
              <p>
                <span>Est. travel time</span>
                <span>9 months</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Destination;
