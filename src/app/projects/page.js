import ProjectCard from "../_components/ProjectCard";

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 space-y-8">
      <h1 className="text-4xl font-heading font-extrabold text-primary text-center md:text-left">
        What I've been working on
      </h1>
      <p className="text-gray-600 font-body text-center md:text-left">
        I'm passionate about personal growth and love to challenge myself.
        Though still early in my journey as a web developer, here's a look at
        what I've built so far.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          title="HerbalCompass"
          description="A Next.JS-based app for finding natural remedies."
          image="/screenshot_placeholder.png"
          href="/projects/herbalcompass"
        />
        <ProjectCard
          title="Weather App"
          description="A React-based weather forecast tool with live API integration."
          image="/screenshot_placeholder.png"
          href="/projects/weather-app"
        />
        <ProjectCard
          title="Random App"
          description="A React-based app to randomise your poops."
          image="/screenshot_placeholder.png"
          href="/projects/weather-app"
        />
      </div>
    </section>
  );
}
