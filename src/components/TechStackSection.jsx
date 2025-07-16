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
  { name: "GitHub", icon: <FaGithub className="text-[#ffffff]" /> },
];



export default function TechStackSection({ techStack = defaultStack }) {
  return (
    <motion.section
      className="relative max-w-4xl mx-auto py-20 px-4 bg-[#101014] overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: 'spring' } } }}
      id="techstack"
    >
      {/* Animated Tech SVG removed */}
      {/* <motion.img src="/tech-img.svg" ... /> removed */}
      {/* Decorative SVG removed */}
      {/* <img src="/grid.svg" ... /> removed */}
      <h2 className="text-4xl font-extrabold mb-8 text-white">My Tech Stack</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
        {techStack.map((tech, idx) => (
          <motion.div
            key={tech.name}
            className="flex flex-col items-center gap-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.7, type: 'spring' }}
          >
            <span className="text-5xl">{tech.icon}</span>
            <span className="text-base text-gray-200 mt-2">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
} 