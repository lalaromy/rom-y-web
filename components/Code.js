import React, { useEffect, useState } from "react";
import { residence, azuvia } from "../data/en/code";

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
    }
  };
  return data ? (
    <div className="code-page-container">
      <div className="fixed-side">
        <h1>{data.title}</h1>
      </div>
      <div className="text-container">
        {data.paragraphs.map((item) => (
          <p>{item}</p>
        ))}
        <a href={data.linkURL}>{data.linkName}</a>
      </div>
      <img className="code-image" src={data.image} alt={data.title} />
    </div>
  ) : null;
};

export default Code;
