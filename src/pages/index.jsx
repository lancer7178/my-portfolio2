import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import ExperienceSection from "../components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import UiUxFigmaSection from "../components/UiUxFigmaSection";
import Head from "next/head";

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
    title: "Bowmen plus",
    description:
      "A cutting-edge headless WordPress application. Built with React and Next.js, it merges sophisticated animations with a utility-first design to redefine modern web browsing.",
    image: "/bowmenplus.png",
    link: "https://bowmenplus.com",
    rating: 5,
    technologies: [
      "react",
      "next.js",
      "Tailwind CSS",
        "WordPress",
      "REST API",
      "framer-motion",
    
    ],
    bowmen: true,
  },
  {
    title: "Underground Heritage",
    description:
      "A premium headless e-commerce experience designed to showcase cultural and heritage-inspired products with a focus on high-performance retail and immersive storytelling.",
    image: "/underground-heritage.png",
    link: "https://undergroun-heritage-e-commerce-s.vercel.app/",
    rating: 5,
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "WooCommerce REST API",
      "Framer Motion",
      "Stripe",
    ],
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
      "firebase",
      "framer-motion",
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
      "Three.js",
      "framer-motion",
      
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
      "huggingface",
      "framer-motion",
      
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
];
const figmaProjects = [
  {
    title: "Ventura",
    type: "Figma Design Project",
    description:
      "A complete UI/UX design crafted in Figma with a clean visual direction, structured layout system, and polished user flow.",
    image: "/ventura.png",
    link: "https://www.figma.com/design/bPLCosPrx27QunpXHMB6VL/Ventura?node-id=0-1&t=rOnJ6MV8Rl3gRSAl-1",
    embedUrl:
      "https://embed.figma.com/design/bPLCosPrx27QunpXHMB6VL/Ventura?node-id=0-1&embed-host=share",
  },
  {
    title: "SocialGram",
    type: "Social App UI",
    description:
      "A social media app interface designed in Figma, focused on clean content feeds, profile interactions, and intuitive mobile navigation.",
    image: "/socialgram.png",
    link: "https://www.figma.com/design/o0OAb1LyQMwpeiNvmdqe6I/SocialGram?node-id=0-1",
    embedUrl:
      "https://embed.figma.com/design/o0OAb1LyQMwpeiNvmdqe6I/SocialGram?node-id=0-1&embed-host=share",
  },
  {
    title: "Untitled-UI",
    type: "UI Design System",
    description:
      "A comprehensive UI design system with reusable components, typography scales, and color tokens for consistent design implementation across projects.",
    image: "/untitled.png",
    link: "https://www.figma.com/design/1awMsXZ0PImopkseWDuttI/Untitled-UI?node-id=0-1",
    embedUrl:
      "https://embed.figma.com/design/1awMsXZ0PImopkseWDuttI/Untitled-UI?node-id=0-1&embed-host=share",
  },
];

const figmaExperience = [
  {
    title: "Research & User Flow",
    description:
      "I map user journeys and key actions first, then translate goals into clear page structures that reduce friction and improve navigation.",
  },
  {
    title: "Wireframing & Prototyping",
    description:
      "I build low and high-fidelity wireframes in Figma, then create interactive prototypes to validate layout, spacing, and interaction patterns.",
  },
  {
    title: "UI Systems & Handoff",
    description:
      "I organize reusable components, typography scales, and spacing rules to make developer handoff smooth and keep designs consistent.",
  },
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
      "I played an active role in brainstorming sessions, where I generated innovative ideas and conceptualized creative solutions for projects. Whether it was for e-commerce platforms or mental health clinics, I ensured that every design and feature aligned with the client's vision.",
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
        <title>Abdulatif | Front-End Developer Portfolio</title>
        <meta
          name="description"
          content="Front-End Developer specializing in React, Next.js, and modern web technologies. Building beautiful, high-performance web experiences."
        />
      </Head>

      <div className="min-h-screen bg-[#06060A] text-white font-outfit">
        <HeroSection
          name="Abdulatif"
          subtitle="A passionate Front-End Developer crafting beautiful web experiences with clean code and modern design."
          buttonText="START ENGINE"
          onButtonClick={() => {
            const target = document.querySelector("#projects");
            if (target) {
              window.scrollTo({
                top: target.offsetTop - 20,
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
        <SkillsSection />
        <ExperienceSection experiences={experiences} />
        <ProjectsSection projects={projects} />
        <UiUxFigmaSection
          summary="I leverage Figma to design responsive, user-centric interfaces that bridge the gap between creativity and functionality. From wireframes to high-fidelity prototypes, I create design systems that maintain consistency while captivating users."
          uiuxExperience={figmaExperience}
          figmaProjects={figmaProjects}
        />
        <ContactSection
          email="abdlatefkhatib@email.com"
          cvLink="/Abdulatif_Selem_CV.pdf"
        />
      </div>
    </>
  );
}
