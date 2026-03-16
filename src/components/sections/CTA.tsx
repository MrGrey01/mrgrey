"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Section } from "../layouts/section";
import { TitleBadge } from "../custom/title-pill";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section
      id="contact"
      className="py-28 max-w-full bg-[#111] text-center relative overflow-hidden"
      ref={ref}
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-100 rounded-full bg-[rgba(201,168,76,0.05)] blur-[100px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-3xl mx-auto"
      >
        <TitleBadge label="Get In Touch" />
        <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-black leading-[1.05] mb-6">
          Let&apos;s Grow <span className="text-gold">Together</span>
        </h2>
        <p className="text-white-dim text-[15px] max-w-md mx-auto leading-relaxed mb-10">
          Ready to build something extraordinary? Let&apos;s start with a
          conversation about your vision, your goals, and how I can help you get
          there.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="mailto:hello@desmondgrey.com"
            className="flex items-center gap-2 bg-gold text-portfolio-bg px-9 py-4 rounded-full font-semibold text-sm tracking-wide hover:opacity-85 transition-all hover:-translate-y-0.5"
          >
            Start a Project <ArrowRight size={15} />
          </a>
          <a
            href="#projects"
            className="border border-[rgba(255,255,255,0.1)] text-[#f5f3ee] px-9 py-4 rounded-full text-sm hover:border-gold hover:text-gold transition-colors"
          >
            View My Work
          </a>
        </div>
      </motion.div>
    </Section>
  );
}
