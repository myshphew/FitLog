import Image from "next/image";
import type { Workout } from "../../_types/types";
import { Clock, Flame, Star } from "lucide-react";
import ViewDetailsButton from "../(buttons)/ViewDetails.Button";
import MarkAsDoneButton from "../(buttons)/MarkAsDone.Button";
import RemovePlanButton from "../(buttons)/RemovePlan.Button";
import { useFitLog } from "@/app/_context/FitlogContext";

interface TodayWorkoutCardProps {
  workout: Workout;
}

export default function PlanCard({ workout }: TodayWorkoutCardProps) {
  const { isCompleted } = useFitLog();
  return (
    <div
      className={`relative flex flex-col sm:flex-row gap-6 items-center justify-between rounded-2xl border border-[#222630] bg-[#15171D] px-4 py-4 sm:pr-6 ${isCompleted(workout.id) ? "bg-[#19220b] opacity-40" : ""}`}
    >
      {
        <div className="z-20 rounded-lg bg-[#ffffff40] text-white absolute top-6 right-6 sm:hidden">
          <RemovePlanButton workout={workout} />
        </div>
      }
      <Image
        src={workout.image}
        alt={workout.name}
        className="w-full sm:max-w-34 lg:max-w-54 aspect-[1.9/1] rounded-lg object-cover"
        height={200}
        width={200}
      />
      <div className="w-full flex items-center gap-4">
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
      <div className="flex flex-row-reverse w-full items-center gap-3">
        <div className="hidden sm:block">
          <RemovePlanButton workout={workout} />
        </div>
        <MarkAsDoneButton workout={workout} />
        <ViewDetailsButton workout={workout} />
      </div>
    </div>
  );
}
