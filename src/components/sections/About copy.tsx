"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Section } from "../layouts/section";
import { TitleBadge } from "../custom/title-pill";

const skills = [
  "Next.js / React",
  "TypeScript",
  "Node.js",
  "UI/UX Design",
  "Framer / Webflow",
  "AI Automation",
  "PostgreSQL",
  "TailwindCSS",
  "Figma",
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section id="about" className="py-24" ref={ref}>
      <div className="flex flex-col items-center justify-center">
        <TitleBadge label="Senior Developer" />
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-tight mb-6">
          Desmond Grey, Your <em className="text-gold">Architect</em>
        </h2>
        <div className="text-gold text-[10px] font-mono tracking-[0.2em] uppercase mb-3">
          {"//"} Desmond Grey
        </div>
      </div>
      {/* <div className="text-gold text-[10px] font-mono tracking-[0.2em] uppercase mb-4">
        {"//"} About Me
      </div> */}

      {/* <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-20 items-center mt-12"> */}
      <div className="flex flex-row items-start w-full gap-16 p-0 relative overflow-visible h-auto">
        {/* flex-flow: row; flex: none; place-content: flex-start center;
        align-items: flex-start; gap: 44px; width: 100%; height: min-content;
        padding: 0; display: flex; position: relative; overflow: visible; */}
        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="w-full aspect-3/4 bg-[#111] border border-[rgba(255,255,255,0.07)] rounded-2xl overflow-hidden flex items-center justify-center">
            <div className="w-full h-full bg-linear-to-b from-[#1c1c1c] to-[#0f0f0f] flex items-center justify-center">
              <svg
                width="130"
                height="200"
                viewBox="0 0 130 200"
                fill="rgba(255,255,255,0.07)"
              >
                <circle cx="65" cy="52" r="36" />
                <path d="M10 200C10 138 35 118 65 118C95 118 120 138 120 200Z" />
              </svg>
            </div>
          </div>
          {/* Badge */}
          <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-gold flex flex-col items-center justify-center text-portfolio-bg text-center">
            <span className="text-[10px] font-bold leading-tight tracking-wide">
              7+ YRS
              <br />
              EXPERT
            </span>
          </div>
        </motion.div>
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="pt-4"
        >
          <div className="text-gold text-[10px] font-mono tracking-[0.2em] uppercase mb-3">
            {"//"} Desmond Grey
          </div>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-tight mb-6">
            Desmond Grey, Your <em className="text-gold">Architect</em>
          </h2>
          <p className="text-white-dim text-[15px] leading-loose mb-5">
            I design and build high-performance digital products for ambitious
            founders, startups, and established brands. My expertise spans
            full-stack web development, UI/UX design, and business automation —
            all crafted with precision and purpose.
          </p>
          <p className="text-white-dim text-[15px] leading-loose">
            With 7+ years in the industry, I&apos;ve shipped products used by
            thousands, generated significant client revenue, and built a
            reputation for excellence through clear communication and meticulous
            attention to detail.
          </p>

          {/* Skills */}
          <div className="grid grid-cols-3 gap-3 mt-8">
            {skills.map((s) => (
              <div
                key={s}
                className="flex items-center gap-2 bg-[#111] border border-[rgba(255,255,255,0.07)] rounded-xl px-4 py-3 text-[12px] text-white-dim hover:border-e-gold-dim transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                {s}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
