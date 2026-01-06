"use client";

import {
  ArrowLeft,
  Award,
  Book,
  CheckCircle,
  Clock,
  Sparkles,
  Users,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MEDIA } from "@/lib/media";

const courseFeatures = [
  "Design comprehensive campaign worlds",
  "Create original stories, creatures, and magic systems",
  "Develop unique technology and world mechanics",
  "Implement your campaign in real classrooms",
  "Advanced world-building frameworks",
  "Student engagement optimization strategies",
  "Cross-curricular integration techniques",
  "Level 2 Teacher Gamer Certification",
];

const whatYouWillLearn = [
  {
    icon: Sparkles,
    title: "World Creation",
    description: "Build immersive, engaging campaign worlds from scratch",
  },
  {
    icon: Book,
    title: "Story Crafting",
    description: "Develop compelling narratives and plot structures",
  },
  {
    icon: Award,
    title: "Level 2 Certification",
    description: "Demonstrate mastery through your own campaign",
  },
];

export default function Level2WorldBuilderPage() {
  return (
    <main className="relative min-h-screen">
      {/* Background */}
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${MEDIA.backgrounds.courses}')` }}
      />
      <div className="fixed inset-0 bg-black/75" />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="container mx-auto px-4 py-8">
          <Link
            href="/home"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/home";
              setTimeout(() => {
                const coursesSection =
                  document.getElementById("courses-section");
                if (coursesSection) {
                  coursesSection.scrollIntoView({ behavior: "smooth" });
                }
              }, 100);
            }}
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-5xl mx-auto space-y-12">
            {/* Header Section */}
            <div className="space-y-6">
              <div className="flex gap-3 flex-wrap">
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#489179]/20 border border-[#489179]/30"
                  style={{ color: "#489179" }}
                >
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-semibold">Advanced Level</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#489179]/10 border border-[#489179]/20 text-white">
                  <Award className="w-4 h-4" />
                  <span className="text-sm font-semibold">
                    Certification Course
                  </span>
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Level 2 TG World Builder Certificate
              </h1>

              <p className="text-xl text-white/90 leading-relaxed max-w-3xl">
                Build & implement your own campaign world. Uncharted territory:
                New stories, creatures, magic & tech.
              </p>

              {/* Course Stats */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2 text-white/80">
                  <Clock className="w-5 h-5" style={{ color: "#489179" }} />
                  <span>14-16 weeks</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Users className="w-5 h-5" style={{ color: "#489179" }} />
                  <span>Cohort-based learning</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Award className="w-5 h-5" style={{ color: "#489179" }} />
                  <span>Level 2 Certification</span>
                </div>
              </div>
            </div>

            {/* Prerequisites */}
            <div className="bg-[#489179]/10 backdrop-blur-sm rounded-xl p-6 border border-[#489179]/30">
              <p className="text-white/90">
                <strong style={{ color: "#489179" }}>Prerequisite:</strong>{" "}
                Level 1 TG Space-Holder Certificate or equivalent experience
              </p>
            </div>

            {/* CTA Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <p className="text-3xl font-bold text-white mb-2">$899</p>
                  <p className="text-white/70">
                    Includes certification project review
                  </p>
                </div>
                <Button
                  size="lg"
                  className="w-full md:w-auto text-lg font-bold text-white px-12 py-6"
                  style={{ backgroundColor: "#489179" }}
                >
                  Enroll Now
                </Button>
              </div>
            </div>

            {/* What You'll Learn */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">
                What You'll Learn
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {whatYouWillLearn.map(({ icon: Icon, title, description }) => (
                  <div
                    key={title}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                  >
                    <div className="w-12 h-12 mb-4 rounded-full flex items-center justify-center bg-[#489179]/20">
                      <Icon className="w-6 h-6" style={{ color: "#489179" }} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {title}
                    </h3>
                    <p className="text-white/80">{description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Features */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Course Includes</h2>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <ul className="grid md:grid-cols-2 gap-4">
                  {courseFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle
                        className="w-5 h-5 mt-0.5 shrink-0"
                        style={{ color: "#489179" }}
                      />
                      <span className="text-white/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Course Curriculum */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">
                Course Curriculum
              </h2>
              <div className="space-y-4">
                {[
                  {
                    module: "Module 1",
                    title: "World-Building Foundations",
                    lessons: 7,
                  },
                  {
                    module: "Module 2",
                    title: "Creating Creatures & Characters",
                    lessons: 8,
                  },
                  {
                    module: "Module 3",
                    title: "Magic Systems & Technology",
                    lessons: 9,
                  },
                  {
                    module: "Module 4",
                    title: "Story Arc Development",
                    lessons: 6,
                  },
                  {
                    module: "Module 5",
                    title: "Campaign Implementation",
                    lessons: 7,
                  },
                  {
                    module: "Module 6",
                    title: "Certification Project",
                    lessons: 4,
                  },
                ].map((module) => (
                  <div
                    key={module.module}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p
                          className="text-sm font-semibold mb-1"
                          style={{ color: "#489179" }}
                        >
                          {module.module}
                        </p>
                        <h3 className="text-xl font-bold text-white">
                          {module.title}
                        </h3>
                      </div>
                      <span className="text-white/60 text-sm">
                        {module.lessons} lessons
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-gradient-to-br from-[#489179]/20 to-transparent rounded-xl p-8 border border-[#489179]/30 text-center space-y-6">
              <h2 className="text-3xl font-bold text-white">
                Ready to Build Your World?
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Create an unforgettable campaign that will engage and inspire
                your students.
              </p>
              <Button
                size="lg"
                className="text-lg font-bold text-white px-12 py-6"
                style={{ backgroundColor: "#489179" }}
              >
                Enroll in Level 2 Certification
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Spacing */}
        <div className="h-20" />
      </div>
    </main>
  );
}
