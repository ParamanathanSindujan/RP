import React from 'react';
import { motion } from 'framer-motion';
import './Milestones.css';

const milestones = [
  {
    title: "Project Topic Assessment",
    date: "January 2023",
    description:
      "Initial topic assessment document of the proposed research was submitted for evaluation. The submitted document included a brief overview on key aspects of the proposed research along with the research problem, research objectives, overall solution as well as member task breakdown.",
    marks: "No marks allocated",
    color: "#3498db",
  },
  {
    title: "Project Charter Submission",
    date: "January 2023",
    description:
      "Once the topic was finalized, the project charter document was submitted for evaluation. This document also included a brief overview on key aspects of the proposed research along with the research problem, research objectives, overall solution as well as member task breakdown of the proposed research.",
    marks: "No marks allocated",
    color: "#e67e22",
  },
  {
    title: "Project Proposal Presentation",
    date: "March 2023",
    description:
      "Presented to a panel of judges in order to provide an overview of the proposed research.",
    marks: "Marks Allocation - 6%",
    color: "#9b59b6",
  },
  {
    title: "Project Proposal Report",
    date: "March 2023",
    description:
      "The submission of a report which provides an in-depth analysis pertaining to key aspects of the proposed research along with the research problem, objectives, as well as the overall proposed solution.",
    marks: "Marks Allocation - 6%",
    color: "#16a085",
  },
  {
    title: "Status Document 1",
    date: "May 2023",
    description:
      "The submission of a document that provides an overview of key tasks conducted by members during the implementation phase of the research.",
    marks: "Marks Allocation - 1%",
    color: "#2ecc71",
  },
  {
    title: "Progress Presentation 1",
    date: "May 2023",
    description:
      "Evaluation of 50% completion of the proposed solution by a panel of judges.",
    marks: "Marks Allocation - 15%",
    color: "#1abc9c",
  },
  {
    title: "Research Paper Draft Submission",
    date: "June 2023",
    description:
      "Draft submission of the research paper submitted to the supervisor for evaluation.",
    marks: "Marks Allocation - 10%",
    color: "#f1c40f",
  },
  {
    title: "Final Thesis Submission",
    date: "September 2023",
    description:
      "Submission of the group and individual thesis documents for evaluation.",
    marks: "Marks Allocation - 19%",
    color: "#34495e",
  },
  {
    title: "Progress Presentation 2",
    date: "September 2023",
    description:
      "Evaluation of 90% completion of the proposed solution by a panel of judges.",
    marks: "Marks Allocation - 18%",
    color: "#d35400",
  },
  {
    title: "Log Book and Status Document 2",
    date: "October 2023",
    description:
      "Submission of the research logbook and status document 2 which provides an overview of all key tasks conducted by members during the implementation phase of the research.",
    marks: "Marks Allocation - 3%",
    color: "#27ae60",
  },
  {
    title: "Website Assessment",
    date: "November 2023",
    description: "Submission of research website for evaluation.",
    marks: "Marks Allocation - 2%",
    color: "#c0392b",
  },
  {
    title: "Final Presentation and Viva",
    date: "November 2023",
    description: "Final evaluation of the completed product (100%).",
    marks: "Marks Allocation - 20%",
    color: "#8e44ad",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15 },
  }),
};

const Milestones = () => {
  return (
    <div className="milestones-container">
      <h1 className="milestones-header">Project Milestones</h1>
      <div className="milestones-grid">
        {milestones.map((milestone, index) => (
          <motion.div
            className="milestone-card"
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            style={{ borderTop: `6px solid ${milestone.color}` }}
          >
            <h2 className="milestone-title">{milestone.title}</h2>
            <p className="milestone-date">{milestone.date}</p>
            <p className="milestone-desc">{milestone.description}</p>
            <p className="milestone-marks">{milestone.marks}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Milestones;
