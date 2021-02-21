import React from "react";
import { bannerData } from "../data/en/banner";

const Banner = (props) => {
  return (
    <div className="banner-container">
      {bannerData.map((item, index) => (
        <p key={index} className="item">
          {item}
        </p>
      ))}
    </div>
  );
};

export default Banner;
