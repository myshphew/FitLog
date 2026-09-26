import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-[#202228] bg-[#0b0c0f]">
      <div className="flex min-h-20 items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="FITLOG logo" width={20} height={20} />
          <span className="font-display text-sm font-bold tracking-wide text-white">
            FITLOG
          </span>
        </Link>
        <p className="font-body text-[11px] text-[#686d78]">
          &copy; 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}
