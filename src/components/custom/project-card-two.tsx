"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

export function ProjectCard({
  title,
  category,
  img,
  className,
}: {
  title: string;
  category: string;
  img: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [8, -8]);
  const rotateY = useTransform(x, [-50, 50], [-8, 8]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const px = e.clientX - rect.left - rect.width / 2;
    const py = e.clientY - rect.top - rect.height / 2;

    x.set(px);
    y.set(py);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className={`group relative rounded-2xl overflow-hidden bg-[#111] border border-white/5 cursor-pointer ${className}`}
    >
      {/* Image */}
      <motion.div
        className="absolute inset-0"
        whileHover={{ scale: 1.06 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover transition-transform duration-700"
        />
      </motion.div>

      {/* Cursor light effect */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />

      {/* Content */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileHover={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35 }}
        className="absolute bottom-0 left-0 right-0 p-6"
      >
        <p className="text-xs text-white/60 mb-1">{category}</p>

        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </motion.div>

      {/* Arrow CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileHover={{ opacity: 1, scale: 1 }}
        className="absolute bottom-5 left-5 bg-black/70 backdrop-blur-md p-3 rounded-full"
      >
        <ArrowUpRight size={16} />
      </motion.div>
    </motion.div>
  );
}
