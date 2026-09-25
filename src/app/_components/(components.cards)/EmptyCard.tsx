import Link from "next/link";

export default function EmptyCard() {
  return (
    <div className="flex min-h-64 flex-col items-center justify-center rounded-xl border border-dashed border-[#252830] px-6 text-center">
      <h2 className="font-display text-xl font-bold">NOTHING HERE YET</h2>
      <p className="mt-1 font-body text-xs text-[#747984]">
        Browse the library and add a lift to get today moving.
      </p>
      <Link
        href="/"
        className="mt-5 rounded-full bg-[#c8ff00] px-5 py-2.5 text-xs font-bold text-black transition hover:bg-[#d4ff33]"
      >
        Go to workouts
      </Link>
    </div>
  );
}
