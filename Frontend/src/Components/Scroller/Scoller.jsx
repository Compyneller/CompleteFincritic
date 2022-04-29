import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import "./Scroller.css";
import axios from "axios";

const Scoller = () => {
  const [allRate, setAllRate] = useState({});
  useEffect(() => {
    const forex = async () => {
      const { data } = await axios.get(
        "https://apilayer.net/api/live?access_key=6e8d7becea191cd24e7246ba815c1e15&currencies=&source=USD&format=1"
      );
      setAllRate(data.quotes);
    };
    forex();
  }, []);

  return (
    <Marquee
      speed={40}
      className=" marqueeContainer"
      gradient={false}
      pauseOnHover={true}
    >
      {Object.entries(allRate).map(function (key, i) {
        allRate[key] *= 2;
        return (
          <div className="marqueeCards " key={i}>
            <div className="cardTopSection">
              <h3>{key[0]}</h3>
              <h1>{key[1]}</h1>
            </div>
          </div>
        );
      })}
    </Marquee>
  );
};

export default Scoller;
