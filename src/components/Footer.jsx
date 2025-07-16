import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer({ year, name }) {
  return (
    <motion.footer
      className="relative text-center py-8 text-gray-500 text-base bg-[#101014] flex flex-col items-center gap-2 overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, type: 'spring' }}
    >
      {/* Decorative SVG removed */}
      {/* <img src="/b5.svg" ... /> removed */}
      <div className="flex gap-4 justify-center mb-2">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-[#6EE7B7] text-xl"><FaGithub /></a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-[#6EE7B7] text-xl"><FaLinkedin /></a>
      </div>
      <div className="z-10">
        Copyright © {year} {name} | All rights reserved.
      </div>
    </motion.footer>
  );
} 