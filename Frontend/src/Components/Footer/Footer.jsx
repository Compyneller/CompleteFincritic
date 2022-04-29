import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container py-5 customFooter">
      <div className="row mb-5 ">
        <div className="col-12 col-lg-6">
          {/* <div className="d-flex w-100">
            <Link className="section2Link" to="/">
              NEED HELP?
            </Link>
            <Link className="section2Link mx-3" to="/">
              CONTACT US
            </Link>
          </div> */}
        </div>
        <div className="col-12 col-lg-6 d-flex justify-content-end footerSocialContainer">
          {/* <div className="d-flex w-50 jutify-content-around section4Socials mt-5 mt-lg-0">
            <a target="_blank" href=" https://twitter.com/FincriticIndia">
              <i className="fa-brands fa-twitter-square"></i>
            </a>
            <a target="_blank" href=" https://medium.com/@fincriticindia">
              <i className="fa-brands fa-medium"></i>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/fincritic-india-private-limited"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div> */}
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-lg-4 text-center">
          <p style={{ fontWeight: "bold" }}>Clear my doubts on the</p>
          <ul className="footerList" style={{ listStyle: "none" }}>
            <li>
              <a
                target="_blank"
                href="https://medium.com/@FINCRITIC/costs-associated-with-fincritic-trading-24632bbf7629"
              >
                Costs associated with FINCRITIC Trading
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://medium.com/@FINCRITIC/markets-i-can-trade-3e3953298fff"
              >
                Markets I can trade
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://medium.com/@FINCRITIC/fincritic-platforms-343bae021ac3"
              >
                {" "}
                FINCRITIC platforms{" "}
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://medium.com/@FINCRITIC/minimum-margin-requirements-8932236ff1a5"
              >
                Minimum margin requirements
              </a>
            </li>
          </ul>
        </div>
        <div className="col-12 col-lg-4 text-center">
          <p style={{ fontWeight: "bold" }}>How can I</p>
          <ul className="footerList" style={{ listStyle: "none" }}>
            <li>
              <a
                target="_blank"
                href="https://medium.com/@FINCRITIC/fund-my-account-ee5c6015febf"
              >
                Fund my account
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://medium.com/@FINCRITIC/request-a-withdrawal-9b7861599c84"
              >
                Request a withdrawal
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://medium.com/@FINCRITIC/how-can-i-use-finritic-ba13a6061a59"
              >
                {" "}
                Use FINCRITIC{" "}
              </a>
            </li>
          </ul>
        </div>
        <div className="col-12 col-lg-4 text-center">
          <p style={{ fontWeight: "bold" }}>I want to learn about</p>
          <ul className="footerList" style={{ listStyle: "none" }}>
            <li>
              <a
                target="_blank"
                href="https://medium.com/@FINCRITIC/trading-the-fincritic-market-aa9afe7af770"
              >
                Trading the FINCRITIC market
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://medium.com/@FINCRITIC/managing-risk-when-trading-12c8759fb35b"
              >
                Managing risk when trading
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://medium.com/@FINCRITIC/trading-strategy-for-volatile-markets-ef6824faed62"
              >
                Trading strategy for volatile markets
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://medium.com/@FINCRITIC/using-technical-analysis-f9fdf4f3d999"
              >
                Using technical analysis
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
