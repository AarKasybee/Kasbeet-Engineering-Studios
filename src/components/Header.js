import React from "react";

function Header() {
  return (
    <header className="bg-dark text-white text-center py-3">
      <h1>Kasbeet Engineering Studios</h1>
      <p>Advancing applied engineering, systems design, and education.</p>
      <nav>
        <a href="#about" className="text-white mx-2">About</a>
        <a href="#services" className="text-white mx-2">Services</a>
        <a href="#portfolio" className="text-white mx-2">Projects</a>
        <a href="#contact" className="text-white mx-2">Contact</a>
      </nav>
    </header>
  );
}

export default Header;