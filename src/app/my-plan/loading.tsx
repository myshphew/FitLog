export default function Loading() {
  return (
    <main className="min-h-full animate-pulse text-white">
      <div className="mx-auto w-full max-w-300 px-4 py-20 sm:px-6 sm:py-24">
        <section className="mb-6">
          <div className="h-7 w-28 rounded bg-[#222630] sm:h-9 sm:w-40" />
          <div className="mt-2 h-3 w-64 rounded bg-[#222630] sm:h-4 sm:w-80" />
        </section>

        <section className="mb-6 grid grid-cols-3 overflow-hidden rounded-2xl border border-[#222630] bg-[#15171D]">
          <div className="px-4 py-4 sm:px-6 sm:py-6">
            <div className="h-3 w-14 rounded bg-[#222630] sm:w-20" />
            <div className="mt-2 h-8 w-8 rounded bg-[#222630] sm:h-10 sm:w-12" />
          </div>

          <div className="border-l border-[#222630] px-4 py-4 sm:px-6 sm:py-6">
            <div className="h-3 w-14 rounded bg-[#222630] sm:w-20" />
            <div className="mt-2 h-8 w-10 rounded bg-[#222630] sm:h-10 sm:w-14" />
          </div>

          <div className="border-l border-[#222630] px-4 py-4 sm:px-6 sm:py-6">
            <div className="h-3 w-14 rounded bg-[#222630] sm:w-20" />
            <div className="mt-2 h-8 w-12 rounded bg-[#222630] sm:h-10 sm:w-16" />
          </div>
        </section>

        <section className="mb-4 flex items-center justify-between gap-2">
          <div className="flex w-full rounded-lg border border-[#252830] bg-[#15171c] p-1 sm:w-60">
            <div className="h-8 w-full rounded-md bg-[#222630] sm:h-9" />
            <div className="h-8 w-full rounded-md sm:h-9" />
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden h-3 w-12 rounded bg-[#222630] sm:block" />

            <div className="h-10 w-24 rounded-lg border border-[#252830] bg-[#15171c] sm:w-28" />
          </div>
        </section>

        <section className="space-y-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="flex min-h-28 items-center gap-4 overflow-hidden rounded-2xl border border-[#252830] bg-[#15171c] p-4"
            >
              <div className="h-20 w-24 shrink-0 rounded-xl bg-[#222630] sm:h-24 sm:w-32" />

              <div className="flex flex-1 flex-col gap-2">
                <div className="h-4 w-32 rounded bg-[#222630] sm:w-48" />
                <div className="h-3 w-24 rounded bg-[#222630] sm:w-36" />
                <div className="h-3 w-20 rounded bg-[#222630] sm:w-28" />
              </div>

              <div className="hidden h-9 w-24 rounded-full bg-[#222630] sm:block" />
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
