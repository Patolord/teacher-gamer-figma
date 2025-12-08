"use client";

import gsap from "gsap";
import { useEffect } from "react";
import CalendarBookingSection from "@/components/home/calendar/CalendarBookingSection";
import ContactSection from "@/components/home/contact/ContactSection";
import CoursesSection from "@/components/home/courses/CoursesSection";
import HeroSection from "@/components/home/hero-section/HeroSection";
import ResearchSection from "@/components/home/research/ResearchSection";
import ShopSection from "@/components/home/shop/ShopSection";
import SubstackSection from "@/components/home/substack/SubstackSection";
import Testimonials from "@/components/home/testimonials/TestimonialsSection";

export default function HomePage() {
  useEffect(() => {
    // Check if we came from landing page transition
    if (sessionStorage.getItem("transitionOverlay") === "true") {
      sessionStorage.removeItem("transitionOverlay");

      // Find and fade out the overlay
      const overlay = document.querySelector<HTMLDivElement>(
        '[style*="z-index: 99999"], [style*="z-index:99999"]',
      );
      if (overlay) {
        gsap.to(overlay, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
          onComplete: () => overlay.remove(),
        });
      }
    }
  }, []);

  return (
    <div>
      <HeroSection />
      <ShopSection />
      <SubstackSection />
      <CalendarBookingSection />
      <CoursesSection />
      <ResearchSection />
      <Testimonials />
      <ContactSection />
    </div>
  );
}
