import { projects } from "@/lib/projectData";
import { notFound } from "next/navigation";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiSupabase,
} from "react-icons/si";

const stackInfo = {
  "Next.js": {
    icon: <SiNextdotjs className="text-black text-2xl" />,
    label: "Next.js",
  },
  "Tailwind CSS": {
    icon: <SiTailwindcss className="text-sky-400 text-2xl" />,
    label: "Tailwind CSS",
  },
  "Express.js": {
    icon: <SiExpress className="text-gray-700 text-2xl" />,
    label: "Express.js",
  },
  Supabase: {
    icon: <SiSupabase className="text-green-600 text-2xl" />,
    label: "Supabase",
  },
};

export default function ProjectPage({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <article className="max-w-5xl mx-auto px-4 py-16 space-y-16">
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

        {/* stack Anzeige */}
        <div className="flex flex-wrap gap-2 text-sm font-mono">
          {project.stack.map((tech, i) => (
            <span key={i} className="bg-accent px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>

        {/* social links */}
        <div className="pt-4 space-x-4">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:underline font-medium"
          >
            Live Site
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:underline font-medium"
          >
            GitHub Repo
          </a>
        </div>

        {/* goldener Screenshot */}
        <img
          src={project.screenshots[0]}
          alt={`${project.title} screenshot_01`}
          width={1280}
          height="auto"
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

        <div className="columns-1 md:columns-2 gap-8">
          {project.screenshots.slice(1, 5).map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Feature ${i + 2}`}
              width="auto"
              height="auto"
              className="mb-6 w-full rounded-lg"
              style={{ boxShadow: "0 0 20px rgba(0,0,0,0.4)" }}
            />
          ))}
        </div>

        {/* Tech Used */}
        <h3 className="text-xl font-heading font-semibold text-primary mt-8">
          Tech Used
        </h3>

        <div className="flex gap-4">
          {/* tech text */}
          <div className="">
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
          </div>

          {/* stack icons */}
          <div className="w-1/4 flex flex-col gap-4 justify-evenly items-center">
            {project.stack.map((tech, index) =>
              stackInfo[tech] ? (
                <div
                  key={index}
                  className="w-40 p-4 flex justify-center items-center gap-2 bg-accent shadow-lg"
                >
                  {stackInfo[tech].icon}
                  <span className="text-sm font-medium">
                    {stackInfo[tech].label}
                  </span>
                </div>
              ) : null
            )}
          </div>
        </div>

        {project.screenshots[5] && (
          <img
            src={project.screenshots[5]}
            alt={`${project.title} screenshot_02`}
            width={1280}
            height="auto"
            className="my-6 w-full rounded-lg"
            style={{ boxShadow: "0 0 20px rgba(0,0,0,0.4)" }}
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
      </section>
    </article>
  );
}
