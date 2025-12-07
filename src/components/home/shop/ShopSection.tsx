import ShopSectionCard from "./ShopSectionCard";

interface ShopSectionProps {
  sectionIndex?: number;
}

export default function ShopSection({ sectionIndex }: ShopSectionProps) {
  return (
    <section
      data-scroll-section={sectionIndex}
      className="py-40 flex justify-center items-center relative"
    >
      {/* Top horizontal transition element */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50" />
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-yellow-500/10 to-transparent pointer-events-none" />

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 max-w-5xl w-full px-6 md:px-8 relative z-10">
        <div className="flex justify-center flex-shrink-0 mb-6 md:mb-0">
          <ShopSectionCard image="/book-cover.png" />
        </div>

        <div className="flex flex-col text-left space-y-6 md:space-y-4 w-full">
          <h1 className="text-white text-3xl md:text-4xl">
            The Teacher-Gamer Handbook
          </h1>

          <h2 className="text-white text-base md:text-lg leading-relaxed">
            Build literacy. Spark imagination. Empower learners. Transform
            classrooms into immersive adventures where students learn by
            playing, failing, and growing together.
          </h2>

          <ul className="list-disc list-inside text-sm md:text-base text-white space-y-2">
            <li>📘 300 pages of creative strategies and lesson plans</li>
            <li>🎲 36 life skills through collaborative RPG experiences</li>
            <li>⚔️ Designed for educators guiding 10+ year-old learners</li>
            <li>🔥 40+ hours of co-creative play and storytelling</li>
          </ul>

          <h2 className="text-white text-base md:text-lg leading-relaxed">
            A complete framework to bring the power of role-playing into
            education.
          </h2>

          <button
            type="button"
            className="self-start text-white border border-white rounded-md px-6 py-3 hover:bg-white hover:text-black transition font-medium"
          >
            BUY THE BOOK
          </button>
        </div>
      </div>

      {/* Bottom horizontal transition element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-yellow-500/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50" />
    </section>
  );
}
