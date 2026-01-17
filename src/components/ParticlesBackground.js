import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

function ParticlesBackground() {
  const particlesInit = async (main) => {
    await loadSlim(main); // loads the slim engine
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "#121212", // matches your dark theme
        },
        particles: {
          color: { value: "#ffffff" },
          links: {
            enable: true,
            color: "#ffffff",
            distance: 150,
          },
          move: {
            enable: true,
            speed: 2,
          },
          number: {
            value: 80,
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
      }}
    />
  );
}

export default ParticlesBackground;