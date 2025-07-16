"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaRegCopy, FaCheck } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function ContactSection({
  email = "your@email.com",
  cvLink = "/cv.pdf",
}) {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const form = useRef();

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pzh78vj", // ✅ Service ID
        "template_g48ufwr", // ✅ Template ID
        form.current,
        "-vAphwlP-xaTdFksd" // ✅ Public Key (User ID)
      )
      .then(
        () => {
          setSubmitted(true);
          form.current.reset();
          setTimeout(() => setSubmitted(false), 3000);
        },
        () => {
          alert("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <motion.section
      className="relative max-w-2xl mx-auto py-24 px-4 bg-[#101014] overflow-visible"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: "spring" } },
      }}
      id="contact"
    >
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-2 tracking-tight">Contact</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] rounded-full mb-4" />
        <p className="text-gray-300 text-lg mb-2 text-center">
          Ready to take your digital presence to the next level?
        </p>
        <p className="text-gray-400 text-base mb-4 text-center">
          Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
        </p>
      </div>

      <motion.div
        className="relative z-10 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-8 flex flex-col gap-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring" }}
      >
        {/* Copy Email + Download CV */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleCopy}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#18181b] border border-[#232336] text-white hover:bg-[#232336] transition-colors"
          >
            {copied ? (
              <FaCheck className="text-[#6EE7B7] animate-bounce" />
            ) : (
              <FaRegCopy className="transition-transform group-hover:scale-110" />
            )}
            Copy my email address
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            href={cvLink}
            download
            className="px-4 py-2 rounded-full bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] text-black font-bold shadow hover:opacity-90 transition-opacity"
          >
            Get My CV
          </motion.a>
        </div>

        {/* Contact Form */}
        <form ref={form} className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              className="flex-1 bg-[#18181b] border border-[#232336] rounded px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#6EE7B7]"
              required
            />
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              className="flex-1 bg-[#18181b] border border-[#232336] rounded px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#6EE7B7]"
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            className="bg-[#18181b] border border-[#232336] rounded px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#6EE7B7]"
            rows={5}
            required
          />

          <motion.button
            type="submit"
            className="bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] text-black font-bold py-3 rounded shadow hover:opacity-90 transition-opacity text-lg"
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.04 }}
          >
            Send Message
          </motion.button>

          {submitted && (
            <motion.div
              className="text-[#6EE7B7] text-center mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              ✅ Thank you! Your message has been sent.
            </motion.div>
          )}
        </form>
      </motion.div>
    </motion.section>
  );
}
