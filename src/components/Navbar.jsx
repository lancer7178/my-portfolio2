"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: <FaGithub />, href: "https://github.com/yourusername", label: "GitHub" },
  { icon: <FaLinkedin />, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (href) => {
    const target = document.querySelector(href === "#" ? "body" : href);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 bg-[#101014]/80 backdrop-blur-md border-b border-[#232336] shadow-md"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: "spring" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Desktop Nav */}
        <div className="hidden sm:flex gap-6 items-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-[#6EE7B7] transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                handleScroll(link.href);
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Social Icons (hidden on mobile) */}
        <div className="hidden sm:flex gap-4 text-xl items-center">
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#6EE7B7]"
              aria-label={social.label}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="text-gray-300 text-2xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="sm:hidden bg-[#18181b] border-t border-[#232336] px-6 py-4 flex flex-col gap-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(link.href);
                }}
                className="text-gray-200 font-medium hover:text-[#6EE7B7] transition"
              >
                {link.label}
              </a>
            ))}

            <div className="flex gap-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#6EE7B7] text-xl"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
