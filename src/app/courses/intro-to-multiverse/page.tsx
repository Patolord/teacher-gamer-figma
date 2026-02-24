"use client";

import { ArrowLeft, Book, CheckCircle, Clock, Gift, Quote, Sparkles, Star, Users } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { Button } from "@/components/ui/button";
import { MEDIA } from "@/lib/media";
import { CAL_CONFIG, getCalUIConfig, getCalConfig } from "@/components/home/calendar/cal-config";

const calProps = {
  "data-cal-namespace": CAL_CONFIG.username,
  "data-cal-link": CAL_CONFIG.username,
  "data-cal-config": JSON.stringify(getCalConfig()),
};

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
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent"
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
                  <Clock className="w-5 h-5 text-accent" />
                  <span>6-8 weeks</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Users className="w-5 h-5 text-accent" />
                  <span>Small group sessions</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Book className="w-5 h-5 text-accent" />
                  <span>Self-paced learning</span>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <Quote className="w-6 h-6 text-accent" />
                What Students Are Saying
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-accent/20">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-white/90 italic mb-4 leading-relaxed">
                    "The Intro to Multiverse course completely changed how I approach teaching. The 13 Phases of Character Building gave me a framework I could start using the very next week. My students were more engaged than I've ever seen them."
                  </p>
                  <p className="text-accent font-semibold text-sm">
                    — Sarah M., Middle School Teacher
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-accent/20">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-white/90 italic mb-4 leading-relaxed">
                    "I had zero experience with RPGs before this course. Zach makes everything approachable and fun. By the end, I felt confident enough to introduce character building exercises to my class — and my students loved it."
                  </p>
                  <p className="text-accent font-semibold text-sm">
                    — David R., 5th Grade Educator
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
                      Intro to Multiverse
                    </p>
                    <p className="text-3xl font-bold text-white mb-1">$299</p>
                    <p className="text-white/70">One-time payment</p>
                  </div>
                  <Button
                    size="lg"
                    className="w-full md:w-auto text-lg font-bold text-black px-12 py-6 bg-accent"
                    {...calProps}
                  >
                    Enroll Now
                  </Button>
                </div>
              </div>

              {/* Bundle Deal */}
              <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border-2 border-accent/50 overflow-hidden">
                <div className="absolute -top-px -right-px">
                  <div className="bg-accent text-black text-xs font-extrabold px-4 py-1.5 rounded-bl-xl flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    SAVE 15%
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-5">
                  <Gift className="w-5 h-5 text-accent" />
                  <h3 className="text-lg font-bold text-accent">
                    Bundle & Save
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent text-sm font-semibold">
                      Intro to Multiverse
                    </span>
                    <span className="text-white/40 text-lg">+</span>
                    <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/30 text-white text-sm font-semibold">
                      Any Additional Course
                    </span>
                  </div>

                  <p className="text-white/80 text-sm leading-relaxed">
                    Combine this course with <strong className="text-white">any other course</strong> and get <strong className="text-accent">15% off</strong> the total. Choose your path:
                  </p>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between bg-white/5 rounded-lg px-4 py-3 border border-white/10">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-secondary" />
                        <span className="text-white/80 text-sm">+ Level 1 Space-Holder</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-white/40 text-sm line-through">$898</span>
                        <span className="text-accent font-bold">$763</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between bg-white/5 rounded-lg px-4 py-3 border border-white/10">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary-light" />
                        <span className="text-white/80 text-sm">+ Level 2 World Builder</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-white/40 text-sm line-through">$1,198</span>
                        <span className="text-accent font-bold">$1,018</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between bg-white/5 rounded-lg px-4 py-3 border border-white/10">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-secondary-dark" />
                        <span className="text-white/80 text-sm">+ Level 3 Planes Walker</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-white/40 text-sm line-through">$1,598</span>
                        <span className="text-accent font-bold">$1,358</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button
                      size="lg"
                      className="w-full md:w-auto text-lg font-bold text-black px-10 py-6 bg-accent"
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
                    <div className="w-12 h-12 mb-4 rounded-full flex items-center justify-center bg-accent/20">
                      <Icon className="w-6 h-6 text-accent" />
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
                        className="w-5 h-5 mt-0.5 shrink-0 text-accent"
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
                          className="text-sm font-semibold mb-1 text-accent"
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
            <div className="bg-gradient-to-br from-accent/20 to-transparent rounded-xl p-8 border border-accent/30 text-center space-y-6">
              <h2 className="text-3xl font-bold text-white">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Join hundreds of educators who are transforming their classrooms
                through game-based learning.
              </p>
              <Button
                size="lg"
                className="text-lg font-bold text-black px-12 py-6 bg-accent"
                {...calProps}
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
