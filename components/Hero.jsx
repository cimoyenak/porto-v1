export default function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-20 pt-16 md:pt-24">
      <p className="eyebrow inline-block rounded-full bg-blush px-4 py-1 font-mono text-xs text-plum/70">
        // magang @ Kominfo Kota Kediri
      </p>
      <h1 className="mt-6 font-display text-6xl font-extrabold leading-[0.95] text-plum md:text-8xl">
        hai, aku
        <br />
        <span className="text-bubblegum">Anggun</span> <span aria-hidden>˚₊‧꒰ა ♡ ໒꒱ ‧₊˚</span>
      </h1>
      <p className="mt-6 max-w-xl font-body text-lg text-plum/70">
        developer yang lagi belajar <span className="font-mono text-bubblegum">Next.js</span>,
        sebelumnya lebih banyak main di <span className="font-mono text-bubblegum">Laravel</span>.
        Ini tempat aku kumpulin project & progress belajar.
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
    </section>
  );
}
