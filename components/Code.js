import React, { useEffect, useState } from "react";
import {
  residence,
  azuvia,
  bdst,
  veert,
  nomade,
  faktory,
} from "../data/en/code";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

const Code = ({ projectSelected }) => {
  console.log("projectSelected", projectSelected);
  const [data, setData] = useState();

  useEffect(() => {
    getProjectInfo();
  }, [projectSelected]);

  const getProjectInfo = () => {
    switch (projectSelected) {
      case "azuvia":
        setData(azuvia);
        break;
      case "residence":
        setData(residence);
        break;
      case "bdst":
        setData(bdst);
        break;
      case "veert":
        setData(veert);
        break;
      case "nomade":
        setData(nomade);
        break;
      case "faktory":
        setData(faktory);
        break;
    }
  };

  return data ? (
    <div className="code-page-container">
      <div className="fixed-side">
        <Fade bottom duration={1500} delay={1000}>
          <h1>{data.title}</h1>
        </Fade>
      </div>
      <div className="text-container">
        {data.paragraphs.map((item) => (
          <p key={item}>{item}</p>
        ))}
        <a href={data.linkURL} target="_blank">
          {data.linkName}
        </a>
      </div>
      <img className={"code-image"} src={data.image} alt={data.title} />
    </div>
  ) : null;
};

export default Code;
