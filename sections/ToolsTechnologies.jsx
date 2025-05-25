import React from 'react';
import './Section.css';

const tools = [
  "CNN",
  "OPEN CV",
  "DEEP LEARNING",
  "PYTHON",
  "TENSORFLOW",
  "KERAS",
  "REACT",
  "DOCKER",
  "Rest net50",
  "Mobie net",
  "IOT",
   "Padas",

];

const ToolsTechnologies = () => {
  return (
    <div className="section tools-tech">
      <h1 className="tools-title">Tools & Technologies</h1>
      <p className="tools-description">
        Our research group leverages the following advanced tools and technologies:
      </p>
      <div className="tools-container">
        {tools.map((tool, index) => (
          <div key={index} className="tool-chip">
            {tool}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsTechnologies;
