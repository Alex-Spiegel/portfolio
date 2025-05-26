"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { projects } from "@/lib/projectData";
import ProjectCard from "@/app/_components/ProjectCard";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";

export default function OtherProjects({ currentSlug }) {
  const filteredProjects = projects.filter((p) => p.slug !== currentSlug);

  const [sliderRef, slider] = useKeenSlider({
    slides: {
      perView: 1,
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 3, spacing: 15 },
      },
    },
    loop: true,
    drag: typeof window !== "undefined" && window.innerWidth < 768,
  });

  const handlePrev = () => {
    if (slider.current) slider.current.prev();
  };

  const handleNext = () => {
    if (slider.current) slider.current.next();
  };

  return (
    <div className="relative">
      {/* Slider */}
      <div ref={sliderRef} className="keen-slider">
        {filteredProjects.map((project) => (
          <div className="keen-slider__slide" key={project.slug}>
            <ProjectCard
              title={project.title}
              description={project.description}
              image={project.screenshots?.[5]}
              href={`/projects/${project.slug}`}
            />
          </div>
        ))}
      </div>

      {/* ⬅️ Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute top-1/4 -left-3  p-2  bg-accent text-2xl text-primary shadow rounded-full z-10"
      >
        <HiOutlineChevronLeft />
      </button>

      {/* ➡️ Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute top-1/4 -right-3 p-2 bg-accent text-2xl text-primary shadow rounded-full z-10"
      >
        <HiOutlineChevronRight />
      </button>
    </div>
  );
}
