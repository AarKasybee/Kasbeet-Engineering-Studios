import React from "react";
import "../styles/Tutoring.css";

function Tutoring() {
  return (
    <div className="tutoring-page container py-5">
      <h2 className="section-title">Engineering Education & Mentorship</h2>
      <p className="lead">
        Over <strong>500 hours</strong> of high-level instruction across 15+ specialized technical modules from all South African Universities.
      </p>

      <div className="table-responsive mt-5">
        <table className="table table-dark table-hover custom-table">
          <thead>
            <tr>
              <th>Subject Category</th>
              <th>Included Modules</th>
              <th>Total Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Calculus</td>
              <td>WTW 158, 164, 258</td>
              <td>155 Hours</td>
            </tr>
            <tr>
              <td>Control Theory</td>
              <td>EERI 321, 418</td>
              <td>113 Hours</td>
            </tr>
            <tr>
              <td>Electrical Machines</td>
              <td>EPEMA 3A, 4A</td>
              <td>60 Hours</td>
            </tr>
            <tr>
              <td>Physics</td>
              <td>FSK 116, 176, ENGPH 1A/B</td>
              <td>75 Hours</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tutoring;