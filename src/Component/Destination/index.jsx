import React from "react";
import Header from "../Header";
import moon from "../../assets/moon.png";
import mars from "../../assets/mars.png";
import europa from "../../assets/europa.png";
import titan from "../../assets/titan.png";
import { destinations } from "../../utils/destination";
import "./index.css";
import { useState } from "react";
import { useEffect } from "react";
const Destination = () => {
  const [currDestination, setCurrDestination] = useState(destinations[0]);
  useEffect(() => {
    const tempDestination = destinations[0];
    tempDestination.image = moon;
    setCurrDestination(tempDestination);
    console.log(tempDestination);
  }, []);

  const handleDestinationChange = (destinationName) => {
    const tempDestination = destinations.filter(
      (dest) => dest.name === destinationName
    )[0];
    switch (destinationName) {
      case "MOON":
        tempDestination.image = moon;
        break;
      case "MARS":
        tempDestination.image = mars;
        break;
      case "EUROPA":
        tempDestination.image = europa;
        break;
      case "TITAN":
        tempDestination.image = titan;
        break;
      default:
        break;
    }
    setCurrDestination(tempDestination);
  };
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
            <img src={currDestination?.image ?? moon} alt="the moon" />
          </div>
          <div className="right">
            <ul className="destination_list">
              <li
                className={currDestination.name === "MOON" ? "active" : ""}
                onClick={() => handleDestinationChange("MOON")}
              >
                MOON
              </li>
              <li
                className={currDestination.name === "MARS" ? "active" : ""}
                onClick={() => handleDestinationChange("MARS")}
              >
                MARS
              </li>
              <li
                className={currDestination.name === "EUROPA" ? "active" : ""}
                onClick={() => handleDestinationChange("EUROPA")}
              >
                EUROPA
              </li>
              <li
                className={currDestination.name === "TITAN" ? "active" : ""}
                onClick={() => handleDestinationChange("TITAN")}
              >
                TITAN
              </li>
            </ul>
            <h1 className="destination_name">{currDestination.name}</h1>
            <p className="destination_details">{currDestination.details}</p>
            <div className="destination_sub">
              <p>
                <span>AVG. DISTANCE</span>
                <span>{currDestination.distance}</span>
              </p>
              <p>
                <span>Est. travel time</span>
                <span>{currDestination.time}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Destination;
