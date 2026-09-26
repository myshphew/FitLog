export default function WorkoutCardSkeleton() {
  return (
    <article className="overflow-hidden rounded-2xl border border-[#252830] bg-[#15171c]">
      <div className="relative aspect-[1.9/1] overflow-hidden bg-[#202329]">
        <div className="h-full w-full animate-pulse bg-[#2a2d34]" />
      </div>
      <div className="p-5">
        <div className="flex flex-wrap gap-2">
          <div className="h-5 w-20 animate-pulse rounded-full bg-[#2a2d34]" />
          <div className="h-5 w-24 animate-pulse rounded-full bg-[#2a2d34]" />
          <div className="h-5 w-16 animate-pulse rounded-full bg-[#2a2d34]" />
        </div>
        <div className="mt-4 h-5 w-3/4 animate-pulse rounded bg-[#2a2d34]" />
        <div className="mt-2 h-3 w-1/3 animate-pulse rounded bg-[#252830]" />
        <div className="my-3 h-px bg-[#282b32]" />
        <div className="flex items-center gap-4">
          <div className="h-4 w-16 animate-pulse rounded bg-[#252830]" />
          <div className="h-4 w-20 animate-pulse rounded bg-[#252830]" />
          <div className="h-4 w-12 animate-pulse rounded bg-[#252830]" />
        </div>
      </div>
    </article>
  );
}
