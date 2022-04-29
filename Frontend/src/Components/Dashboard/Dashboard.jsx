import React from "react";
import background from "../../Assets/nicholas-cappello-Wb63zqJ5gnE-unsplash.jpg";
import secondBack from "../../Assets/1_veW_bUCkcsHZ32GMCVhyLA.png";
import NavBar from "../Navbar/NavBar";
import "./Dashboard.css";
import sideImage from "../../Assets/AllIsometricDEC3-09.jpg";
import { useHistory } from "react-router-dom";

const Dashboard = ({ selectCountry, setSelectCountry }) => {
  const history = useHistory();
  return (
    <div className="dashboardContainer">
      {/* <img src={background} alt="" /> */}
      <NavBar
        selectCountry={selectCountry}
        setSelectCountry={setSelectCountry}
      />
      <div className="dashboardContent">
        {/* <div className="container"> */}
        <div className="row">
          <div className="col-12 col-lg-6 d-flex align-items-end justify-content-center flex-column myContent ">
            <div className=" Dashboardheading">
              <h1>Fincritic is the market leading forex exchange</h1>
            </div>
            <div className="d-flex w-75 align-items-center justify-content-center ">
              <button
                className="navBarButton text-light"
                onClick={() => {
                  history.push("/login");
                  localStorage.removeItem("token");
                }}
              >
                {localStorage.getItem("status") ? "Logout" : "Login"}
              </button>
              <button
                className="navBarButton text-light"
                onClick={() => history.push("/register")}
              >
                Signup{" "}
              </button>
            </div>
          </div>
          <div className="col-12 col-lg-6 ">
            <div className="w-100">
              <img src={sideImage} className="w-100 mobileBackground" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
