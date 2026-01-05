import { MEDIA } from "@/lib/media";
import ShopSectionCard from "./ShopSectionCard";

interface ShopSectionProps {
  sectionIndex?: number;
}

export default function ShopSection({ sectionIndex }: ShopSectionProps) {
  return (
    <section
      id="shop-section"
      data-scroll-section={sectionIndex}
      className="py-40 flex justify-center items-center relative bg-gray-900"
    >
      {/* Top horizontal transition element */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50" />
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-yellow-500/10 to-transparent pointer-events-none" />

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 max-w-5xl w-full px-6 md:px-8 relative z-10">
        <div
          data-animate="slide-left"
          className="flex justify-center flex-shrink-0 mb-6 md:mb-0"
        >
          <ShopSectionCard image={MEDIA.assets.bookCover} />
        </div>

        <div
          data-animate="slide-right"
          className="flex flex-col text-left space-y-6 md:space-y-4 w-full"
        >
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
            className="self-start px-8 py-3 bg-linear-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-zinc-900 font-semibold rounded-full transition-all duration-300 hover:shadow-[0_4px_24px_rgba(251,191,36,0.4)]"
          >
            SHOP NOW
          </button>
        </div>
      </div>

      {/* Bottom horizontal transition element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-yellow-500/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50" />
    </section>
  );
}
