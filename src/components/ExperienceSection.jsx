"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Avatar SVG fallback styles

const avatarFallbacks = [
  // Style 1: Green-Blue Gradient, Circle
  () => (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="avatarGradient1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#6EE7B7" />
          <stop offset="100%" stopColor="#3B82F6" />
        </radialGradient>
      </defs>
      <circle cx="40" cy="40" r="38" fill="url(#avatarGradient1)" stroke="#fff" strokeWidth="2" />
      <ellipse cx="40" cy="50" rx="18" ry="10" fill="#fff" fillOpacity=".15" />
      <circle cx="40" cy="34" r="12" fill="#fff" fillOpacity=".7" />
      <ellipse cx="40" cy="60" rx="14" ry="6" fill="#fff" fillOpacity=".12" />
    </svg>
  ),
  // Style 2: Purple-Pink Gradient, Hexagon
  () => (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="avatarGradient2" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9333EA" />
          <stop offset="1" stopColor="#F472B6" />
        </linearGradient>
      </defs>
      <polygon points="40,8 72,24 72,56 40,72 8,56 8,24" fill="url(#avatarGradient2)" stroke="#fff" strokeWidth="2" />
      <circle cx="40" cy="40" r="14" fill="#fff" fillOpacity=".7" />
      <ellipse cx="40" cy="56" rx="12" ry="5" fill="#fff" fillOpacity=".12" />
    </svg>
  ),
  // Style 3: Orange-Yellow Gradient, Rounded Square
  () => (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="avatarGradient3" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F59E42" />
          <stop offset="1" stopColor="#FDE68A" />
        </linearGradient>
      </defs>
      <rect x="10" y="10" width="60" height="60" rx="18" fill="url(#avatarGradient3)" stroke="#fff" strokeWidth="2" />
      <circle cx="40" cy="38" r="13" fill="#fff" fillOpacity=".7" />
      <ellipse cx="40" cy="60" rx="11" ry="4" fill="#fff" fillOpacity=".12" />
    </svg>
  ),
  // Style 4: Blue-Teal Gradient, Diamond
  () => (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="avatarGradient4" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38BDF8" />
          <stop offset="1" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      <polygon points="40,8 72,40 40,72 8,40" fill="url(#avatarGradient4)" stroke="#fff" strokeWidth="2" />
      <circle cx="40" cy="40" r="12" fill="#fff" fillOpacity=".7" />
      <ellipse cx="40" cy="60" rx="10" ry="4" fill="#fff" fillOpacity=".12" />
    </svg>
  ),
];

function ExperienceImage({ src, alt, title, idx }) {
  if (!src) {
    const Avatar = avatarFallbacks[idx % avatarFallbacks.length];
    return (
      <div className="w-20 h-20 rounded-full shadow-lg mx-auto mt-6 mb-2 flex items-center justify-center bg-transparent">
        <Avatar />
      </div>
    );
  }
  return (
    <div className="w-20 h-20 rounded-full overflow-hidden bg-[#232336] shadow-lg mx-auto mt-6 mb-2 flex items-center justify-center">
      <Image
        src={src}
        alt={alt}
        width={80}
        height={80}
        className="object-cover w-full h-full"
        unoptimized={src?.startsWith("http")}
      />
    </div>
  );
}

export default function ExperienceSection({ experiences }) {
  return (
    <motion.section
      id="experience"
      className="relative max-w-6xl mx-auto py-24 px-6 md:px-12 bg-[#101014] text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, type: "spring" },
        },
      }}
    >
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] bg-clip-text text-transparent drop-shadow text-left sm:text-center">
          My Work Experience
        </h2>
        <div className="h-1 w-24 bg-[#6EE7B7] mt-4 rounded-full sm:mx-auto" />
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            className="bg-[#18181b] rounded-3xl shadow-xl border border-[#2a2a2f] overflow-hidden flex flex-col h-full group hover:border-[#6EE7B7] hover:shadow-[#6EE7B7]/30 transition-all duration-300"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: idx * 0.1,
              duration: 0.7,
              type: "spring",
            }}
          >
            <ExperienceImage
              src={exp.image}
              alt={exp.title}
              title={exp.title}
              idx={idx}
            />

            <div className="flex-1 flex flex-col px-6 pb-8 pt-4 text-center items-center gap-2">
              <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
              <span className="text-[#6EE7B7] font-medium text-base mb-1">
                {exp.role}
              </span>
              <p className="text-gray-300 text-sm leading-relaxed">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}



