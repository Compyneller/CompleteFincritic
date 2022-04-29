import React, { useEffect, useState } from "react";
import axios from "axios";
import { countryCode } from "./CountryCode";
import "./Login2.css";
const Dropdown = ({ selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);
  localStorage.setItem("countryCode", selected.number);
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        {selected === "" ? (
          <img
            className="selectedImage"
            src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
            alt=""
          />
        ) : (
          <img className="selectedImage" src={selected.flag} alt="" />
        )}
      </div>
      {isActive && (
        <div className="dropdown-content">
          {countryCode.map((items, index) => {
            return (
              <div
                key={index}
                onClick={(e) => {
                  setSelected(items);
                  setIsActive(false);
                }}
                className="dropdown-item"
              >
                <div className="d-flex align-items-center">
                  <img src={items.flag} alt="" />
                  <p className="my-auto">{items.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
