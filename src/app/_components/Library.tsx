"use client";
import WorkoutCard from "@/app/_components/(cards)/WorkoutCard";
import { useFitLog } from "@/app/_context/FitlogContext";
import WorkoutCardSkeleton from "./(skeletons)/WorkoutCard.Skeleton";

export default function Library() {
  const { workouts, loading, error } = useFitLog();

  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <WorkoutCardSkeleton />
        <WorkoutCardSkeleton />
        <WorkoutCardSkeleton />
      </div>
    );
  }
  if (error) {
    return <main className="mt-16">Error: {error}</main>;
  }
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {workouts.map((workout) => (
        <WorkoutCard key={workout.id} workout={workout} />
      ))}
    </div>
  );
}
