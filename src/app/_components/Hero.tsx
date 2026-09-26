import Image from "next/image";
import Link from "next/link";
import HeroImg from "../../../public/hero.png";
import { Compass } from "lucide-react";

export default function Hero() {
  return (
    <section className="flex gap-8 flex-col sm:flex-row justify-between items-center p-6 sm:p-12 rounded-2xl border border-[#222630] bg-[#15171D]">
      <div>
        <p className="mb-3 sm:mb-5 font-body text-xs font-bold uppercase tracking-wider text-[#C2F800]">
          Workout Library
        </p>
        <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight uppercase text-white-700">
          Train with intent.
          <br />
          Log every set.
        </h1>
        <p className="mt-3 sm:mt-5 max-w-lg font-body text-xs sm:text-base leading-5 sm:leading-6 text-[#9CA3AF]">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into
          today&apos;s plan, and watch the week&apos;s work add up.
        </p>
        <Link href="#library">
          <button className="mt-4 sm:mt-7 flex justify-center items-center gap-1.5 rounded-md px-6 py-3 font-body text-sm font-semibold text-black bg-[#C2F800] tracking-wider uppercase transition hover:bg-[#d5ff3c]">
            <Compass size={16} strokeWidth={2} />
            Browse Workouts
          </button>
        </Link>
      </div>
      <Image
        src={HeroImg}
        alt="Workout illustration"
        height={360}
        width={360}
      />
    </section>
  );
}
