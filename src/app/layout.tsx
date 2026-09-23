import type { Metadata } from "next";
import { Oswald, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/NavBar";
import { FitLogProvider } from "@/app/_context/FitlogContext";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FITLOG",
  description: "Fitness tracker app",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${oswald.variable} ${jakarta.variable}`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <FitLogProvider>{children}</FitLogProvider>
      </body>
    </html>
  );
}
