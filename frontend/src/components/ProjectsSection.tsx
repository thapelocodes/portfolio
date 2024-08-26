import Link from "next/link";

const ProjectsSection = () => (
  <section className="projects">
    <h2>
      <Link href="/projects">Projects</Link>
    </h2>
    <Link href="/projects/project1">Project 1</Link>
    <Link href="/projects/project2">Project 2</Link>
    <Link href="/projects/project3">Project 3</Link>
  </section>
);

export default ProjectsSection;
