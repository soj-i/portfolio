import React from "react";
import HeroButton from "./heroButton";

const ButtonGroup = () => {
  return (
    <div
      className="absolute w-1/3 bg-green-300/10 z-10 flex flex-col shrink max-w-xs md:max-w-sm lg:max-w-md space-y-4 text-center right-0 mr-36"
      style={{
        top: "calc(10vh - 8%)",
        marginRight: "calc(16vw - 50px)",
      }}
    >
      <HeroButton href="#about" label="About" />
      <HeroButton href="#skills" label="Skills" />
      <HeroButton href="#projects" label="Projects" />
      <HeroButton href="#contact-me" label="Contact" />
      <HeroButton
        href="/images/Olusoji_Oduneye_Resume_Jun2025.pdf"
        label="Resume"
        
      />
    </div>
  );
};

export default ButtonGroup;