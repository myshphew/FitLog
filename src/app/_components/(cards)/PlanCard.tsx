import Image from "next/image";
import type { Workout } from "../../_types/types";
import { Clock3, Flame, Star, X } from "lucide-react";
import ViewDetailsButton from "../(buttons)/ViewDetails.Button";
import MarkAsDoneButton from "../(buttons)/MarkAsDone.Button";

interface TodayWorkoutCardProps {
  workout: Workout;
}

export default function PlanCard({ workout }: TodayWorkoutCardProps) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-700 bg-[#151820] px-4 py-4">
      <div className="flex items-center gap-4">
        <Image
          src={workout.image}
          alt={workout.name}
          className="h-20 w-36 rounded-lg object-cover"
          height={200}
          width={200}
        />
        <div>
          <h3 className="font-display text-base font-bold uppercase text-white">
            {workout.name}
          </h3>
          <p className=" mt-1.5 text-xs font-semibold text-slate-400">
            {workout.equipment}
          </p>
          <div className="mt-2 flex items-center gap-4 text-xs font-normal text-slate-300">
            <span className="flex items-center gap-1">
              <Clock3 size={16} strokeWidth={1.5} className="text-lime-400" />
              {workout.duration} min
            </span>
            <span className="flex items-center gap-1">
              <Flame size={16} strokeWidth={1.5} className="text-lime-400" />
              {workout.caloriesBurned} kcal
            </span>
            <span className="flex items-center gap-1">
              <Star size={16} strokeWidth={1.5} className="text-lime-400" />
              {workout.rating}
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <ViewDetailsButton />
        <MarkAsDoneButton workout={workout} />
        <button className="h-6 w-6 flex justify-center items-center text-slate-500 transition hover:text-white">
          <X size={18} />
        </button>
      </div>
    </div>
  );
}
//mt-5 rounded-full bg-[#c8ff00] px-5 py-2.5 text-xs font-bold text-black transition hover:bg-[#d4ff33]
