export default function About() {
  return (
    <div>
      <section className="max-w-3xl mx-auto bg-muted/40 rounded-xl px-6 py-12 shadow-sm space-y-6">
        <h1 className="text-4xl font-heading font-bold text-primary">
          About Me
        </h1>
        <p className="text-lg font-body text-foreground leading-relaxed">
          I&apos;m Alex - a full stack{" "}
          <span className="text-secondary font-bold">web developer</span> based
          in Germany. My journey into tech started through education,
          creativity, and a constant desire to{" "}
          <span className="text-secondary font-semibold">
            understand how things work
          </span>
          .
        </p>
        <p className="text-lg font-body text-foreground leading-relaxed">
          I&apos;ve spent years navigating{" "}
          <span className="text-secondary font-bold">
            education and personal growth
          </span>{" "}
          - all of which now inform how I build, collaborate, and{" "}
          <span className="text-secondary font-bold">communicate</span> in tech.
        </p>
        <p className="text-lg font-body text-foreground leading-relaxed">
          Today, I build clean,{" "}
          <span className="text-secondary font-bold">responsive web apps</span>{" "}
          with a strong focus on usability, accessibility, and clear{" "}
          <span className="text-secondary font-bold">communication</span>. I
          enjoy turning ideas into polished, functional{" "}
          <span className="text-secondary font-bold">products</span> that people
          actually want to use.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-12 space-y-8">
        <h2 className="text-3xl font-heading font-bold text-primary text-center md:text-left">
          Skills & Tools
        </h2>

        <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
          {[
            {
              title: "Languages",
              items: ["JavaScript (ES6+)", "HTML5 & CSS3", "Markdown"],
            },
            {
              title: "Frameworks & Tools",
              items: [
                "React / Next.js",
                "Tailwind CSS",
                "Node.js / Express",
                "MongoDB / Mongoose",
                "Git & GitHub",
              ],
            },
            {
              title: "Other Skills",
              items: [
                "UX Writing",
                "Responsive Design",
                "Content Editing",
                "Team Collaboration",
              ],
            },
          ].map((group, i) => (
            <div
              key={i}
              className="bg-muted/40 border border-secondary rounded-lg shadow-md p-4 hover:shadow-lg transition"
            >
              <h3 className="font-sub font-medium mb-2 text-secondary">
                {group.title}
              </h3>
              <ul className="space-y-1 text-foreground font-body text-sm">
                {group.items.map((skill, idx) => (
                  <li key={idx}>
                    <span className="text-accent">•</span> {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto bg-muted/40 rounded-xl px-6 py-12 shadow-sm space-y-6">
        <h2 className="text-3xl font-heading font-bold text-primary text-center md:text-left">
          My Path So Far
        </h2>

        <div className="space-y-8 relative border-l-2 border-secondary pl-6">
          {[
            {
              year: "2024–2025",
              title: "Web Development Bootcamp (remote)",
              desc: "Full-stack training (Code Labs Academy) covering React, Node.js, APIs, testing & deployment. Built and deployed multiple team-based and solo projects.",
            },
            {
              year: "2017–2023",
              title: "Educational & Creative Roles",
              desc: "Various teaching and content-related positions – strengthened my communication, mentoring, and design-thinking skills. Learned where I thrive – and where I don’t.",
            },
            {
              year: "2015–2016",
              title: "Teacher Training (State Exam)",
              desc: "Completed my second state exam (Realschule, DE). Focus on English, Arts & Pedagogy.",
            },
            {
              year: "2007–2014",
              title: "University of Education, Freiburg",
              desc: "Studied Visual Arts, English and German (M.Ed.). Combined analytical and linguistic skills with visual thinking and design fundamentals – a foundation that now shapes how I build, structure, and style digital experiences.",
            },
          ].map((item, i) => (
            <div key={i} className="relative">
              <span className="absolute -left-[0.67rem] top-1 w-3 h-3 bg-accent rounded-full shadow-md" />
              <h3 className="text-lg font-sub font-semibold text-foreground">
                {item.year} · {item.title}
              </h3>
              <p className="text-sm text-gray-600 font-body">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
