import React from "react";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <div className="fincriticContainer py-5 " id="aboutus">
      <div className="container py-5 fincriticAboutUs">
        <h1 style={{ fontSize: "35px" }}>About FINCRITIC</h1>
        <br />
        <p className="text-center" style={{ fontSize: "18px" }}>
          {" "}
          FINCRITIC has entered the forex exchange industry with a vision to
          provide its customers with a superior experience in forex exchange. We
          are building a community from all over the world to provide
          satisfaction in forex trading. Our goal is to become the most
          convenient forex platform for our users. What makes us stand out from
          the market is that we value the demand of our traders and we work
          efficiently to fulfill their needs. We believe in commitment and with
          round-the-clock customer support our customers can confidently trade
          with FINCRTIC. Join hands with us and let us together create history
          in the forex exchange industry.{" "}
        </p>
        <br />
        <br />

        <h1 className="text-center" style={{ fontSize: "35px" }}>
          What do we provide?
        </h1>
        <br />
        <br />
        <div className="row">
          <div className="col-12 col-lg-3 d-flex align-items-center justify-content-center ">
            <div className="w-100 d-flex align-items-center justify-content-center flex-column text-center providerCards">
              <i className="fa-solid fa-hourglass"></i>{" "}
              <h5>24 Hour Customer Support</h5>
              <p style={{ fontSize: "18px" }}>
                Our customer support team is always ready to resolve your
                queries. We are always available for you!
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-3 d-flex align-items-center justify-content-center ">
            <div className="w-100   d-flex align-items-center justify-content-center flex-column text-center providerCards">
              <i className="fa-solid fa-file-invoice-dollar"></i>
              <h5>Zero Charges</h5>
              <p style={{ fontSize: "18px" }}>
                No extra fees or commission fees. Get free access with FINCRTIC
                and enjoy your forex trading journey with us!
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-3 d-flex align-items-center justify-content-center ">
            <div className="w-100  d-flex align-items-center justify-content-center flex-column text-center providerCards">
              <i className="fa-solid fa-universal-access"></i>
              <h5>Easy Account Access</h5>
              <p style={{ fontSize: "18px" }}>
                Download, signup, verify & start your forex trading account.
                Yes, it is as easy as it sounds.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-3 d-flex align-items-center justify-content-center ">
            <div className="w-100  d-flex align-items-center justify-content-center flex-column text-center providerCards">
              <i className="fa-solid fa-money-bill-transfer"></i>{" "}
              <h5>Low Minimum Deposit</h5>
              <p>
                Download, signup, verify & start your forex trading account.
                Yes, it is as easy as it sounds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
