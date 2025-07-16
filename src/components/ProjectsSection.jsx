"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaStar, FaCode } from "react-icons/fa";
import Image from "next/image";

const fallbackImage = "/fallback.png";

function ProjectImage({ src, alt, title }) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="overflow-hidden rounded-t-3xl">
      <Image
        src={hasError || !src ? fallbackImage : src}
        alt={alt || title}
        width={800}
        height={224}
        className="w-full h-72 object-cover object-top group-hover:scale-110 transition-transform duration-700"
        onError={() => setHasError(true)}
        unoptimized={src?.startsWith("http")}
      />
    </div>
  );
}

export default function ProjectsSection({ projects = [] }) {
  if (!Array.isArray(projects) || projects.length === 0) {
    return (
      <section className="py-24 text-center text-gray-400 bg-[#101014]">
        No projects to display.
      </section>
    );
  }

  return (
    <motion.section
      id="projects"
      className="relative max-w-6xl mx-auto py-24 px-6 bg-[#101014] text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" },
        },
      }}
    >
      {/* Section Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="h-1 w-24 bg-[#6EE7B7] mt-4 mx-auto rounded-full shadow-md" />
        <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
          A curated selection of projects demonstrating creativity, functionality,
          and modern web technologies.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid gap-14 sm:grid-cols-2">
        {projects.map((project, idx) => (
        <motion.div
  key={idx}
  className="relative bg-[#18181b] rounded-3xl shadow-2xl border border-[#232336] overflow-hidden flex flex-col h-full group transition-all"
  whileHover={{ scale: 1.03 }}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    delay: idx * 0.1,
    duration: 0.6,
    type: "spring",
  }}
>
  <ProjectImage src={project.image} alt={project.title} title={project.title} />

  <div className="flex-1 flex flex-col px-6 sm:px-8 py-6 sm:py-8 gap-5">
    <h3 className="text-2xl font-bold text-white">{project.title}</h3>

    <p className="text-gray-300 text-base leading-relaxed">{project.description}</p>

    {/* Rating */}
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <FaStar
          key={i}
          className={
            i < (project.rating || 5)
              ? "text-[#6EE7B7]"
              : "text-gray-600"
          }
        />
      ))}
    </div>

    {/* Visit Button */}
    {project.link && (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 px-6 py-2 rounded-full bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] text-black font-bold text-sm shadow-md hover:scale-105 transition-transform w-fit"
      >
        Visit
      </a>
    )}

    {/* Technologies */}
    {project.technologies?.length > 0 && (
      <div className="flex flex-wrap items-center gap-2 mt-5 pt-3 border-t border-[#232336]">
        <FaCode className="text-[#6EE7B7] text-base mr-1" />
        {project.technologies.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="px-3 py-1 rounded-full bg-[#232336] text-xs text-[#6EE7B7] font-semibold border border-[#383850] shadow-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    )}
  </div>
</motion.div>

        ))}
      </div>
    </motion.section>
  );
}
