import { motion } from "framer-motion";

export default function SkillsSection({ skills }) {
  return (
    <motion.section
      id="skills"
      className="py-24 px-4 sm:px-8 lg:px-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, type: "spring", staggerChildren: 0.05 },
        },
      }}
    >
      {/* Section Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] bg-clip-text text-transparent mb-4">
          My Skillset
        </h2>
        <div className="w-24 h-1 bg-[#6EE7B7] mx-auto rounded-full" />
      </motion.div>

      {/* Optional Description */}
      <motion.p
        className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        A refined collection of technologies and tools I master to craft modern,
        high-quality user experiences.
      </motion.p>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            className="rounded-xl bg-[#18181b] hover:bg-[#1b1b29] transition-colors shadow-md px-6 py-4 text-center text-gray-100 font-semibold text-base sm:text-lg hover:shadow-lg hover:scale-105 duration-300"
            whileHover={{ scale: 1.06 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
