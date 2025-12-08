import { Swords } from "lucide-react";
import SocialProof from "@/components/home/hero-section/SocialProof";
import ScrambledText from "@/components/shared/ScrambledText";

type Props = {
  onButtonClick?: () => void;
};

export default function LandingContent({ onButtonClick }: Props) {
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
        className="text-lg sm:text-xl md:text-2xl lg:text-3xl py-6 sm:py-8 md:py-10 px-8 sm:px-12 md:px-16 uppercase tracking-wider font-bold flex items-center gap-3 cursor-pointer hover:scale-110 transition-all duration-300 rounded-xl shadow-2xl border-2 border-white/20 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white animate-pulse hover:animate-none"
      >
        <Swords className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
        <span>Get Started Now</span>
      </button>

      <SocialProof />
    </div>
  );
}
