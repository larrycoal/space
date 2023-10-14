import React from "react";
import Header from "../Header";
import douglas from "../../assets/douglas.svg";
import mark from "../../assets/mark.svg";
import victor from "../../assets/victor.svg";
import anounsheh from "../../assets/anouhseheh.svg";

import "./index.css";
const index = () => {
  return (
    <>
      <Header />
      <div className="crew_wrapper">
        <div className="commander_wrapper">
          <div className="container">
            <div className="left">
              <h2>
                <span>02</span>
                <span>MEET YOUR CREW</span>
              </h2>
              <div className="crew_details">
                <p>commander</p>
                <h1>Douglas Hurley</h1>
                <p>
                  Douglas Gerald Hurley is an American engineer, former Marine
                  Corps pilot and former NASA astronaut. He launched into space
                  for the third time as commander of Crew Dragon Demo-2.
                </p>
                <ul>
                  <li className="active"></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
            <div className="right">
              <img src={douglas} alt="crew commander douglas" />
            </div>
          </div>
        </div>
        <div className="specialist_wrapper">
          <div className="container">
            <div className="left">
              <h2>
                <span>02</span>
                <span>MEET YOUR CREW</span>
              </h2>
              <div className="crew_details">
                <p>Mission Specialist </p>
                <h1>MARK SHUTTLEWORTH</h1>
                <p>
                  Mark Richard Shuttleworth is the founder and CEO of Canonical,
                  the company behind the Linux-based Ubuntu operating system.
                  Shuttleworth became the first South African to travel to space
                  as a space tourist.
                </p>
                <ul>
                  <li></li>
                  <li className="active"></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
            <div className="right">
              <img src={mark} alt="crew commander douglas" />
            </div>
          </div>
        </div>
        <div className="pilot_wrapper">
          <div className="container">
            <div className="left">
              <h2>
                <span>02</span>
                <span>MEET YOUR CREW</span>
              </h2>
              <div className="crew_details">
                <p>pilot</p>
                <h1>Victor Glover</h1>
                <p>
                  Pilot on the first operational flight of the SpaceX Crew
                  Dragon to the International Space Station. Glover is a
                  commander in the U.S. Navy where he pilots an F/A-18.He was a
                  crew member of Expedition 64, and served as a station systems
                  flight engineer.
                </p>
                <ul>
                  <li></li>
                  <li></li>
                  <li className="active"></li>
                  <li></li>
                </ul>
              </div>
            </div>
            <div className="right">
              <img src={victor} alt="crew commander douglas" />
            </div>
          </div>
        </div>
        <div className="engineer_wrapper">
          <div className="container">
            <div className="left">
              <h2>
                <span>02</span>
                <span>MEET YOUR CREW</span>
              </h2>
              <div className="crew_details">
                <p>Flight Engineer</p>
                <h1>Anousheh Ansari</h1>
                <p>
                  Anousheh Ansari is an Iranian American engineer and co-founder
                  of Prodea Systems. Ansari was the fourth self-funded space
                  tourist, the first self-funded woman to fly to the ISS, and
                  the first Iranian in space.
                </p>
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li className="active"></li>
                </ul>
              </div>
            </div>
            <div className="right">
              <img src={anounsheh} alt="crew commander douglas" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
