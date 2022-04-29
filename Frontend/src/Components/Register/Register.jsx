import React, { useState } from "react";
import style from "./login.module.css";
import { Link, useHistory } from "react-router-dom";
import LogIn from "../Login/LogIn";
import video from "../../Assets/yt1s.com - Stock Market Background Video_1080p.mp4";
import { countryCode } from "../Login/CountryCode";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import axios from "axios";
import Login2 from "../Login/Login2";

const Register = () => {
  const history = useHistory();
  const [value, setValue] = useState("");
  const [otp, setOtp] = useState("");
  const [msg, setMsg] = useState(false);
  const [otpDetails, setOtpDetails] = useState({});
  const [sendOtp, setSendOtp] = useState("Send Otp");

  const sendOTP = async () => {
    const json = {
      phone: `${localStorage.getItem("countryCode")}${value}`,
    };
    const { data } = await axios.post("http://localhost:5000/sendOTP", json);
    setOtpDetails(data);
    var count = 60;
    const timer = setInterval(function () {
      setSendOtp(`Resend Otp ${count--}`);
      if (count == -1) {
        clearInterval(timer);
        setSendOtp("Send Otp");
      }
    }, 1000);
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    const json = {
      phone: `${otpDetails.phone}`,
      hash: `${otpDetails.hash}`,
      otp: `${otp}`,
    };
    const { data } = await axios.post("http://localhost:5000/verifyOTP", json);
    localStorage.setItem("Phone", otpDetails.phone);
    if (data.msg === "Otp verified") {
      alert("Otp verified");
      history.push("/register-2");
    } else {
      setMsg(true);
      history.push("/register");
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
        <form>
          <h1 className={style.heading}>Register</h1>
          <p
            style={{
              color: "red",
              opacity: `${msg ? "1" : "0"}`,
              fontSize: "12px",
            }}
          >
            Wrong OTP
          </p>

          <div className={style.inputs}>
            <label htmlFor="Mobile Number">Mobile Number</label>
            <div className={style.mobileCode}>
              <Login2 />
              <input
                type="tel"
                placeholder="Enter Mobile number"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                required
              />
            </div>
            <button
              type="button"
              className="mb-4 "
              // style={{ background: "grey" }}
              disabled={sendOtp === "Send Otp" ? false : true}
              onClick={() => sendOTP()}
            >
              {sendOtp}
            </button>
            <input
              type="password"
              maxLength="6"
              required
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />

            <button className={style.registerBtn} onClick={(e) => verifyOtp(e)}>
              Submit
            </button>
          </div>
          <div className={style.register}>
            <p>Login,</p> <Link to="/login">Here</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
