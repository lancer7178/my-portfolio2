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
    <motion.section
      id="uiux"
      className="relative max-w-7xl mx-auto py-24 px-6 md:px-10 bg-[#101014] text-white"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <div className="text-center mb-14">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] bg-clip-text text-transparent">
          UI/UX & Figma Experience
        </h2>
        <div className="h-1 w-24 bg-[#6EE7B7] mt-4 rounded-full mx-auto" />
        {summary && (
          <p className="mt-6 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {summary}
          </p>
        )}
      </div>

      {uiuxExperience.length > 0 && (
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {uiuxExperience.map((item, idx) => (
            <motion.article
              key={`${item.title}-${idx}`}
              className="rounded-2xl border border-[#2a2a2f] bg-[#18181b] p-6 hover:border-[#6EE7B7] transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
            >
              <h3 className="text-lg font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      )}

      {activeEmbedUrl && (
        <div className="mb-14">
          <h3 className="text-2xl font-bold text-white mb-6">
            Live Figma Preview
          </h3>
          <div className="rounded-2xl border border-[#2a2a2f] bg-[#18181b] p-2 sm:p-3 overflow-hidden">
            <iframe
              title={activeProject?.title || "Figma Project Preview"}
              src={activeEmbedUrl}
              className="w-full h-[260px] sm:h-[360px] lg:h-[450px] rounded-xl"
              allowFullScreen
              style={{ border: "1px solid rgba(255, 255, 255, 0.08)" }}
            />
          </div>
          {activeProject?.title && (
            <div className="mt-3 text-sm text-gray-400">
              Viewing:{" "}
              <span className="text-[#6EE7B7]">{activeProject.title}</span>
            </div>
          )}
        </div>
      )}

      <div>
        <h3 className="text-2xl font-bold text-white mb-6">Figma Projects</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {figmaProjects.map((project, idx) => (
            <motion.article
              key={`${project.title}-${idx}`}
              className={`group rounded-2xl border bg-[#18181b] overflow-hidden transition-all duration-300 ${
                activeProjectIndex === idx
                  ? "border-[#6EE7B7]/80"
                  : "border-[#2a2a2f] hover:border-[#3B82F6]/70"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
            >
              <div className="w-full h-44 bg-gradient-to-br from-[#12121f] to-[#0e0e15]">
                <Image
                  src={project.image || FALLBACK_DATA_URI}
                  alt={project.title}
                  width={640}
                  height={280}
                  className="w-full h-full object-cover"
                  unoptimized={
                    !project.image || project.image.startsWith("http")
                  }
                />
              </div>
              <div className="p-5">
                <p className="text-xs text-[#6EE7B7] mb-2">
                  {project.type || "UI/UX"}
                </p>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {project.title}
                </h4>
                <p className="text-sm text-gray-300 leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>
                {(project.embedUrl || project.liveEmbedUrl) && (
                  <button
                    type="button"
                    onClick={() => setActiveProjectIndex(idx)}
                    className="inline-flex mr-4 text-sm font-semibold text-[#6EE7B7] hover:text-[#3B82F6] transition-colors"
                  >
                    Live Preview
                  </button>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex text-sm font-semibold text-[#6EE7B7] hover:text-[#3B82F6] transition-colors"
                  >
                    View in Figma
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
        {projectsWithEmbed.length === 0 && (
          <p className="mt-4 text-sm text-gray-500">
            Add an embed URL to your project object to enable live preview
            switching.
          </p>
        )}
      </div>
    </motion.section>
  );
}
