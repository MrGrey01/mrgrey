"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#process", label: "Process" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((s) => {
        const el = s as HTMLElement;
        if (window.scrollY >= el.offsetTop - 120) setActive(el.id);
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`rounded-full fixed top-2 left-0 right-0 z-50 flex items-center justify-between px-16 py-4 transition-all duration-300 max-w-6xl mx-auto ${
        scrolled
          ? "bg-[rgba(10,10,10,0.9)] backdrop-blur-xl border-b border-[rgba(255,255,255,0.07)]"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <a
        href="#home"
        className="flex items-center gap-2 font-display text-lg tracking-wide"
      >
        <span className="text-gold">MG</span>
        <span className="text-[rgba(245,243,238,0.5)] text-sm">·</span>
        <span className="text-[#f5f3ee]">Desmond Grey</span>
      </a>

      {/* Links */}
      <div className="hidden md:flex gap-9">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`text-xs tracking-widest uppercase transition-colors duration-300 ${
              active === link.href.slice(1)
                ? "text-gold"
                : "text-[rgba(245,243,238,0.55)] hover:text-gold"
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* CTA */}
      <a
        href="#contact"
        className="bg-gold text-portfolio-bg px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase hover:opacity-85 transition-opacity"
      >
        Hire Me
      </a>
    </motion.nav>
  );
}
