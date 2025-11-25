"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaStar, FaCode } from "react-icons/fa";
import Image from "next/image";

// tiny 1x1 png as data URI fallback so we don't rely on public files
const FALLBACK_DATA_URI =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=";

function ProjectImage({ src, alt, title }) {
  const [imgSrc, setImgSrc] = useState(() => {
    if (!src || src === "/" || typeof src !== "string")
      return FALLBACK_DATA_URI;
    return src;
  });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="overflow-hidden rounded-xl relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={imgSrc}
        alt={alt || title}
        width={800}
        height={224}
        className="w-full h-72 object-cover object-top group-hover:scale-110 transition-transform duration-800 ease-out"
        onError={() => setImgSrc(FALLBACK_DATA_URI)}
        unoptimized={imgSrc?.startsWith("http") || imgSrc?.startsWith("data:")}
        loading="lazy"
        priority={false}
      />
      {/* Soft overlay effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0e]/60 via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-700 ease-out" />
      {isHovered && (
        <div
          className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0"
          style={{ animation: "softShine 2s ease-in-out infinite" }}
        />
      )}
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
      className="relative min-h-screen w-full py-32 px-6 bg-gradient-to-br from-[#06060a] via-[#0a0a12] to-[#050508] text-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Deep nested background elements */}
      <div
        className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#3B82F6]/15 via-[#3B82F6]/5 to-transparent rounded-full blur-3xl opacity-30"
        style={{ animation: "pulse 10s ease-in-out infinite" }}
      />
      <div
        className="absolute top-1/3 right-0 w-80 h-80 bg-gradient-to-bl from-[#6EE7B7]/12 via-[#6EE7B7]/4 to-transparent rounded-full blur-3xl opacity-25"
        style={{ animation: "pulse 12s ease-in-out infinite" }}
      />
      <div
        className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-t from-[#9333EA]/10 via-[#9333EA]/3 to-transparent rounded-full blur-3xl opacity-20"
        style={{ animation: "pulse 14s ease-in-out infinite" }}
      />
      {/* Additional deep accent layers */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/80 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Premium Section Header */}
        <motion.div
          className="text-center mb-32 space-y-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 text-sm font-bold text-[#6EE7B7] bg-gradient-to-r from-[#6EE7B7]/12 via-[#3B82F6]/8 to-[#6EE7B7]/6 border border-[#6EE7B7]/35 rounded-full backdrop-blur-xl shadow-lg hover:shadow-xl hover:shadow-[#6EE7B7]/15 hover:bg-gradient-to-r hover:from-[#6EE7B7]/18 hover:via-[#3B82F6]/12 hover:to-[#6EE7B7]/10 transition-all duration-400">
              ✨ Portfolio Showcase
            </span>
          </motion.div>

          <motion.h2
            className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] bg-clip-text text-transparent drop-shadow-lg">
              Featured Projects
            </span>
          </motion.h2>

          <motion.div
            className="flex gap-3 justify-center mb-8"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="h-1.5 w-20 bg-gradient-to-r from-[#6EE7B7]/90 via-[#6EE7B7]/70 to-[#3B82F6]/80 rounded-full shadow-lg shadow-[#6EE7B7]/40" />
            <div className="h-1.5 w-10 bg-gradient-to-r from-[#3B82F6]/85 via-[#3B82F6]/65 to-[#9333EA]/75 rounded-full shadow-lg shadow-[#3B82F6]/35" />
            <div className="h-1.5 w-6 bg-gradient-to-r from-[#9333EA]/80 via-[#9333EA]/60 to-[#6EE7B7]/70 rounded-full shadow-lg shadow-[#9333EA]/30" />
          </motion.div>

          <motion.p
            className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Explore a curated collection of innovative projects showcasing
            cutting-edge web technologies, creative design, and seamless user
            experiences.
          </motion.p>
        </motion.div>

        {/* Premium Grid */}
        <div className="grid gap-8 md:gap-10 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="group relative h-full bg-gradient-to-br from-[#12121f]/80 via-[#14141f]/80 to-[#0f0f18]/80 rounded-2xl border border-[#222230] overflow-hidden shadow-2xl hover:border-[#3B82F6]/60 hover:shadow-2xl hover:bg-gradient-to-br hover:from-[#14141f]/95 hover:via-[#15151f]/95 hover:to-[#0f0f1a]/95 transition-all duration-700 ease-out flex flex-col backdrop-blur-lg"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: idx * 0.1,
                duration: 0.7,
                type: "spring",
                stiffness: 80,
              }}
              whileHover={{
                y: -10,
                boxShadow: "0 30px 60px rgba(59, 130, 246, 0.2)",
              }}
            >
              {/* Bright nested gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#6EE7B7]/8 via-[#3B82F6]/5 to-[#9333EA]/6 opacity-0 group-hover:opacity-100 transition-opacity duration-600 ease-out pointer-events-none z-10" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#3B82F6]/5 to-[#000000]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-600 ease-out pointer-events-none z-9" />

              {/* Image Container */}
              <div className="relative w-full h-64 overflow-hidden bg-gradient-to-br from-[#131320] via-[#15151f] to-[#0f0f18] group-hover:from-[#1a1a28] group-hover:via-[#1a1a2a] group-hover:to-[#141420] transition-all duration-700 ease-out">
                <ProjectImage
                  src={project.image}
                  alt={project.title}
                  title={project.title}
                />
              </div>

              {/* Content Section */}
              <div className="flex-1 flex flex-col p-7 sm:p-8 gap-5">
                {/* Title */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-lg sm:text-xl lg:text-xl font-bold text-gray-100 line-clamp-2 group-hover:text-[#6EE7B7] transition-colors duration-500 ease-out">
                      {project.title || "Untitled Project"}
                    </h3>
                    {project.bowmen && (
                      <motion.span
                        className="inline-flex items-center px-3 gap-1.5 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-[#FF6B9D]/20 to-[#C44569]/15 border border-[#FF6B9D]/40 text-[#FF6B9D] whitespace-nowrap"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                      >

                  
                        {/* Text content */}
                        <Image
                          src="/bowmen.png"
                          alt="Bowmen"
                          width={16}
                          height={16}
                          className="object-contain"
                        />
                        <span className="relative z-10">Bowmen marketing</span>
                      </motion.span>
                    )}
                  </div>
                  <motion.div
                    className="h-0.5 w-10 bg-gradient-to-r from-[#6EE7B7]/70 via-[#3B82F6]/60 to-[#9333EA]/50 rounded-full opacity-60 group-hover:opacity-100 group-hover:from-[#6EE7B7]/100 group-hover:via-[#3B82F6]/90 group-hover:to-[#9333EA]/85"
                    initial={{ width: 40 }}
                    whileHover={{ width: 70 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 flex-grow">
                  {project.description ||
                    "A remarkable project showcasing innovative design and technology."}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3 + i * 0.05 }}
                      >
                        <FaStar
                          className={`transition-all duration-400 ${
                            i < (project.rating || 5)
                              ? "text-[#6EE7B7] drop-shadow-sm drop-shadow-[#6EE7B7]/30"
                              : "text-gray-700"
                          }`}
                          size={15}
                        />
                      </motion.div>
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-gray-400">
                    {project.rating || 5}.0
                  </span>
                </div>

                {/* Technologies */}
                {project.technologies?.length > 0 && (
                  <motion.div
                    className="flex flex-wrap gap-2 pt-4 border-t border-[#1a1a26]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <motion.span
                        key={`${tech}-${i}`}
                        className="px-3 py-1 text-xs font-semibold text-[#6EE7B7] bg-gradient-to-r from-[#6EE7B7]/6 to-[#3B82F6]/4 border border-[#6EE7B7]/20 rounded-md hover:bg-gradient-to-r hover:from-[#6EE7B7]/12 hover:to-[#3B82F6]/8 hover:border-[#6EE7B7]/35 transition-all duration-500 ease-out"
                        whileHover={{ scale: 1.05, y: -1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.technologies?.length > 4 && (
                      <span className="px-3 py-1 text-xs font-semibold text-gray-600 bg-gradient-to-r from-[#0d0d15] to-[#0f0f18] border border-[#1a1a26] rounded-md">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </motion.div>
                )}

                {/* Call-to-Action Button */}
                {project.link && (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 px-6 py-3 rounded-lg font-semibold text-sm text-white bg-gradient-to-r from-[#6EE7B7]/90 via-[#3B82F6]/85 to-[#9333EA]/80 shadow-lg shadow-[#3B82F6]/25 hover:shadow-xl hover:shadow-[#6EE7B7]/40 hover:from-[#6EE7B7] hover:via-[#3B82F6] hover:to-[#9333EA] transition-all duration-500 ease-out inline-block w-full text-center"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Project
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
