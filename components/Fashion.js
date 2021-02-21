import React, { useEffect, useState } from "react";
import { production, film } from "../data/en/fashion";
import Fade from "react-reveal/Fade";

const Fashion = ({ projectSelected }) => {
  console.log("projectSelected", projectSelected);
  const [data, setData] = useState();

  useEffect(() => {
    getProjectInfo();
  }, [projectSelected]);

  const getProjectInfo = () => {
    switch (projectSelected) {
      case "production":
        setData(production);
        break;
      case "film":
        setData(film);
        break;
    }
  };
  return data ? (
    <div className="page-container">
      <div className="fixed-side">
        <h1>{data.title}</h1>
      </div>
      <div className="main-container">
        {data.subheadline
          ? data.subheadline.map((item) => <h4 key={item}>{item}</h4>)
          : null}
        {data.paragraphs
          ? data.paragraphs.map((item) => <p key={item}>{item}</p>)
          : null}
        {data.projects
          ? data.projects.map((item) => (
              <div>
                <p>{item.title}</p>
                <p>{item.subtitle}</p>
              </div>
            ))
          : null}
      </div>
    </div>
  ) : null;
};

export default Fashion;
