export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-20">
      <p className="font-mono text-xs uppercase tracking-widest text-bubblegum">
        // about
      </p>
      <h2 className="mt-3 font-display text-3xl font-bold text-plum md:text-4xl">
        Tentang Aku
      </h2>
      <p className="mt-6 max-w-2xl font-body text-plum/70">
        {/* TODO: ganti dengan cerita singkat kamu — background, minat, dan apa
        yang lagi kamu pelajari sekarang. */}
        Tulis 2-3 kalimat tentang diri kamu di sini: siapa kamu, latar
        belakang (misal masih kuliah / vokasi apa), dan apa yang lagi kamu
        dalami sekarang (Laravel, belajar Next.js, dsb).
      </p>
    </section>
  );
}
