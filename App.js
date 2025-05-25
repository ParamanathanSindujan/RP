// App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import Introduction from './sections/Introduction';
import Domain from './sections/Domain';
import Milestones from './sections/Milestones';
import Features from './sections/Features';
import Documents from './sections/Documents';
import ToolsTechnologies from './sections/ToolsTechnologies';
import Team from './sections/Team';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <section id="home"><Home /></section>
        <section id="introduction"><Introduction /></section>
        <section id="domain"><Domain /></section>
        <section id="milestones"><Milestones /></section>
        <section id="features"><Features /></section>
        <section id="documents"><Documents /></section>
        <section id="tools-technologies"><ToolsTechnologies /></section>
        <section id="team"><Team /></section>
      </main>
    </div>
  );
}

export default App;
