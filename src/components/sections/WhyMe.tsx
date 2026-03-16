"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  BarChart2,
  Target,
  MessageSquare,
  Layers,
  Wrench,
  Zap,
} from "lucide-react";
import { Section } from "../layouts/section";
import { TitleBadge } from "../custom/title-pill";

const reasons = [
  {
    icon: BarChart2,
    title: "Business Partner, Not Just Backend",
    desc: "I think about your business goals first. Every technical decision is weighed against what moves the needle for you.",
  },
  {
    icon: Target,
    title: "Scarily Reliability Pro",
    desc: "Deadlines aren't suggestions. I deliver on time, every time, with regular updates so you're never left wondering.",
  },
  {
    icon: MessageSquare,
    title: "Clear, Consistent Communication",
    desc: "No technical jargon unless you want it. I translate complex problems into plain language and keep you informed.",
  },
  {
    icon: Layers,
    title: "Multi-Specialty, Cross-Domain",
    desc: "Design, development, automation, SEO — I cover the full stack so you don't need to manage multiple freelancers.",
  },
  {
    icon: Wrench,
    title: "Long-Term Support & Improvements",
    desc: "My relationships don't end at launch. Ongoing maintenance, updates, and optimizations keep your product sharp.",
  },
  {
    icon: Zap,
    title: "Easy to Work Within",
    desc: "Flexible, responsive, and low-friction to work with. I adapt to your workflow, tools, and communication style.",
  },
];

export default function WhyMe() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section className="py-24 bg-[#111]" ref={ref}>
      <div className="text-center max-w-xl mx-auto mb-14">
        <TitleBadge label="Why Choose Me" />
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-tight mb-3">
          Why Me as Your <span className="text-gold">Developer</span>
        </h2>
        <p className="text-[rgba(245,243,238,0.55)] text-[14px] leading-relaxed">
          I bring more than just technical skills to every project.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {reasons.map((r, i) => {
          const Icon = r.icon;
          return (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="bg-portfolio-card border border-[rgba(255,255,255,0.03)] rounded-2xl p-7 hover:border-gold-dim transition-all duration-300 shadow-[16px_24px_20px_8px_rgba(0,0,0,0.4),inset_0_2px_0_rgba(184,180,180,0.08)]"
            >
              <div className="w-11 h-11 bg-linear-to-br from-[rgba(201,168,76,0.15)] to-transparent border border-[rgba(201,168,76,0.12)] rounded-xl flex items-center justify-center mb-5">
                <Icon size={18} className="text-gold" />
              </div>
              <h3 className="text-[14px] font-semibold mb-2.5">{r.title}</h3>
              <p className="text-[12px] text-[rgba(245,243,238,0.55)] leading-relaxed">
                {r.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
