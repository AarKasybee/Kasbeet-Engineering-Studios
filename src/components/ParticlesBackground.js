import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

function ParticlesBackground() {
  const particlesInit = async (main) => {
    await loadSlim(main); // loads the slim engine
  };

  return (
    <div className="particles-wrapper">
    <Particles
  id="tsparticles"
  init={particlesInit}
  options={{
    /*background: {
      color: "#121212", // dark engineering theme background
    },*/
    fullScreen: {
      enable: false,
      zIndex: 0, // ensures particles stay behind your content
    },
    particles: {
      number: {
        value: 60, // balanced count for performance
        density: { enable: true, area: 800 },
      },
      color: {
        value: "#00f0ff", // neon cyan glow (tech vibe)
      },
      links: {
        enable: true,
        color: "#00f0ff",
        distance: 150,
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        outModes: { default: "out" },
      },
      opacity: {
        value: 0.6,
        anim: { enable: false },
      },
      size: {
        value: { min: 1, max: 3 },
      },
      shape: {
        type: "circle",
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" }, // particles react slightly when hovered
        onClick: { enable: false },
      },
      modes: {
        repulse: { distance: 100 },
      },
    },
    detectRetina: true,
  }}
/>
</div>

  );
}

export default ParticlesBackground;