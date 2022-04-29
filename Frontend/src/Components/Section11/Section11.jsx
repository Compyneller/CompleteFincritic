import React from "react";
import "./Section11.css";
const Section11 = () => {
  return (
    <div className="w-100 py-5" style={{ background: "#0B121C" }}>
      <div className="container text-center">
        <p className="mb-2" style={{ fontSize: "20px ", color: "#04BDF1" }}>
          Start trading with FP Markets
        </p>
        <h1 className="text-light mb-5">
          Fast account opening
          <span style={{ fontWeight: "lighter" }}> in 3 simple steps</span>
        </h1>
        <div className="parentCircleContainer">
          <div className="customCircle">
            <div className="circle">
              <div className="innerCircle">1</div>
            </div>
            <div className="arrow"></div>
            <div className="circle">
              <div className="innerCircle">2</div>
            </div>{" "}
            <div className="arrow"></div>
            <div className="circle">
              <div className="innerCircle">3</div>
            </div>{" "}
          </div>
          <div className="circleContent">
            <div>
              <h1>Register</h1>
              <p>
                Choose account type and complete our fast and secure application
                form
              </p>
            </div>
            <div>
              <h1>Fund</h1>
              <p>
                Fund your trading account using a wide range of funding methods
              </p>
            </div>
            <div>
              <h1>Trade</h1>
              <p>Start trading and access over 10,000+ instruments</p>
            </div>
          </div>
        </div>
        <button className="circleButton">OPEN AN ACCOUNT NOW</button>
      </div>
    </div>
  );
};

export default Section11;
