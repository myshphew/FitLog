import Image from "next/image";
import HeroImg from "../../../public/hero.png";

export default function Hero() {
  return (
    <section className="flex justify-between items-center px-12 py-12 rounded-2xl border border-[#222630] bg-[#15171D]">
      <div>
        <p className="mb-5 font-body text-xs font-bold uppercase tracking-wider text-[#C2F800]">
          Workout Library
        </p>
        <h1 className="font-display text-6xl font-extrabold tracking-tight uppercase text-white-700">
          Train with intent.
          <br />
          Log every set.
        </h1>
        <p className="mt-5 max-w-lg font-body text-base leading-6 text-[#9CA3AF]">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into
          today&apos;s plan, and watch the week&apos;s work add up.
        </p>
        <button className="mt-7 rounded-md bg-[#C2F800] px-6 py-3 font-body text-xs font-bold tracking-wider text-black transition hover:bg-[#d5ff3c]">
          Browse Workouts
        </button>
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
