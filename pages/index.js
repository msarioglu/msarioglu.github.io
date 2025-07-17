import Home from "@/pages/home";
import About from "@/pages/about";
import Skills from "@/pages/skills";
import Projects from "@/pages/projects";
import UseScrollSpy from "@/components/useScrollSpy";

export default function Index() {
  const sectionIds = ["home", "about", "skills", "projects"];
  UseScrollSpy(sectionIds, 100);
  return (
    <>
      <Home />
      <About />
      <Skills />
      <Projects />
    </>
  );
}
