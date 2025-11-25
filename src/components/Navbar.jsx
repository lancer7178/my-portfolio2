"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    icon: <FaGithub />,
    href: "https://github.com/lancer7178",
    label: "GitHub",
  },
  {
    icon: <FaLinkedin />,
    href: "https://linkedin.com/in/abdul-atif-selem-8521a7281",
    label: "LinkedIn",
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const handleScroll = (href, label) => {
    const target = document.querySelector(href === "#" ? "body" : href);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: "smooth",
      });
    }
    setActiveLink(label);
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
    >
      {/* Gradient Background + Backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#05050a]/98 via-[#0a0a14]/95 to-[#0d0d18]/60 backdrop-blur-2xl" />
      {/* Animated Border Glow */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#6EE7B7]/50 to-transparent" />{" "}
      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo / Brand - Desktop */}
        <motion.div
          className="hidden sm:flex items-center group"
          whileHover={{ scale: 1.25, rotate: 8 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <div className="relative">
            {/* Glowing background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#6EE7B7]/50 via-[#3B82F6]/40 to-[#9333EA]/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Logo container */}
            <div className="relative bg-gradient-to-br from-[#0f0f18]/90 to-[#12121f]/70 rounded-2xl p-3 border border-[#6EE7B7]/50 backdrop-blur-md shadow-2xl shadow-[#6EE7B7]/25 group-hover:shadow-[#6EE7B7]/60 group-hover:border-[#6EE7B7]/80 transition-all duration-500">
              <Image
                src="/logo.png"
                alt="Portfolio Logo"
                width={50}
                height={50}
                className="rounded-xl transition-transform duration-400 group-hover:scale-125"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Logo / Brand - Mobile */}
        <motion.div
          className="flex sm:hidden items-center group"
          whileHover={{ scale: 1.15, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <div className="relative">
            {/* Logo container mobile */}
            <div className="relative bg-gradient-to-br from-[#0f0f18]/90 to-[#12121f]/70 rounded-lg p-2 border border-[#6EE7B7]/40 backdrop-blur-md shadow-lg shadow-[#6EE7B7]/20 group-hover:shadow-[#6EE7B7]/40 group-hover:border-[#6EE7B7]/70 transition-all duration-500">
              <Image
                src="/logo.png"
                alt="Portfolio Logo"
                width={38}
                height={38}
                className="rounded-lg transition-transform duration-400 group-hover:scale-110"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1 bg-gradient-to-r from-[#0f0f18]/50 to-[#12121f]/40 rounded-full px-2 py-2 border border-[#6EE7B7]/20 backdrop-blur-md shadow-lg shadow-[#6EE7B7]/5 group/nav">
          {navLinks.map((link, index) => (
            <motion.button
              key={link.label}
              onClick={() => handleScroll(link.href, link.label)}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 group ${
                activeLink === link.label
                  ? "text-[#6EE7B7]"
                  : "text-gray-300 hover:text-gray-100"
              }`}
              whileHover={{ y: -4, scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
            >
              {/* Surprise glow effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#6EE7B7]/0 via-[#3B82F6]/0 to-[#9333EA]/0 rounded-full opacity-0 group-hover:opacity-100"
                initial={{ scale: 0.8, opacity: 0 }}
                whileHover={{ scale: 1.3, opacity: 100 }}
                transition={{ duration: 0.4 }}
              />

              {activeLink === link.label && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#6EE7B7]/30 via-[#3B82F6]/20 to-[#9333EA]/10 rounded-full"
                  layoutId="navHighlight"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Desktop Social Icons */}
        <div className="hidden sm:flex items-center gap-3 group/social">
          {socialLinks.map((social, idx) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-2.5 text-gray-300 rounded-full bg-gradient-to-br from-[#0f0f18]/60 to-[#12121f]/40 border border-[#6EE7B7]/30 hover:text-[#6EE7B7] hover:border-[#6EE7B7]/70 hover:bg-gradient-to-br hover:from-[#6EE7B7]/20 hover:to-[#3B82F6]/10 transition-all duration-400 shadow-lg shadow-[#6EE7B7]/5 hover:shadow-[#6EE7B7]/20 group overflow-hidden"
              whileHover={{ scale: 1.2, y: -5, rotate: 12 }}
              whileTap={{ scale: 0.85 }}
              aria-label={social.label}
            >
              {/* Surprise shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#6EE7B7]/40 to-transparent rounded-full"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />

              {/* Pulsing glow on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#6EE7B7]/0 via-[#3B82F6]/0 to-[#9333EA]/0 rounded-full group-hover:animate-pulse"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(110, 231, 183, 0)",
                    "0 0 20px 10px rgba(110, 231, 183, 0)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              <span className="relative z-10 text-lg">{social.icon}</span>
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2.5 text-gray-300 rounded-full bg-gradient-to-br from-[#0f0f18]/60 to-[#12121f]/40 border border-[#6EE7B7]/30 hover:text-[#6EE7B7] hover:border-[#6EE7B7]/70 hover:bg-gradient-to-br hover:from-[#6EE7B7]/20 hover:to-[#3B82F6]/10 transition-all duration-400 shadow-lg shadow-[#6EE7B7]/5 hover:shadow-[#6EE7B7]/20 group relative overflow-hidden"
          whileHover={{ scale: 1.15, rotate: 15 }}
          whileTap={{ scale: 0.85 }}
          aria-label="Toggle Menu"
        >
          {/* Shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#6EE7B7]/40 to-transparent rounded-full"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.5 }}
          />

          <motion.div
            animate={{ rotate: isMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
            className="relative z-10"
          >
            {isMenuOpen ? (
              <FaTimes className="text-xl" />
            ) : (
              <FaBars className="text-xl" />
            )}
          </motion.div>
        </motion.button>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 mx-3 mt-4 bg-gradient-to-b from-[#0a0a12]/99 via-[#0f0f1a]/98 to-[#0d0d16]/95 rounded-3xl border border-[#6EE7B7]/35 backdrop-blur-3xl shadow-2xl shadow-[#6EE7B7]/20 overflow-hidden"
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Animated gradient top border */}
            <div className="h-0.5 bg-gradient-to-r from-transparent via-[#6EE7B7]/80 to-transparent" />

            <div className="px-5 py-6 flex flex-col gap-3">
              {/* Mobile Nav Links */}
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.label}
                  onClick={() => handleScroll(link.href, link.label)}
                  className={`relative text-left px-5 py-3.5 rounded-xl font-semibold transition-all duration-300 group overflow-hidden ${
                    activeLink === link.label
                      ? "text-[#6EE7B7] bg-gradient-to-r from-[#6EE7B7]/25 via-[#3B82F6]/15 to-[#9333EA]/10 border border-[#6EE7B7]/60 shadow-lg shadow-[#6EE7B7]/20"
                      : "text-gray-200 hover:text-[#6EE7B7] hover:bg-gradient-to-r hover:from-[#6EE7B7]/15 hover:to-[#3B82F6]/8 border border-transparent hover:border-[#6EE7B7]/40 shadow-sm shadow-[#6EE7B7]/5 hover:shadow-[#6EE7B7]/15"
                  }`}
                  initial={{ opacity: 0, x: -25 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.4,
                    type: "spring",
                  }}
                  whileHover={{ x: 6, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Shine effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-[#6EE7B7]/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10 text-base">{link.label}</span>
                </motion.button>
              ))}

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-[#6EE7B7]/30 to-transparent my-2" />

              {/* Mobile Social Links */}
              <motion.div
                className="grid grid-cols-2 gap-3 pt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative p-3.5 text-gray-300 rounded-xl bg-gradient-to-br from-[#0f0f18]/70 via-[#12121f]/60 to-[#0d0d16]/70 border border-[#6EE7B7]/35 hover:text-[#6EE7B7] hover:border-[#6EE7B7]/80 hover:bg-gradient-to-br hover:from-[#6EE7B7]/25 hover:via-[#3B82F6]/15 hover:to-[#9333EA]/10 transition-all duration-500 flex items-center justify-center shadow-lg shadow-[#6EE7B7]/10 hover:shadow-[#6EE7B7]/30 group overflow-hidden"
                    whileHover={{ scale: 1.12, y: -4, rotate: 8 }}
                    whileTap={{ scale: 0.92 }}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55 + index * 0.1, duration: 0.4 }}
                  >
                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-[#6EE7B7]/40 to-transparent rounded-xl"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                    <span className="relative z-10 text-xl">{social.icon}</span>
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
