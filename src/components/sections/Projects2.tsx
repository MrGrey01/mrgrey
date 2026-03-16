import { ProjectCard as Pc1 } from "@/components/custom/project-card-two";
import { ProjectCard as Pc3 } from "@/components/custom/project-card-three";

export default function Projects() {
  return (
    <section className="py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[260px]">
        <Pc1
          title="Fade Studio"
          category="Branding / Web"
          img="/projects/1.jpg"
          className="row-span-2"
        />

        <Pc1
          title="One Day We Met"
          category="Creative Direction"
          img="/projects/2.jpg"
        />

        <Pc1
          title="Atom AI"
          category="Product Design"
          img="/projects/3.jpg"
          className="row-span-2"
        />

        <Pc1
          title="Digital Identity"
          category="Branding"
          img="/projects/4.jpg"
        />
      </div>
    </section>
  );
}

export function Projects2() {
  const projects = [
    {
      title: "Fade Studio",
      category: "Branding / Web",
      img: "/projects/1.jpg",
    },
    {
      title: "One Day We Met",
      category: "Creative Direction",
      img: "/projects/2.jpg",
    },
    {
      title: "Atom AI",
      category: "Product Design",
      img: "/projects/3.jpg",
    },
    {
      title: "Digital Identity",
      category: "Branding",
      img: "/projects/4.jpg",
    },
  ];

  return (
    <section className="py-32">
      <div className="columns-1 md:columns-2 gap-6 space-y-6">
        {projects.map((p) => (
          <Pc3
            key={p.title}
            title={p.title}
            category={p.category}
            img={p.img}
          />
        ))}
      </div>
    </section>
  );
}
