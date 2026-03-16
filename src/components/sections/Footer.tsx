export default function Footer() {
  const cols = [
    {
      title: "Navigate",
      links: [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Projects", href: "#projects" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Web Development", href: "#services" },
        { label: "UI/UX Design", href: "#services" },
        { label: "Automation", href: "#services" },
        { label: "Consulting", href: "#contact" },
      ],
    },
    {
      title: "Contact",
      links: [
        {
          label: "hello@desmondgrey.com",
          href: "mailto:hello@desmondgrey.com",
        },
        { label: "Book a Call", href: "#contact" },
        { label: "Twitter / X", href: "#" },
        { label: "LinkedIn", href: "#" },
      ],
    },
  ];

  const socials = ["𝕏", "in", "gh", "dr"];

  return (
    <footer className="max-w-7xl mx-auto pt-16 pb-10 border-t border-[rgba(255,255,255,0.07)]">
      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-16 mb-16">
        {/* Brand */}
        <div>
          <div className="font-display text-xl font-bold mb-4">
            <span className="text-gold">MG</span>
            <span className="text-[rgba(245,243,238,0.4)] mx-2">·</span>
            <span>Desmond Grey</span>
          </div>
          <p className="text-[rgba(245,243,238,0.5)] text-[13px] leading-relaxed max-w-60 mb-6">
            Digital architect crafting high-end products for ambitious brands.
            Available for freelance projects worldwide.
          </p>
          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s}
                href="#"
                className="w-9 h-9 bg-[rgba(245,243,238,0.05)] border border-[rgba(255,255,255,0.07)] rounded-full flex items-center justify-center text-[12px] text-[rgba(245,243,238,0.5)] hover:bg-gold hover:text-portfolio-bg hover:border-gold transition-all"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Columns */}
        {cols.map((col) => (
          <div key={col.title}>
            <h4 className="text-[10px] font-mono tracking-[0.18em] uppercase text-gold mb-5">
              {col.title}
            </h4>
            <ul className="flex flex-col gap-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-[13px] text-[rgba(245,243,238,0.5)] hover:text-gold transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div className="border-t border-[rgba(255,255,255,0.07)] pt-6 flex flex-wrap items-center justify-between gap-3">
        <p className="text-[11px] text-[rgba(245,243,238,0.35)]">
          © 2026 Desmond Grey. All rights reserved.
        </p>
        <p className="text-[10px] font-mono text-gold tracking-widest">
          {"//"} crafted with precision
        </p>
      </div>
    </footer>
  );
}
