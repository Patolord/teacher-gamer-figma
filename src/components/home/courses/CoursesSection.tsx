"use client";

import { MEDIA } from "@/lib/media";
import ShinyText from "@/components/ui/shinytext";
import EletricCard from "./EletricCard";

// Refined Split-Complementary Color Harmony - Magical Fantasy Theme
const theme = {
  primary: {
    base: "#6A4BCF",
    light: "#B9A7FF",
    glow: "rgba(106, 75, 207, 0.3)",
  },
  accent: {
    lime: "#DAFF0D",
    limeLight: "#E5FF4D",
  },
  highlight: {
    yellow: "#FFD85A",
    yellowSoft: "rgba(255, 216, 90, 0.2)",
  },
};

interface CoursesSectionProps {
  sectionIndex?: number;
}

export default function CoursesSection({ sectionIndex }: CoursesSectionProps) {
  const courses = [
    {
      title: "Intro to Multiverse",
      description:
        "Get an introduction to how RPGs and the multiverse can drive adult readiness through PBL and SEL as we work through the 13 Phases of Character Building.",
      color: "#7df9ff",
      href: "/courses/intro-to-multiverse",
    },
    {
      title: "Level 1 TG Space-Holder Certificate Course",
      description:
        "Learn to move from out-game character development to in-game role-playing and run a pilot to get teacher gamer level one certified.",
      color: "#ff6b9d",
      badge: "BEST VALUE",
      href: "/courses/level-1-space-holder",
    },
    {
      title: "Level 2 TG World Builder Certificate",
      description:
        "Build & implement your own campaign world. Uncharted territory: New stories, creatures, magic & tech",
      color: "#489179",
      href: "/courses/level-2-world-builder",
    },
    {
      title: "Level 3 TG Planes Walker Certificate Course",
      description:
        "Integrate your own RPGs campaign into your local school system's learning objectives with guidance",
      color: "#b8411f",
      href: "/courses/level-3-planes-walker",
    },
  ];

  return (
    <section
      id="courses-section"
      data-scroll-section={sectionIndex}
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center py-40"
      style={{ backgroundImage: `url('${MEDIA.backgrounds.courses}')` }}
    >
      {/* 40% black overlay */}
      <div 
        className="absolute inset-0" 
        style={{ backgroundColor: "rgba(26, 26, 31, 0.4)" }}
      />

      {/* Top horizontal transition element */}
      <div 
        className="absolute top-0 left-0 right-0 h-px opacity-60"
        style={{
          background: `linear-gradient(to right, transparent, ${theme.accent.lime}, ${theme.highlight.yellow}, ${theme.accent.lime}, transparent)`
        }}
      />
      <div 
        className="absolute top-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, ${theme.highlight.yellowSoft}, transparent)`
        }}
      />

      <div className="container mx-auto px-8 relative" style={{ zIndex: 10 }}>
        <div data-animate className="text-center mb-16">
          <h2 className="text-4xl font-semibold tracking-tight mb-4 text-center inline-block">
            <ShinyText
              speed={3}
              delay={1}
              color={theme.accent.lime}
              shineColor="#fff"
              spread={30}
              yoyo
            >
              Choose your next Adventure!
            </ShinyText>
          </h2>
        </div>
        <div
          data-animate-stagger
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
        >
          {courses.map((course) => (
            <EletricCard
              key={course.title}
              title={course.title}
              description={course.description}
              color={course.color}
              badge={course.badge}
              href={course.href}
            />
          ))}
        </div>
      </div>

      {/* Bottom horizontal transition element */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background: `linear-gradient(to top, ${theme.highlight.yellowSoft}, transparent)`
        }}
      />
      <div 
        className="absolute bottom-0 left-0 right-0 h-px opacity-60"
        style={{
          background: `linear-gradient(to right, transparent, ${theme.accent.lime}, ${theme.highlight.yellow}, ${theme.accent.lime}, transparent)`
        }}
      />
    </section>
  );
}
