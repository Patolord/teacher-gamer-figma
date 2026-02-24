"use client";

import {
  ArrowLeft,
  Award,
  CheckCircle,
  Clock,
  Gift,
  GraduationCap,
  Quote,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { Button } from "@/components/ui/button";
import { MEDIA } from "@/lib/media";
import { CAL_CONFIG, getCalUIConfig, getCalConfig } from "@/components/home/calendar/cal-config";

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

const calProps = {
  "data-cal-namespace": CAL_CONFIG.username,
  "data-cal-link": CAL_CONFIG.username,
  "data-cal-config": JSON.stringify(getCalConfig()),
};

export default function Level3PlanesWalkerPage() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: CAL_CONFIG.username });
      cal("ui", getCalUIConfig());
    })();
  }, []);

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
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-dark/20 border border-secondary-dark/30 text-secondary-dark"
                >
                  <GraduationCap className="w-4 h-4" />
                  <span className="text-sm font-semibold">Master Level</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-dark/10 border border-secondary-dark/20 text-white">
                  <Award className="w-4 h-4" />
                  <span className="text-sm font-semibold">
                    Master Certification
                  </span>
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
                  <Clock className="w-5 h-5 text-secondary-dark" />
                  <span>16-20 weeks</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Users className="w-5 h-5 text-secondary-dark" />
                  <span>Mentored implementation</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Award className="w-5 h-5 text-secondary-dark" />
                  <span>Master Certification</span>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <Quote className="w-6 h-6 text-secondary-dark" />
                What Master Educators Are Saying
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-secondary-dark/20">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-secondary-dark fill-secondary-dark" />
                    ))}
                  </div>
                  <p className="text-white/90 italic mb-4 leading-relaxed">
                    "The Planes Walker course gave me the tools to present RPG-based learning to my school board with confidence. Within a semester, we had three classrooms running campaigns aligned to our district's literacy and SEL standards."
                  </p>
                  <p className="text-secondary-dark font-semibold text-sm">
                    — Dr. Linda W., Curriculum Director
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-secondary-dark/20">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-secondary-dark fill-secondary-dark" />
                    ))}
                  </div>
                  <p className="text-white/90 italic mb-4 leading-relaxed">
                    "The 1-on-1 mentorship was a game-changer. I now mentor two other teachers in my district who are starting their own RPG programs. Seeing this movement grow from one classroom to an entire school has been the highlight of my career."
                  </p>
                  <p className="text-secondary-dark font-semibold text-sm">
                    — Kevin O., Master Teacher Gamer
                  </p>
                </div>
              </div>
            </div>

            {/* Prerequisites */}
            <div className="bg-secondary-dark/10 backdrop-blur-sm rounded-xl p-6 border border-secondary-dark/30">
              <p className="text-white/90">
                <strong className="text-secondary-dark">Prerequisite:</strong>{" "}
                Level 2 TG World Builder Certificate and at least one year of
                campaign experience
              </p>
            </div>

            {/* Pricing Section */}
            <div className="space-y-6">
              {/* Individual Price */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <p className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-1">
                      Level 3 Planes Walker
                    </p>
                    <p className="text-3xl font-bold text-white mb-1">$1,299</p>
                    <p className="text-white/70">Includes 1-on-1 mentorship & consultation</p>
                  </div>
                  <Button
                    size="lg"
                    className="w-full md:w-auto text-lg font-bold text-white px-12 py-6 bg-secondary-dark"
                    {...calProps}
                  >
                    Enroll Now
                  </Button>
                </div>
              </div>

              {/* Bundle Deal */}
              <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border-2 border-secondary-dark/50 overflow-hidden">
                <div className="absolute -top-px -right-px">
                  <div className="bg-secondary-dark text-white text-xs font-extrabold px-4 py-1.5 rounded-bl-xl flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    SAVE 15%
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-5">
                  <Gift className="w-5 h-5 text-secondary-dark" />
                  <h3 className="text-lg font-bold text-secondary-dark">
                    Bundle & Save
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="px-3 py-1 rounded-full bg-secondary-dark/15 border border-secondary-dark/30 text-secondary-dark text-sm font-semibold">
                      Level 3 Planes Walker
                    </span>
                    <span className="text-white/40 text-lg">+</span>
                    <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/30 text-white text-sm font-semibold">
                      Any Additional Course
                    </span>
                  </div>

                  <p className="text-white/80 text-sm leading-relaxed">
                    Combine this course with <strong className="text-white">any other course</strong> and get <strong className="text-secondary-dark">15% off</strong> the total. Choose your path:
                  </p>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between bg-white/5 rounded-lg px-4 py-3 border border-white/10">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent" />
                        <span className="text-white/80 text-sm">+ Intro to Multiverse</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-white/40 text-sm line-through">$1,598</span>
                        <span className="text-secondary-dark font-bold">$1,358</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between bg-white/5 rounded-lg px-4 py-3 border border-white/10">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-secondary" />
                        <span className="text-white/80 text-sm">+ Level 1 Space-Holder</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-white/40 text-sm line-through">$1,898</span>
                        <span className="text-secondary-dark font-bold">$1,613</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between bg-white/5 rounded-lg px-4 py-3 border border-white/10">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary-light" />
                        <span className="text-white/80 text-sm">+ Level 2 World Builder</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-white/40 text-sm line-through">$2,198</span>
                        <span className="text-secondary-dark font-bold">$1,868</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button
                      size="lg"
                      className="w-full md:w-auto text-lg font-bold text-white px-10 py-6 bg-secondary-dark"
                      {...calProps}
                    >
                      Build Your Bundle
                    </Button>
                  </div>
                </div>
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
                    <div className="w-12 h-12 mb-4 rounded-full flex items-center justify-center bg-secondary-dark/20">
                      <Icon className="w-6 h-6 text-secondary-dark" />
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
                        className="w-5 h-5 mt-0.5 shrink-0 text-secondary-dark"
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
                        <p
                          className="text-sm font-semibold mb-1 text-secondary-dark"
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
            <div className="bg-gradient-to-br from-secondary-dark/20 to-transparent rounded-xl p-8 border border-secondary-dark/30 text-center space-y-6">
              <h2 className="text-3xl font-bold text-white">
                Ready to Become a Master Teacher Gamer?
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Lead the transformation of education in your school district
                through game-based learning.
              </p>
              <Button
                size="lg"
                className="text-lg font-bold text-white px-12 py-6 bg-secondary-dark"
                {...calProps}
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
