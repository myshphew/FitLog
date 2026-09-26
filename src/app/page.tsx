import Hero from "./_components/Hero";
import Library from "./_components/Library";

export default function Home() {
  return (
    <main className="pt-22 p-6">
      <Hero />
      <section id="library" className="py-12 scroll-mt-8">
        <div className="mb-8">
          <h2 className="font-display text-xl sm:text-3xl font-bold uppercase leading-9 text-white">
            The Library
          </h2>
          <p className="mt-0 sm:mt-1 font-body text-xs sm:text-sm text-[#9CA3AF]">
            Twelve lifts covering every major muscle group.
          </p>
        </div>
        <Library />
      </section>
    </main>
  );
}
