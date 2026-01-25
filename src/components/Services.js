import React from "react";
import { useNavigate } from "react-router-dom"; // Assumes you use react-router for navigation
import "./styles/Services.css"; 

function Services() {
  const navigate = useNavigate();

  return (
    <section id="services" className="py-5">
      <div className="container">
        <h3 className="section-title">Our Pillars</h3>
        <div className="services-grid">
          
          {/* Engineering Card */}
          <div 
            className="service-card" 
            onClick={() => navigate("/engineering")}
          >
            <div className="card-content">
              <h4>Engineering</h4>
              <p>Applied systems design, control theory, and computational simulations.</p>
              <span className="explore-btn">Enter Studio</span>
            </div>
          </div>

          {/* Tutoring Card */}
          <div 
            className="service-card" 
            onClick={() => navigate("/tutoring")}
          >
            <div className="card-content">
              <h4>Tutoring</h4>
              <p>Rigorous technical instruction in mathematics and engineering modules.</p>
              <span className="explore-btn">View Curriculum</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Services;