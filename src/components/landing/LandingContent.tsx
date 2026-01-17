import { Loader2, Swords } from "lucide-react";
import dynamic from "next/dynamic";
import ScrambledText from "@/components/shared/ScrambledText";

// Lazy load SocialProof to reduce initial bundle size
const SocialProof = dynamic(
  () => import("@/components/home/hero-section/SocialProof"),
  {
    ssr: false,
    loading: () => null,
  },
);

type Props = {
  onButtonClick?: () => void;
  isLoading?: boolean;
};

export default function LandingContent({
  onButtonClick,
  isLoading = false,
}: Props) {
  return (
    <div className="relative z-20 flex flex-col items-center justify-center gap-8 px-4 w-full max-w-5xl mx-auto">
      <h1 
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center text-white px-2 sm:px-5 leading-tight"
        style={{ textShadow: "0 4px 20px rgba(0, 0, 0, 0.7), 0 2px 8px rgba(0, 0, 0, 0.5)" }}
      >
        Teacher Gamer Revolution
      </h1>

      <ScrambledText
        radius={50}
        duration={1.2}
        className="pb-30 text-lg sm:text-xl md:text-2xl px-2 text-center"
        speed={0.5}
        scrambleChars=".:"
        style={{ textShadow: "0 2px 12px rgba(0, 0, 0, 0.7), 0 1px 4px rgba(0, 0, 0, 0.5)" }}
      >
        The future of education is here, happening on tabletops & in schools everywhere. 
        Join the community and revolutionize the way we learn.
      </ScrambledText>

      <button
        type="button"
        onClick={onButtonClick}
        disabled={isLoading}
        className="text-base sm:text-lg font-semibold py-3 px-8 uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-all duration-300 rounded-lg border-2 disabled:opacity-75 disabled:cursor-not-allowed disabled:hover:scale-100 active:scale-95"
        style={{
          backgroundColor: 'transparent',
          borderColor: "var(--color-primary-light)",
          color: "white",
          boxShadow: "0 4px 12px rgba(106, 75, 207, 0.3), inset 0 -2px 4px rgba(0, 0, 0, 0.2)",
          transform: "translateY(0)",
        }}
        onMouseEnter={(e) => {
          if (!isLoading) {
            e.currentTarget.style.backgroundColor = "var(--color-primary-subtle)";
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 6px 16px rgba(106, 75, 207, 0.4), inset 0 -3px 6px rgba(0, 0, 0, 0.3)";
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 4px 12px rgba(106, 75, 207, 0.3), inset 0 -2px 4px rgba(0, 0, 0, 0.2)";
        }}
      >
        {isLoading ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <Swords className="w-5 h-5" />
        )}
        <span>{isLoading ? "Loading..." : "Get Started Now"}</span>
      </button>

      <SocialProof />
    </div>
  );
}
