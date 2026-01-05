import { Loader2, Swords } from "lucide-react";
import dynamic from "next/dynamic";
import ScrambledText from "@/components/shared/ScrambledText";

// Lazy load SocialProof to reduce initial bundle size
const SocialProof = dynamic(() => import("@/components/home/hero-section/SocialProof"), {
  ssr: false,
  loading: () => null,
});

type Props = {
  onButtonClick?: () => void;
  isLoading?: boolean;
};

export default function LandingContent({ onButtonClick, isLoading = false }: Props) {
  return (
    <div className="relative z-20 flex flex-col items-center justify-center gap-6 px-4 w-full max-w-4xl mx-auto">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white px-2 sm:px-5 leading-tight">
        Teacher Gamer Revolution
      </h1>

      <ScrambledText
        radius={50}
        duration={1.2}
        className="pb-30 text-sm sm:text-base px-2"
        speed={0.5}
        scrambleChars=".:"
      >
        The future of education is here. Join the Teacher Gamer Revolution and
        revolutionize the way you learn.
      </ScrambledText>

      <button
        type="button"
        onClick={onButtonClick}
        disabled={isLoading}
        className="text-lg sm:text-xl md:text-2xl lg:text-3xl py-6 sm:py-8 md:py-10 px-8 sm:px-12 md:px-16 uppercase tracking-wider font-bold flex items-center gap-3 cursor-pointer hover:scale-110 transition-all duration-300 rounded-xl shadow-2xl border-2 border-white/20 bg-gradient-to-r from-amber-400 to-amber-400 hover:from-amber-300 hover:to-amber-300 text-zinc-900 disabled:opacity-75 disabled:cursor-not-allowed disabled:hover:scale-100 active:scale-95"
      >
        {isLoading ? (
          <Loader2 className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 animate-spin" />
        ) : (
          <Swords className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
        )}
        <span>{isLoading ? "Loading..." : "Get Started Now"}</span>
      </button>

      <SocialProof />
    </div>
  );
}
