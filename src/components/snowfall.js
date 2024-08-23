"use client";

import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

const Snowfall = () => {
  const sketchRef = useRef();
  const particles = useRef([]); // Use useRef to ensure a stable reference

  useEffect(() => {
    if (typeof window !== "undefined") { // Ensure it's running in the browser
      const sketch = (p) => {
        const createParticle = () => {
          let pt = p.createVector(p.random(p.width), 0);
          particles.current.push(pt);
        };

        p.setup = () => {
          p.createCanvas(window.innerWidth, window.innerHeight);
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

        setInterval(() => {
          createParticle();
        }, 6000);

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
