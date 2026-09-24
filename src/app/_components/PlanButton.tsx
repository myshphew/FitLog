import { useFitLog } from "../_context/FitlogContext";
import type { Workout } from "../_types/types";
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
      className={`flex items-center gap-2 rounded-xl px-6 py-3.5 font-jakarta text-xs font-bold transition ${
        workoutInPlan
          ? "bg-[#9fc900] text-black"
          : "bg-[#c8ff00] text-black hover:bg-[#d4ff33]"
      }`}
    >
      {workoutInPlan ? (
        <>
          <Check size={16} strokeWidth={1.5} />
          Added to today&#39;s plan
        </>
      ) : (
        <>
          <CalendarPlus size={16} strokeWidth={1.5} />
          Add to today&#39;s plan
        </>
      )}
    </button>
  );
}
