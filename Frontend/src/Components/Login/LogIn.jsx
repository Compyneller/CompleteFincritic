import React, { useEffect, useState } from "react";

import { Link, useHistory } from "react-router-dom";
import style from "./login.module.css";
import axios from "axios";
import video from "../../Assets/yt1s.com - Stock Market Background Video_1080p.mp4";
import "react-phone-number-input/style.css";
import Login2 from "./Login2";
const Login = () => {
  let history = useHistory();

  const [pass, setPass] = useState("");
  const [mobile, setMobile] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    const loginData = {
      phone: `${localStorage.getItem("countryCode")}${mobile}`,
      password: pass,
    };
    const { data } = await axios.post(
      "http://localhost:5000/api/login",
      loginData
    );
    if (data.token) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("status", true);
      alert("Login Successful");

      history.push("/");
      localStorage.setItem("detail", true);
    } else {
      localStorage.setItem("detail", false);

      alert("Please check your Phone number and Password");
    }
    console.log(data);
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
        <form onSubmit={handleLogin}>
          <h1 className={style.heading}>Login</h1>

          <div className={style.inputs}>
            <div className={style.mobileCode}>
              <Login2 />
              <input
                type="tel"
                value={mobile}
                placeholder="Enter Mobile number"
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />

            <button type="submit">Login</button>
          </div>
          {/* <div className={style.register} style={{ margin: "1rem 0" }}>
            <p>Forget Password,</p> <Link to="/forgetpassword">Here</Link>
          </div> */}
          <br />
          <div className={style.register}>
            <p>New User Register,</p> <Link to="/register">Here</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
