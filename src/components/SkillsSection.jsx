import { motion } from "framer-motion";

export default function SkillsSection({ skills }) {
  return (
    <motion.section
      className="max-w-3xl mx-auto py-16 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: 'spring' } } }}
      id="skills"
    >
      <h2 className="text-3xl font-semibold mb-4 text-[#9333EA]">Skills</h2>
      <ul className="flex flex-wrap gap-4 text-lg text-gray-200">
        {skills.map((skill, idx) => (
          <li key={idx} className="bg-[#232336] px-4 py-2 rounded-full">{skill}</li>
        ))}
      </ul>
    </motion.section>
  );
} 