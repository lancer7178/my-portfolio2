import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection({ name, subtitle, logoSrc, buttonText, onButtonClick }) {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[80vh] gap-6 text-center px-4 bg-[#101014] overflow-hidden">
      {/* Decorative SVG removed */}
      {/* <img src="/b1.svg" ... /> removed */}
      {/* Animated Hero SVG removed */}
      {/* <motion.img src="/hero-img.svg" ... /> removed */}
      <motion.div
        className="relative z-10 flex flex-col items-center gap-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring" }}
      >
        {/* Logo image removed */}
        {/* <Image className="dark:invert mb-4" src={logoSrc} ... /> removed */}
        <h1 className="text-5xl sm:text-7xl font-extrabold text-white mb-2 leading-tight">
          Dynamic Web Magic with <span className="text-[#3B82F6]">Next.js</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 max-w-2xl mx-auto mb-2 font-medium">
          {subtitle}
        </p>
        <p className="text-2xl sm:text-3xl text-white font-semibold mb-6">
          Hi! I&#39;m {name}, a Front-end Developer.
        </p>
        <motion.button
          className="px-10 py-4 rounded-full bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] text-black font-extrabold shadow-xl hover:scale-105 hover:shadow-2xl transition-all text-lg tracking-wide  border-white/20"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.98 }}
          onClick={onButtonClick}
        >
          {buttonText}
        </motion.button>
      </motion.div>
    </section>
  );
} 