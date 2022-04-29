import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Carousel = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: false,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <div className="container py-5 customCarousel">
      <Slider {...settings}>
        <div>
          <img
            src="https://fpmarkets.com/wp-content/themes/fptheme/int/images/liqu/GS.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://fpmarkets.com/wp-content/themes/fptheme/int/images/liqu/SG.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://fpmarkets.com/wp-content/themes/fptheme/int/images/liqu/Barclays.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://fpmarkets.com/wp-content/themes/fptheme/int/images/liqu/BNP-Paribas.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://fpmarkets.com/wp-content/themes/fptheme/int/images/liqu/HSBC.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://fpmarkets.com/wp-content/themes/fptheme/int/images/liqu/RBS.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://fpmarkets.com/wp-content/themes/fptheme/int/images/liqu/Citibank.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://fpmarkets.com/wp-content/themes/fptheme/int/images/liqu/SG.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://fpmarkets.com/wp-content/themes/fptheme/int/images/liqu/Commerzbank.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://fpmarkets.com/wp-content/themes/fptheme/int/images/liqu/CS.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="
            https://fpmarkets.com/wp-content/themes/fptheme/int/images/liqu/SC.png"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
