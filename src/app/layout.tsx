import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fundamentos de NEXTJS",
  description: "Aprendiendo Nextjs",
};

export default function RootLayout(
  {children}: Readonly<{children: React.ReactNode;}>
) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav>
          <ul className="flex gap-3 justify-center bg-gradient-to-t from-blue-100 to-blue-300 text-black text-xl font-semibold py-5">
            <li>
              <Link href="/" className="hover:bg-slate-400 hover:text-white rounded-3xl py-2 px-6 transform transition-all">
                Home
              </Link>
            </li>

            <li>
              <Link  href="/ingresar" className="hover:bg-slate-400 hover:text-white rounded-3xl py-2 px-6 transform transition-all">
                Ingresar
              </Link>
            </li>

            <li>
              <Link href="/articulos" className="hover:bg-slate-400 hover:text-white rounded-3xl py-2 px-6 transform transition-all">
                Articulos
              </Link>
            </li>

            <li>
              <Link href="/posts" className="hover:bg-slate-400 hover:text-white rounded-3xl py-2 px-6 transform transition-all">
                  Posts
              </Link>
            </li>
          </ul>
        </nav>

        {children}
      </body>
    </html>
  );
}
