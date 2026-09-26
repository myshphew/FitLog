import { useFitLog } from "@/app/_context/FitlogContext";
import { Workout } from "@/app/_types/types";
import { Check } from "lucide-react";
import { Bounce, toast } from "react-toastify";

interface MarkAsDoneButtonProps {
  workout: Workout;
}

export default function MarkAsDoneButton({ workout }: MarkAsDoneButtonProps) {
  const { addToCompleted, removeFromCompleted, isCompleted } = useFitLog();

  const handleMarkAsDoneClick = () => {
    if (!isCompleted(workout.id)) {
      addToCompleted(workout);
      toast.success(`Marked as done`, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        transition: Bounce,
        });
    } else {
      removeFromCompleted(workout.id);
      toast.success(`Unmarked as done`, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        transition: Bounce,
        });
    }
  };

  return (
    <button
      onClick={handleMarkAsDoneClick}
      className={`w-full sm:min-w-44 text-nowrap flex justify-center items-center gap-1.5 rounded-md px-6 py-3 font-body text-sm leading-4.5 font-semibold ${
        isCompleted(workout.id)
          ? "border border-[#C2F80075] text-[#C2F80075]"
          : "bg-[#C2F800] transition hover:bg-[#d5ff3c] text-black"
      }`}
    >
      {!isCompleted(workout.id) ? (
        <>
          <Check size={16} strokeWidth={1.5} className="hidden sm:block" />
          Mark as Done
        </>
      ) : (
        <>Completed</>
      )}
    </button>
  );
}
