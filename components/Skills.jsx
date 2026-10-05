"use client";

const skills = [
  { name: "HTML", logo: "HTML" },
  { name: "CSS", logo: "CSS" },
  { name: "JavaScript", logo: "JS" },
  { name: "React", logo: "⚛" },
  { name: "PHP", logo: "PHP" },
  { name: "Laravel", logo: "L" },
  { name: "MySQL", logo: "SQL" },
  { name: "Git", logo: "◆" },
];

const firstRow = skills.slice(0, 4);
const secondRow = skills.slice(4);

function SkillItem({ skill }) {
  return (
    <div className="flex shrink-0 items-center gap-3 px-8">
      <span className="flex h-9 min-w-9 items-center justify-center rounded-lg border border-plum/10 bg-white/60 px-2 font-mono text-xs font-bold text-plum/50">
        {skill.logo}
      </span>

      <span className="whitespace-nowrap font-display text-sm font-semibold text-plum/60">
        {skill.name}
      </span>

      <span className="ml-3 text-lg text-bubblegum/60">✦</span>
    </div>
  );
}

function MarqueeRow({ items, reverse = false }) {
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="group overflow-hidden">
      <div
        className={`flex min-w-max ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        } group-hover:[animation-play-state:paused]`}
      >
        {duplicatedItems.map((skill, index) => (
          <SkillItem
            key={`${skill.name}-${index}`}
            skill={skill}
          />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="overflow-hidden py-24">
      <div className="mx-auto max-w-5xl px-6">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-bubblegum">
          // skills
        </p>

        <h2 className="mt-3 font-display text-3xl font-bold text-plum md:text-5xl">
          Tools I Build With.
        </h2>

        <p className="mt-5 max-w-2xl font-body text-sm leading-relaxed text-plum/60 md:text-base">
          Beberapa teknologi yang paling sering aku gunakan dalam project
          selama belajar dan berkembang sebagai Junior Web Developer.
        </p>
      </div>

      <div className="relative mt-12 space-y-5">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-cream to-transparent" />

        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-cream to-transparent" />

        <MarqueeRow items={firstRow} />

        <MarqueeRow items={secondRow} reverse />
      </div>
    </section>
  );
}