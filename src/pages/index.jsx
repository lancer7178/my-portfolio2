import localFont from "next/font/local";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
// import SkillsSection from "../components/SkillsSection";
import ContactSection from "../components/ContactSection";
import TechStackSection from "../components/TechStackSection";
import ExperienceSection from "../components/ExperienceSection";
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
      "Coza Store is an online shopping platform designed to provide a seamless, user-friendly experience for customers. With a sleek, modern interface, this app is focused on delivering a fast and secure shopping experience, enabling users to browse, search, and purchase products with ease.",
    image: "/CozaStore.png", // Place this image in public/
    link: "https://lancer7178.github.io/Bdaya-e-commerce/",
    rating: 5,
    technologies: ["html", "css", "bootstrap", "js", "Jquery"],
  },
  {
    title: "AniWatched",
    description:
      "AniWatched is a sleek and minimalistic web app designed for anime enthusiasts to track the shows they’ve watched. Built as a personal project, this platform focuses on simplicity, speed, and user-friendliness without the distractions of bloated features.",
    image: "/Ani.png", // Place this image in public/
    link: "https://lancer7178.github.io/Ani-watched/",
    rating: 5,
    technologies: [
      "html",
      "css",
      "Tailwind.js",
      "bootstrap",
      "Tailwind CSS",
      "JS",
      "Jquery",
    ],
  },
  {
    title: "Dr. Abdel-Moneim's Clinic",
    description:
      "A compassionate, professional space for individuals seeking mental health support. Designed with ease of access in mind, the site offers comprehensive information about available services, treatment options, and ways to contact the clinic for appointments and consultations.",
    image: "/Dr.abdelMonem.png", // Place this image in public/
    link: "https://dr-abdel-moneim.vercel.app/  ",
    rating: 5,
    technologies: [
      "react",
      "next.js",
      "Tailwind CSS",
      "framer-motion",
      "WordPress",
      "REST API",
    ],
  },
  {
    title: "Hayah Ava Healthcare",
    description:
      "A modern healthcare website powered by WordPress REST API, featuring dynamic medical products, career opportunities, and a fully responsive, bilingual design with smooth animations and real-time content updates.",
    image: "/hayah-av.png", // Place this image in public/
    link: "https://hayah-av.vercel.app/",
    rating: 5,
    technologies: [
      "react",
      "next.js",
      "Tailwind CSS",
      "framer-motion",
      "WordPress",
      "REST API",
    ],
  },
  {
    title: "Medizen Medical Website",
    description:
      "A sleek and responsive medical website powered by WordPress REST API, offering real-time content, detailed healthcare services, and bilingual support — all wrapped in a clean, animated user experience.",
    image: "/medizen.png", // Place this image in public/
    link: "https://medizen-snowy.vercel.app/",
    rating: 5,
    technologies: [
      "react",
      "next.js",
      "Tailwind CSS",
      "framer-motion",
      "WordPress",
      "REST API",
    ],
  },
];
const skills = [
  "React",
  "Next.js",
  "Tailwind CSS",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "Figma",
  "Git",
  "GitHub",
  "UI/UX Design",
  "Responsive Design",
  "Web Development",
  "Front-End Development",
  "Problem Solving",
  "Collaboration",
  "Communication",
  "Agile Methodologies",
  "Version Control",
  "Cross-Browser Compatibility",
  "Performance Optimization",
  "Accessibility (a11y)",
  "RESTful APIs",
  "SEO Basics",
  "Testing and Debugging",
  "Code Review",
  "Continuous Learning",
  "Creative Thinking",
  "Time Management",
  "Attention to Detail",
  "User-Centered Design",
  "Prototyping",
  "Wireframing",
  "Design Systems",
  "Component Libraries",
  "Animation and Motion Design",
  "Cross-Functional Collaboration",
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

        {/* <SkillsSection skills={skills} /> */}
        <ExperienceSection experiences={experiences} />
        <ContactSection
          email="abdulatif@email.com"
          cvLink="/AbdulatifSelemResume.pdf"
        />
      </div>
    </>
  );
}
