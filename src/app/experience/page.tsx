import React from "react";
import data from "@/data.json";
import ExperienceCard from "@/components/organisms/experience-card";

export default function Experiences() {
    return (<div className = "min-h-screen flex flex-col overflow-hidden p-10 max-w-7x1 mx-auto bg-gradient-to-b from-[#23395D] to-[#0180a6]">
        <h1 className = "uppercase text-4xl md:text-7xl font-bold text-start md:text-center">
            Experience & <span className ="text-[#fcbc30]">Education</span>
        </h1>

        <div className = "mt-12 md:mt:-32 grid grid-cols-1 md:grid-cols-2 relative gap-8 md:gap-24">
            {data.experiences.map((experience, index) => ( 
                <ExperienceCard key = {index} experience = {experience} />
            ))}
        </div>
        </div>
    );
}