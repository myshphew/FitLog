"use client";

import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import PlanCard from "../_components/(components.cards)/PlanCard";
import SaveCard from "../_components/(components.cards)/SaveCard";
import EmptyCard from "../_components/(components.cards)/EmptyCard";
import { useFitLog } from "../_context/FitlogContext";

type Tab = "today" | "saved";
type SortOption = "duration" | "calories" | "rating";

export default function MyPlan() {
  // UI state
  const [activeTab, setActiveTab] = useState<Tab>("today");
  const [sortBy, setSortBy] = useState<SortOption>("duration");

  // Workout data from Context
  const { planWorkouts, savedWorkouts } = useFitLog();

  // Current workouts
  // Selects either the today's plan or saved workouts, then sorts the selected list.
  const currentWorkouts = useMemo(() => {
    const workouts = activeTab === "today" ? planWorkouts : savedWorkouts;
    return [...workouts].sort((a, b) => {
      switch (sortBy) {
        case "duration":
          return a.duration - b.duration;
        case "calories":
          return a.caloriesBurned - b.caloriesBurned;
        case "rating":
          return b.rating - a.rating;
        default:
          return 0;
      }
    });
  }, [activeTab, sortBy, planWorkouts, savedWorkouts]);

  // Statistics
  // These are derived from currentWorkouts, so we don't need separate states for them.
  const statistics = useMemo(() => {
    return currentWorkouts.reduce(
      (stats, workout) => {
        stats.minutes += workout.duration;
        stats.calories += workout.caloriesBurned;
        return stats;
      },
      {
        exercises: currentWorkouts.length,
        minutes: 0,
        calories: 0,
      },
    );
  }, [currentWorkouts]);

  return (
    <main className="mt-16 min-h-screen text-white">
      <div className="mx-auto w-full max-w-[1200px] px-4 py-8 sm:px-6 lg:px-8">
        <section className="mb-6">
          <h1 className="font-oswald text-2xl font-bold tracking-wide sm:text-3xl">
            MY PLAN
          </h1>

          <p className="mt-1 text-xs text-[#8e929d] sm:text-sm">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </section>

        <section className="mb-6 grid grid-cols-3 overflow-hidden rounded-xl border border-[#252830] bg-[#15171c]">
          <div className="px-4 py-5 sm:px-6 sm:py-6">
            <p className="text-[10px] text-[#8e929d] sm:text-xs">Exercises</p>

            <p className="mt-1 font-oswald text-2xl font-bold text-[#c8ff00] sm:text-3xl">
              {statistics.exercises}
            </p>
          </div>

          <div className="border-l border-[#252830] px-4 py-5 sm:px-6 sm:py-6">
            <p className="text-[10px] text-[#8e929d] sm:text-xs">Minutes</p>

            <p className="mt-1 font-oswald text-2xl font-bold sm:text-3xl">
              {statistics.minutes}
            </p>
          </div>

          <div className="border-l border-[#252830] px-4 py-5 sm:px-6 sm:py-6">
            <p className="text-[10px] text-[#8e929d] sm:text-xs">Calories</p>

            <p className="mt-1 font-oswald text-2xl font-bold sm:text-3xl">
              {statistics.calories}
            </p>
          </div>
        </section>

        <section className="mb-4 flex items-center justify-between gap-4">
          <div className="flex rounded-lg border border-[#252830] bg-[#15171c] p-1">
            <button
              type="button"
              onClick={() => setActiveTab("today")}
              className={`rounded-md px-3 py-2 text-[10px] font-semibold transition sm:px-4 sm:text-xs ${
                activeTab === "today"
                  ? "bg-[#222630] text-white"
                  : "text-[#747984] hover:text-white"
              }`}
            >
              Today&#39;s Plan
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("saved")}
              className={`rounded-md px-3 py-2 text-[10px] font-semibold transition sm:px-4 sm:text-xs ${
                activeTab === "saved"
                  ? "bg-[#222630] text-white"
                  : "text-[#747984] hover:text-white"
              }`}
            >
              Saved
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden text-[10px] text-[#747984] sm:block">
              Sort By
            </span>

            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="appearance-none rounded-lg border border-[#252830] bg-[#15171c] py-2 pl-3 pr-8 text-[10px] text-white outline-none transition focus:border-[#c8ff00]"
              >
                <option value="duration">Duration</option>
                <option value="calories">Calories</option>
                <option value="rating">Rating</option>
              </select>

              <ChevronDown
                size={13}
                className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[#747984]"
              />
            </div>
          </div>
        </section>

        <section className="space-y-3">
          {currentWorkouts.length > 0 ? (
            currentWorkouts.map((workout) =>
              activeTab === "today" ? (
                <PlanCard key={workout.id} workout={workout} />
              ) : (
                <SaveCard key={workout.id} workout={workout} />
              ),
            )
          ) : (
            <EmptyCard />
          )}
        </section>
      </div>
    </main>
  );
}
