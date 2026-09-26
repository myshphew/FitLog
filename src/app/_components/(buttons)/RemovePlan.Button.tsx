import { useFitLog } from "@/app/_context/FitlogContext";
import type { Workout } from "@/app/_types/types";
import { X } from "lucide-react";
import { Bounce, toast } from "react-toastify";

interface RemovePlanButtonProps {
  workout: Workout;
}

export default function RemovePlanButton({ workout }: RemovePlanButtonProps) {
  const { removeFromPlan } = useFitLog();
  return (
    <button
      onClick={() => {
        removeFromPlan(workout.id);
        toast.success(`Removed from planned workouts`, {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
          transition: Bounce,
        });
      }}
      className="h-6 w-6 flex justify-center items-center text-white sm:text-slate-500 transition hover:text-white"
    >
      <X size={18} />
    </button>
  );
}
