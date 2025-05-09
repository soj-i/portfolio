"use client";
import React, { useRef, useEffect } from "react";
import p5 from "p5";
import { useSnowfall } from "@/app/contexts/SnowfallContext";

const Snowfall = () => {
  const { isSnowing } = useSnowfall(); // Access the snow state from the context
  const sketchRef = useRef();
  const particles = useRef([]);
  const p5InstanceRef = useRef(null); // Keep a reference to the p5 instance

  useEffect(() => {
    if (!isSnowing) {
      // If snowing is disabled, clean up the p5 instance
      if (p5InstanceRef.current) {
        p5InstanceRef.current.remove();
        p5InstanceRef.current = null;
      }
      return;
    }

    if (typeof window !== "undefined") {
      const sketch = (p) => {
        const createParticle = () => {
          const x = Math.random() * p.width; // Randomize x position
          const y = Math.random(); // Start at the top of the canvas
          particles.current.push(p.createVector(x, y));
        };

        p.setup = () => {
          p.createCanvas(window.innerWidth, window.innerHeight);
          for (let i = 0; i < 10; i++) {
            createParticle();
          }
        };
        
        
        p.draw = () => {
          p.clear();
          particles.current.forEach((pt) => {
            pt.y += 2; // Move the particle down
            if (pt.y > p.height) {
              pt.y = Math.floor(Math.random() * (0 - (-30) + 1) + (-30))
            // th.floor(Math.random() * (max - min + 1)) + min
            } // Reset the particle to the top if it goes off-screen
            p.fill(255);
            p.noStroke();
            p.ellipse(pt.x, pt.y, 10, 10);
          });

          // Limit the number of particles to avoid overcrowding
          if (particles.current.length > 80) {
            particles.current.shift(); // Remove the oldest particle
          }
        };

        const particleInterval = setInterval(() => {
          createParticle();
        }, 800); // new particles 800ms

        // Handle window resize
        const handleResize = () => {
          p.resizeCanvas(window.innerWidth, window.innerHeight);
        };
        window.addEventListener("resize", handleResize);

        // Cleanup function for the sketch
        p.cleanup = () => {
          clearInterval(particleInterval);
          window.removeEventListener("resize", handleResize);
        };
      };

      // Create the p5 instance
      p5InstanceRef.current = new p5(sketch, sketchRef.current);

      return () => {
        // Clean up the p5 instance
        if (p5InstanceRef.current) {
          p5InstanceRef.current.remove();
          p5InstanceRef.current = null;
        }
      };
    }
  }, [isSnowing]); // Re-run the effect when `isSnowing` changes

  return isSnowing ? <div ref={sketchRef}></div> : null;
};

export default Snowfall;