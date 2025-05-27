"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const linkStyle = (path) =>
    `block px-4 py-2 text-sm ${
      pathname === path ? "font-bold underline" : "opacity-80"
    }`;

  return (
    <nav className="sticky top-0 z-50 min-h-[6vh] w-full flex justify-between items-center px-4 py-2 bg-white text-primary border-b border-muted shadow-md">
      <Link className="text-lg font-bold" href="/">
        MyPortfolio
      </Link>

      {/* Hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-2xl"
        aria-label="Toggle Menu"
      >
        <GiHamburgerMenu />
      </button>

      {/* Desktop Nav */}
      <div className="hidden md:flex justify-center gap-6 items-center">
        <Link href="/about" className={linkStyle("/about")}>
          About
        </Link>
        <Link href="/projects" className={linkStyle("/projects")}>
          Projects
        </Link>
        <Link href="/contact" className={linkStyle("/contact")}>
          Contact
        </Link>
        <a
          href="https://github.com/Alex-Spiegel"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/alexander-schaz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full z-40 flex flex-col md:hidden  text-primary bg-white border-t border-muted shadow-md">
          <Link
            href="/about"
            className={linkStyle("/about")}
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/projects"
            className={linkStyle("/projects")}
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className={linkStyle("/contact")}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
          <div className="flex gap-4 px-4 py-2">
            <a
              href="https://github.com/Alex-Spiegel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/alexander-schaz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
