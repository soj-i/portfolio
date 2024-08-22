import data from "@/data.json";
import React from 'react';
import '../../app/globals.css'; // Ensure your CSS is correctly referenced
import Image from "next/image";

export default function Skills() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden p-10  mx-auto bg-[#23395D]">
      <h1 className="uppercase text-6xl md:text-7xl font-bold text-start md:text-center">
        My <span className="text-[#fcbc30]">Skills</span>
      </h1>

      <div className="skills-container mt-12 md:mt-32">
        <div className="background-box">
          <Image src="/images/lastskill.png" alt="Skills Graph" className="collage" width={2000} height={1000} />
        </div>
      </div>
    </div>
  );
}
