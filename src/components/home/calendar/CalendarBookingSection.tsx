"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { MEDIA } from "@/lib/media";
import ShinyText from "@/components/ui/shinytext";
import Calendar from "./Calendar";
import CalendarModal from "./CalendarModal";

// Refined Split-Complementary Color Harmony - Magical Fantasy Theme
const theme = {
  accent: {
    lime: "#DAFF0D",
    limeLight: "#E5FF4D",
  },
  highlight: {
    yellow: "#FFD85A",
    yellowSoft: "rgba(255, 216, 90, 0.2)",
  },
  neutral: {
    lighter: "#E5E4E8",
  },
};

interface CalendarBookingSectionProps {
  sectionIndex?: number;
}

export default function CalendarBookingSection({
  sectionIndex,
}: CalendarBookingSectionProps) {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "training-session" });
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
        theme: "dark",
      });
    })();
  }, []);

  return (
    <section
      id="calendar-section"
      data-scroll-section={sectionIndex}
      className="relative bg-cover bg-center"
      style={{ backgroundImage: `url('${MEDIA.backgrounds.calendar}')` }}
    >
      {/* 40% black overlay */}
      <div 
        className="absolute inset-0" 
        style={{ backgroundColor: "rgba(26, 26, 31, 0.4)" }}
      />

      {/* Top horizontal transition element */}
      <div 
        className="absolute top-0 left-0 right-0 h-px opacity-60 z-20"
        style={{
          background: `linear-gradient(to right, transparent, ${theme.accent.lime}, ${theme.highlight.yellow}, ${theme.accent.lime}, transparent)`
        }}
      />
      <div 
        className="absolute top-0 left-0 right-0 h-24 pointer-events-none z-20"
        style={{
          background: `linear-gradient(to bottom, ${theme.highlight.yellowSoft}, transparent)`
        }}
      />

      <div
        data-section-content
        data-animate
        className="py-30 px-16 bg-no-repeat bg-backdrop-none space-y-4 relative"
        style={{ zIndex: 20 }}
      >
        <h2 className="text-3xl text-center font-pirata-one pb-8">
          <ShinyText
            speed={3}
            delay={1}
            color={theme.accent.lime}
            shineColor="#fff"
            spread={30}
            yoyo
          >
            Schedule a Session
          </ShinyText>
        </h2>
        <p 
          className="text-xl text-center font-amarante pb-8"
          style={{ color: theme.neutral.lighter }}
        >
            Choose the best date and time for your adventure
        </p>

        <div className="hidden lg:block">
          <Calendar />
        </div>
        <div className="lg:hidden justify-center max-w-sm mx-auto">
          <CalendarModal />
        </div>
      </div>

      {/* Bottom horizontal transition element */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none z-20"
        style={{
          background: `linear-gradient(to top, ${theme.highlight.yellowSoft}, transparent)`
        }}
      />
      <div 
        className="absolute bottom-0 left-0 right-0 h-px opacity-60 z-20"
        style={{
          background: `linear-gradient(to right, transparent, ${theme.accent.lime}, ${theme.highlight.yellow}, ${theme.accent.lime}, transparent)`
        }}
      />
    </section>
  );
}
