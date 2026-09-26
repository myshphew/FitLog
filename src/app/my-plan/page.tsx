"use client";

import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import PlanCard from "../_components/(cards)/PlanCard";
import SaveCard from "../_components/(cards)/SaveCard";
import EmptyCard from "../_components/(cards)/EmptyCard";
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
    <main className="flex-1 text-white">
      <div className="mx-auto w-full max-w-300 px-4 py-20 sm:py-24 sm:px-6">
        <section className="mb-6">
          <h1 className="font-display text-xl sm:text-3xl font-bold uppercase leading-9 text-white">
            MY PLAN
          </h1>
          <p className="mt-0 sm:mt-1 font-body text-xs sm:text-sm text-[#9CA3AF]">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </section>

        <section className="mb-6 grid grid-cols-3 overflow-hidden rounded-2xl border border-[#222630] bg-[#15171D]">
          <div className="px-4 py-4 sm:px-6 sm:py-6">
            <p className="text-[10px] text-[#9CA3AF] sm:text-xs">Exercises</p>
            <p className="font-display text-2xl font-bold text-[#C2F800] sm:text-4xl">
              {statistics.exercises}
            </p>
          </div>
          <div className="border-l border-[#222630] px-4 py-4 sm:px-6 sm:py-6">
            <p className="text-[10px] text-[#9CA3AF] sm:text-xs">Minutes</p>
            <p className="font-display text-2xl font-bold text-[#C2F800] sm:text-4xl">
              {statistics.minutes}
            </p>
          </div>
          <div className="border-l border-[#222630] px-4 py-4 sm:px-6 sm:py-6">
            <p className="text-[10px] text-[#9CA3AF] sm:text-xs">Calories</p>
            <p className="font-display text-2xl font-bold text-[#C2F800] sm:text-4xl">
              {statistics.calories}
            </p>
          </div>
        </section>

        <section className="mb-4 flex items-center justify-between gap-2">
          <div className="flex w-full sm:w-60 text-nowrap rounded-lg border border-[#252830] bg-[#15171c] p-1">
            <button
              type="button"
              onClick={() => setActiveTab("today")}
              className={`w-full rounded-md px-3 py-2 text-[10px] font-semibold transition sm:px-4 sm:text-xs ${
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
              className={`w-full rounded-md px-3 py-2 text-[10px] font-semibold transition sm:px-4 sm:text-xs ${
                activeTab === "saved"
                  ? "bg-[#222630] text-white"
                  : "text-[#747984] hover:text-white"
              }`}
            >
              Saved
            </button>
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden text-[11px] text-[#9CA3AF] sm:block">
              Sort By
            </span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="appearance-none rounded-lg border border-[#252830] bg-[#15171c] py-3 pl-4 pr-9 text-[10px] font-semibold text-white outline-none transition focus:border-[#c8ff00] sm:text-xs"
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
