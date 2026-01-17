import React from "react";

function Portfolio() {
  return (
    <section id="portfolio" className="py-5">
      <div className="container">
        <h3>Featured Projects</h3>
        <div className="row">
          <div className="col-md-6">
            <h4>Project 1</h4>
            <p>Control system modeling and simulation for autonomous vehicles.</p>
          </div>
          <div className="col-md-6">
            <h4>Project 2</h4>
            <p>Signal processing and embedded system design for vibration analysis.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;