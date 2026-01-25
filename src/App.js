import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Add these
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.css"; 

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticlesBackground from "./components/ParticlesBackground";

function App() {
  return (
    <Router> {/* Wrap the entire app in Router */}
      <div className="main-content">
        <ParticlesBackground />
        <Header />
        <Hero />
        {/* Main Landing Page View */}
        <About />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;