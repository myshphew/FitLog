import { useFitLog } from "@/app/_context/FitlogContext";
import { Workout } from "@/app/_types/types";
import { X } from "lucide-react";
import { Bounce, toast } from "react-toastify";

interface RemoveSaveButtonProps {
  workout: Workout;
}

export default function RemoveSaveButton({ workout }: RemoveSaveButtonProps) {
  const { removeFromSaved } = useFitLog();
  return (
    <button
      onClick={() => {
        removeFromSaved(workout.id);
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
      className="h-6 w-6 flex justify-center items-center text-slate-500 transition text-white"
    >
      <X size={18} />
    </button>
  );
}
