import Link from "next/link";

export default function EmptyCard() {
  return (
    <div className="flex min-h-64 flex-col items-center justify-center rounded-xl bg-[#15171D50] border border-dashed border-[#222630] px-6 text-center">
      <h2 className="font-display text-xl font-bold">NOTHING HERE YET</h2>
      <p className="mt-1 font-body text-xs text-[#9CA3AF]">
        Browse the library and add a lift to get today moving.
      </p>
      <Link
        href="/"
        className="mt-4 w-fit flex justify-center items-center gap-1.5 rounded-md px-5 py-2.5 font-body text-sm font-semibold text-black bg-[#C2F800] transition hover:bg-[#d5ff3c]"
      >
        Go to workouts
      </Link>
    </div>
  );
}
