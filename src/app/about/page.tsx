"use client"

import data from "@/data.json";
import HeroButton
 from "@/components/molecules/heroButton";
export default function About() {


  return (
    <div className="min-h-screen flex flex-col overflow-hidden px-4 md:px-10 lg:px-20 xl:px-32 py-10 mx-auto bg-gradient-to-b from-[#20709D] to-[#23395D]">
      {/* Centered Title */}

        <HeroButton
        href="/"
        label="back"
        className="w-1/5 shrink-1 min-w-[100px] py-2 px-4 md:text-base lg:text-lg xl:text-xl rounded-full text-white font-semibold text-center transition-transform transform hover:scale-110 shadow-lg border-4 border-[#ff8800] sm:bg-red-500 bg-[#fcbc30] md:bg-[#fcbc30] hover:bg-[#ff8800] hover:border-[#fcbc30] hover:shadow-xl"
        >
        </HeroButton>
      <h1 className="uppercase text-4xl md:text-6xl lg:text-7xl font-bold text-center">
        About <span className="text-[#fcbc30]">Me</span>
      </h1>

      <div className="mt-6 md:mt-8 flex justify-center">
        <div className="mt-8 max-w-5xl w-full text-left">
          {/* Left-Aligned Text Content */}
          <h2 className="font-semibold text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-relaxed xl:leading-loose">
            {data.bio}
          </h2>
          <br />
          <h2 className="font-semibold text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-relaxed xl:leading-loose">
            I am currently looking for 2025 software engineering, project management, UI/UX design, or cybersecurity opportunities.
          </h2>
        </div>
      </div>
    </div>
  );
}
