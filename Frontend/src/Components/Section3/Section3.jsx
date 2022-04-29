import React from "react";
import "./section3.css";
import { Link } from "react-router-dom";

const Section3 = () => {
  return (
    <div
      className="section-3 py-5 text-light"
      style={{ background: "#011557" }}
      id="platform"
    >
      <div className="container  ">
        <h1 className="mb-5" style={{ fonSize: "35px" }}>
          Start your account in just a few minutes
        </h1>
        <div className="row mb-5">
          <div className="col-12 col-lg-4 px-4  section3number">
            <i className="fa-solid fa-1"></i>
            <h3>Fill in your details</h3>
            <p style={{ fontSize: "18px" }}>
              Tell us about yourself to sign up.
            </p>
          </div>
          <div className="col-12 col-lg-4 px-4 section3number">
            <i className="fa-solid fa-2"></i>
            <h3>Make a deposit</h3>
            <p style={{ fontSize: "18px" }}>
              Fund your account with a minimum deposit.{" "}
            </p>
          </div>
          <div className="col-12 col-lg-4 px-4 ">
            <i className="fa-solid fa-3"></i>

            <h3>Begin Trading</h3>
            <p style={{ fontSize: "18px" }}>
              After verification, start trading on the Fincritic web & app.{" "}
            </p>
          </div>
        </div>
        <Link to="/register" className="section3Link">
          OPEN AN ACCOUNT
        </Link>
      </div>
    </div>
  );
};

export default Section3;
