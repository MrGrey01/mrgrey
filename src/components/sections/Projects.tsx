"use client";

// import { ExternalLink } from "lucide-react";
import { Section } from "../layouts/section";
import { TitleBadge } from "../custom/title-pill";
import { ProjectCard } from "../custom/project-card";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

const projects = [
  {
    title: "Brand Identity Platform",
    desc: "Full redesign and development of a SaaS platform for brand management, increasing user retention by 60%.",
    tags: ["Next.js", "Figma", "Supabase"],
    previewContent: "Building brands\nto drive ideas",
    accentColor: "#c9a84c",
    imgSrc: "/projects/1.png",
    className: "row-span-2",
    framework: "Next.js",
  },
  {
    title: "Business Automation Suite",
    desc: "AI-powered workflow automation system for a logistics enterprise, saving 40+ hours per week.",
    tags: ["Node.js", "AI/ML", "Zapier"],
    previewContent: "Scale Business\nwith Automation",
    accentColor: "#c9a84c",
    imgSrc: "/projects/2.png",
    className: "",
    framework: "Next.js",
  },
  {
    title: "One Day We Met",
    desc: "Creative Direction and branding for a new line of sustainable products, resulting in a 30% increase in brand awareness.",
    tags: ["Node.js", "AI/ML", "Zapier"],
    previewContent: "Scale Business\nwith Automation",
    accentColor: "#c9a84c",
    imgSrc: "/projects/3.jpeg",
    className: "row-span-2",
    framework: "Next.js",
  },
  {
    title: "Product Design for Atom AI",
    desc: "AI-powered workflow automation system for a logistics enterprise, saving 40+ hours per week.",
    tags: ["Node.js", "AI/ML", "Zapier"],
    previewContent: "Scale Business\nwith Automation",
    accentColor: "#c9a84c",
    imgSrc: "/projects/4.png",
    className: "",
    framework: "Next.js",
  },
];

export default function Projects() {
  return (
    <Section id="projects" className="py-24">
      {/* Header */}
      <div className="flex items-end justify-between mb-12">
        <div>
          <TitleBadge label="Portfolio" />

          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-tight">
            Recent <span className="text-gold">Projects</span>
          </h2>
        </div>
        <Button
          variant="outline"
          className="hidden md:flex border border-[rgba(255,255,255,0.1)] px-6 py-3 rounded-full text-sm hover:border-gold hover:text-gold transition-colors"
        >
          View All <ArrowRight size={16} />
        </Button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[260px]">
        {projects.map((p) => (
          <ProjectCard
            key={p.title}
            title={p.title}
            category={p.desc}
            img={p.imgSrc}
            tags={p.tags}
            className={p.className}
            framework={p.framework}
          />
        ))}
      </div>

      <div className="flex md:hidden items-center justify-center mt-10">
        <Button
          variant="outline"
          className="flex border border-[rgba(255,255,255,0.1)] px-6 py-3 rounded-full text-sm hover:border-gold hover:text-gold transition-colors"
        >
          View All <ArrowRight size={16} />
        </Button>
      </div>
    </Section>
  );
}
