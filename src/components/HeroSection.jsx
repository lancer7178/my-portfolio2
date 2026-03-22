"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { FaMapMarkerAlt, FaClock, FaBolt, FaArrowRight } from "react-icons/fa";

export default function HeroSection({
  name = "Abdulatif",
  subtitle = "A passionate Front-End Developer crafting beautiful web experiences.",
  buttonText = "START ENGINE",
  onButtonClick,
}) {
  const sectionRef = useRef(null);
  const nameRef = useRef(null);
  const outlineRef = useRef(null);
  const contentRef = useRef(null);
  const cardsRef = useRef(null);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }) + " EET"
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(outlineRef.current, { y: 80, opacity: 0, scale: 0.9 }, { y: 0, opacity: 1, scale: 1, duration: 1.2 });
      tl.fromTo(nameRef.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.8");
      tl.fromTo(contentRef.current?.children || [], { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.15 }, "-=0.5");
      tl.fromTo(cardsRef.current?.children || [], { y: 30, opacity: 0, scale: 0.95 }, { y: 0, opacity: 1, scale: 1, duration: 0.7, stagger: 0.2 }, "-=0.6");

      gsap.to(outlineRef.current, {
        y: -100,
        scrollTrigger: { trigger: sectionRef.current, start: "top top", end: "bottom top", scrub: 1 },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const topSkills = [
    { name: "REACT / NEXT", level: 95 },
    { name: "TAILWIND / CSS", level: 92 },
    { name: "JAVASCRIPT / TS", level: 90 },
  ];

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#06060A] px-4 sm:px-6 pt-10 pb-24"
    >
      {/* Ambient Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-[#22D3EE] blur-[220px] opacity-[0.07] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[500px] h-[500px] bg-[#C084FC] blur-[220px] opacity-[0.05] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-[#818CF8] blur-[180px] opacity-[0.06] rounded-full pointer-events-none" />

      {/* Top bar */}
      <div className="absolute top-6 left-6 sm:left-10 flex items-center gap-3">
        <div className="w-10 h-10 bg-[#10101A] border border-[#1A1A2C] rounded-xl flex items-center justify-center">
          <span className="bg-gradient-to-r from-[#22D3EE] to-[#818CF8] bg-clip-text text-transparent font-bold text-sm font-mono">AS</span>
        </div>
      </div>
      <div className="absolute top-6 right-6 sm:right-10">
        <span className="mono text-[11px] text-[#555570] tracking-widest">FRONT-END DEVELOPER</span>
      </div>

      {/* Background Outline Name */}
      <div ref={outlineRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0">
        <h1 className="text-outline font-outfit font-black uppercase leading-none" style={{ fontSize: "clamp(5rem, 18vw, 16rem)" }}>
          {name}
        </h1>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto mt-12 sm:mt-0">
        <div ref={nameRef}>
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-outfit font-black tracking-tight leading-none mb-4">
            <span className="bg-gradient-to-r from-[#22D3EE] via-[#818CF8] to-[#C084FC] bg-clip-text text-transparent">{name}</span>
          </h2>
          <p className="mono text-xs sm:text-sm text-[#555570] tracking-[0.3em] mb-6">FRONTEND ENGINEER — CREATIVE DEVELOPER</p>
        </div>

        <div ref={contentRef} className="flex flex-col items-center gap-6">
          <p className="text-base sm:text-lg text-[#8888A0] max-w-xl leading-relaxed">{subtitle}</p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={onButtonClick}
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#22D3EE] via-[#818CF8] to-[#C084FC] text-black font-extrabold font-outfit rounded-full hover:opacity-90 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-[#818CF8]/20"
            >
              {buttonText}
              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="#projects"
              className="flex items-center gap-2 text-[#555570] hover:text-[#EAEAEF] mono text-sm transition-colors link-underline"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("projects");
                if (el) window.scrollTo({ top: el.offsetTop - 20, behavior: "smooth" });
              }}
            >
              PROJECT GALLERY <FaArrowRight className="text-[#22D3EE] text-xs" />
            </a>
          </div>
        </div>
      </div>

      {/* Info Cards */}
      <div ref={cardsRef} className="relative z-10 flex flex-col sm:flex-row gap-4 mt-12 sm:mt-16 w-full max-w-4xl px-2">
        {/* Telemetry Card */}
        <div className="flex-1 glass rounded-2xl p-5">
          <div className="flex items-center justify-between mb-4">
            <span className="mono text-[10px] text-[#555570]">TELEMETRY / ACTIVE</span>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 bg-[#22D3EE] rounded-full pulse-dot" />
              <span className="w-2 h-2 bg-[#22D3EE]/30 rounded-full" />
            </div>
          </div>
          <div className="flex items-center gap-2 mb-1">
            <FaMapMarkerAlt className="text-[#22D3EE] text-sm" />
            <span className="text-xl font-bold font-outfit">EGYPT, EG</span>
          </div>
          <div className="flex items-center gap-2 text-[#555570] text-sm">
            <FaClock className="text-xs" />
            <span className="mono text-xs">{currentTime}</span>
          </div>
        </div>

        {/* Tech Specs Card */}
        <div className="flex-1 glass rounded-2xl p-5">
          <div className="flex items-center justify-between mb-4">
            <span className="mono text-[10px] text-[#555570]">TECH SPECS / LOAD</span>
            <FaBolt className="text-[#22D3EE] text-sm" />
          </div>
          <div className="space-y-3">
            {topSkills.map((skill, i) => (
              <div key={i}>
                <div className="flex justify-between mono text-xs mb-1">
                  <span className="text-[#EAEAEF]">{skill.name}</span>
                  <span className="text-[#555570]">{skill.level}%</span>
                </div>
                <div className="capacity-bar">
                  <div className="capacity-fill" style={{ width: `${skill.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
