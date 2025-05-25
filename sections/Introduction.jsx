// Introduction.jsx
import React from 'react';
import './Section.css';
import introImg from '../assets/sea-turtle.jpg'; // Add a relevant image in src/assets/

const Introduction = () => {
  return (
    <div className="section introduction">
      <div className="intro-container">
        <div className="intro-text">
          <h1>Introduction to Our Research</h1>
          <p>
            
            Our mission is to protect and preserve endangered sea turtles through innovative research and technology. We focus on disease detection, species identification, hatchery prediction, and real-time turtle monitoring to support conservation efforts and raise awareness. By combining data analysis with fieldwork, we aim to better understand the challenges sea turtles face and contribute to their survival. Join us on our journey to safeguard these gentle guardians of the ocean for future generations.
          </p>
        </div>
        <div className="intro-image">
          <img src={introImg} alt="Sea turtle research" />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
