"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function ProjectCard({
  title,
  category,
  img,
  tags,
  framework,
  className,
}: {
  title: string;
  category: string;
  img: string;
  tags?: string[];
  framework?: string;
  className?: string;
}) {
  return (
    <motion.div
      whileHover="hover"
      className={`group relative rounded-2xl overflow-hidden bg-[#111] border border-white/5 shadow-[16px_24px_20px_8px_rgba(0,0,0,0.4),inset_0_2px_0_rgba(184,180,180,0.08)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.6)] ${className}`}
    >
      {/* Image */}
      <motion.div
        className="absolute inset-0 transition-transform duration-700 ease-out"
        variants={{ hover: { scale: 1.05 } }}
        transition={{ duration: 0.4 }}
      >
        <Image src={img} alt={title} fill className="object-cover" />
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />

      {framework && (
        <div className="absolute top-0 right-0 p-6 bg-[rgba(245,243,238,0.06)] border border-[rgba(255,255,255,0.07)] rounded-full px-3 py-1 m-3 text-xs">
          {framework}
        </div>
      )}

      {/* Content */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 p-6"
        initial={{ y: 40, opacity: 0 }}
        variants={{
          hover: { y: 0, opacity: 1 },
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-3/4 flex flex-col gap-1 mb-4">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="text-xs text-white/60 line-clamp-2">{category}</p>
        </div>
        {tags && (
          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="bg-[rgba(245,243,238,0.06)] border border-[rgba(255,255,255,0.07)] rounded-full px-3 py-1 text-[10px] text-[rgba(245,243,238,0.55)]"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </motion.div>

      {/* Arrow */}
      <Link href="#" className="absolute inset-0">
        <motion.div
          variants={{ hover: { opacity: 1, scale: 1 } }}
          initial={{ opacity: 0, scale: 0.8 }}
          className="absolute bottom-5 right-5 bg-black/70 backdrop-blur-md p-3 rounded-full shadow-[0_2px_6px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.06)]"
        >
          <ArrowUpRight size={16} />
        </motion.div>
      </Link>
    </motion.div>
  );
}
