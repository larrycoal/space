import React from "react";
import leftbck from "../../assets/full_bck.svg"
import rightbck from "../../assets/right_bck.png"
import "./index.css";
const Home = () => {
  return (
    <div className="home_wrapper">
      <div className="home_bck">
        <div className="left_bck"></div>
        <div className="right_bck"></div>
      </div>

      <div className="left">
        <p>SO, YOU WANT TO TRAVEL TO</p>
        <h2>SPACE</h2>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="right">
        <div className="explore">
          <span>EXPLORE</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
