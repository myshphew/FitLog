import Image from "next/image";
import type { Workout } from "@/app/_types/types";
import { Clock, Flame, Star } from "lucide-react";

interface WorkoutCardProps {
  workout: Workout;
}

export default function WorkoutCard({ workout }: WorkoutCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-[#252830] bg-[#15171c] transition duration-200 hover:border-[#3a3e47]">
      <div className="relative aspect-[1.9/1] overflow-hidden bg-[#202329]">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-5">
        <div className="flex flex-wrap gap-2">
          {workout.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-[#c8ff00] px-3 py-1 font-body text-xs font-bold uppercase leading-none text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        <h2 className="mt-4 font-display text-lg font-bold uppercase tracking-wide text-[#fafafa]">
          {workout.name}
        </h2>
        <p className="mt-1 font-body text-xs text-[#858a96]">
          {workout.equipment}
        </p>

        <div className="my-3 h-px bg-[#282b32]" />

        <div className="flex items-center gap-4 font-body text-xs text-[#858a96]">
          <span className="flex items-center gap-1.5">
            <Clock size={16} strokeWidth={1.5} />
            {workout.duration} min
          </span>
          <span className="flex items-center gap-1.5">
            <Flame size={16} strokeWidth={1.5} />
            {workout.caloriesBurned} kcal
          </span>
          <span className="flex items-center gap-1.5">
            <Star size={16} strokeWidth={1.5} />
            {workout.rating}
          </span>
        </div>
      </div>
    </article>
  );
}
