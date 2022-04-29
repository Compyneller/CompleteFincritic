import React, { useState } from "react";
import style from "./login.module.css";
import { Link, useHistory } from "react-router-dom";
import LogIn from "../Login/LogIn";
import video from "../../Assets/yt1s.com - Stock Market Background Video_1080p.mp4";
import axios from "axios";

const RegistrationForm = () => {
  const history = useHistory();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password === confirmPassword) {
      const userData = {
        phone: localStorage.getItem("Phone"),
        password: password,
      };
      const { data } = await axios.post(
        "http://localhost:5000/api/register",
        userData,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      history.push("/login");
    } else {
      alert("Incorrect Password");
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
        <form onSubmit={handleSubmit}>
          <h1 className={style.heading}>Register</h1>

          <div className={style.inputs}>
            <label htmlFor="Mobile Number">Mobile Number</label>
            <div className={style.mobile}>
              <h5 style={{ fontWeight: "bold" }} className="mb-3">
                {localStorage.getItem("Phone")}
              </h5>
            </div>

            <label htmlFor="Mobile Number">Enter Password</label>
            <div className={style.mobile}>
              <input
                type="password"
                maxLength="10"
                placeholder="Enter Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <label htmlFor="Mobile Number">Confirm Password</label>
            <div className={style.mobile}>
              <input
                type="password"
                maxLength="10"
                placeholder="Confirm Password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <button type="submit" className={style.registerBtn}>
              Submit
            </button>
          </div>
          <div className={style.register}>
            <p>Login,</p> <Link to="/">Here</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
