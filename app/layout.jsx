import { Baloo_2, Quicksand, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-baloo",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata = {
  title: "Anggun Febri Handini — Portofolio",
  description: "Portofolio Anggun Febri Handini",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body
        className={`${baloo.variable} ${quicksand.variable} ${jetbrainsMono.variable} font-body bg-cream text-plum`}
      >
        {children}
      </body>
    </html>
  );
}
