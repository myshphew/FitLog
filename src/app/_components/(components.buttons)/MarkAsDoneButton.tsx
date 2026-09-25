import { useFitLog } from "@/app/_context/FitlogContext";
import { Workout } from "@/app/_types/types";
import { Check } from "lucide-react";

interface MarkAsDoneButtonProps {
  workout: Workout;
}

export default function MarkAsDoneButton({ workout }: MarkAsDoneButtonProps) {
  const { addToCompleted, removeFromCompleted, isCompleted } = useFitLog();
  return (
    <>
      {!isCompleted(workout.id) ? (
        <button
          onClick={() => addToCompleted(workout)}
          className="flex items-center gap-2 rounded-full bg-lime-400 px-5 py-2 text-sm font-medium text-black transition hover:bg-lime-300"
        >
          <Check size={16} strokeWidth={1.5} />
          Mark as Done
        </button>
      ) : (
        <button
          onClick={() => removeFromCompleted(workout.id)}
          className="flex items-center gap-2 rounded-full border border-slate-600 px-5 py-2 text-sm font-medium text-white opacity-50"
        >
          Completed
        </button>
      )}
    </>
  );
}

// completedWorkouts: Workout[];
// addToCompleted: (workout: Workout) => void;
// removeFromCompleted: (id: number) => void;
// isCompleted: (id: number) => boolean;
