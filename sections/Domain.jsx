// Domain.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './Section.css';

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const Domain = () => {
  return (
    <div className="section domain">
    <h1>Domain</h1>
      <div className="domain-navbar">
        <button onClick={() => scrollToSection('background')}>Background</button>
        <button onClick={() => scrollToSection('research-gap')}>Research Gap</button>
        <button onClick={() => scrollToSection('research-problem')}>Research Problem</button>
        <button onClick={() => scrollToSection('research-objective')}>Research Objective</button>
      </div>

      <motion.div
        id="background"
        className="domain-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Background</h2>
        <p>
          We are a team committed to protecting sea turtles and preserving marine ecosystems through science, 
          technology, and conservation. From monitoring turtle movements to predicting hatchery success, our research
           helps ensure a safer future for these endangered species. Dive into our work and discover how we make a difference—one
            turtle at a time
        </p>
      </motion.div>

      <motion.div
        id="research-gap"
        className="domain-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2>Research Gap</h2>
        <p>
          While various efforts exist to conserve sea turtles, there is a lack of integrated systems that combine disease detection, species identification, hatchery prediction, and real-time monitoring using modern technology. Most current studies focus on individual aspects of conservation, but few provide a comprehensive, data-driven approach. Our research aims to bridge this gap by developing a unified platform that enhances decision-making, improves conservation outcomes, and supports long-term sustainability of sea turtle populations.


        </p>
      </motion.div>

      <motion.div
        id="research-problem"
        className="domain-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2>Research Problem</h2>
        <p>
          Sea turtle populations are declining due to threats like disease, habitat loss, and climate change. However, there is no unified system that enables early disease detection, accurate species identification, hatchery success prediction, and continuous monitoring. This lack of integrated technology-driven solutions hinders timely conservation actions. Our 
          research addresses this problem by developing a comprehensive system to support proactive sea turtle conservation.
        </p>
      </motion.div>

      <motion.div
        id="research-objective"
        className="domain-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h2>Research Objective</h2>
        <p>
          The objective of this research is to develop an integrated system that
           supports sea turtle conservation through advanced technologies. Specifically, 
           the system aims to enable early disease detection, accurate species/type identification, 
           hatchery prediction, and real-time turtle monitoring. By combining data analysis and environmental 
           tracking, the project seeks to enhance decision-making and improve the effectiveness of conservation efforts.
        </p>
      </motion.div>
    </div>
  );
};

export default Domain;
