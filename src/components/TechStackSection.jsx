import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaFigma,
  FaReact,
  FaWordpress,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const defaultStack = [
  { name: "HTML", icon: <FaHtml5 className="text-[#e34c26]" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-[#1572b6]" /> },
  { name: "JavaScript", icon: <FaJs className="text-[#f7df1e]" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-[#38bdf8]" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-[#7952b3]" /> },
  { name: "Figma", icon: <FaFigma className="text-[#a259ff]" /> },
  { name: "React.js", icon: <FaReact className="text-[#61dafb]" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "WordPress", icon: <FaWordpress className="text-[#21759b]" /> },
  { name: "Git", icon: <FaGitAlt className="text-[#f34f29]" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
];

export default function TechStackSection({ techStack = defaultStack }) {
  return (
    <motion.section
      id="techstack"
      className="relative max-w-6xl mx-auto py-24 px-4 bg-[#101014] overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: 'spring' } }
      }}
    >
      <div className="text-center mb-14">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] bg-clip-text text-transparent">
          My Tech Stack
        </h2>
        <div className="h-1 w-20 bg-[#6EE7B7] mt-4 mx-auto rounded-full" />
        <p className="text-gray-400 text-lg mt-4 max-w-xl mx-auto">
          A collection of technologies I work with to design, develop, and deploy high-quality solutions.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 place-items-center">
        {techStack.map((tech, idx) => (
          <motion.div
            key={tech.name}
            className="w-full max-w-[140px] flex flex-col items-center justify-center text-center bg-[#18181b] p-5 rounded-xl border border-[#232336] shadow-md hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.08, duration: 0.6, type: "spring" }}
          >
            <div className="text-5xl">{tech.icon}</div>
            <span className="mt-3 text-sm text-gray-200 font-medium">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
