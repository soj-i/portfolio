import Image from "next/image";
import Link from "next/link";

type Props = {
  project: {
    imageUrl: string | null;
    videoUrl: string | null;
    title: string;
    url: string;
    description: string;
  };
};

export default function ProjectCard({ project }: Props) {
  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-12 p-4 md:p-0">
      {/* Image/Video Section */}
      <div className="flex-shrink-0 w-full md:w-1/2">
        {project.videoUrl ? (
          <video
            controls
            className="w-full rounded-lg object-cover"
            style={{ maxHeight: "400px" }}
          >
            <source src={project.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <Image
            src={project.imageUrl || "/images/default.png"} // Fallback image if imageUrl is null
            alt={project.title}
            aria-label={project.title}
            width={450}
            height={400}
            className="w-full rounded-lg object-cover"
            style={{ maxHeight: "400px" }}
          />
        )}
      </div>

      {/* Text Section */}
      <main 
      aria-label={`Project: ${project.title}`}
      className="w-full md:w-1/2">
        <h2 className="text-2xl md:text-3xl font-bold">{project.title}</h2>
        <p 
        alt-text={project.description}
        aria-label={project.description}
        className="mt-4 text-gray-200 text-lg leading-relaxed md:text-xl xl:leading-loose">
          {project.description}
        </p>
        <Link
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-[#fcbc30] hover:underline"
        >
          View Project
        </Link>
      </main>
    </div>
  );
}
