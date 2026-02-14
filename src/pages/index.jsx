import localFont from "next/font/local";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import TechStackSection from "../components/TechStackSection";
import ExperienceSection from "../components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const aboutIntro =
  "I prioritize client collaboration, fostering open communication. I'm very flexible with time zone communications and constantly try to improve. Tech enthusiast with a passion for development.";
const aboutValues = [
  "Open communication and collaboration",
  "Flexibility with time zones and schedules",
  "Continuous improvement and learning",
  "Delivering seamless, user-friendly experiences",
];
const aboutApproach = [
  {
    title: "Staying Updated with Industry Trends",
    description:
      "I continuously explore the latest trends in web development, UI/UX design, and front-end technologies. I actively engage with the tech community and take online courses to keep my skills sharp and relevant.",
  },
  {
    title: "Development & Progress Update",
    description:
      "Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way.",
  },
  {
    title: "Proactive Learning and Exploration",
    description:
      "I actively explore new tools and frameworks, mastering Figma for design or diving deeper into TypeScript for better code quality. I ensure I can adapt to any new challenge and build versatile, high-quality solutions.",
  },
];
const projects = [
  {
    title: "Coza Store",
    description:
      "A modern e-commerce platform built with HTML, CSS, and Bootstrap, featuring a sleek interface and smooth user interactions with jQuery. Offers fast browsing, secure checkout, and an intuitive shopping experience for customers.",
    image: "/CozaStore.png",
    link: "https://lancer7178.github.io/Bdaya-e-commerce/",
    rating: 5,
    technologies: ["html", "css", "bootstrap", "js", "Jquery"],
    bowmen: false,
  },
  {
    title: "AniWatched",
    description:
      "A minimalist web application for anime enthusiasts to track watched shows. Built with Tailwind CSS and jQuery, it prioritizes simplicity and speed, providing a distraction-free interface for managing personal anime libraries.",
    image: "/Ani.png",
    link: "https://lancer7178.github.io/Ani-watched/",
    rating: 5,
    technologies: [
      "html",
      "css",
      "Tailwind CSS",
      "bootstrap",
      "javaScript",
      "Jquery",
    ],
    bowmen: false,
  },
  {
    title: "Dr. Abdel-Moneim's Clinic",
    description:
      "A professional mental health clinic website providing comprehensive information about services, treatment options, and appointment booking. Built with React and Next.js, featuring smooth animations and bilingual support for accessibility.",
    image: "/Dr.abdelMonem.png",
    link: "https://dr-abdel-moneim.vercel.app/",
    rating: 5,
    technologies: [
      "react",
      "next.js",
      "Tailwind CSS",
      "framer-motion",
      "WordPress",
      "REST API",
    ],
    bowmen: true,
  },
  {
    title: "Medizen Medical Website",
    description:
      "A responsive medical website powered by WordPress REST API, delivering real-time healthcare services, detailed treatments, and bilingual support. Features smooth animations and a modern design for seamless user engagement.",
    image: "/medizen.png",
    link: "https://medizenegypt.com",
    rating: 5,
    technologies: [
      "react",
      "next.js",
      "Tailwind CSS",
      "framer-motion",
      "WordPress",
      "REST API",
    ],
    bowmen: true,
  },
  {
    title: "Hayah Ava Healthcare",
    description:
      "A sleek healthcare platform integrated with WordPress, offering real-time medical services, appointment booking, and comprehensive health information. Built with modern animations and bilingual interface for better accessibility.",
    image: "/hayah.png",
    link: "https://hayah-av.vercel.app",
    rating: 5,
    technologies: [
      "react",
      "next.js",
      "Tailwind CSS",
      "framer-motion",
      "WordPress",
      "REST API",
    ],
    bowmen: true,
  },
  {
    title: "Next Travel",
    description:
      "A comprehensive travel platform connecting travelers with beautiful destinations and personalized experiences. Features real-time booking, travel recommendations, and an intuitive interface powered by modern web technologies.",
    image: "/next.png",
    link: "https://next-travel-puce.vercel.app",
    rating: 5,
    technologies: [
      "react",
      "next.js",
      "Tailwind CSS",
      "framer-motion",
      "strapi",
      "REST API",
    ],
    bowmen: true,
  },
  {
    title: "Renova",
    description:
      "Renova Clinic is a Cairo-based plastic surgery center offering advanced aesthetic treatments, including body contouring, facelifts, and scar revision, in a modern medical setting. ",
    image: "/renova.png",
    link: "https://dr-amirelboghdady.com",
    rating: 5,
    technologies: ["html", "Tailwind CSS", "php", "wordpress"],
    bowmen: true,
  },
  {
    title: "Neuro Bridge",
    description:
      "An innovative healthcare platform focusing on neurology and wellness services. Built with modern tech stack, it provides detailed information about neurological treatments, specialist consultations, and patient management.",
    image: "/neuro.png",
    link: "https://neuro-bridge-bixz.vercel.app",
    rating: 5,
    technologies: [
      "react",
      "next.js",
      "Tailwind CSS",
      "framer-motion",
      "firebase",
    ],
    bowmen: false,
  },
  {
    title: "Nova Space",
    description:
      "An immersive space exploration website featuring stunning 3D visuals and interactive elements. Powered by Three.js, it educates users about universe exploration and astronomy with smooth animations and captivating design.",
    image: "/nova2.png",
    link: "https://nova-space-mu.vercel.app",
    rating: 5,
    technologies: [
      "react",
      "next.js",
      "Tailwind CSS",
      "framer-motion",
      "Three.js",
    ],
    bowmen: false,
  },
  {
    title: "Voyage AI",
    description:
      "An AI-powered travel planning platform offering personalized itinerary recommendations, real-time travel assistance, and destination insights. Designed with intuitive navigation to revolutionize how travelers explore the world.",
    image: "/voyageai.png",
    link: "https://voyage-ai-five.vercel.app",
    rating: 5,
    technologies: [
      "react",
      "next.js",
      "Tailwind CSS",
      "framer-motion",
      "huggingface",
    ],
    bowmen: false,
  },
];
const skills = [
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Bootstrap",
  "JavaScript",
  "jQuery",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "GitHub",
  "RESTful APIs",
  "WordPress",
  "C++",
  "MySQL",
  "Figma",
  "UI/UX Design",
  "Responsive Design",
  "Problem Solving",
  "SEO Basics",
  "Continuous Learning",
  "Creative Thinking",
  "Component Libraries",
  "Animation and Motion Design",
];
const experiences = [
  {
    title: "Frontend Engineer Intern",
    role: "Frontend Engineer Intern",
    description:
      "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
  },
  {
    title: "UseFigma & Design",
    role: "UI/UX Designer",
    description:
      "Leveraging Figma for UI/UX design, I created responsive and user-centric layouts, focusing on simplicity and functionality. My work involved wireframing, prototyping, and visual design to bring ideas to life with an emphasis on user experience.",
  },
  {
    title: "Idea Generation & Creativity",
    role: "Creative Contributor",
    description:
      "I played an active role in brainstorming sessions, where I generated innovative ideas and conceptualized creative solutions for projects. Whether it was for e-commerce platforms or mental health clinics, I ensured that every design and feature aligned with the client’s vision.",
  },
  {
    title: "GitHub & Git",
    role: "Version Control Collaborator",
    description:
      "I utilized Git and GitHub for version control, collaborating with team members and ensuring efficient code management and integration. Regular commits, branching, and pull requests helped maintain a smooth workflow across projects.",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
      </Head>

      <div
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-[#101014] text-white font-[family-name:var(--font-geist-sans)] transition-colors duration-500 pt-16`}
      >
        <HeroSection
          name="Abdulatif"
          subtitle="A passionate Front-End Developer crafting beautiful web experiences."
          logoSrc="/logo.svg"
          buttonText="Show my work"
          onButtonClick={() => {
            const target = document.querySelector("#projects");
            if (target) {
              window.scrollTo({
                top: target.offsetTop - 60,
                behavior: "smooth",
              });
            }
          }}
        />
        <AboutSection
          intro={aboutIntro}
          values={aboutValues}
          approach={aboutApproach}
        />
        <TechStackSection />
        <ProjectsSection projects={projects} />
        <SkillsSection skills={skills} />
        <ExperienceSection experiences={experiences} />
        <ContactSection
          email="abdlatefkhatib@email.com"
          cvLink="/public/AbdulatifSelemResume2.pdf"
        />
      </div>
    </>
  );
}
