"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRegCopy, FaCheck } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function ContactSection({
  email = "abdlatefkhatib@email.com",
  cvLink = "/public/AbdulatifSelemResume.pdf",
}) {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_pzh78vj",
        "template_g48ufwr",
        form.current,
        "-vAphwlP-xaTdFksd"
      )
      .then(
        () => {
          setIsLoading(false);
          setSubmitted(true);
          form.current.reset();
          setTimeout(() => setSubmitted(false), 3000);
        },
        () => {
          setIsLoading(false);
          alert("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <motion.section
      id="contact"
      className="relative max-w-3xl mx-auto py-24 px-6 bg-[#101014] text-white"
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
      {/* Header */}
      <motion.div
        className="text-center mb-16 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] bg-clip-text text-transparent">
          Contact Me
        </h2>
        <div className="h-1 w-24 bg-[#6EE7B7] mt-4 mx-auto rounded-full shadow-md" />
        <p className="mt-6 text-gray-300 text-lg leading-relaxed">
          Ready to elevate your brand or start a new project?
          <br className="hidden sm:block" />
          Let’s connect and build something amazing together.
        </p>
      </motion.div>

      {/* Card */}
      <motion.div
        className="relative z-10 bg-white/5 backdrop-blur-xl rounded-3xl shadow-xl border border-white/10 p-8 flex flex-col gap-8 transition-all duration-300"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring" }}
      >
        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-start">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleCopy}
            className="flex items-center gap-2 px-5 py-2.5 text-sm rounded-full bg-[#18181b] border border-[#232336] text-white hover:bg-[#232336] transition-colors"
          >
            {copied ? (
              <FaCheck className="text-[#6EE7B7] animate-bounce" />
            ) : (
              <FaRegCopy />
            )}
            {copied ? "Email Copied!" : "Copy my email"}
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href={cvLink}
            download
            className="px-5 py-2.5 text-sm rounded-full bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] text-black font-bold shadow hover:opacity-90 transition"
          >
            Download CV
          </motion.a>
        </div>

        {/* Form */}
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="flex-1 px-4 py-3 rounded bg-[#18181b] border border-[#232336] text-white placeholder-gray-500 focus:ring-2 focus:ring-[#6EE7B7] outline-none"
            />
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="flex-1 px-4 py-3 rounded bg-[#18181b] border border-[#232336] text-white placeholder-gray-500 focus:ring-2 focus:ring-[#6EE7B7] outline-none"
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="px-4 py-3 rounded bg-[#18181b] border border-[#232336] text-white placeholder-gray-500 focus:ring-2 focus:ring-[#6EE7B7] outline-none"
          ></textarea>

          <motion.button
            type="submit"
            disabled={isLoading}
            className={`relative bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] text-black font-bold py-3 rounded-md text-lg shadow transition-all duration-300 ${
              isLoading ? "opacity-70 cursor-not-allowed" : "hover:opacity-90"
            }`}
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: isLoading ? 1 : 1.04 }}
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-2">
                <span className="w-4 h-4 border-2 border-t-transparent border-black rounded-full animate-spin" />
                Sending...
              </div>
            ) : (
              "Send Message"
            )}
          </motion.button>

          <AnimatePresence>
            {submitted && (
              <motion.div
                className="text-[#6EE7B7] text-center font-medium mt-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                ✅ Thank you! Your message was sent successfully.
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </motion.div>
    </motion.section>
  );
}
