"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, PenTool, Zap, Rocket } from "lucide-react";
import { TitleBadge } from "@/components/custom/title-pill";
import { Section } from "../layouts/section";
import { Card } from "../custom/cards";

const steps = [
  {
    num: "01",
    icon: Target,
    title: "Discovery & Planning",
    desc: "Deep-dive into your goals, audience, and technical needs. We map the full scope before a single line of code is written.",
  },
  {
    num: "02",
    icon: PenTool,
    title: "Design & Prototype",
    desc: "High-fidelity Figma designs with interactive prototypes. You approve every screen before development begins.",
  },
  {
    num: "03",
    icon: Zap,
    title: "Development & Testing",
    desc: "Clean, scalable code built in sprints with daily updates. Rigorous testing across all devices and browsers.",
  },
  {
    num: "04",
    icon: Rocket,
    title: "Launch & Scale",
    desc: "Smooth deployment, performance optimization, and ongoing support to help your product grow after launch.",
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section
      id="process"
      className="py-24 max-w-full bg-[#0e0d0d]"
      isFull
      ref={ref}
    >
      <div className="flex flex-col items-center justify-center text-center gap-4">
        <TitleBadge label="How i work" />
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-tight mb-3">
          Process <span className="text-gold">Is Everything</span>
        </h2>
        <p className="text-[rgba(245,243,238,0.55)] text-[15px] max-w-lg leading-relaxed">
          A structured, transparent workflow ensures every project is delivered
          on time, on budget, and beyond expectations.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-14 px-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative bg-portfolio-bg border border-[rgba(255,255,255,0.07)] rounded-2xl p-8 overflow-hidden hover:border-gold-dim hover:-translate-y-1 transition-all duration-300 shadow-[0_2px_6px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.06)]"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex justify-between items-center mb-5">
                  <div className="w-11 h-11 rounded-full bg-background text-gold text-[10px] font-mono tracking-widest flex items-center justify-center shadow-[0_2px_6px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.06)]">
                    {step.num}
                  </div>
                  <div className="w-11 h-11 bg-[rgba(245,243,238,0.06)] rounded-xl flex items-center justify-center">
                    <Icon size={18} className="text-gold" />
                  </div>
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">
                  {step.title}
                </h3>
                <p className=" text-[rgba(245,243,238,0.55)] leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom bar */}
        <Card className="mt-12 flex flex-row flex-wrap items-center justify-between gap-5 bg-portfolio-bg rounded-2xl px-8 py-6 w-auto">
          <div className="flex flex-col items-start">
            <p className="text-md text-white-dim">
              <strong className="text-[#f5f3ee]">Clear timelines.</strong> No
              surprises, no scope creep.
            </p>
            <p className="text-md text-white-dim">
              <strong className="text-[#f5f3ee]">Transparent pricing.</strong>{" "}
              Fixed or hourly — your choice.
            </p>
          </div>
          <a
            href="#contact"
            className="bg-gold text-portfolio-bg px-7 py-3 rounded-full font-semibold text-sm hover:opacity-85 transition-opacity"
          >
            Start a Project →
          </a>
        </Card>
      </div>
    </Section>
  );
}
