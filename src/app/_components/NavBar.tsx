"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useFitLog } from "@/app/_context/FitlogContext";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const { savedWorkouts, planWorkouts } = useFitLog();
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 z-50 h-16 w-full border-b border-[#202228] bg-[#0b0c0f]">
        <div className="flex h-full items-center justify-between px-4 sm:px-6">
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setIsDrawerOpen(true)}
              className="text-white sm:hidden"
              aria-label="Open navigation menu"
            >
              <Menu size={22} strokeWidth={1.8} />
            </button>
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center">
                <Image
                  src="/logo.svg"
                  alt="FITLOG logo"
                  width={28}
                  height={28}
                />
              </div>
              <span className="font-display text-xl font-bold tracking-wide text-white">
                FITLOG
              </span>
            </Link>
          </div>
          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 sm:flex">
            <Link
              href="/"
              className={`rounded-full px-4 py-2 font-body text-xs font-medium ${
                pathname === "/"
                  ? "bg-[#19220b] text-[#c8ff00]"
                  : "text-[#8e929d] transition hover:text-white"
              }`}
            >
              Workouts
            </Link>

            <Link
              href="/my-plan"
              className={`rounded-full px-4 py-2 font-body text-xs font-medium ${
                pathname === "/my-plan"
                  ? "bg-[#19220b] text-[#c8ff00]"
                  : "text-[#8e929d] transition hover:text-white"
              }`}
            >
              My Plan
            </Link>
          </div>
          <div className="flex items-center gap-3 font-body text-xs text-[#8e929d] sm:gap-5">
            <Link href="/my-plan" className="flex items-center gap-2">
              <span>Plan</span>
              <span className="flex h-4.5 min-w-4.5 items-center justify-center rounded-full bg-[#c8ff00] px-1 text-[10px] font-bold text-black">
                {planWorkouts.length}
              </span>
            </Link>
            <Link href="/my-plan" className="flex items-center gap-2">
              <span>Saved</span>
              <span className="flex h-4.5 min-w-4.5 items-center justify-center rounded-full border border-[#353942] px-1 text-[10px] text-[#a0a4ae]">
                {savedWorkouts.length}
              </span>
            </Link>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-60 sm:hidden ${
          isDrawerOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          onClick={closeDrawer}
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
            isDrawerOpen ? "opacity-100" : "opacity-0"
          }`}
        />
        <aside
          className={`absolute left-0 top-0 flex h-full w-72 flex-col border-r border-[#202228] bg-[#0b0c0f] transition-transform duration-300 ease-out ${
            isDrawerOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex h-16 items-center justify-between border-b border-[#202228] px-5">
            <span className="font-display text-lg font-bold tracking-wide text-white">
              MENU
            </span>
            <button
              type="button"
              onClick={closeDrawer}
              className="text-[#8e929d] transition hover:text-white"
              aria-label="Close navigation menu"
            >
              <X size={21} strokeWidth={1.8} />
            </button>
          </div>
          <div className="flex flex-col gap-2 p-4">
            <Link
              href="/"
              onClick={closeDrawer}
              className={`flex items-center justify-between rounded-xl px-4 py-3 font-body text-sm font-medium transition ${
                pathname === "/"
                  ? "bg-[#19220b] text-[#c8ff00]"
                  : "text-[#8e929d] hover:bg-[#15171d] hover:text-white"
              }`}
            >
              <span>Workouts</span>
            </Link>
            <Link
              href="/my-plan"
              onClick={closeDrawer}
              className={`flex items-center justify-between rounded-xl px-4 py-3 font-body text-sm font-medium transition ${
                pathname === "/my-plan"
                  ? "bg-[#19220b] text-[#c8ff00]"
                  : "text-[#8e929d] hover:bg-[#15171d] hover:text-white"
              }`}
            >
              <span>My Plan</span>
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}
