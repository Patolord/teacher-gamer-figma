"use client";

import { ArrowLeft, Book, CheckCircle, Clock, Star, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MEDIA } from "@/lib/media";

const courseFeatures = [
  "Introduction to Role-Playing Games (RPGs) fundamentals",
  "Understanding the multiverse concept in education",
  "Project-Based Learning (PBL) integration strategies",
  "Social-Emotional Learning (SEL) through gaming",
  "Complete guide through the 13 Phases of Character Building",
  "Practical exercises and activities",
  "Downloadable resources and templates",
  "Certificate of completion",
];

const whatYouWillLearn = [
  {
    icon: Book,
    title: "RPG Foundations",
    description: "Master the basics of tabletop role-playing and storytelling",
  },
  {
    icon: Users,
    title: "Character Development",
    description: "Guide students through meaningful character creation",
  },
  {
    icon: CheckCircle,
    title: "Learning Integration",
    description: "Connect gaming mechanics to educational outcomes",
  },
];

export default function IntroToMultiversePage() {
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
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7df9ff]/20 border border-[#7df9ff]/30"
                style={{ color: "#7df9ff" }}
              >
                <Star className="w-4 h-4" />
                <span className="text-sm font-semibold">Beginner Level</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Intro to Multiverse
              </h1>

              <p className="text-xl text-white/90 leading-relaxed max-w-3xl">
                Get an introduction to how RPGs and the multiverse can drive
                adult readiness through PBL and SEL as we work through the 13
                Phases of Character Building.
              </p>

              {/* Course Stats */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2 text-white/80">
                  <Clock className="w-5 h-5" style={{ color: "#7df9ff" }} />
                  <span>6-8 weeks</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Users className="w-5 h-5" style={{ color: "#7df9ff" }} />
                  <span>Small group sessions</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Book className="w-5 h-5" style={{ color: "#7df9ff" }} />
                  <span>Self-paced learning</span>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <p className="text-3xl font-bold text-white mb-2">$299</p>
                  <p className="text-white/70">One-time payment</p>
                </div>
                <Button
                  size="lg"
                  className="w-full md:w-auto text-lg font-bold text-black px-12 py-6"
                  style={{ backgroundColor: "#7df9ff" }}
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
                    <div className="w-12 h-12 mb-4 rounded-full flex items-center justify-center bg-[#7df9ff]/20">
                      <Icon className="w-6 h-6" style={{ color: "#7df9ff" }} />
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
                        style={{ color: "#7df9ff" }}
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
                    title: "Introduction to RPGs in Education",
                    lessons: 5,
                  },
                  {
                    module: "Module 2",
                    title: "The 13 Phases of Character Building",
                    lessons: 8,
                  },
                  {
                    module: "Module 3",
                    title: "Project-Based Learning Integration",
                    lessons: 6,
                  },
                  {
                    module: "Module 4",
                    title: "Social-Emotional Learning Through Gaming",
                    lessons: 7,
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
                          style={{ color: "#7df9ff" }}
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
            <div className="bg-gradient-to-br from-[#7df9ff]/20 to-transparent rounded-xl p-8 border border-[#7df9ff]/30 text-center space-y-6">
              <h2 className="text-3xl font-bold text-white">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Join hundreds of educators who are transforming their classrooms
                through game-based learning.
              </p>
              <Button
                size="lg"
                className="text-lg font-bold text-black px-12 py-6"
                style={{ backgroundColor: "#7df9ff" }}
              >
                Enroll in Intro to Multiverse
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
