import React from 'react';
import Header from '../Header';
import douglas from "../../assets/douglas.svg"
import "./index.css"
const index = () => {
    return (
      <>
        <Header />
        <div className="crew_wrapper">
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
                  <li className='active'></li>
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
      </>
    );
};

export default index;