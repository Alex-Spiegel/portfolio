import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-[94vh] flex flex-col md:flex-row items-center justify-center gap-8 px-4 py-6 text-center">
      {/* Mobile Avatar */}
      <div className="relative md:hidden overflow-hidden size-60 shrink-0 rounded-full border-8 border-primary shadow-2xl">
        <Image src="/cartoon_portrait_square.png" alt="Portrait" fill />
      </div>
      {/* Desktop Portrait */}
      <div className="hidden md:block max-w-xs shrink-0">
        <Image
          src="/cartoon_portrait.png"
          alt="Portrait"
          width={512}
          height={768}
          sizes="(min-width: 768px) 256px"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>

      <div className="max-w-xl text-center md:text-left space-y-6">
        <div>
          <h1 className="text-5xl font-heading font-extralight text-primary leading-tight">
            Hi, my name is Alex
          </h1>
          <h2 className="text-2xl font-sub font-light text-secondary mt-2">
            I'm a full stack web developer
          </h2>
        </div>

        <p className="text-base text-gray-600 leading-relaxed">
          I craft responsive websites - from idea to launch. With a background
          in education and a sharp eye for design, I bring tech and
          communication together.
        </p>

        <div className="flex gap-4 justify-center md:justify-start">
          <a
            href="/projects"
            className="bg-primary text-white px-6 py-2 rounded-md hover:bg-secondary transition"
          >
            View Projects
          </a>
          <a
            href="/contact"
            className="border border-primary text-primary px-6 py-2 rounded-md hover:bg-muted transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </main>
  );
}
