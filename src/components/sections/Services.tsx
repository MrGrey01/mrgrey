"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import {
  Palette,
  Layers,
  Image as ImageIcon,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Section } from "../layouts/section";
import { TitleBadge } from "../custom/title-pill";

const services = [
  {
    icon: Palette,
    title: "Website Design",
    desc: "Pixel-perfect, conversion-focused websites that reflect your brand identity and delight your visitors at every interaction.",
    tags: ["Figma", "Framer", "Webflow"],
    previewLabel: "website preview",
    imgSrc: "/designs/1.png",
  },
  {
    icon: Layers,
    title: "UX Design",
    desc: "User research, wireframes, and interactive prototypes that put your users first and drive meaningful engagement.",
    tags: ["Research", "Wireframes", "Prototyping"],
    previewLabel: "ux flow",
    imgSrc: "/designs/2.png",
  },
  {
    icon: ImageIcon,
    title: "Banner Design",
    desc: "High-impact visual assets for campaigns, ads, and brand collateral that stop the scroll and drive action.",
    tags: ["Social Media", "Display Ads", "Print"],
    previewLabel: "banner preview",
    imgSrc: "/designs/3.png",
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);

  const next = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % services.length);
  };

  const prev = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex - 1 + services.length) % services.length);
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  });

  return (
    <Section id="services" className="py-24" ref={ref}>
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-14">
        <div>
          <TitleBadge label="What I do" />
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-tight">
            UI Design <span className="text-gold">Services</span>
          </h2>
        </div>

        <p className="text-[rgba(245,243,238,0.55)] text-[14px] max-w-xs leading-relaxed">
          Every service is tailored to your specific business goals and
          technical requirements.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((s, i) => {
          const Icon = s.icon;

          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group bg-zinc-900/20 border border-[rgba(255,255,255,0.07)] rounded-2xl p-9 hover:border-gold-dim hover:-translate-y-1 transition-all duration-300 relative overflow-hidden shadow-[16px_24px_20px_8px_rgba(0,0,0,0.4),inset_0_2px_0_rgba(184,180,180,0.08)]"
            >
              {/* Glow */}
              <div className="absolute bottom-0 inset-x-0 h-32 bg-linear-to-t from-[rgba(201,168,76,0.04)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Icon */}
              <div className="w-14 h-14 bg-linear-to-br from-[rgba(201,168,76,0.15)] to-[rgba(201,168,76,0.05)] border border-[rgba(201,168,76,0.2)] rounded-xl flex items-center justify-center mb-6">
                <Icon size={22} className="text-gold" />
              </div>

              <h3 className="font-display text-xl font-semibold mb-3">
                {s.title}
              </h3>

              <p className="text-sm text-[rgba(245,243,238,0.55)] leading-relaxed mb-6">
                {s.desc}
              </p>

              {/* Preview */}
              <div
                onClick={() => setActiveIndex(i)}
                className="relative rounded-xl border border-[rgba(255,255,255,0.07)] h-48 mb-5 overflow-hidden cursor-pointer"
              >
                <motion.div
                  layoutId={`image-${i}`}
                  className="absolute inset-0"
                >
                  <Image
                    src={s.imgSrc}
                    alt={s.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>

                <span className="absolute bottom-2 right-2 text-[10px] font-mono text-gold tracking-wide bg-background/90 border border-[rgba(255,255,255,0.07)] rounded-full px-3 py-1">
                  {s.previewLabel}
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="bg-[rgba(245,243,238,0.06)] border border-[rgba(255,255,255,0.07)] rounded-full px-3 py-1 text-[10px] text-[rgba(245,243,238,0.55)] tracking-wide"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl w-full"
            >
              <motion.div
                layoutId={`image-${activeIndex}`}
                className="relative w-full h-[70vh] rounded-xl overflow-hidden"
              >
                <Image
                  src={services[activeIndex].imgSrc}
                  alt="Preview"
                  fill
                  className="object-contain bg-black"
                />
              </motion.div>

              {/* Close */}
              <button
                onClick={close}
                className="absolute top-4 right-4 bg-black/60 hover:bg-black text-white p-2 rounded-full border border-border-foreground"
              >
                <X size={18} />
              </button>

              {/* Navigation */}
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 border border-border-foreground hover:bg-black text-white p-3 rounded-full"
              >
                <ChevronLeft size={22} />
              </button>

              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 border border-border-foreground hover:bg-black text-white p-3 rounded-full"
              >
                <ChevronRight size={22} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
