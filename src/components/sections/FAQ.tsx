"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
// import { Card } from "../custom/cards";
import { TitleBadge } from "../custom/title-pill";
import { Section } from "../layouts/section";

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Most projects range from 2–8 weeks depending on scope and complexity. I provide detailed timelines during discovery, and I stick to them. Larger projects are broken into milestones so you can track progress clearly.",
  },
  {
    q: "What does your pricing look like?",
    a: "I offer both fixed-price project quotes and hourly retainers. Fixed pricing works well for defined scopes; retainers suit ongoing work. I provide a detailed quote after the discovery call — no hidden fees, ever.",
  },
  {
    q: "Do you offer post-launch support?",
    a: "Yes. I offer monthly maintenance packages that cover updates, bug fixes, performance monitoring, and feature additions. Many clients stay on after launch, and I love working on long-term products.",
  },
  {
    q: "Which tools and technologies do you work with?",
    a: "My primary stack is Next.js, TypeScript, TailwindCSS, and PostgreSQL. I also work with Figma, Framer, Webflow, Node.js, and various AI/automation tools. I'm happy to adapt to your existing tech stack.",
  },
  {
    q: "How do we communicate during the project?",
    a: "We use whatever works for you — Slack, email, Notion, Linear. I send weekly progress updates minimum, and you'll always have access to a live staging environment to review work in real time.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`bg-[#111] rounded-2xl overflow-hidden transition-colors duration-300 shadow-[16px_24px_20px_8px_rgba(0,0,0,0.4),inset_0_2px_0_rgba(184,180,180,0.08)] ${
        open
          ? " border border-gold-dim"
          : "border-[rgba(255,255,255,0.07)] hover:border-gold-dim"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
      >
        <span className="text-[14px] font-medium">{q}</span>
        <ChevronDown
          size={16}
          className={`text-gold shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-[13px] text-white-dim leading-loose">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <Section id="faq" className="py-24">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-20 items-start">
        {/* Left */}
        <div className="lg:sticky lg:top-28">
          <TitleBadge label="Questions, Answers" />
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-tight mb-5">
            Common <span className="text-gold">Questions</span>
          </h2>
          <p className="text-[rgba(245,243,238,0.55)] text-[14px] leading-relaxed">
            Everything you need to know before we start working together.
          </p>
        </div>

        {/* FAQs */}
        <div className="flex flex-col gap-3">
          {faqs.map((f) => (
            <FaqItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </Section>
  );
}
