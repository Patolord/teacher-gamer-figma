"use client";

import { ArrowRight, Shield, Star, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { forwardRef } from "react";
import { Button } from "@/components/ui/button";
import ShopSectionCard from "../shop/ShopSectionCard";

const CombinedHeroSection = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section ref={ref} className="relative w-full">
      {/* Background image covering both hero and shop sections */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/main_room2.png')",
            backgroundSize: "auto 100%",
            backgroundPosition: "center center",
          }}
        />
        {/* Light overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Secondary Hero Section Content */}
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border ">
              <Star className="w-4 h-4" />
              <span className="text-sm font-semibold text-white">
                Now enrolling for Fall 2025
              </span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance text-white">
              A Safe Space for Kids to{" "}
              <span className="text-green-600">Play & Learn</span>
            </h1>

            <p className="text-lg md:text-xl text-white leading-relaxed max-w-xl">
              Where education meets adventure in a secure, monitored
              environment. Our platform creates a nurturing space where children
              can explore, create, and grow through game-based learning—all
              while parents and teachers have complete peace of mind.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="font-semibold text-lg px-8 bg-green-600 hover:bg-green-700 text-white"
                asChild
              >
                <Link
                  href="/home"
                  onClick={() => {
                    setTimeout(() => {
                      const coursesSection = document.querySelector(
                        '[data-scroll-section="3"]',
                      );
                      if (coursesSection) {
                        coursesSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }, 100);
                  }}
                >
                  Explore Courses
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-semibold text-lg px-8 bg-transparent border-gray-300 text-white hover:bg-gray-100"
              >
                Watch How It Works
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">
                  Safe & Inclusive
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">
                  Small Groups
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">
                  Trained Game Masters
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square overflow-hidden  rounded-4xl bg-muted border-4 border-gray-200 shadow-2xl">
              <Image
                src="/teacher-kids-books.jpg"
                alt="Children learning and playing safely in an educational environment"
                fill
                className="object-cover rounded-4xl transparent"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-2xl shadow-lg border border-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🎲</span>
                </div>
                <div>
                  <p className="font-bold text-foreground">500+</p>
                  <p className="text-sm text-muted-foreground">
                    Adventures Led
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-card p-4 rounded-2xl shadow-lg border border-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">⭐</span>
                </div>
                <div>
                  <p className="font-bold text-foreground">4.9/5</p>
                  <p className="text-sm text-muted-foreground">Parent Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-12 sm:bottom-16 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-gray-700 text-sm uppercase tracking-wider">
            Scroll
          </span>
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-label="Scroll down indicator"
            role="img"
          >
            <title>Scroll down</title>
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Shop Section Content */}
      <div
        data-scroll-section={0}
        className="py-40 flex justify-center items-center relative"
      >
        <div
          data-section-content
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 max-w-5xl w-full px-6 md:px-8 relative z-10"
        >
          <div className="flex justify-center flex-shrink-0 mb-6 md:mb-0">
            <ShopSectionCard image="/book-cover.png" />
          </div>

          <div className="flex flex-col text-left space-y-6 md:space-y-4 w-full">
            <h1 className="text-white text-3xl md:text-4xl">
              The Teacher-Gamer Handbook
            </h1>

            <h2 className="text-white text-base md:text-lg leading-relaxed">
              Build literacy. Spark imagination. Empower learners. Transform
              classrooms into immersive adventures where students learn by
              playing, failing, and growing together.
            </h2>

            <ul className="list-disc list-inside text-sm md:text-base text-white space-y-2">
              <li>📘 300 pages of creative strategies and lesson plans</li>
              <li>🎲 36 life skills through collaborative RPG experiences</li>
              <li>⚔️ Designed for educators guiding 10+ year-old learners</li>
              <li>🔥 40+ hours of co-creative play and storytelling</li>
            </ul>

            <h2 className="text-white text-base md:text-lg leading-relaxed">
              A complete framework to bring the power of role-playing into
              education.
            </h2>

            <button
              type="button"
              className="self-start text-white border border-white rounded-md px-6 py-3 hover:bg-white hover:text-black transition font-medium"
            >
              BUY THE BOOK
            </button>
          </div>
        </div>

        {/* Bottom horizontal transition element */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-yellow-500/10 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50" />
      </div>
    </section>
  );
});

CombinedHeroSection.displayName = "CombinedHeroSection";

export default CombinedHeroSection;
