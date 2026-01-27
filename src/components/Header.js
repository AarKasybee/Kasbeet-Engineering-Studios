import React from "react";
import { HashLink } from "react-router-hash-link";

function Header() {
  return (
    <header className="bg-dark text-white text-center py-3">
      {/* Logo / Home link */}
      <HashLink smooth to="/#hero" className="text-white text-decoration-none d-inline-block">
        <h1>Kasbeet Engineering Studios</h1>
        <p>Advancing applied engineering, systems design, and education.</p>
      </HashLink>

      {/* Navigation */}
      <nav>
        <HashLink smooth to="/#about" className="text-white mx-2">About</HashLink>
        <HashLink smooth to="/#services" className="text-white mx-2">Services</HashLink>
        <HashLink smooth to="/#portfolio" className="text-white mx-2">Projects</HashLink>
        <HashLink smooth to="/#contact" className="text-white mx-2">Contact</HashLink>
        <HashLink to="/engineering" className="text-white mx-2">Engineering</HashLink>
        <HashLink to="/tutoring" className="text-white mx-2">Tutoring</HashLink>
      </nav>
    </header>
  );
}

export default Header;