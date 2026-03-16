"use client";
import { motion, Easing } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Section } from "../layouts/section";
import LogoCloud from "../custom/logo-cloud";
import Image from "next/image";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" as Easing },
});

export default function Hero() {
  return (
    <Section
      id="home"
      className="min-h-screen h-screen max-w-full flex items-center justify-center mx-auto rounded-none"
    >
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-40 pb-12 md:pb-24 overflow-hidden">
        {/* Background glow */}
        <div className=" absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-150 h-100 rounded-full bg-[rgba(201,168,76,0.05)] blur-[120px]" />
        </div>

        {/* LEFT CONTENT */}
        <div className="relative z-10">
          {/* Available badge */}
          <motion.div
            {...fadeUp(0.1)}
            className="inline-flex items-center gap-2 bg-white-faint border border-[rgba(255,255,255,0.07)] rounded-full px-4 py-1.5 mb-7"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-gold text-[11px] tracking-[0.18em] uppercase font-mono">
              Open to Projects
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            {...fadeUp(0.2)}
            className="font-display text-[clamp(2rem,4vw,4.5rem)] font-black leading-none tracking-tight mb-6"
          >
            Mr Grey
            <br />
            <em className="text-gold not-italic">Your Architect</em>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            {...fadeUp(0.3)}
            className="text-white-dim text-[15px] max-w-md leading-relaxed mb-10"
          >
            Full-stack developer &amp; digital architect crafting high-end
            experiences for brands that demand excellence. From pixel-perfect
            UIs to bulletproof backends.
          </motion.p>

          {/* Actions */}
          <motion.div
            {...fadeUp(0.4)}
            className="flex gap-4 items-center xflex-wrap justify-center md:justify-start"
          >
            <a
              href="#projects"
              className="flex items-center gap-2 bg-gold text-portfolio-bg px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide hover:opacity-85 transition-all hover:-translate-y-0.5"
            >
              Portfolio <ArrowRight size={15} />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 text-[#f5f3ee] px-8 py-3.5 rounded-full font-medium text-sm border border-[rgba(255,255,255,0.1)] hover:border-gold hover:text-gold transition-all hover:-translate-y-0.5"
            >
              Let&apos;s Talk <ExternalLink size={14} />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div {...fadeUp(0.5)} className="hidden md:flex gap-10 mt-14">
            {[
              { val: "7+", label: "Years Exp." },
              { val: "100+", label: "Projects" },
              { val: "$250k", label: "Revenue Gen." },
              { val: "4.8★", label: "Avg Rating" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-[1.9rem] font-bold text-[#f5f3ee] leading-none">
                  <span>{s.val.replace(/[+★k]/g, "")}</span>
                  <span className="text-gold">{s.val.match(/[+★k]/)?.[0]}</span>
                </div>
                <div className="text-[10px] uppercase tracking-widest text-[rgba(245,243,238,0.5)] mt-1.5">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT VISUAL */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          className="hidden lg:block relative h-118"
        >
          {/* Main card */}
          <div className="absolute inset-x-0 top-0 bottom-20 overflow-hidden">
            {/* image */}
            <Image
              src="/images/dashboard1.png"
              fill
              className="object-contain rounded-2xl overflow-hidden"
              alt=""
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-[rgba(10,10,10,0.95)] via-transparent to-transparent" />
            {/* Text */}
            <div className="absolute bottom-8 left-8">
              <h3 className="font-display text-2xl font-bold mb-1">
                Building brands
                <br />
                to drive ideas
              </h3>
              <p className="text-[rgba(245,243,238,0.5)] text-xs tracking-wide">
                Desmond Grey · Developer &amp; Designer
              </p>
            </div>
          </div>

          {/* Secondary card */}
          <div className="absolute bottom-0 right-0 w-[55%] bg-portfolio-card2 border border-[rgba(255,255,255,0.07)] rounded-2xl p-5">
            <div className="font-display text-[1.05rem] font-semibold leading-snug mb-1">
              Scale Business
              <br />
              with Automation
            </div>
            <div className="text-[11px] text-[rgba(245,243,238,0.45)]">
              Smart systems · AI workflows · Saas Solutions
            </div>
          </div>
        </motion.div>
      </div>
      <LogoCloud />
    </Section>
  );
}
