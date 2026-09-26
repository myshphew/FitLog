import { useFitLog } from "../../_context/FitlogContext";
import type { Workout } from "../../_types/types";
import { CalendarPlus, Check } from "lucide-react";

interface PlanButtonProps {
  workout: Workout;
}

export default function PlanButton({ workout }: PlanButtonProps) {
  const { addToPlan, removeFromPlan, isInPlan } = useFitLog();
  const workoutInPlan = isInPlan(workout.id);

  const handlePlanClick = () => {
    if (workoutInPlan) {
      removeFromPlan(workout.id);
    } else {
      addToPlan(workout);
    }
  };

  return (
    <button
      onClick={handlePlanClick}
      className={`w-full flex justify-center items-center gap-1.5 rounded-md px-6 py-3 font-body text-sm font-semibold text-black ${
        workoutInPlan
          ? "bg-[#C2F80075]"
          : "bg-[#C2F800] transition hover:bg-[#d5ff3c]"
      }`}
    >
      {workoutInPlan ? (
        <>
          <Check size={16} strokeWidth={2} />
          Added to today&#39;s plan
        </>
      ) : (
        <>
          <CalendarPlus size={16} strokeWidth={2} />
          Add to today&#39;s plan
        </>
      )}
    </button>
  );
}
