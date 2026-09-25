import { useFitLog } from "../../_context/FitlogContext";
import type { Workout } from "../../_types/types";
import { Bookmark, BookmarkCheck } from "lucide-react";

interface SaveButtonProps {
  workout: Workout;
}

export default function SaveButton({ workout }: SaveButtonProps) {
  const { addToSaved, removeFromSaved, isSaved } = useFitLog();
  const workoutIsSaved = isSaved(workout.id);

  const handleSaveClick = () => {
    if (workoutIsSaved) {
      removeFromSaved(workout.id);
    } else {
      addToSaved(workout);
    }
  };

  return (
    <button
      onClick={handleSaveClick}
      className={`flex items-center gap-2 rounded-xl border px-6 py-3.5 font-jakarta text-xs font-medium transition ${
        workoutIsSaved
          ? "border-[#c8ff00] text-[#c8ff00]"
          : "border-[#353b46] text-[#d0d3d8] hover:border-[#5a616d] hover:text-white"
      }`}
    >
      {workoutIsSaved ? (
        <>
          <BookmarkCheck size={16} strokeWidth={1.5} />
          Saved
        </>
      ) : (
        <>
          <Bookmark size={16} strokeWidth={1.5} />
          Save for later
        </>
      )}
    </button>
  );
}
