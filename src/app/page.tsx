import Hero from "@/app/hero/page";
import About from "@/app/about/page";
import Experiences from "@/app/experience/page";
import Projects from "@/app/projects/page";
import ContactMe from "@/app/contact-me/page";
import Skills from "@/app/skills/page";
import { SnowfallProvider } from "./contexts/SnowfallContext";


export default function Home() {
  return (
  
      <SnowfallProvider>
      <Hero />
      </SnowfallProvider>
 
  );
}
