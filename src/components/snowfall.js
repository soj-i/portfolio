"use client";

import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

const Snowfall = () => {
  const sketchRef = useRef();
  const particles = useRef([]); // Use useRef to maintain a stable reference across renders

  useEffect(() => {
    if (typeof window !== "undefined") { // Ensure it's running in the browser
      const sketch = (p) => {
        const createParticle = () => {
          let pt = p.createVector(p.random(p.width), 0);
          particles.current.push(pt);
        };

        p.setup = () => {
          p.createCanvas(window.innerWidth, window.innerHeight);
          // Immediately generate some particles to start with
          for (let i = 0; i < 5; i++) {
            createParticle();
          }
        };

        p.draw = () => {
          p.clear();
          particles.current.forEach((pt) => {
            pt.y += 2;
            if (pt.y > p.height) pt.y = 0;
            p.fill(255);
            p.ellipse(pt.x, pt.y, 10, 10);
          });
        };

        // Use a shorter interval initially to quickly populate the screen
        const initialInterval = setInterval(() => {
          createParticle();
        }, 1000);

        // After a few seconds, slow down the particle creation rate
        setTimeout(() => {
          clearInterval(initialInterval);
          setInterval(() => {
            createParticle();
          }, 5000);
        }, 5000); // Slow down after 5 seconds

        // Expose generateMoreSnow function globally within the sketch context
        window.generateMoreSnow = () => {
          for (let i = 0; i < 10; i++) {
            createParticle();
          }
        };
      };

      const p5Instance = new p5(sketch, sketchRef.current);

      return () => {
        // Clean up the p5 instance
        p5Instance.remove();
        window.generateMoreSnow = undefined; // Clean up the global function
      };
    }
  }, []);

  return <div ref={sketchRef}></div>;
};

export default Snowfall;
