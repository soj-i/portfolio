"use client";

import React, { useRef, useEffect } from 'react';
import p5 from 'p5';


const Snowfall = () => {
  const sketchRef = useRef();
  let particles = []; // Move particles outside to make it accessible

  useEffect(() => {
    if (typeof window !== "undefined") { // Ensure it's running in the browser
      const sketch = (p) => {
        p.setup = () => {
          p.createCanvas(window.innerWidth, window.innerHeight);
          for (let i = 0; i < 5; i++) {
            createParticle(p);
          }
        };

        const createParticle = (p) => {
          let pt = p.createVector(p.random(p.width), 0);
          particles.push(pt);
        };

        p.draw = () => {
          p.clear();
          particles.forEach((pt) => {
            pt.y += 2;
            if (pt.y > p.height) pt.y = 0;
            p.fill(255);
            p.ellipse(pt.x, pt.y, 10, 10);
          });
        };

        setInterval(() => {
          createParticle(p);
        }, 6000);
      };

      const p5Instance = new p5(sketch, sketchRef.current);

      // Function to generate more snow particles on click
      const generateMoreSnow = () => {
        for (let i = 0; i < 10; i++) {
          p5Instance.createParticle(p5Instance);
        }
      };

      // Expose generateMoreSnow function globally
      window.generateMoreSnow = generateMoreSnow;

      return () => p5Instance.remove();
    }
  }, []);

  return <div ref={sketchRef}></div>;
};

export default Snowfall;
