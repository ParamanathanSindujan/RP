

import React from 'react';
import './Section.css';

import member1 from '../assets/qs.PNG';
import member2 from '../assets/image1.png';
import member3 from '../assets/image2.png';
import member4 from '../assets/image3.png';
import member5 from '../assets/ravisir.jpeg';
import member6 from '../assets/co-s.jpg';


//import M1 from '../assets/sea-turtle.jpg'; // make sure you place this image in public or src/assets

const teamMembers = [
  {
    name: "Quais N.M",
    role: "IT21368066",
    photo: member1, 
    bio: " 🔍 Type Detection – Accurately classify turtle species using image recognition and data analysis..",
  },
  {
    name: "Sindujan.P",
    role: "IT21158568 ",
    photo: member2, 
    bio: "🐢 Disease Detection – Identify health risks early to protect turtle populations.",
  },
  {
    name: "Loshan.B",
    role: "IT21369988",
    photo: member4,
    bio: "🐣 Hatchery Prediction – Forecast hatching success and optimize conservation planning..",
  },
  {
    name: " Sabiyar S.M",
    role: "IT21389092",
    photo: member3,
    bio: "📡 Turtle Monitoring – Track turtle movements and behavior in real time for better protection.",
  },
  {
    name: "Prof. Ravi Supuya",
    role: "Supervisor",
    photo: member5,
    bio: "Senior Lecturer - Faculty of Computing | Information Technology",
  },
  {
    name: "Bhagyanie Chathurika",
    role: "Co-Supervisor",
    photo: member6,
    bio: "Academic Coordinator (Matara), Senior Lecturer.",
  },
];

const Team = () => {
  return (
    <div className="section team-section">
      <h1 className="team-title">Meet Our Team</h1>
      <div className="team-container-vertical">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card-vertical">
            <img src={member.photo} alt={member.name} className="team-photo-vertical" />

            <div className="team-info">
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-bio">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
