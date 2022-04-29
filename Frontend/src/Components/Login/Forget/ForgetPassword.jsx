import React, { useState } from "react";

import { Link, useHistory } from "react-router-dom";
import style from "../login.module.css";
import axios from "axios";
import video from "../../../Assets/yt1s.com - Stock Market Background Video_1080p.mp4";
import { countryCode } from "../CountryCode";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Login2 from "../Login2";
const ForgetPassword = () => {
  let history = useHistory();

  const [contact, setContact] = useState("");
  const [pass, setPass] = useState("");

  const onContact = (e) => setContact(e.target.value);
  const onPass = (e) => setPass(e.target.value);
  const [result, setResult] = useState("");
  const [value, setValue] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.get(`https://e-vyapar.com/api/forgototp.aspx?mob=${contact}`);
      // console.log('suc');
      history.push("/login");
    } catch (error) {
      setResult("Invalid OTP or User not registered");
    }
  };

  return (
    <div className={style.mycontainer}>
      <div className={style.backgroundVideo}>
        <video muted autoPlay loop src={video} />
      </div>
      <div className={`container ${style.formbody}`}>
        <div className={style.crossIcon} onClick={() => history.push("/")}>
          <i className="fa-solid fa-xmark"></i>
        </div>
        <form onSubmit={(e) => onSubmit(e)}>
          <h1 className={style.heading}>Forget Password</h1>

          <div className={style.result}>
            <p>{result}</p>
          </div>
          <div className={style.inputs}>
            <div className={style.mobileCode}>
              <Login2 />
              <input type="tel" placeholder="Enter Mobile number" />
            </div>
            <label htmlFor="password">OTP</label>
            <input
              type="password"
              placeholder="Enter OTP"
              value={pass}
              onChange={(e) => onPass(e)}
            />

            <button type="submit">Submit</button>
          </div>
          <div className={style.register}>
            <p>New User Register,</p> <Link to="/register">Here</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
