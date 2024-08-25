"use client";

import React, { useState, useEffect } from 'react';
import '@/app/globals.css';



const DynamicText: React.FC = () => {
  const texts = ["Creative", "Software Developer", "Music Enthusiast","Tech Enthusiast"];
  const [index, setIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipping(true);

      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsFlipping(false);
      }, 900); // Matches the CSS animation duration

    }, 3000); // Total time before switching, including animation

    return () => clearInterval(interval);
  }, [texts.length]); // Ensure `texts.length` is included as a dependency

  return (
    <span className={`flipping-text ${isFlipping ? 'flip' : ''} text-[#fcbc30]`}>
      {texts[index]}
    </span>
  );
};

export default DynamicText;
