// TODO: ganti dengan project asli kamu.
const projects = [
  {
    title: "Nama Project 1",
    description: "Deskripsi singkat: masalah apa yang diselesaikan, dan tech stack yang dipakai.",
    tech: ["Laravel", "MySQL"],
    link: "#",
  },
  {
    title: "Nama Project 2",
    description: "Deskripsi singkat project kedua kamu.",
    tech: ["React"],
    link: "#",
  },
];

function ProjectCard({ project }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group pixel-corners block border-2 border-plum/10 bg-white/60 p-6 transition hover:border-bubblegum hover:bg-blush/30"
    >
      <h3 className="font-display text-xl font-bold text-plum group-hover:text-bubblegum">
        {project.title}
      </h3>
      <p className="mt-2 font-body text-sm text-plum/70">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-full bg-plum/5 px-3 py-1 font-mono text-xs text-plum/60"
          >
            {t}
          </span>
        ))}
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
      <p className="font-mono text-xs uppercase tracking-widest text-bubblegum">
        // projects
      </p>
      <h2 className="mt-3 font-display text-3xl font-bold text-plum md:text-4xl">
        Project yang Pernah Aku Kerjakan
      </h2>
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}
