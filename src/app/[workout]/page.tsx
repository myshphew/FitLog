"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useFitLog } from "@/app/_context/FitlogContext";
import Navbar from "@/app/_components/NavBar";
import WorkoutDetailsTable from "../_components/WorkoutDetailsTable";
import WorkoutDetailsInstructions from "../_components/WorkoutDetailsInstructions";
import PlanButton from "../_components/(components.buttons)/PlanButton";
import SaveButton from "../_components/(components.buttons)/SaveButton";

export default function Workout() {
  const params = useParams();
  const workoutId = Number(params.workout);
  const { workouts, loading, error } = useFitLog();
  const workout = workouts.find((item) => item.id === workoutId);

  if (loading) {
    return (
      <main className="min-h-screen bg-[#0d0f12] text-white">
        <Navbar />
        <div className="flex min-h-[70vh] items-center justify-center">
          <p className="font-jakarta text-sm text-[#858a94]">
            Loading workout...
          </p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-[#0d0f12] text-white">
        <Navbar />
        <div className="flex min-h-[70vh] items-center justify-center">
          <p className="font-jakarta text-sm text-red-400">{error}</p>
        </div>
      </main>
    );
  }

  if (!workout) {
    return (
      <main className="min-h-screen bg-[#0d0f12] text-white">
        <Navbar />
        <div className="flex min-h-[70vh] flex-col items-center justify-center gap-4">
          <h1 className="font-oswald text-4xl font-bold uppercase">
            Workout not found
          </h1>
          <Link
            href="/"
            className="font-jakarta text-sm text-[#c8ff00] hover:underline"
          >
            Back to workouts
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="mt-16 bg-[#0d0f12] text-white">
      <Navbar />

      <section className="mx-auto px-6 py-12">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr]">
          <div>
            <Image
              src={workout.image}
              alt={workout.name}
              className="aspect-4/5 w-full rounded-xl object-cover"
              height={650}
              width={650}
            />
          </div>

          <div className="flex flex-col">
            <div>
              <h1 className="font-display text-2xl font-bold uppercase leading-[1.05] tracking-tight md:text-4xl">
                {workout.name}
              </h1>
              <p className="mt-3 font-body text-sm leading-6 text-[#969ba6]">
                {workout.description}
              </p>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full bg-[#c8ff00] px-4 py-1.5 font-body text-xs font-bold text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>

            <WorkoutDetailsTable workout={workout} />
            <WorkoutDetailsInstructions instructions={workout.instructions} />

            <div className="mt-10 flex flex-wrap gap-4">
              <PlanButton workout={workout} />
              <SaveButton workout={workout} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
