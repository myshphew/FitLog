"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="h-16 w-full fixed top-0 z-50 border-b border-[#202228] bg-[#0b0c0f]">
      <div className="mx-auto flex h-full items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center">
            <Image src="/logo.svg" alt="FITLOG logo" width={28} height={28} />
          </div>

          <span className="font-display text-xl font-bold tracking-wide text-white">
            FITLOG
          </span>
        </Link>

        <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-1">
          <Link
            href="/"
            className={`rounded-full px-4 py-2 font-jakarta text-xs font-medium ${
              pathname === "/"
                ? "bg-[#19220b] text-[#c8ff00]"
                : "text-[#8e929d] transition hover:text-white"
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className={`rounded-full px-4 py-2 font-jakarta text-xs font-medium ${
              pathname === "/my-plan"
                ? "bg-[#19220b] text-[#c8ff00]"
                : "text-[#8e929d] transition hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </div>

        <div className="flex items-center gap-5 font-jakarta text-xs text-[#8e929d]">
          <div className="flex items-center gap-2">
            <span>Plan</span>

            <span className="flex h-4.5 min-w-4.5 items-center justify-center rounded-full bg-[#c8ff00] px-1 text-[10px] font-bold text-black">
              0
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span>Saved</span>

            <span className="flex h-4.5 min-w-4.5 items-center justify-center rounded-full border border-[#353942] px-1 text-[10px] text-[#a0a4ae]">
              0
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
