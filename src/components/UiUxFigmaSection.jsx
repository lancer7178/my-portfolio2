"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const FALLBACK_DATA_URI =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=";

export default function UiUxFigmaSection({
  summary,
  uiuxExperience = [],
  figmaProjects = [],
  figmaEmbedUrl,
}) {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const activeProject = figmaProjects[activeProjectIndex];
  const activeEmbedUrl =
    activeProject?.embedUrl || activeProject?.liveEmbedUrl || figmaEmbedUrl;

  const projectsWithEmbed = useMemo(
    () =>
      figmaProjects.filter(
        (project) => project?.embedUrl || project?.liveEmbedUrl,
      ),
    [figmaProjects],
  );

  return (
    <section
      id="uiux"
      className="relative py-32 px-6 md:px-12 bg-gradient-to-b from-[#06060A] via-[#05050A] to-[#06060A] text-white overflow-hidden"
    >
      <div
        className="section-number top-10 right-0 sm:right-10 opacity-100"
        style={{ WebkitTextStroke: "1px rgba(34, 211, 238, 0.04)" }}
      >
        05
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-20">
          <p className="mono text-xs text-[#22D3EE] tracking-[0.3em] mb-4">{`// UI/UX & FIGMA`}</p>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-outfit font-black tracking-tight leading-none">
            <span className="text-white italic">DESIGN </span>
            <span className="text-outline-accent italic">PROJECTS</span>
          </h2>
          <div className="flex gap-2 mt-6">
            <div className="h-1 w-16 bg-gradient-to-r from-[#22D3EE] to-[#818CF8] rounded-full" />
            <div className="h-1 w-8 bg-[#818CF8]/50 rounded-full" />
            <div className="h-1 w-4 bg-[#C084FC]/40 rounded-full" />
          </div>
          <p className="mt-6 text-[#555570] max-w-2xl text-base leading-relaxed">
            {summary ||
              "A complete showcase of my design workflow, Figma projects, and user-centered process from idea to handoff."}
          </p>
        </div>

        {uiuxExperience.length > 0 && (
          <div className="grid md:grid-cols-3 gap-4 sm:gap-8 mb-16">
            {uiuxExperience.map((item, idx) => (
              <motion.article
                key={`${item.title}-${idx}`}
                className="group relative flex flex-col rounded-2xl bg-[#10101A]/80 border border-[#1A1A2C] overflow-hidden hover:border-[#22D3EE]/25 transition-all duration-500 backdrop-blur-sm p-4 sm:p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
              >
                <h3 className="text-lg font-bold font-outfit text-[#EAEAEF] group-hover:text-[#22D3EE] transition-colors duration-300 mb-3">
                  {item.title}
                </h3>
                <div className="h-0.5 w-8 bg-gradient-to-r from-[#22D3EE]/50 to-[#818CF8]/30 rounded-full group-hover:w-12 transition-all duration-500 mb-3" />
                <p className="text-sm text-[#555570] leading-relaxed">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        )}

        {activeEmbedUrl && (
          <div className="mb-16">
            <p className="mono text-xs text-[#22D3EE] tracking-[0.3em] mb-4">{`// LIVE PREVIEW`}</p>
            <h3 className="text-2xl font-bold font-outfit text-white mb-6">
              Figma Interactive Preview
            </h3>
            <div className="rounded-2xl border border-[#1A1A2C] bg-[#10101A]/80 p-2 sm:p-3 overflow-hidden backdrop-blur-sm">
              <iframe
                title={activeProject?.title || "Figma Project Preview"}
                src={activeEmbedUrl}
                className="w-full h-[260px] sm:h-[360px] lg:h-[450px] rounded-xl"
                allowFullScreen
                style={{ border: "1px solid rgba(34, 211, 238, 0.12)" }}
              />
            </div>
            {activeProject?.title && (
              <div className="mt-4 text-sm text-[#555570]">
                Now viewing:{" "}
                <span className="text-[#22D3EE] font-semibold">
                  {activeProject.title}
                </span>
              </div>
            )}
          </div>
        )}

        <div>
          <p className="mono text-xs text-[#22D3EE] tracking-[0.3em] mb-4">{`// PORTFOLIO`}</p>
          <h3 className="text-3xl font-bold font-outfit text-white mb-8">
            Design Collection
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {figmaProjects.map((project, idx) => (
              <motion.article
                key={`${project.title}-${idx}`}
                className={`group relative flex flex-col rounded-2xl bg-[#10101A]/80 border overflow-hidden backdrop-blur-sm transition-all duration-500 ${
                  activeProjectIndex === idx
                    ? "border-[#22D3EE]/25"
                    : "border-[#1A1A2C] hover:border-[#22D3EE]/25"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
              >
                <div className="relative w-full h-48 overflow-hidden bg-gradient-to-br from-[#10101A] to-[#08080F]">
                  <Image
                    src={project.image || FALLBACK_DATA_URI}
                    alt={project.title}
                    width={640}
                    height={280}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    unoptimized={
                      !project.image || project.image.startsWith("http")
                    }
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06060A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="flex-1 flex flex-col p-6 gap-3">
                  <p className="mono text-[10px] text-white/30 bg-black/40 px-2 py-1 rounded-md backdrop-blur-sm w-fit">
                    {" "}
                    {project.type || "DESIGN"}
                  </p>
                  <h4 className="text-lg font-bold font-outfit text-[#EAEAEF] group-hover:text-[#22D3EE] transition-colors duration-300">
                    {project.title}
                  </h4>
                  <div className="h-0.5 w-8 bg-gradient-to-r from-[#22D3EE]/50 to-[#818CF8]/30 rounded-full group-hover:w-14 transition-all duration-500" />
                  <p className="text-sm text-[#555570] leading-relaxed flex-grow line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex gap-3 pt-3 border-t border-[#1A1A2C]">
                    {(project.embedUrl || project.liveEmbedUrl) && (
                      <button
                        type="button"
                        onClick={() => setActiveProjectIndex(idx)}
                        className="flex-1 px-4 py-2 rounded-lg font-semibold text-sm text-white bg-gradient-to-r from-[#22D3EE]/90 via-[#818CF8]/85 to-[#C084FC]/80 hover:from-[#22D3EE] hover:via-[#818CF8] hover:to-[#C084FC] transition-all duration-300 shadow-lg shadow-[#818CF8]/12 hover:shadow-[#818CF8]/25"
                      >
                        Preview
                      </button>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center px-4 py-2 rounded-lg font-semibold text-sm text-[#22D3EE] bg-[#22D3EE]/5 border border-[#22D3EE]/12 hover:border-[#22D3EE]/50 hover:bg-[#22D3EE]/10 transition-all duration-300"
                      >
                        Open Figma
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          {projectsWithEmbed.length === 0 && figmaProjects.length > 0 && (
            <p className="mt-4 text-sm text-[#555570]">
              Add an embed URL to your project object to enable live preview
              switching.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
