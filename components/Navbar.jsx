import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const sections = [
    'home',
    'introduction',
    'domain',
    'milestones',
    'features',
    'documents',
    'tools-technologies',
    'team',
  ];

  const [activeSection, setActiveSection] = useState('home');

  // Detect scroll and update active section
  useEffect(() => {
    const handleScroll = () => {
      let current = 'home';
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom >= 80) {
            current = section;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  // Smooth scroll on click
  const scrollToSection = (id) => (e) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <ul>
        {sections.map((section) => (
          <li key={section}>
            <a
              href={`#${section}`}
              onClick={scrollToSection(section)}
              className={activeSection === section ? 'active' : ''}
            >
              {section.replace(/-/g, ' ')}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;


