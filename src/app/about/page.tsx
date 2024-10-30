import data from "@/data.json";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden px-4 md:px-10 lg:px-20 xl:px-32 py-10 mx-auto bg-gradient-to-b from-[#08f6f6] to-[#23395D]">
      {/* Centered Title */}
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
