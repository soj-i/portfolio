import data from "@/data.json";
import ProjectCard from "@/components/organisms/project-card";
import HeroButton from "@/components/molecules/heroButton";




export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden p-10 mx-auto bg-gradient-to-b from-[#0180a6] to-[#023e69]">
      <HeroButton
        href="/"
        label="back"
        className="w-1/5 shrink-1 min-w-[100px] py-2 px-4 md:text-center lg:text-lg xl:text-xl rounded-full text-white font-semibold text-center transition-transform transform hover:scale-110 shadow-lg border-4 border-[#ff8800] bg-[#fcbc30] md:bg-[#fcbc30] hover:bg-[#ff8800] hover:border-[#fcbc30] hover:shadow-xl"
        >
        </HeroButton>
      <header 
      alt-text="My Projects"
      className="uppercase text-4xl md:text-7xl font-bold text-start md:text-center">
        My <span className="text-[#fcbc30]">Projects</span>
      </header>

      <main className="mt-12 md:mt-32 flex flex-col gap-16">
        {data.projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </main>
    </div>
  );
}