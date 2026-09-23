"use client";

import WorkoutCard from "./_components/WorkoutCard";
import { useFitLog } from "@/app/_context/FitlogContext";

export default function Home() {
  const { workouts, loading, error } = useFitLog();

  if (loading) {
    return <main className="mt-16">Loading workouts...</main>;
  }

  if (error) {
    return <main className="mt-16">Error: {error}</main>;
  }

  return (
    <main className="mt-16">
      <h1 className="text-6xl font-display text-white-700">
        TRAIN WITH INTENT. LOG EVERY SET.
      </h1>

      <p className="text-md font-body">
        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into
        today&#39;s plan, and watch the week&#39;s work add up.
      </p>

      <section className="pb-10 pt-14">
        <div className="mb-7">
          <h2 className="font-oswald text-[27px] font-bold uppercase leading-none text-white">
            The Library
          </h2>

          <p className="mt-2 font-jakarta text-[12px] text-[#858a96]">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {workouts.map((workout) => (
            <WorkoutCard key={workout.id} workout={workout} />
          ))}
        </div>
      </section>
    </main>
  );
}
