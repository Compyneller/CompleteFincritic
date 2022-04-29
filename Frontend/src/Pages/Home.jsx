import React from "react";
import NavBar from "../Components/Navbar/NavBar";
import TopNav from "../Components/TopNav/TopNav";
import "./Home.css";
import Section2 from "../Components/Section2/Section2";
import Section3 from "../Components/Section3/Section3";
import Section4 from "../Components/Section4/Section4";
import Dashboard from "../Components/Dashboard/Dashboard";
import Scoller from "../Components/Scroller/Scoller";
import Section5 from "../Components/Section5/Section5";
import Section6 from "../Components/Section6/Section6";
import Section7 from "../Components/Section7/Section7";
import Section8 from "../Components/Section8/Section8";
import Section10 from "../Components/Section10/Section10";
import Carousel from "../Components/Carousel/Carousel";
import Section11 from "../Components/Section11/Section11";
import Section12 from "../Components/Section12/Section12";
import Footer from "../Components/Footer/Footer";
import FooterBrand from "../Components/FooterBrand/FooterBrand";
import AboutUs from "../Components/AboutUs/AboutUs";

const Home = ({ selectCountry, setSelectCountry }) => {
  return (
    <div className="homecontainer">
      {/* <TopNav /> */}
      {/* <NavBar /> */}
      <Dashboard
        selectCountry={selectCountry}
        setSelectCountry={setSelectCountry}
      />
      <Scoller />
      <AboutUs />
      <Section2 />
      <Section3 />
      {/* <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section10 />
      <Carousel />
      <Section11 /> */}
      {/* <Section12 /> */}
      {/* <Footer />
      <FooterBrand /> */}
    </div>
  );
};

export default Home;
