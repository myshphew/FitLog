import Image from "next/image";
import type { Workout } from "../../_types/types";
import { Clock, Flame, Star } from "lucide-react";
import ViewDetailsButton from "../(buttons)/ViewDetails.Button";
import RemoveSaveButton from "../(buttons)/RemoveSave.Button";

interface SavedWorkoutCardProps {
  workout: Workout;
}

export default function SaveCard({ workout }: SavedWorkoutCardProps) {
  return (
    <div className="relative flex flex-col items-center justify-between gap-6 rounded-2xl border border-[#222630] bg-[#15171D] px-4 py-4 sm:pr-6 sm:flex-row">
      <div className="absolute right-6 top-6 z-20 rounded-lg bg-[#ffffff40] text-white sm:hidden">
        <RemoveSaveButton workout={workout} />
      </div>
      <Image
        src={workout.image}
        alt={workout.name}
        className="aspect-[1.9/1] w-full rounded-lg object-cover sm:max-w-46"
        height={200}
        width={200}
      />
      <div className="flex w-full items-center gap-4">
        <div>
          <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white">
            {workout.name}
          </h3>
          <p className="mt-1 font-body text-xs text-[#9CA3AF]">
            {workout.equipment}
          </p>
          <div className="mt-2 flex items-center gap-4 font-body text-xs text-[#9CA3AF]">
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
      </div>
      <div className="flex  flex-row-reverse w-full items-center gap-3">
        <div className="hidden sm:block">
          <RemoveSaveButton workout={workout} />
        </div>
        <ViewDetailsButton workout={workout} />
      </div>
    </div>
  );
}
