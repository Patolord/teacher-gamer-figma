"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import Calendar from "./Calendar";
import CalendarModal from "./CalendarModal";

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
      data-scroll-section={sectionIndex}
      className="bg-[url(/workshop.png)] relative"
    >
      {/* Top horizontal transition element */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50 z-20" />
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-yellow-500/10 to-transparent pointer-events-none z-20" />

      <div
        data-section-content
        className="py-30 px-16 bg-black/60 bg-no-repeat bg-backdrop-none space-y-4 relative"
      >
        <h2 className="text-white text-3xl text-center font-pirata-one">
          Agende sua Sessão
        </h2>
        <p className="text-white text-xl text-center font-amarante">
          Escolha a melhor data e horário para sua aventura
        </p>

        <div className="hidden lg:block">
          <Calendar />
        </div>
        <div className="lg:hidden justify-center max-w-sm mx-auto">
          <CalendarModal />
        </div>
      </div>

      {/* Bottom horizontal transition element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-yellow-500/10 to-transparent pointer-events-none z-20" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50 z-20" />
    </section>
  );
}
