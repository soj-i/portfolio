import Hero from "@/app/hero/page";
import About from "@/app/about/page";
import Experiences from "@/app/experience/page";
import Projects from "@/app/projects/page";
import ContactMe from "@/app/contact-me/page";
import Skills from "@/app/skills/page";



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
