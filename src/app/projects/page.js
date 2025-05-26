import { projects } from "@/lib/projectData";
import ProjectCard from "@/app/_components/ProjectCard";

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 space-y-8">
      <h1 className="text-4xl font-heading font-extrabold text-primary text-center md:text-left">
        What I&apos;ve been working on
      </h1>
      <p className="text-gray-600 font-body text-center md:text-left">
        I&apos;m passionate about personal growth and love to challenge myself.
        Though still early in my journey as a web developer, here&apos;s a look
        at what I&apos;ve built so far.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.screenshots[5]}
            href={`/projects/${project.slug}`}
          />
        ))}
      </div>
    </section>
  );
}
