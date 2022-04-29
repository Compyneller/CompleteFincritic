import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/FINCRITIC_LOGO.png";
import ssl from "../../Assets/ssl.png";

const FooterBrand = ({ selectCountry }) => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 col-lg-4 d-flex justify-content-center text-center ">
          <img
            className="w-50"
            src={logo}
            alt=""
            style={{ cursor: "pointer" }}
            onClick={() => {
              window.scroll(0, 0);
            }}
          />
        </div>

        <div className="col-12 col-lg-4 d-flex justify-content-center my-auto text-center">
          <a
            href={`mailto:${
              selectCountry === "srilanka"
                ? "hellosrilanka@fincritic.org"
                : "helloindia@fincritic.org"
            }`}
            style={{ color: "black", margin: "auto 0" }}
          >
            Email:{" "}
            {selectCountry === "india"
              ? "helloindia@fincritic.org"
              : "hellosrilanka@fincritic.org"}
          </a>
        </div>
        <div className="col-12 col-lg-4 d-flex justify-content-center my-auto text-center">
          <div className="d-flex w-50 jutify-content-around section4Socials mt-5 mt-lg-0">
            <a
              target="_blank"
              href="https://mobile.twitter.com/fincriticpvtltd"
            >
              <i className="fa-brands fa-twitter-square"></i>
            </a>
            <a target="_blank" href="https://medium.com/@FINCRITIC">
              <i className="fa-brands fa-medium"></i>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/fincritic-india-private-limited"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="underLine my-5"></div>
      <div className="row mb-5">
        <div className="col-12 col-lg-9   ">
          <div className="Disclosures d-flex align-items-center justify-content-between my-auto">
            <Link
              to="/risk"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              Disclosures and Risk Warning
            </Link>
            <Link
              className="mx-5"
              to="/privacy"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              Privacy Policy
            </Link>
            <Link
              to="/customer"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              {" "}
              Customer Policy
            </Link>
          </div>
        </div>
        <div className="col-12 col-lg-3 d-flex sslcontainer">
          <img src={ssl} className="ssl" alt="" />{" "}
          <p className="my-auto">
            The Connection is protected by SSL certificate 256bit Secure
            Processing{" "}
          </p>
        </div>
      </div>
      <p>
        Please note that foreign exchange trading and other leveraged trading
        involve the risk of loss. You should make sure you understand the risks
        involved in forex exchanges. It is not suitable for all the investors
        and you should take independent or legal advice if necessary.
      </p>
    </div>
  );
};

export default FooterBrand;
