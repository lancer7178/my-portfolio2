import { motion } from "framer-motion";

export default function AboutSection({ intro, values, approach }) {
  return (
    <motion.section
      className="relative max-w-4xl mx-auto py-20 px-4 bg-[#101014] overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: 'spring' } } }}
      id="about"
    >
      {/* Decorative SVG removed */}
      {/* Animated About SVG removed */}
      <motion.h2
        className="text-4xl font-extrabold mb-8 bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: 'spring' }}
      >
        About
      </motion.h2>
      <p className="text-gray-300 text-lg mb-8">{intro}</p>
      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-3 text-[#3B82F6]">My Values</h3>
        <ul className="list-disc list-inside text-gray-200 space-y-2">
          {values.map((value, idx) => (
            <li key={idx}>{value}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-3 text-[#9333EA]">My Approach</h3>
        <div className="grid sm:grid-cols-3 gap-6">
          {approach.map((phase, idx) => (
            <motion.div
              key={idx}
              className="bg-[#18181b] rounded-xl p-6 border border-[#232336] shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.7, type: 'spring' }}
            >
              <h4 className="text-lg font-bold mb-2 text-[#6EE7B7]">{phase.title}</h4>
              <p className="text-gray-400 text-base">{phase.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
} 