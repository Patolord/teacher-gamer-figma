"use client";

import {
  ArrowLeft,
  Award,
  Book,
  CheckCircle,
  Clock,
  Gift,
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

const calProps = {
  "data-cal-namespace": CAL_CONFIG.username,
  "data-cal-link": CAL_CONFIG.username,
  "data-cal-config": JSON.stringify(getCalConfig()),
};

export default function Level1SpaceHolderPage() {
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

            {/* Testimonials */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <Quote className="w-6 h-6 text-secondary" />
                What Certified Educators Are Saying
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-secondary/20">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-secondary fill-secondary" />
                    ))}
                  </div>
                  <p className="text-white/90 italic mb-4 leading-relaxed">
                    "The Space-Holder certification gave me the confidence to run my first full RPG session. The behavior management strategies alone were worth the investment. My pilot went smoother than I could have imagined."
                  </p>
                  <p className="text-secondary font-semibold text-sm">
                    — Marcus T., High School English Teacher
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-secondary/20">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-secondary fill-secondary" />
                    ))}
                  </div>
                  <p className="text-white/90 italic mb-4 leading-relaxed">
                    "Going from character development theory to actually facilitating in-game role-playing was a huge leap — but this course held my hand the whole way. The cohort-based format meant I always had peers to learn from and share ideas with."
                  </p>
                  <p className="text-secondary font-semibold text-sm">
                    — Angela P., Special Education Coordinator
                  </p>
                </div>
              </div>
            </div>

            {/* Pricing Section */}
            <div className="space-y-6">
              {/* Individual Price */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <p className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-1">
                      Level 1 Space-Holder
                    </p>
                    <p className="text-3xl font-bold text-white mb-1">$599</p>
                    <p className="text-white/70">Includes certification exam</p>
                  </div>
                  <Button
                    size="lg"
                    className="w-full md:w-auto text-lg font-bold text-white px-12 py-6 bg-secondary"
                    {...calProps}
                  >
                    Enroll Now
                  </Button>
                </div>
              </div>

              {/* Bundle Deal */}
              <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border-2 border-secondary/50 overflow-hidden">
                <div className="absolute -top-px -right-px">
                  <div className="bg-secondary text-white text-xs font-extrabold px-4 py-1.5 rounded-bl-xl flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    SAVE 15%
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-5">
                  <Gift className="w-5 h-5 text-secondary" />
                  <h3 className="text-lg font-bold text-secondary">
                    Bundle & Save
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="px-3 py-1 rounded-full bg-secondary/15 border border-secondary/30 text-secondary text-sm font-semibold">
                      Level 1 Space-Holder
                    </span>
                    <span className="text-white/40 text-lg">+</span>
                    <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/30 text-white text-sm font-semibold">
                      Any Additional Course
                    </span>
                  </div>

                  <p className="text-white/80 text-sm leading-relaxed">
                    Combine this course with <strong className="text-white">any other course</strong> and get <strong className="text-secondary">15% off</strong> the total. Choose your path:
                  </p>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between bg-white/5 rounded-lg px-4 py-3 border border-white/10">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent" />
                        <span className="text-white/80 text-sm">+ Intro to Multiverse</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-white/40 text-sm line-through">$898</span>
                        <span className="text-secondary font-bold">$763</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between bg-white/5 rounded-lg px-4 py-3 border border-white/10">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary-light" />
                        <span className="text-white/80 text-sm">+ Level 2 World Builder</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-white/40 text-sm line-through">$1,498</span>
                        <span className="text-secondary font-bold">$1,273</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between bg-white/5 rounded-lg px-4 py-3 border border-white/10">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-secondary-dark" />
                        <span className="text-white/80 text-sm">+ Level 3 Planes Walker</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-white/40 text-sm line-through">$1,898</span>
                        <span className="text-secondary font-bold">$1,613</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button
                      size="lg"
                      className="w-full md:w-auto text-lg font-bold text-white px-10 py-6 bg-secondary"
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
                {...calProps}
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
