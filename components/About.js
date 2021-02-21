import React from "react";

const About = ({ data }) => {
  return (
    <div className="page-container">
      <div className="fixed-side">
        <h1>{data.title}</h1>
      </div>
      <div className="main-container">
        {data.subheadline.map((item) => (
          <h4 key={item}>{item}</h4>
        ))}
        {data.paragraphs.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default About;
