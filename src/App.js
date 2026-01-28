import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // 
import "./styles/global.css"; // [cite: 3, 11]

// Layout Components
import Header from "./components/Header"; // [cite: 3, 29]
import Footer from "./components/Footer"; // [cite: 4, 9]
import ParticlesBackground from "./components/ParticlesBackground"; // [cite: 5, 34]

// Section Components (for Home)
import Hero from "./components/Hero"; // [cite: 3, 31]
import About from "./components/About"; // [cite: 4, 1]
import Services from "./components/Services"; // [cite: 4, 44]
import Portfolio from "./components/Portfolio"; // [cite: 4, 41]
import Contact from "./components/Contact"; // [cite: 4, 7]

// New Detailed Pages
import Engineering from "./components/Engineering";
import Tutoring from "./components/Tutoring";

import BackToTop from "./components/BackToTop.js";
import ScrollProgress from "./components/ScrollProgress";

function App() {
  return (
    <Router basename="/Kasbeet-Engineering-Studios">
      <div className="main-content">
        <ScrollProgress />   {/* ← Progress bar */}
        {/* Persistent elements visible on all routes */}
        <ParticlesBackground />
        <Header />

        <Routes>
          {/* Main Home Route: Stacks all standard sections */}
          <Route 
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Services />
                <Portfolio />
                <Contact />
              </>
            } 
          />

          {/* Individual Page Routes */}
          <Route path="/engineering" element={<Engineering />} />
          <Route path="/tutoring" element={<Tutoring />} />
        </Routes>

        <BackToTop />   {/* ← Floating button */}

        <Footer />
      </div>
    </Router>
  );
}

export default App;