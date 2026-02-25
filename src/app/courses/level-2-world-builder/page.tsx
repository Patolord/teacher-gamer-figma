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

const calProps = {
  "data-cal-namespace": CAL_CONFIG.username,
  "data-cal-link": CAL_CONFIG.username,
  "data-cal-config": JSON.stringify(getCalConfig()),
};

export default function Level2WorldBuilderPage() {
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
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light/20 border border-primary-light/30 text-primary-light"
                >
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-semibold">Advanced Level</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light/10 border border-primary-light/20 text-white">
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
                  <Clock className="w-5 h-5 text-primary-light" />
                  <span>14-16 weeks</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Users className="w-5 h-5 text-primary-light" />
                  <span>Cohort-based learning</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Award className="w-5 h-5 text-primary-light" />
                  <span>Level 2 Certification</span>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <Quote className="w-6 h-6 text-primary-light" />
                What World Builders Are Saying
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-primary-light/20">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-primary-light fill-primary-light" />
                    ))}
                  </div>
                  <p className="text-white/90 italic mb-4 leading-relaxed">
                    "Building my own campaign world was the most creatively fulfilling professional development I've ever done. My students now explore a world that ties directly into our science curriculum — they don't even realize how much they're learning."
                  </p>
                  <p className="text-primary-light font-semibold text-sm">
                    — Rachel K., 7th Grade Science Teacher
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-primary-light/20">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-primary-light fill-primary-light" />
                    ))}
                  </div>
                  <p className="text-white/90 italic mb-4 leading-relaxed">
                    "The story crafting and creature design modules were incredible. I created an entire campaign with original lore, and my students became co-authors of the world. Their writing skills improved dramatically because they actually cared about the narrative."
                  </p>
                  <p className="text-primary-light font-semibold text-sm">
                    — James L., Literacy Coach
                  </p>
                </div>
              </div>
            </div>

            {/* Prerequisites */}
            <div className="bg-primary-light/10 backdrop-blur-sm rounded-xl p-6 border border-primary-light/30">
              <p className="text-white/90">
                <strong className="text-primary-light">Prerequisite:</strong>{" "}
                Level 1 TG Space-Holder Certificate or equivalent experience
              </p>
            </div>

            {/* Pricing Section */}
            <div className="space-y-6">
              {/* Individual Price */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <p className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-1">
                      Level 2 World Builder
                    </p>
                    <p className="text-3xl font-bold text-white mb-1">$899</p>
                    <p className="text-white/70">Includes certification project review</p>
                  </div>
                  <Button
                    size="lg"
                    className="w-full md:w-auto text-lg font-bold text-white px-12 py-6 bg-primary-light"
                    {...calProps}
                  >
                    Enroll Now
                  </Button>
                </div>
              </div>

              {/* Bundle Deal */}
              <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border-2 border-primary-light/50 overflow-hidden">
                <div className="absolute -top-px -right-px">
                  <div className="bg-primary-light text-white text-xs font-extrabold px-4 py-1.5 rounded-bl-xl flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    SAVE 15%
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-5">
                  <Gift className="w-5 h-5 text-primary-light" />
                  <h3 className="text-lg font-bold text-primary-light">
                    Bundle & Save
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="px-3 py-1 rounded-full bg-primary-light/15 border border-primary-light/30 text-primary-light text-sm font-semibold">
                      Level 2 World Builder
                    </span>
                    <span className="text-white/40 text-lg">+</span>
                    <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/30 text-white text-sm font-semibold">
                      Any Additional Course
                    </span>
                  </div>

                  <p className="text-white/80 text-sm leading-relaxed">
                    Combine this course with <strong className="text-white">any other course</strong> and get <strong className="text-primary-light">15% off</strong> the total. Choose your path:
                  </p>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between bg-white/5 rounded-lg px-4 py-3 border border-white/10">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent" />
                        <span className="text-white/80 text-sm">+ Intro to Multiverse</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-white/40 text-sm line-through">$1,198</span>
                        <span className="text-primary-light font-bold">$1,018</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between bg-white/5 rounded-lg px-4 py-3 border border-white/10">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-secondary" />
                        <span className="text-white/80 text-sm">+ Level 1 Space-Holder</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-white/40 text-sm line-through">$1,498</span>
                        <span className="text-primary-light font-bold">$1,273</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between bg-white/5 rounded-lg px-4 py-3 border border-white/10">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-secondary-dark" />
                        <span className="text-white/80 text-sm">+ Level 3 Planes Walker</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-white/40 text-sm line-through">$2,198</span>
                        <span className="text-primary-light font-bold">$1,868</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button
                      size="lg"
                      className="w-full md:w-auto text-lg font-bold text-white px-10 py-6 bg-primary-light"
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
                    <div className="w-12 h-12 mb-4 rounded-full flex items-center justify-center bg-primary-light/20">
                      <Icon className="w-6 h-6 text-primary-light" />
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
                        className="w-5 h-5 mt-0.5 shrink-0 text-primary-light"
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
                          className="text-sm font-semibold mb-1 text-primary-light"
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
            <div className="bg-gradient-to-br from-primary-light/20 to-transparent rounded-xl p-8 border border-primary-light/30 text-center space-y-6">
              <h2 className="text-3xl font-bold text-white">
                Ready to Build Your World?
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Create an unforgettable campaign that will engage and inspire
                your students.
              </p>
              <Button
                size="lg"
                className="text-lg font-bold text-white px-12 py-6 bg-primary-light"
                {...calProps}
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
