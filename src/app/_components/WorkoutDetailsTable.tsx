import { Workout } from "../_types/types";

interface WorkoutDetailsTableProps {
  workout: Workout;
}

export default function WorkoutDetailsTable({
  workout,
}: WorkoutDetailsTableProps) {
  return (
    <div className="mt-6 overflow-hidden rounded-2xl border border-[#222630] bg-[#15171D]">
      <InfoRow label="Equipment" value={workout.equipment} />
      <InfoRow label="Difficulty" value={workout.difficulty} />
      <InfoRow label="Sets" value={String(workout.sets)} />
      <InfoRow label="Reps" value={workout.reps} />
      <InfoRow label="Duration" value={`${workout.duration} min`} />
      <InfoRow label="Calories" value={`${workout.caloriesBurned} kcal`} />
      <InfoRow label="Rating" value={String(workout.rating)} last />
    </div>
  );
}

function InfoRow({
  label,
  value,
  last = false,
}: {
  label: string;
  value: string;
  last?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between px-4 py-3 ${
        !last ? "border-b border-[#222630]" : ""
      }`}
    >
      <span className="font-body text-xs font-bold uppercase tracking-wide text-[#9CA3AF]">
        {label}
      </span>
      <span className="font-body text-sm font-medium text-[#9CA3AF]">
        {value}
      </span>
    </div>
  );
}
