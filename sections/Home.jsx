// Home.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './Section.css';
import seaTurtleImg from '../assets/sea-turtle.jpg'; // make sure you place this image in public or src/assets

const Home = () => {
  return (
    <div
      className="section home"
      style={{
        backgroundImage: `url(${seaTurtleImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        textShadow: '2px 2px 4px #000',
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        SEA TURTLE
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        Welcome to the Research Group working to protect sea turtles and marine ecosystems.
      </motion.p>
    </div>
  );
};

export default Home;
