import data from "@/data.json";
import ProjectCard from "@/components/project-card";




export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden p-10 mx-auto bg-gradient-to-b from-[#0180a6] to-[#023e69]">
      <h1 className="uppercase text-4xl md:text-7xl font-bold text-start md:text-center">
        My <span className="text-[#fcbc30]">Projects</span>
      </h1>

      <div className="mt-12 md:mt-32 flex flex-col gap-16">
        {data.projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}