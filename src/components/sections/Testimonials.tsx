"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Section } from "../layouts/section";
import { TitleBadge } from "../custom/title-pill";
import { Card } from "../custom/cards";
import { Separator } from "../ui/separator";

const testimonials = [
  {
    name: "Ryan Johnson",
    role: "CEO, Startup Founders",
    initials: "RJ",
    text: "Desmond delivered a flawless product on time and on budget. His attention to detail and proactive communication made the whole process smooth. Our conversion rate jumped 40% after launch — couldn't be happier.",
  },
  {
    name: "The Bittin",
    role: "Founder, Design Studio",
    initials: "TB",
    text: "Working with Mr Grey felt like having a CTO on demand. He understood our vision immediately, pushed back when needed, and executed with precision. The UI is simply stunning.",
  },
  {
    name: "Diana Holtz",
    role: "Product Director, TechCorp",
    initials: "DH",
    text: "Rare to find someone who can think strategically AND execute technically. Desmond is genuinely one of the best freelancers I've worked with in 10 years of building products.",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section id="testimonials" className="py-24" ref={ref}>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 items-start">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="lg:sticky lg:top-28"
        >
          <TitleBadge label="Social Proof" />

          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-tight mb-5">
            Clients <span className="text-gold">Trust</span> Me
          </h2>
          <p className="text-[rgba(245,243,238,0.55)] text-[14px] leading-relaxed mb-10">
            Real results from real projects with real people who trusted the
            process.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            {[
              { val: "100+", label: "Projects Done" },
              { val: "$250k", label: "Revenue Gen." },
              { val: "4.8★", label: "Average Rating" },
            ].map((s) => (
              <Card key={s.label} className="w-auto">
                <div className="font-display text-[2.2rem] font-bold text-[#f5f3ee] leading-none">
                  {s.val.replace(/[+★k]/g, "")}
                  <span className="text-gold">{s.val.match(/[+★k]/)?.[0]}</span>
                </div>
                <div className="text-[10px] uppercase tracking-widest text-[rgba(245,243,238,0.45)] mt-1.5">
                  {s.label}
                </div>
              </Card>
            ))}
          </div>

          <Separator className="mb-4" />

          <div className="flex gap-3">
            <a
              href="#contact"
              className="bg-gold text-portfolio-bg px-7 py-3 rounded-full font-semibold text-sm hover:opacity-85 transition-opacity"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="border border-[rgba(255,255,255,0.1)] text-[#f5f3ee] px-7 py-3 rounded-full text-sm hover:border-gold hover:text-gold transition-colors"
            >
              See Work
            </a>
          </div>
        </motion.div>

        {/* RIGHT — testimonials */}
        <div className="flex flex-col gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="bg-[#111] rounded-2xl p-7 shadow-[16px_24px_20px_8px_rgba(0,0,0,0.4),inset_0_2px_0_rgba(184,180,180,0.08)]"
            >
              <div className="text-gold text-sm tracking-widest mb-4">
                ★★★★★
              </div>
              <p className="text-[13px] text-[rgba(245,243,238,0.65)] leading-loose mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-portfolio-card2 border border-[rgba(255,255,255,0.07)] flex items-center justify-center font-display font-bold text-gold text-sm shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="text-[13px] font-semibold">{t.name}</div>
                  <div className="text-[11px] text-[rgba(245,243,238,0.45)]">
                    {t.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
