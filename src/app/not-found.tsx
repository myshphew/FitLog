import Link from "next/link";
import { Dumbbell } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-[#101114] px-6">
      <section className="w-full max-w-xl text-center">
        <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#292c33] bg-[#17191e]">
          <Dumbbell size={26} strokeWidth={1} className="text-lime-400" />
        </div>
        <p className="font-oswald text-[clamp(7rem,20vw,11rem)] font-bold leading-[0.8] tracking-[-0.06em] text-white">
          404
        </p>
        <h1 className="mt-10 font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
          This page doesn&apos;t exist.
        </h1>
        <p className="mx-auto mt-4 max-w-md font-body text-sm leading-6 text-[#8e929d]">
          The page you&apos;re looking for may have been removed, moved, or
          never existed in the first place.
        </p>
        <div className="mt-8 flex justify-center">
          <Link href="/">
            <button className="mt-4 sm:mt-7 flex justify-center items-center gap-1.5 rounded-md px-6 py-3 font-body text-sm leading-5 font-semibold text-black bg-[#C2F800] tracking-wider uppercase transition hover:bg-[#d5ff3c]">
              Browse Workouts
            </button>
          </Link>
        </div>
        <div className="mx-auto mt-16 flex max-w-xs items-center gap-3">
          <span className="h-px flex-1 bg-[#292c33]" />
          <span className="font-body text-[10px] font-medium uppercase tracking-[0.2em] text-[#555963]">
            FitLog
          </span>
          <span className="h-px flex-1 bg-[#292c33]" />
        </div>
      </section>
    </main>
  );
}
