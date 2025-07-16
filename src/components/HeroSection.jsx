"use client";

import { motion } from "framer-motion";

export default function HeroSection({
  name = "Abdulatif",
  subtitle = "I create responsive, high-performing web experiences with clean code and modern design.",
  buttonText = "View My Work",
  onButtonClick,
}) {
  return (
    <section className="relative flex items-center justify-center min-h-[90vh] px-6 bg-[#101014] text-center overflow-hidden">
      {/* Glowing Background Decorations */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#3B82F6] blur-[140px] opacity-20 rounded-full z-0" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-[#6EE7B7] blur-[160px] opacity-10 rounded-full z-0" />

      <motion.div
        className="relative z-10 flex flex-col items-center gap-6 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight text-white tracking-tight">
          Elevate Your Web Presence with{" "}
          <span className="bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] bg-clip-text text-transparent">
            Next.js
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 font-medium max-w-2xl">
          {subtitle}
        </p>

        <p className="text-2xl sm:text-3xl text-white font-semibold">
          Hi! I’m {name}, a Front-End Developer.
        </p>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
          onClick={onButtonClick}
          className="mt-4 px-8 py-3 sm:px-10 sm:py-4 rounded-full bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] text-black font-extrabold shadow-lg hover:shadow-2xl transition-all text-base sm:text-lg tracking-wide"
        >
          {buttonText}
        </motion.button>
      </motion.div>
    </section>
  );
}
