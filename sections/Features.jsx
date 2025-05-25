import React from 'react';
import { motion } from 'framer-motion';
import './Section.css';

const features = [
  {
    title: "🔍 Type Detection",
    description: "Accurately classify turtle species using image recognition and data analysis.",
    color: "#3498db",
  },
  {
    title: "🐢 Disease Detection",
    description: "Identify health risks early to protect turtle populations.",
    color: "#e67e22",
  },
  {
    title: "🐣 Hatchery Prediction",
    description: "Forecast hatching success and optimize conservation planning.",
    color: "#9b59b6",
  },
  {
    title: "📡 Turtle Monitoring",
    description: "Track turtle movements and behavior in real time for better protection.",
    color: "#16a085",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 },
  }),
};

const Features = () => {
  return (
    <div className="features-container">
      <h1 className="features-header">Our Features</h1>
      <div className="features-grid">
        {features.map((feature, index) => (
          <motion.div
            className="feature-card"
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            style={{ borderTop: `6px solid ${feature.color}` }}
          >
            <h2 className="feature-title">{feature.title}</h2>
            <p className="feature-desc">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Features;
