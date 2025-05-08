import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="max-w-xl mx-auto px-4 py-16 text-center space-y-6">
      <h1 className="text-4xl font-heading font-bold text-primary">
        Let's connect
      </h1>

      <p className="text-lg font-body text-foreground">
        Whether it's a potential project, a job opportunity, or just a friendly
        hello – feel free to reach out. I'd love to hear from you.
      </p>

      <div className="space-y-2">
        <p className="flex items-center justify-center gap-2 text-secondary hover:underline font-medium">
          <HiOutlineMail className="text-xl" />
          <a
            href={`mailto:${"alexander.schaz"}@${"gmail.com"}`}
            className="hover:underline"
          >
            {`alexander.schaz@gmail.com`}
          </a>
        </p>
      </div>

      <div className="flex justify-center gap-6 pt-6 text-2xl text-primary">
        <a
          href="https://github.com/Alex-Spiegel"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
}
