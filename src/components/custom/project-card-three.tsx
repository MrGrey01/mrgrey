"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function ProjectCard({
  title,
  category,
  img,
}: {
  title: string;
  category: string;
  img: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="group relative break-inside-avoid rounded-2xl overflow-hidden bg-[#111] border border-white/5 cursor-pointer"
    >
      {/* Image */}
      <div className="relative w-full h-[420px] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.07 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={img}
            alt={title}
            fill
            className="object-cover"
          />
        </motion.div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />

      {/* Content */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileHover={{ y: 0, opacity: 1 }}
        className="absolute bottom-0 left-0 right-0 p-6"
      >
        <p className="text-xs text-white/60 mb-1">{category}</p>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </motion.div>

      {/* Arrow */}
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