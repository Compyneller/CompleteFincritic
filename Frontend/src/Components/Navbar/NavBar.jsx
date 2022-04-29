import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../Assets/FINCRITIC_ICON.png";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Login2 from "../Login/Login2";
import Dropdown from "../Login/Dropdown";
import ind from "../../Assets/Flag-India.jpg";
import lk from "../../Assets/lk-flag.jpg";
const NavBar = ({ setSelectCountry, selectCountry }) => {
  const history = useHistory();

  const [isActive, setIsActive] = useState(false);
  const [quickStarts, setQuickStarts] = useState({
    active: false,
  });
  const [toggleNav, setToggleNav] = useState({
    active: false,
  });
  const [toggleFlagClass, setToggleFlagClass] = useState("srilanka");
  // const quick = () => {
  //   const currentState = quickStarts.active;
  //   setQuickStarts({ active: !currentState });
  // };
  const toggleNavBar = () => {
    const currentState = toggleNav.active;
    setToggleNav({ active: !currentState });
  };
  return (
    <div>
      <nav className="navBarContainer container text-dark">
        <div className="brandLogo">
          <img src={logo} alt="" />

          <h1>FINCRITIC</h1>
        </div>
        <div className="d-flex flagContainer">
          <div className="flagImage">
            <img
              src={ind}
              alt=""
              className={toggleFlagClass === "srilanka" ? "Disable" : null}
              onClick={() => {
                setSelectCountry("india");
                setToggleFlagClass("india");
              }}
            />
          </div>
          <div className="flagdivider"></div>
          <div className="flagImage">
            <img
              src={lk}
              alt=""
              className={toggleFlagClass === "india" ? "Disable" : null}
              onClick={() => {
                setSelectCountry("srilanka");
                setToggleFlagClass("srilanka");
              }}
            />
          </div>
        </div>

        <ul className={toggleNav.active ? "toggleNav" : "navBarlist"}>
          <a href="/#aboutus">
            <li
              className="customNavBarItems"
              onClick={() => setToggleNav({ active: false })}
            >
              About
            </li>
          </a>
          <a href="/#trading">
            <li
              className="customNavBarItems"
              onClick={() => setToggleNav({ active: false })}
            >
              Trading
            </li>
          </a>
          <a href="/#platform">
            <li
              className="customNavBarItems"
              onClick={() => setToggleNav({ active: false })}
            >
              Platform
            </li>
          </a>
          <a href="https://mobile.twitter.com/fincriticpvtltd" target="_blank">
            <i
              className="fa-brands fa-twitter-square"
              onClick={() => setToggleNav({ active: false })}
            ></i>
          </a>
          <a href=" https://medium.com/@FINCRITIC" target="_blank">
            <i
              className="fa-brands fa-medium"
              onClick={() => setToggleNav({ active: false })}
            ></i>
          </a>
          <a
            href="https://www.linkedin.com/company/fincritic-india-private-limited"
            target="_blank"
          >
            <i
              className="fa-brands fa-linkedin"
              onClick={() => setToggleNav({ active: false })}
            ></i>
          </a>
        </ul>
        <i
          className="fa-solid fa-bars"
          id="ToggleButton"
          onClick={() => toggleNavBar() || setQuickStarts({ active: false })}
        ></i>
      </nav>
      {/* <div
        className={
          quickStarts.active ? "quickstartHoverToggle" : "quickstartHover"
        }
      >
        <div className="container text-light">
          <i
            className="fa-solid fa-arrow-left"
            id="backArrow"
            onClick={() =>
              setQuickStarts({
                active: false,
              })
            }
          ></i>
          <div className="row">
            <div className="col-12 col-lg-3 mb-4 text-center ">
              <h1>Trade with a trusted Forex and CFD broker</h1>
              <div className="row">
                <div className="col-6">
                  <button className="navBarButton w-100">Open Live</button>
                </div>
                <div className="col-6">
                  <button className="navBarButton w-100">Live Demo</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3 mb-5 d-flex flex-column justify-content-center align-items-center ">
              <h5>Introduction</h5>
              <p>Why Us?</p>
              <p>What you can Trade?</p>
              <p>What is Forex Trading?</p>
              <p>What are CFDs?</p>
              <p>ECN Pricing</p>
              <p>DMA Pricing</p>
            </div>
            <div className="col-12 col-lg-3 d-flex flex-column justify-content-center align-items-center">
              <h5>Introduction</h5>
              <p>Why Us?</p>
              <p>What you can Trade?</p>
              <p>What is Forex Trading?</p>
              <p>What are CFDs?</p>
              <p>ECN Pricing</p>
              <p>DMA Pricing</p>
            </div>
            <div className="col-12 col-lg-3 d-flex flex-column justify-content-center align-items-center">
              <h5>Introduction</h5>
              <p>Why Us?</p>
              <p>What you can Trade?</p>
              <p>What is Forex Trading?</p>
              <p>What are CFDs?</p>
              <p>ECN Pricing</p>
              <p>DMA Pricing</p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default NavBar;
