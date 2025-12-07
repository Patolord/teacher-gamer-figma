"use client";

import EletricCard from "./EletricCard";

interface CoursesSectionProps {
  sectionIndex?: number;
}

export default function CoursesSection({
  sectionIndex: _sectionIndex,
}: CoursesSectionProps) {
  const courses = [
    {
      title: "Beginner Course",
      description: "Start your learning journey with our comprehensive program",
      color: "#7df9ff",
    },
    {
      title: "Intermediate Course",
      description: "Build on your foundation with advanced concepts",
      color: "#ff6b9d",
      badge: "BEST VALUE",
    },
    {
      title: "Advanced Course",
      description: "Master advanced techniques and strategies",
      color: "#489179",
    },
    {
      title: "Expert Course",
      description: "Become an expert in the field",
      color: "#b8411f",
    },
    {
      title: "Master Course",
      description: "Become an expert in the field",
      color: "#ffd700",
    },
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-[url(/cardsbg.png)] bg-cover bg-center py-40">
      {/* Top horizontal transition element */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50" />
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-yellow-500/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold tracking-tight mb-4 bg-[linear-gradient(135deg,#fff_0%,#c47020_20%,#d09a11_40%,#fff_100%)] bg-[length:200%_200%] bg-clip-text text-transparent text-center inline-block animate-gradientShift">
            Choose your next Adventure!
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-12 px-10">
          {courses.map((course) => (
            <div
              key={course.title}
              className="w-full md:w-[calc(50%-24px)] lg:w-[calc(33.333%-32px)]"
            >
              <EletricCard
                title={course.title}
                description={course.description}
                color={course.color}
                badge={course.badge}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom horizontal transition element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-yellow-500/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50" />
    </section>
  );
}
