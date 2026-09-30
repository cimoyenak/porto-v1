# Portofolio — Anggun Febri Handini

Scaffold Next.js (App Router, JavaScript + JSX) + Tailwind CSS buat website
portofolio. Tema: **coquette x IT** — palet pastel pink/cream, aksen font
monospace ala kode, badge & tombol bergaya pixel-corner.

## Cara jalanin di lokal

1. Pastikan Node.js udah terinstall (versi 18+ direkomendasikan).
2. Install dependencies:
   ```bash
   npm install
   ```
3. Jalankan development server:
   ```bash
   npm run dev
   ```
4. Buka [http://localhost:3000](http://localhost:3000) di browser.

## Struktur folder

```
app/
  layout.jsx       -> wrapper global (font, metadata)
  page.jsx         -> halaman utama, merangkai semua section
  globals.css      -> Tailwind + background dot-grid pastel
components/
  Navbar.jsx
  Hero.jsx
  About.jsx        -> ganti teks TODO dengan cerita kamu
  Skills.jsx       -> ganti array `skills` dengan skill asli kamu
  Projects.jsx     -> ganti array `projects` dengan project asli kamu
  Contact.jsx      -> ganti email di sini
  Footer.jsx
```

Cari komentar `// TODO` di dalam file `About.jsx`, `Skills.jsx`, dan
`Projects.jsx` — di situ tempat kamu ganti dengan data asli.

## Push ke GitHub

```bash
git init
git add .
git commit -m "initial commit: scaffold portofolio"
git branch -M main
git remote add origin <url-repo-github-kamu>
git push -u origin main
```

## Deploy ke Vercel

1. Buka [vercel.com](https://vercel.com), login pakai akun GitHub.
2. Klik **New Project**, pilih repo GitHub ini.
3. Vercel otomatis kedetect sebagai project Next.js — tinggal klik **Deploy**.
4. Selesai, kamu dapat URL `*.vercel.app` yang bisa dishare.

## Ide lanjutan

- Tambahin animasi scroll pakai [Framer Motion](https://www.framer.com/motion/)
  biar kesannya lebih "hidup" tanpa perlu belajar Three.js dulu.
- Kalau nanti mau project bisa di-manage tanpa edit kode, pertimbangkan
  [Supabase](https://supabase.com) (Postgres gratis, free tier generous)
  buat nyimpen data project & skill.
