import React from "react";
import Fade from "react-reveal/Fade";

const About = ({ data }) => {
  return (
    <div className="page-container">
      <div className="fixed-side">
        <Fade bottom duration={1500} delay={1000}>
          <h1 style={{ color: "#F6FF8F" }}>{data.title}</h1>
        </Fade>
      </div>
      <div className="main-container">
        {data.subheadline.map((item) => (
          <h4 key={item}>{item}</h4>
        ))}
        {data.paragraphs.map((item) => (
          <Fade left cascade duration={1500} delay={1000}>
            <p key={item}>{item}</p>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default About;
