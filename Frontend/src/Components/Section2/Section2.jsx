import React from "react";
import "./Section2.css";
import { Link } from "react-router-dom";

const Section2 = () => {
  return (
    <div className="container section2Container text-dark py-5" id="trading">
      <div className="row newTrader">
        <div className="col-12 col-lg-6 px-5">
          <div className="w-100 section2Card">
            <i className="fa-solid fa-children thumbsup mb-3"></i>
            <h3>Are you a</h3>
            <h1 className="my-3">New Trader?</h1>
            <div className="row mb-5">
              <div className="col-4">
                <i className="fa-solid fa-book-open"></i>
                <p>Learn about trading</p>
              </div>
              <div className="col-4">
                <i className="fa-solid fa-right-to-bracket"></i>{" "}
                <p>Easy log in process</p>
              </div>
              <div className="col-4 ">
                <i className="fa-solid fa-message"></i>
                <p>24/7 customer support</p>
              </div>
            </div>
            <Link to="/register" className="section2Link">
              JOIN US NOW
            </Link>
          </div>
        </div>
        <div className="col-12 col-lg-6 px-5">
          <div className="w-100 section2Card">
            <i className="fa-solid fa-user-graduate thumbsup mb-3"></i>
            <h3>Are you an</h3>
            <h1 className="my-3">Expert in trading?</h1>
            <div className="row mb-5">
              <div className="col-4">
                <i className="fa-solid fa-chalkboard-user"></i>{" "}
                <p>No manual intervention</p>
              </div>
              <div className="col-4">
                <i className="fa-solid fa-user-shield"></i>{" "}
                <p>No orders modified</p>
              </div>
              <div className="col-4">
                <i className="fa-solid fa-computer"></i>
                <p>Web software</p>
              </div>
            </div>
            <Link to="/register" className="section2Link">
              SWITCH NOW
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
