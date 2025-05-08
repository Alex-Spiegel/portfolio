import { HiOutlineChevronRight } from "react-icons/hi";

export default function ProjectCard({ title, description, image, href }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-lg">
      <img
        src={image}
        alt={`Preview of ${title}`}
        className="w-full h-48 object-cover"
      />

      <div className="p-6 space-y-3">
        <h2 className="text-2xl font-heading text-primary font-semibold">
          {title}
        </h2>
        <p className="text-sm text-gray-600 font-body">{description}</p>
        <a
          href={href}
          className="inline-flex items-center gap-1 text-secondary hover:underline font-medium"
        >
          VIEW PROJECT <HiOutlineChevronRight />
        </a>
      </div>
    </div>
  );
}
