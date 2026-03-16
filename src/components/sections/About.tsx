"use client";
import { Section } from "@/components/layouts/section";
import { TitleBadge } from "@/components/custom/title-pill";
import { Card } from "@/components/custom/cards";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const skills = [
  "Next.js / React",
  "TypeScript",
  "Node.js",
  "UI/UX Design",
  "Framer / Webflow",
  "AI Automation",
  "PostgreSQL",
  "TailwindCSS",
  "Figma",
];

export default function About() {
  return (
    <Section id="about" className="py-24">
      <div className="flex flex-col items-center justify-center py-4 gap-2 text-center">
        <TitleBadge label="Senior Developer" />
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-tight">
          Desmond Grey, Your <span className="text-gold">Architect</span>
        </h2>
        <div className="text-gold text-md mb-6">
          Brief Introduction of Myself and my experiences.
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start w-full gap-8 p-0 relative overflow-visible">
        {/* Portrait */}
        <Card className="w-full md:w-2/5">
          <div className="flex flex-col justify-between gap-6 h-full w-full p-0 relative">
            <div className="relative w-full bg-[#111] rounded-2xl  flex items-center justify-center">
              <Image
                src="/images/desmond2.png"
                alt="Desmond Grey"
                width={400}
                height={400}
                className="w-full h-auto object-cover rounded-2xl"
              />
              {/* Badge */}

              <div className="absolute bottom-0 w-full h-20 flex items-center justify-center text-portfolio-bg text-center">
                <div className="flex items-center px-4 py-2 gap-2 bg-foreground/5 rounded-full ">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-600 shrink-0" />
                  <span className="text-sm leading-tight tracking-wide text-foreground">
                    Available for work
                  </span>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-gold flex flex-col items-center justify-center text-portfolio-bg text-center">
                <span className="text-[10px] font-bold leading-tight tracking-wide">
                  7+ YRS
                  <br />
                  EXPERT
                </span>
              </div>
            </div>
            <div className="">
              <h2 className="text-2xl font-bold mb-3">
                Hello I am Desmond Grey
              </h2>
              <p className="text-white-dim">
                Software Developer Based in Australia.
              </p>
            </div>
            <Button className="w-auto rounded-full">Connect With Me</Button>
          </div>
        </Card>
        {/* Content */}
        <Card className="flex h-full w-full md:w-3/5 p-8">
          <div className="text-gold text-[10px] font-mono tracking-[0.2em] uppercase mb-3">
            {"//"} Desmond Grey
          </div>
          <p className="text-white-dim text-md leading-loose mb-5">
            I design and build high-performance digital products for ambitious
            founders, startups, and established brands. My expertise spans
            full-stack web development, UI/UX design, and business automation —
            all crafted with precision and purpose.
          </p>
          <p className="text-white-dim text-md leading-loose">
            With 7+ years in the industry, I&apos;ve shipped products used by
            thousands, generated significant client revenue, and built a
            reputation for excellence through clear communication and meticulous
            attention to detail.
          </p>

          <Separator className=" border-[rgba(255,255,255,0.07)]" />

          {/* Skills */}
          <div className="grid grid-cols-3 gap-3 mt-8 w-full">
            {skills.map((s) => (
              <div
                key={s}
                className="flex items-center gap-2 bg-[#111] border border-[rgba(255,255,255,0.07)] rounded-xl px-4 py-3 text-[12px] text-white-dim hover:border-e-gold-dim transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                {s}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Section>
  );
}
