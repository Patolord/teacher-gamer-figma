"use client";

import { ArrowLeft, Award, Book, CheckCircle, Clock, GraduationCap, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MEDIA } from "@/lib/media";

const courseFeatures = [
  "Align RPG campaigns with district learning standards",
  "Navigate educational policy and approval processes",
  "Build administrator buy-in and support",
  "Create cross-curricular learning connections",
  "Develop assessment and evaluation frameworks",
  "Scale RPG programs within your district",
  "Mentor other educators in RPG integration",
  "Master Teacher Gamer Certification",
];

const whatYouWillLearn = [
  {
    icon: GraduationCap,
    title: "Standards Alignment",
    description: "Map RPG elements to educational learning objectives",
  },
  {
    icon: Users,
    title: "Program Scaling",
    description: "Expand RPG integration across multiple classrooms",
  },
  {
    icon: Award,
    title: "Master Certification",
    description: "Achieve the highest level of Teacher Gamer recognition",
  },
];

export default function Level3PlanesWalkerPage() {
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
                const coursesSection = document.getElementById("courses-section");
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
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#b8411f]/20 border border-[#b8411f]/30" style={{ color: "#b8411f" }}>
                  <GraduationCap className="w-4 h-4" />
                  <span className="text-sm font-semibold">Master Level</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#b8411f]/10 border border-[#b8411f]/20 text-white">
                  <Award className="w-4 h-4" />
                  <span className="text-sm font-semibold">Master Certification</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Level 3 TG Planes Walker Certificate Course
              </h1>

              <p className="text-xl text-white/90 leading-relaxed max-w-3xl">
                Integrate your own RPGs campaign into your local school system's 
                learning objectives with guidance.
              </p>

              {/* Course Stats */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2 text-white/80">
                  <Clock className="w-5 h-5" style={{ color: "#b8411f" }} />
                  <span>16-20 weeks</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Users className="w-5 h-5" style={{ color: "#b8411f" }} />
                  <span>Mentored implementation</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Award className="w-5 h-5" style={{ color: "#b8411f" }} />
                  <span>Master Certification</span>
                </div>
              </div>
            </div>

            {/* Prerequisites */}
            <div className="bg-[#b8411f]/10 backdrop-blur-sm rounded-xl p-6 border border-[#b8411f]/30">
              <p className="text-white/90">
                <strong style={{ color: "#b8411f" }}>Prerequisite:</strong> Level 2 TG 
                World Builder Certificate and at least one year of campaign experience
              </p>
            </div>

            {/* CTA Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <p className="text-3xl font-bold text-white mb-2">$1,299</p>
                  <p className="text-white/70">Includes 1-on-1 mentorship & consultation</p>
                </div>
                <Button
                  size="lg"
                  className="w-full md:w-auto text-lg font-bold text-white px-12 py-6"
                  style={{ backgroundColor: "#b8411f" }}
                >
                  Enroll Now
                </Button>
              </div>
            </div>

            {/* What You'll Learn */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">What You'll Learn</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {whatYouWillLearn.map(({ icon: Icon, title, description }) => (
                  <div
                    key={title}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                  >
                    <div className="w-12 h-12 mb-4 rounded-full flex items-center justify-center bg-[#b8411f]/20">
                      <Icon className="w-6 h-6" style={{ color: "#b8411f" }} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
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
                  {courseFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 mt-0.5 shrink-0" style={{ color: "#b8411f" }} />
                      <span className="text-white/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Course Curriculum */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Course Curriculum</h2>
              <div className="space-y-4">
                {[
                  {
                    module: "Module 1",
                    title: "Understanding Educational Standards",
                    lessons: 6,
                  },
                  {
                    module: "Module 2",
                    title: "Standards-Aligned Campaign Design",
                    lessons: 8,
                  },
                  {
                    module: "Module 3",
                    title: "Building Administrative Support",
                    lessons: 5,
                  },
                  {
                    module: "Module 4",
                    title: "Assessment & Documentation",
                    lessons: 7,
                  },
                  {
                    module: "Module 5",
                    title: "Program Implementation & Scaling",
                    lessons: 9,
                  },
                  {
                    module: "Module 6",
                    title: "Mentoring Future Teacher Gamers",
                    lessons: 6,
                  },
                  {
                    module: "Module 7",
                    title: "Master Certification Capstone",
                    lessons: 5,
                  },
                ].map((module) => (
                  <div
                    key={module.module}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold mb-1" style={{ color: "#b8411f" }}>
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
            <div className="bg-gradient-to-br from-[#b8411f]/20 to-transparent rounded-xl p-8 border border-[#b8411f]/30 text-center space-y-6">
              <h2 className="text-3xl font-bold text-white">
                Ready to Become a Master Teacher Gamer?
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Lead the transformation of education in your school district through 
                game-based learning.
              </p>
              <Button
                size="lg"
                className="text-lg font-bold text-white px-12 py-6"
                style={{ backgroundColor: "#b8411f" }}
              >
                Enroll in Level 3 Certification
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

