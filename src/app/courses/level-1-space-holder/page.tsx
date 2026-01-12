"use client";

import {
  ArrowLeft,
  Award,
  Book,
  CheckCircle,
  Clock,
  Star,
  Users,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MEDIA } from "@/lib/media";

const courseFeatures = [
  "Master out-game character development techniques",
  "Transition seamlessly from character building to role-playing",
  "Run your first pilot session with confidence",
  "Earn Teacher Gamer Level 1 Certification",
  "Comprehensive session planning guides",
  "Behavior management strategies for game sessions",
  "Assessment and evaluation tools",
  "Access to exclusive educator community",
];

const whatYouWillLearn = [
  {
    icon: Users,
    title: "Space-Holding Skills",
    description: "Create safe, engaging environments for student-led play",
  },
  {
    icon: Book,
    title: "Session Management",
    description: "Plan and facilitate effective RPG sessions",
  },
  {
    icon: Award,
    title: "Level 1 Certification",
    description: "Complete your pilot and earn professional recognition",
  },
];

export default function Level1SpaceHolderPage() {
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
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30 text-secondary"
                >
                  <Star className="w-4 h-4" />
                  <span className="text-sm font-semibold">BEST VALUE</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-white">
                  <Award className="w-4 h-4" />
                  <span className="text-sm font-semibold">
                    Certification Course
                  </span>
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Level 1 TG Space-Holder Certificate Course
              </h1>

              <p className="text-xl text-white/90 leading-relaxed max-w-3xl">
                Learn to move from out-game character development to in-game
                role-playing and run a pilot to get teacher gamer level one
                certified.
              </p>

              {/* Course Stats */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2 text-white/80">
                  <Clock className="w-5 h-5 text-secondary" />
                  <span>10-12 weeks</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Users className="w-5 h-5 text-secondary" />
                  <span>Cohort-based learning</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Award className="w-5 h-5 text-secondary" />
                  <span>Level 1 Certification</span>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <p className="text-3xl font-bold text-white mb-2">$599</p>
                  <p className="text-white/70">Includes certification exam</p>
                </div>
                <Button
                  size="lg"
                  className="w-full md:w-auto text-lg font-bold text-white px-12 py-6 bg-secondary"
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
                    <div className="w-12 h-12 mb-4 rounded-full flex items-center justify-center bg-secondary/20">
                      <Icon className="w-6 h-6 text-secondary" />
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
                        className="w-5 h-5 mt-0.5 shrink-0 text-secondary"
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
                    title: "Advanced Character Development",
                    lessons: 6,
                  },
                  {
                    module: "Module 2",
                    title: "Facilitating In-Game Role-Playing",
                    lessons: 8,
                  },
                  {
                    module: "Module 3",
                    title: "Space-Holding Techniques",
                    lessons: 7,
                  },
                  {
                    module: "Module 4",
                    title: "Running Your Pilot Session",
                    lessons: 5,
                  },
                  {
                    module: "Module 5",
                    title: "Certification Preparation",
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
                          className="text-sm font-semibold mb-1 text-secondary"
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
            <div className="bg-gradient-to-br from-secondary/20 to-transparent rounded-xl p-8 border border-secondary/30 text-center space-y-6">
              <h2 className="text-3xl font-bold text-white">
                Ready to Get Certified?
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Join the next cohort and earn your Level 1 Teacher Gamer
                Certification.
              </p>
              <Button
                size="lg"
                className="text-lg font-bold text-white px-12 py-6 bg-secondary"
              >
                Enroll in Level 1 Certification
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
