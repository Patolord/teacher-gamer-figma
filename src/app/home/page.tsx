import CalendarBookingSection from "@/components/home/calendar/CalendarBookingSection";
import ContactSection from "@/components/home/contact/ContactSection";
import CoursesSection from "@/components/home/courses/CoursesSection";
import HeroSection from "@/components/home/hero-section/HeroSection";

import ResearchSection from "@/components/home/research/ResearchSection";
import ShopSection from "@/components/home/shop/ShopSection";
import SubstackSection from "@/components/home/substack/SubstackSection";
import Testimonials from "@/components/home/testimonials/TestimonialsSection";

export default function HomePage() {
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
