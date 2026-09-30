// TODO: ganti array ini sesuai skill kamu yang sebenarnya.
const skills = [
  { name: "Laravel", level: "Intermediate" },
  { name: "PHP", level: "Intermediate" },
  { name: "JavaScript", level: "Basic" },
  { name: "React", level: "Basic" },
  { name: "MySQL", level: "Intermediate" },
  { name: "Git & GitHub", level: "Basic" },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-20">
      <p className="font-mono text-xs uppercase tracking-widest text-bubblegum">
        // skills
      </p>
      <h2 className="mt-3 font-display text-3xl font-bold text-plum md:text-4xl">
        Yang Aku Kuasai
      </h2>
      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="pixel-corners border-2 border-plum/10 bg-white/60 p-5 transition hover:border-bubblegum hover:bg-blush/40"
          >
            <p className="font-display font-semibold text-plum">{skill.name}</p>
            {skill.level && (
              <p className="mt-1 font-mono text-xs text-plum/40">{skill.level}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
