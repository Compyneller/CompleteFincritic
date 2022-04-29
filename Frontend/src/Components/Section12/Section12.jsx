import React from "react";

const Section12 = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 col-lg-4">
          <h1>Easy funding & withdrawals:</h1>
          <p style={{ fontSize: "20px" }}>No deposit fees^</p>
        </div>
        <div className="col-12 col-lg-8">
          <img
            className="w-100 mb-3"
            src="https://www.fpmarkets.com/wp-content/themes/fptheme/int/images/payment-methods-int-new.png"
            alt=""
          />
          <em style={{ fontSize: "20px" }}>
            For more deposits, withdrawals and funding information please click
            here
          </em>
        </div>
      </div>
      <div className="underLine my-3"></div>
    </div>
  );
};

export default Section12;
