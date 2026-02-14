import localFont from "next/font/local";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import UiUxFigmaSection from "@/components/UiUxFigmaSection";

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

const uiuxSummary =
  "I design clean and user-friendly interfaces in Figma, from early wireframes to clickable prototypes. My process focuses on usability, visual hierarchy, and responsive layout decisions before development starts.";

const figmaEmbedUrl =
  "https://embed.figma.com/design/bPLCosPrx27QunpXHMB6VL/Ventura?node-id=0-1&embed-host=share";

const uiuxExperience = [
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

const designProcess = [
  {
    step: "01",
    title: "Discovery",
    detail:
      "Understand goals, user needs, and business priorities before drawing screens.",
  },
  {
    step: "02",
    title: "Structure",
    detail:
      "Build wireframes and information architecture for clear navigation and content flow.",
  },
  {
    step: "03",
    title: "Visual Design",
    detail:
      "Apply typography, color hierarchy, spacing, and components with consistency.",
  },
  {
    step: "04",
    title: "Prototype & Handoff",
    detail:
      "Create interactive prototypes and developer-ready specs for implementation.",
  },
];

export default function UiUxPage() {
  return (
    <>
      <Head>
        <title>UI/UX & Figma | My Portfolio</title>
      </Head>

      <main
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-[#101014] text-white font-[family-name:var(--font-geist-sans)] pt-16`}
      >
        <section className="relative overflow-hidden px-6 py-20 md:py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-[#06060a] via-[#0a0a12] to-[#050508]" />
          <div className="absolute top-10 left-8 w-72 h-72 rounded-full bg-[#3B82F6]/10 blur-3xl" />
          <div className="absolute bottom-0 right-10 w-72 h-72 rounded-full bg-[#6EE7B7]/10 blur-3xl" />

          <motion.div
            className="relative z-10 max-w-6xl mx-auto text-center"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-2 text-sm font-semibold text-[#6EE7B7] bg-[#6EE7B7]/10 border border-[#6EE7B7]/25 rounded-full mb-6">
              Dedicated Design Page
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] bg-clip-text text-transparent">
              UI/UX Experience & Figma Projects
            </h1>
            <p className="mt-6 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A complete showcase of my design workflow, Figma projects, and
              user-centered process from idea to handoff.
            </p>
            <div className="mt-8">
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold text-[#6EE7B7] border border-[#6EE7B7]/45 bg-[#6EE7B7]/10 hover:bg-[#6EE7B7]/20 hover:border-[#6EE7B7]/70 transition-colors duration-300"
              >
                Back to Home
              </Link>
            </div>
          </motion.div>
        </section>

        <section className="max-w-6xl mx-auto px-6 md:px-10 pb-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {designProcess.map((item, index) => (
              <motion.article
                key={item.step}
                className="rounded-2xl border border-[#2a2a2f] bg-[#18181b] p-5"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
              >
                <p className="text-xs font-semibold text-[#6EE7B7] mb-2">
                  Step {item.step}
                </p>
                <h2 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {item.detail}
                </p>
              </motion.article>
            ))}
          </div>
        </section>

        <UiUxFigmaSection
          summary={uiuxSummary}
          uiuxExperience={uiuxExperience}
          figmaProjects={figmaProjects}
          figmaEmbedUrl={figmaEmbedUrl}
        />
      </main>
    </>
  );
}
