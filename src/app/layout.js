import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header'
import Providers from "./Providers";
import NavBar from "@/components/NavBar";
import SearchBox from "@/components/SearchBox";
import { Suspense } from "react";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDB Clone",
  description: "This is a imdb clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Suspense>
        <Header />
        <NavBar />
        <SearchBox />
        {children}
        </Suspense>
        </Providers>
        </body>
    </html>
  );
}
