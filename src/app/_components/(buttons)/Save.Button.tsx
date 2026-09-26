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
      className={`w-full flex justify-center items-center gap-1.5 rounded-md px-6 py-3 font-body text-sm font-semibold border transition ${
        workoutIsSaved
          ? "border-[#C2F800] text-[#C2F800]"
          : "border-[#353b46] text-[#d0d3d8] hover:border-[#5a616d] hover:text-white"
      }`}
    >
      {workoutIsSaved ? (
        <>
          <BookmarkCheck size={16} strokeWidth={2} />
          Saved
        </>
      ) : (
        <>
          <Bookmark size={16} strokeWidth={2} />
          Save for later
        </>
      )}
    </button>
  );
}
