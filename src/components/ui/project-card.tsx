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
    <div className="flex flex-col md:flex-row gap-16 mb-12"
    style={{
        paddingLeft: "150px",
    }}>
      {project.videoUrl ? (
        <video
          controls
          className="rounded-lg object-cover"
          width={450}
          height={400}
        >
          <source src={project.videoUrl} type= "video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <Image
          src={project.imageUrl || "/images/default.png"} // Fallback image if imageUrl is null
          alt={project.title}
          width={450}
          height={400}
          className="rounded-lg object-cover"
        />
      )}
      <div>
        <h2 className="text-2xl font-bold text-3xl">{project.title}</h2>
        <p className="mt-4 text-gray-200 text-2xl leading-relaxed xl:leading-loose">{project.description}</p>
        <Link
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-[#fcbc30] hover:underline"
        >
          View Project
        </Link>
      </div>
    </div>
  );
}
