import React from "react";
import "./TopNav.css";

const TopNav = () => {
  return (
    <nav className="top-Nav">
      <div className="container top-nav-container ">
        <div>
          <ul
            className="list-container text-light "
            style={{ textDecoration: "none", listStyle: "none" }}
          >
            <a href="#">
              <li data-aos="zoom-out">Contact</li>
            </a>
            <li data-aos="zoom-out">
              <a href="https://medium.com/@INRDcoin">Webtrader</a>
            </li>
            <li data-aos="zoom-out">
              <a href="https://mobile.twitter.com/INRDcoin">Funding</a>
            </li>
            <li data-aos="zoom-out">
              <a href="https://mobile.twitter.com/INRDcoin">Group</a>
            </li>
          </ul>
        </div>
        <div className="clientPortal">
          <button>Client Portal</button>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
