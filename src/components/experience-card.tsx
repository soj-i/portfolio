import { BriefcaseIcon } from "lucide-react";

type Props = {
  experience: {
    year: string;
    title: string;
    company: string;
    description: string[] | string; // Allow both array and string
  };
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <div className="flex items-start gap-x-12 relative">
      <div className="p-3 bg-[#fcbc30] rounded-full mx-auto relative z-10">
        <BriefcaseIcon className="w-6 h-6 text-white" />
      </div>
      <div className="absolute left-[24px] top-[72px] w-px bg-[#fcbc30] h-[calc(100%-72px)]" />

      <div>
        <p className="bg-gray-600/50 p-1 rounded-full px-4 inline-block">
          {experience.year}
        </p>
        <h2 className="text-xl md:text-3xl font-bold mt-4">
          {experience.title} -{" "}
          <span className="text-lg md:text-xl font-normal">
            {experience.company}
          </span>
        </h2>
        <ul className="mt-4 !text-xl md:text-base list-disc list-inside !leading-relaxed xl:leading-loose">
        {Array.isArray(experience.description) ? (
            experience.description.map((item, index) => (
              <li key={index}>{item}</li>
            ))
          ) : (
            <li>{experience.description}</li>
          )}
        </ul>
      </div>
    </div>
  );
}
