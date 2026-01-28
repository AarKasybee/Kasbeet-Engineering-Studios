import React from "react";
import { HashLink } from "react-router-hash-link";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <div className="container">
          <HashLink smooth to="/#hero" className="navbar-brand">
            Kasbeet Engineering Studios
          </HashLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <HashLink smooth to="/#about" className="nav-link">About</HashLink>
              </li>
              <li className="nav-item">
                <HashLink smooth to="/#services" className="nav-link">Services</HashLink>
              </li>
              <li className="nav-item">
                <HashLink smooth to="/#portfolio" className="nav-link">Projects</HashLink>
              </li>
              <li className="nav-item">
                <HashLink smooth to="/#contact" className="nav-link">Contact</HashLink>
              </li>
              <li className="nav-item">
                <HashLink to="/engineering" className="nav-link">Engineering</HashLink>
              </li>
              <li className="nav-item">
                <HashLink to="/tutoring" className="nav-link">Tutoring</HashLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;