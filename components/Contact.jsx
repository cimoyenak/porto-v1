export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
      <div className="pixel-corners bg-plum px-8 py-14 text-center text-cream md:px-16">
        <p className="font-mono text-xs uppercase tracking-widest text-blush">
          // contact
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
          Mari Terhubung <span aria-hidden>♡</span>
        </h2>
        <p className="mx-auto mt-3 max-w-md font-body text-cream/70">
          Terbuka untuk kolaborasi, magang, atau sekadar ngobrol soal
          teknologi.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="mailto:emailkamu@example.com"
            className="pixel-corners bg-bubblegum px-6 py-3 font-mono text-sm font-medium text-plum transition hover:bg-blush"
          >
            kirim email
          </a>
          <a
            href="https://www.linkedin.com/in/anggun-febri-handini-3921ab3a4"
            target="_blank"
            rel="noopener noreferrer"
            className="pixel-corners border-2 border-cream/30 px-6 py-3 font-mono text-sm font-medium text-cream transition hover:border-cream"
          >
            linkedin
          </a>
        </div>
      </div>
    </section>
  );
}
