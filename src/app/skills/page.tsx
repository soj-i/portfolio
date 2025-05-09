"use client";
import data from "@/data.json";
import React from 'react';
import '../../app/globals.css'; // Ensure your CSS is correctly referenced
import Image from "next/image";
import HeroButton from "@/components/molecules/heroButton";
import { useRouter } from "next/navigation";

export default function Skills() {
  const router = useRouter();

  return (
    <main 
    alt-text="return to hero"
    tabIndex={0}
    className="min-h-screen flex flex-col overflow-hidden p-10 mx-auto bg-[#23395D]">
      <HeroButton
        href="/"
        label="back"
        className="w-1/5 shrink-1 min-w-[100px] py-2 px-4 md:text-base lg:text-lg xl:text-xl rounded-full text-white font-semibold text-center transition-transform transform hover:scale-110 shadow-lg border-4 border-[#ff8800] sm:bg-red-500 bg-[#fcbc30] md:bg-[#fcbc30] hover:bg-[#ff8800] hover:border-[#fcbc30] hover:shadow-xl"
        >
        </HeroButton>
      <h1 
      alt-text="My Skills Bubble Graph"
      className="uppercase text-6xl md:text-7xl font-bold text-start md:text-center">
        My <span className="text-[#fcbc30]">Skills</span>
      </h1>

      <div className="skills-container mt-12 md:mt-32">
        <div className="background-box">
          <Image src="/images/lastskill.png" alt="Skills Graph" className="collage" width={2000} height={1000} />
        </div>
      </div>

    </main>
  );
}
