import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/Skills";
import Contact from "@/components/contact";
import BackgroundSwitcher from "@/components/background-switcher";
import Education from "@/components/Education";
import ExperienceTimeline from "@/components/Experience";

export default function Home() {
  return (
    <main className="relative">
      <BackgroundSwitcher />
      <Hero />
      <About />
      <ExperienceTimeline />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </main>
  );
}
