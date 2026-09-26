import type { Metadata } from "next";
import { Oswald, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/NavBar";
import { FitLogProvider } from "@/app/_context/FitlogContext";
import Footer from "./_components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    <html
      lang="en"
      className={`${oswald.variable} ${jakarta.variable} scroll-smooth scroll-mt-16`}
    >
      <FitLogProvider>
        <body className="min-h-screen flex flex-col" cz-shortcut-listen="true">
          <Navbar />
          {children}
          <Footer />
          <ToastContainer />
        </body>
      </FitLogProvider>
    </html>
  );
}
