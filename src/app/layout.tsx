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
          <ul className="flex gap-3 justify-center bg-white text-black rounded-sm">
            <li className="hover:bg-slate-500 hover:text-white rounded-md py-2 px-4">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:bg-slate-500 hover:text-white rounded-md py-2 px-4">
              <Link href="/ingresar">Ingresar</Link>
            </li>
            <li className="hover:bg-slate-500 hover:text-white rounded-md py-2 px-4">
              <Link href="/articulos">Articulos</Link>
            </li>
          </ul>
        </nav>

        {children}
      </body>
    </html>
  );
}
