import React from "react";
import "../styles/Engineering.css";

function Engineering() {
  return (
    <div className="engineering-page">
      <section className="eng-hero py-5">
        <div className="container">
          <h2 className="glow-text">Applied Engineering & Systems Design</h2>
          <p className="lead">Translating complex mathematical models into functional physical architectures.</p>
        </div>
      </section>

      <section className="project-showcase container">
        <div className="project-entry">
          <div className="project-meta">
            <h3>Control Systems & Autonomous Simulation</h3>
            <p>High-fidelity modeling and stability analysis for autonomous vehicle feedback loops.</p>
            <ul className="tech-stack">
              <li>MATLAB/Simulink</li>
              <li>PID Tuning</li>
            </ul>
          </div>
        </div>

        <div className="project-entry">
          <div className="project-meta">
            <h3>Embedded Systems</h3>
            <p>Signal processing and hardware-software integration for real-time monitoring.</p>
            <ul className="tech-stack">
              <li>C/C++</li>
              <li>Microcontrollers</li>
              <li>FFT Analysis</li>
            </ul>
          </div>
        </div>

        <div className="project-entry">
          <div className="project-meta">
            <h3>Solar PV System Design & Site Planning for installation</h3>
            <p>Industrial and residential solar photovoltaic system design, including site assessment and layout planning.</p>
            <ul className="tech-stack">
              <li>AutoCAD</li>
              <li>MATLAB</li>
              <li>Electrical Engineering</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Engineering;