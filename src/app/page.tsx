import Hero from "@/components/hero";
import Image from "next/image";
import About from "@/components/ui/about";
import Experiences from "@/components/ui/experiences";
import Projects from "@/components/projects";
import ContactMe from "@/components/ui/contactme";
import Skills from "@/components/ui/skills";

export default function Home() {
  return (
  <main> 
    <section>
      <Hero />
      </section>

    <section id = "about">
      <About/>
      </section>

    <section id = "skills">
      <Skills/>
      </section>

    <section id = "experiences">
      <Experiences/>
    </section>

    <section id = "projects"> 
      <Projects /> </section>

    <section id = "contact-me">
      <ContactMe/>
    </section>
  </main>
  );
}
