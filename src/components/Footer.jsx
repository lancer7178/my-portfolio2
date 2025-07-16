import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer({ year, name }) {
  return (
    <motion.footer
      className="relative w-full text-center py-10 bg-[#101014] text-sm text-gray-400 flex flex-col items-center space-y-4 overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, type: "spring" }}
    >
      {/* Social Links */}
      <div className="flex items-center gap-6 text-xl">
        <a
          href="https://github.com/lancer7178"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform hover:scale-110 hover:text-white"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/abdul-atif-selem-8521a7281"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform hover:scale-110 hover:text-white"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>

      {/* Copyright */}
      <div className="text-xs sm:text-sm text-gray-500">
        © {year} {name} — All rights reserved.
      </div>
    </motion.footer>
  );
}
