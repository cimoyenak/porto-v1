const links = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#contact", label: "contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-plum/10 bg-cream/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#" className="font-display text-xl font-extrabold text-plum">
          anggun.dev <span className="text-bubblegum">♡</span>
        </a>
        <ul className="hidden gap-8 font-mono text-sm text-plum/70 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition hover:text-bubblegum">
                {"<"}{link.label}{"/>"}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="pixel-corners bg-plum px-4 py-2 font-mono text-xs font-medium text-cream transition hover:bg-bubblegum"
        >
          say hi!
        </a>
      </nav>
    </header>
  );
}
