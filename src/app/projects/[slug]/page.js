import { projects } from "@/lib/projectData";
import Image from "next/image";
import { notFound } from "next/navigation";
import ProjectCard from "@/app/_components/ProjectCard"; // PLACEHOLDER -> change to carroussel

export default function ProjectPage({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <article className="max-w-4xl mx-auto px-4 py-16 space-y-16">
      {/* (1) Intro */}
      <section className="space-y-4">
        <h1 className="text-4xl font-heading font-bold text-primary">
          {project.title}
        </h1>
        {project.introduction.map((paragraph, i) => (
          <p
            key={i}
            className="text-base font-body text-foreground leading-relaxed mb-4"
          >
            {paragraph
              .split(/(\*\*.*?\*\*)/)
              .map((part, j) =>
                part.startsWith("**") ? (
                  <strong key={j}>{part.replace(/\*\*/g, "")}</strong>
                ) : (
                  <span key={j}>{part}</span>
                )
              )}
          </p>
        ))}

        <div className="flex flex-wrap gap-2 text-sm font-mono">
          {project.stack.map((tech, i) => (
            <span key={i} className="bg-muted px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>

        <div className="pt-4 space-x-4">
          <a
            href={project.live}
            target="_blank"
            className="text-secondary hover:underline font-medium"
          >
            Live Site
          </a>
          <a
            href={project.github}
            target="_blank"
            className="text-secondary hover:underline font-medium"
          >
            GitHub Repo
          </a>
        </div>

        <Image
          src={project.screenshots[0]}
          alt={`${project.title} screenshot`}
          width={1200}
          height={700}
          className="rounded-lg shadow-md mt-8"
        />
      </section>

      {/* (2) Purpose */}
      <section className="space-y-4">
        <h2 className="text-2xl font-heading font-bold text-primary">
          Project Purpose and Goal
        </h2>
        {project.purpose.map((paragraph, i) => (
          <p
            key={i}
            className="text-base font-body text-foreground leading-relaxed mb-4"
          >
            {paragraph
              .split(/(\*\*.*?\*\*)/)
              .map((part, j) =>
                part.startsWith("**") ? (
                  <strong key={j}>{part.replace(/\*\*/g, "")}</strong>
                ) : (
                  <span key={j}>{part}</span>
                )
              )}
          </p>
        ))}
      </section>

      {/* (3) Spotlight */}
      <section className="space-y-6">
        <h2 className="text-2xl font-heading font-bold text-primary">
          Main Features of the Project
        </h2>

        {project.features.map((paragraph, i) => (
          <p
            key={i}
            className="whitespace-pre-line text-base font-body text-foreground leading-relaxed mb-4"
          >
            {paragraph
              .split(/(\*\*.*?\*\*)/)
              .map((part, j) =>
                part.startsWith("**") ? (
                  <strong key={j}>{part.replace(/\*\*/g, "")}</strong>
                ) : (
                  <span key={j}>{part}</span>
                )
              )}
          </p>
        ))}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.screenshots.slice(1, 5).map((src, i) => (
            <Image
              key={i}
              src={src}
              alt={`Feature ${i + 2}`}
              width={600}
              height={350}
              className="rounded shadow"
            />
          ))}
        </div>

        <h3 className="text-xl font-heading font-semibold text-primary mt-8">
          Tech Used
        </h3>

        {/* HIER NOCH ICONS VON TECH USED EINFÜGEN */}

        {project.techUsed.map((paragraph, i) => (
          <p
            key={i}
            className="whitespace-pre-line text-base font-body text-foreground leading-relaxed mb-4"
          >
            {paragraph
              .split(/(\*\*.*?\*\*)/)
              .map((part, j) =>
                part.startsWith("**") ? (
                  <strong key={j}>{part.replace(/\*\*/g, "")}</strong>
                ) : (
                  <span key={j}>{part}</span>
                )
              )}
          </p>
        ))}

        {project.screenshots[5] && (
          <Image
            src={project.screenshots[5]}
            alt="Tech Screenshot"
            width={1200}
            height={600}
            className="rounded shadow"
          />
        )}
      </section>

      {/* (4) Lessons Learned */}
      <section className="space-y-4">
        <h2 className="text-2xl font-heading font-bold text-primary">
          Lessons Learned
        </h2>

        {project.lessons.map((paragraph, i) => (
          <p
            key={i}
            className="whitespace-pre-line text-base font-body text-foreground leading-relaxed mb-4"
          >
            {paragraph
              .split(/(\*\*.*?\*\*)/)
              .map((part, j) =>
                part.startsWith("**") ? (
                  <strong key={j}>{part.replace(/\*\*/g, "")}</strong>
                ) : (
                  <span key={j}>{part}</span>
                )
              )}
          </p>
        ))}
      </section>

      {/* (5) Other Projects */}
      <section className="space-y-4">
        <h2 className="text-2xl font-heading font-bold text-primary">
          Other Projects
        </h2>
        <ProjectCard />
      </section>
    </article>
  );
}
