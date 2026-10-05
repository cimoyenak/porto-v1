
export default function Hero() {
  return (
    <section className="relative mx-auto max-w-5xl overflow-hidden px-6 pb-20 pt-16 md:pt-24">
      <p className="eyebrow inline-block rounded-full bg-blush px-4 py-1 font-mono text-xs text-plum/70">
        // siswa vokasi @ smkn kabuh
      </p>

      <h1 className="mt-6 font-display text-6xl font-extrabold leading-[0.95] text-plum md:text-8xl">
        hai, aku
        <br />
        <span className="text-bubblegum">Anggun Febri Handini</span>{" "}
        <span aria-hidden>˚₊‧꒰ა ♡ ໒꒱ ‧₊˚</span>
      </h1>

      <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-plum/70">
        siswa vokasi yang sedang mendalami{" "}
        <span className="font-mono text-bubblegum">web development</span>.
        Aku banyak belajar lewat project nyata, mulai dari membangun backend
        dengan{" "}
        <span className="font-mono text-bubblegum">
          Laravel & CodeIgniter4
        </span>{" "}
        hingga mengembangkan interface dengan{" "}
        <span className="font-mono text-bubblegum">React</span> dan{" "}
        <span className="font-mono text-bubblegum">Tailwind CSS</span>. Di sini
        aku menyimpan project, proses belajar, dan hal-hal yang sedang aku
        kembangkan.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="#projects"
          className="pixel-corners bg-plum px-6 py-3 font-mono text-sm font-medium text-cream transition hover:bg-bubblegum"
        >
          lihat project →
        </a>

        <a
          href="https://www.linkedin.com/in/anggun-febri-handini-3921ab3a4"
          target="_blank"
          rel="noopener noreferrer"
          className="pixel-corners border-2 border-plum/20 px-6 py-3 font-mono text-sm font-medium text-plum transition hover:border-bubblegum hover:text-bubblegum"
        >
          linkedin
        </a>
      </div>

      {/* Pixel platform */}
      <div className="relative mt-20 h-24">
        {/* Status */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2">
          <span className="rounded-full border border-plum/10 bg-white/70 px-4 py-2 font-mono text-[10px] tracking-wide text-plum/40 backdrop-blur">
            // masih dalam perbaikan...
          </span>
        </div>

        {/* Ground */}
        <div className="absolute bottom-3 left-0 right-0 h-2 bg-plum/10" />

        {/* Pixel character */}
        <div className="pixel-character absolute bottom-5 left-0">
          <div className="pixel-character-head" />
          <div className="pixel-character-body" />
          <div className="pixel-character-leg left" />
          <div className="pixel-character-leg right" />
        </div>

        {/* Pixel blocks */}
        <div className="absolute bottom-5 right-10 flex gap-1">
          <div className="pixel-block" />
          <div className="pixel-block" />
          <div className="pixel-block" />
        </div>
      </div>
    </section>
  );
}
