"use client";

import { motion } from "framer-motion";
import { FaCheckCircle, FaCompass } from "react-icons/fa";

export default function AboutSection({ intro, values, approach }) {
  return (
    <motion.section
      id="about"
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
      {/* Section Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] bg-clip-text text-transparent mb-4">
          About Me
        </h2>
        <div className="w-24 h-1 bg-[#6EE7B7] mx-auto rounded-full" />
      </motion.div>

      {/* Intro */}
      <motion.p
        className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {intro}
      </motion.p>

      {/* Values Section */}
      <motion.div
        className="mt-20"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <h3 className="text-2xl font-bold text-[#3B82F6] mb-6 flex items-center gap-2">
          <FaCheckCircle className="text-[#6EE7B7]" /> Core Values
        </h3>
        <ul className="grid sm:grid-cols-2 gap-5 text-gray-200 text-base pl-4">
          {values.map((value, idx) => (
            <li
              key={idx}
              className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-[#6EE7B7] before:rounded-full"
            >
              {value}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Approach Section */}
      <motion.div
        className="mt-24"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <h3 className="text-2xl font-bold text-[#9333EA] mb-6 flex items-center gap-2">
          <FaCompass className="text-[#6EE7B7]" /> My Approach
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {approach.map((phase, idx) => (
            <motion.div
              key={idx}
              className="bg-[#18181b] rounded-xl p-6 border border-[#232336] shadow-lg hover:shadow-[#6EE7B7]/30 hover:border-[#6EE7B7] transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: idx * 0.15,
                duration: 0.7,
                type: "spring",
              }}
            >
              <h4 className="text-lg font-bold text-[#6EE7B7] mb-2">
                {phase.title}
              </h4>
              <p className="text-gray-400 leading-relaxed text-sm">
                {phase.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
