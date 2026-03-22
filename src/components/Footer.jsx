import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

export default function Footer({ year, name }) {
  return (
    <footer className="relative w-full py-12 pb-28 bg-[#05050A] text-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#22D3EE]/15 to-transparent" />

      <div className="flex items-center justify-center gap-4 mb-6">
        <a href="https://github.com/lancer7178" target="_blank" rel="noopener noreferrer"
          className="p-3 rounded-full bg-[#10101A] border border-[#1A1A2C] text-[#555570] hover:text-[#22D3EE] hover:border-[#22D3EE]/25 transition-all duration-300 hover:scale-110" aria-label="GitHub">
          <FaGithub className="text-lg" />
        </a>
        <a href="https://linkedin.com/in/abdul-atif-selem-8521a7281" target="_blank" rel="noopener noreferrer"
          className="p-3 rounded-full bg-[#10101A] border border-[#1A1A2C] text-[#555570] hover:text-[#818CF8] hover:border-[#818CF8]/25 transition-all duration-300 hover:scale-110" aria-label="LinkedIn">
          <FaLinkedin className="text-lg" />
        </a>
      </div>

      <p className="text-xs text-[#555570] mono flex items-center justify-center gap-1.5">
        © {year} {name} — Made with <FaHeart className="text-[#22D3EE] text-[10px]" /> All rights reserved.
      </p>
    </footer>
  );
}
