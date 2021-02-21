import React from "react";

const About = ({ data }) => {
  return (
    <div className="page-container">
      <div className="fixed-side">{/* <p>{data.title}</p> */}</div>
      {data.subheadline.map((item) => (
        <p>{item}</p>
      ))}
      {data.paragraphs.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
};

export default About;
