const projects = [
  {
    title: "NurimanPay",
    description:
      "Platform transparansi dan akuntabilitas infak Masjid Nurul Iman yang dikembangkan sebagai capstone Coding Camp DBS Foundation. Menyediakan informasi program, penyaluran dana, transaksi, dan dashboard admin untuk membantu meningkatkan kepercayaan donatur.",
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Express.js",
      "Supabase",
      "PostgreSQL",
      "JWT",
    ],
    link: "https://nuriman-pay.vercel.app/",
    featured: true,
  },
  {
    title: "Portal Resmi Kota Kediri",
    description:
      "Pengembangan dan redesign portal resmi Pemerintah Kota Kediri selama internship di Diskominfo. Mengerjakan frontend dan backend untuk berita, agenda, layanan publik, profil kota, pemerintahan, dan potensi daerah.",
    tech: [
      "Laravel",
      "React",
      "Inertia.js",
      "Vite",
      "Tailwind CSS",
      "MySQL",
    ],
    link: null,
    featured: true,
  },
  {
    title: "Website SMK Negeri Kabuh",
    description:
      "Pengembangan website sekolah untuk menyajikan profil dan informasi sekolah secara lebih terstruktur dan mudah diakses.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: null,
  },
  {
    title: "Monitoring Ketinggian Air",
    description:
      "Project IoT untuk memantau ketinggian air menggunakan sensor ultrasonik dan ESP8266, serta mengontrol pompa berdasarkan kondisi ketinggian air.",
    tech: ["ESP8266", "Arduino", "Ultrasonic Sensor", "Relay"],
    link: null,
  },
];

function ProjectCard({ project, index }) {
  const content = (
    <>
      {/* Number */}
      <div className="flex items-start justify-between">
        <span className="font-mono text-xs text-plum/30">
          {String(index + 1).padStart(2, "0")}
        </span>

        {project.link && (
          <span className="font-mono text-xs text-bubblegum transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
            ↗
          </span>
        )}
      </div>

      {/* Content */}
      <div className="mt-6 flex-1">
        <h3 className="font-display text-xl font-bold text-plum transition-colors group-hover:text-bubblegum">
          {project.title}
        </h3>

        <p className="mt-3 font-body text-sm leading-relaxed text-plum/60">
          {project.description}
        </p>
      </div>

      {/* Tech */}
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-plum/5 px-3 py-1 font-mono text-[10px] text-plum/50"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Hover line */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-bubblegum transition-all duration-300 group-hover:w-full" />
    </>
  );

  const className = `group relative flex h-full flex-col overflow-hidden rounded-2xl border border-plum/10 bg-white/60 p-6 transition-all duration-300 ${
    project.link
      ? "cursor-pointer hover:-translate-y-1 hover:border-bubblegum/50 hover:bg-white"
      : "cursor-default"
  }`;

  if (project.link) {
    return (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {content}
      </a>
    );
  }

  return <div className={className}>{content}</div>;
}

export default function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      {/* Header */}
      <div className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-bubblegum">
          // selected work
        </p>

        <h2 className="mt-3 font-display text-3xl font-bold text-plum md:text-5xl">
          Beberapa Hal yang
          <br />
          Pernah Aku Bangun.
        </h2>

        <p className="mt-5 font-body text-sm leading-relaxed text-plum/60 md:text-base">
          Project yang aku kerjakan selama belajar, mengikuti program,
          berkompetisi, dan mendapatkan pengalaman di dunia web development.
        </p>
      </div>

      {/* Featured */}
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {featuredProjects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={projects.indexOf(project)}
          />
        ))}
      </div>

      {/* Other projects */}
      <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {otherProjects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={projects.indexOf(project)}
          />
        ))}
      </div>
    </section>
  );
}