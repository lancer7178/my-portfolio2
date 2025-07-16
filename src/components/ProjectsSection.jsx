"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaStar, FaCode } from "react-icons/fa";
import Image from "next/image";

// صورة احتياطية
const fallbackImage = "/fallback.png"; // ضع صورة اسمها fallback.png في /public

function ProjectImage({ src, alt, title }) {
  const [hasError, setHasError] = useState(false);

  return (
    <Image
      src={hasError || !src ? fallbackImage : src}
      alt={alt || title}
      width={800}
      height={224}
      className="w-full h-72 object-cover object-top rounded-t-3xl group-hover:scale-105 transition-transform duration-500"
      onError={() => setHasError(true)}
      unoptimized={src?.startsWith("http")}
    />
  );
}

export default function ProjectsSection({ projects = [] }) {
  if (!Array.isArray(projects) || projects.length === 0) {
    return (
      <section className="py-24 text-center text-gray-400">
        No projects to display.
      </section>
    );
  }

  return (
    <motion.section
      id="projects"
      className="relative max-w-6xl mx-auto py-24 px-4 bg-[#101014]"
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
      <h2 className="text-4xl font-extrabold mb-12 text-center text-white">
        A small selection of recent projects
      </h2>

      <div className="grid gap-14 sm:grid-cols-2">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="relative bg-[#18181b] rounded-3xl shadow-xl border border-[#232336] overflow-hidden flex flex-col h-full group"
            whileHover={{
              scale: 1.03,
              transition: { type: "spring", stiffness: 200 },
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: idx * 0.1,
              duration: 0.6,
              type: "spring",
            }}
          >
            <ProjectImage src={project.image} alt={project.title} title={project.title} />

            <div className="flex-1 flex flex-col p-8 gap-4">
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              <p className="text-gray-300 text-base flex-1">{project.description}</p>

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

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto px-6 py-2 rounded-full bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] text-black font-bold shadow-xl hover:scale-105 transition-all text-base  border-white/20 inline-block w-fit"
                >
                  Visit
                </a>
              )}

              {project.technologies?.length > 0 && (
                <div className="flex flex-wrap items-center gap-2 mt-6">
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
