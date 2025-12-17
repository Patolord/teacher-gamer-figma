"use client";

import { MEDIA } from "@/lib/media";
import EletricCard from "./EletricCard";

interface CoursesSectionProps {
  sectionIndex?: number;
}

export default function CoursesSection({
  sectionIndex,
}: CoursesSectionProps) {
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
      {/* Top horizontal transition element */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50" />
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-yellow-500/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-8 relative z-10">
        <div data-animate className="text-center mb-16">
          <h2 className="text-4xl font-semibold tracking-tight mb-4 bg-[linear-gradient(135deg,#fff_0%,#c47020_20%,#d09a11_40%,#fff_100%)] bg-[length:200%_200%] bg-clip-text text-transparent text-center inline-block animate-gradientShift">
            Choose your next Adventure!
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
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-yellow-500/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50" />
    </section>
  );
}
