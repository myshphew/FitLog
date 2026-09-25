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
      className={`flex items-center gap-2 rounded-full bg-[#c8ff00] px-5 py-2.5 text-xs font-bold text-black  ${
        workoutInPlan
          ? "bg-[#c8ff00]"
          : "bg-[#c8ff00]transition hover:bg-[#d4ff33]]"
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
//rounded-full bg-[#c8ff00] px-5 py-2.5 text-xs font-bold text-black transition hover:bg-[#d4ff33]