"use client";

import { ArrowRight, Shield, Star, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { forwardRef } from "react";
import { Button } from "@/components/ui/button";
import { MEDIA } from "@/lib/media";
import ShopSectionCard from "../shop/ShopSectionCard";

const features = [
  { icon: Shield, label: "Safe & Inclusive" },
  { icon: Users, label: "Small Groups" },
  { icon: Star, label: "Trained Game Masters" },
];

const stats = [
  {
    emoji: "🎲",
    value: "500+",
    label: "Adventures Led",
    position: "-bottom-6 -left-6",
    bg: "bg-accent/20",
  },
  {
    emoji: "⭐",
    value: "4.9/5",
    label: "Parent Rating",
    position: "-top-4 -right-4",
    bg: "bg-primary/20",
  },
];

const CombinedHeroSection = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url('${MEDIA.backgrounds.hero}')` }}
    >
      {/* Overlay fades in with content to show pure background first */}
      <div className="absolute inset-0 bg-black/60 animate-hero-fade-in" />

      {/* Hero Section Content with CSS fade-in animation */}
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative z-10 animate-hero-fade-in">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 text-white">
              <Star className="w-4 h-4" />
              <span className="text-sm font-semibold">
                Now enrolling for Fall 2025
              </span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance bg-[linear-gradient(135deg,#fff_0%,#c47020_20%,#d09a11_40%,#fff_100%)] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradientShift">
              A Safe Space for Kids to{" "}
              <span className="text-amber-400">Play & Learn</span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl">
              Where education meets adventure in a secure, monitored
              environment. Our platform creates a nurturing space where children
              can explore, create, and grow through game-based learning—all
              while parents and teachers have complete peace of mind.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="font-semibold text-lg px-8 bg-linear-to-r from-amber-400 to-amber-400 hover:from-amber-300 hover:to-amber-300 text-zinc-900 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(251,191,36,0.4)]"
                onClick={() => {
                  const coursesSection = document.getElementById("courses-section");
                  if (coursesSection) {
                    coursesSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Explore Courses
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-semibold text-lg px-8 bg-transparent border-white/30 text-white hover:bg-white/10"
                asChild
              >
                <Link href="/media">
                  Watch How It Works
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              {features.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon className="w-5 h-5 text-amber-400" />
                  <span className="text-sm font-medium text-white/80">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-4xl bg-muted border-4 border-gray-200 shadow-2xl">
              <Image
                src={MEDIA.hero.image}
                alt="Children learning and playing safely in an educational environment"
                fill
                className="object-cover rounded-4xl transparent"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {stats.map(({ emoji, value, label, position, bg }) => (
              <div
                key={label}
                className={`absolute ${position} bg-card p-4 rounded-2xl shadow-lg border border-border`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 ${bg} rounded-full flex items-center justify-center`}
                  >
                    <span className="text-2xl">{emoji}</span>
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{value}</p>
                    <p className="text-sm text-muted-foreground">{label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-12 sm:bottom-16 left-1/2 transform -translate-x-1/2 z-10 animate-hero-fade-in">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/70 text-sm uppercase tracking-wider">
            Scroll
          </span>
          <svg
            className="w-6 h-6 text-white/70"
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
          <div className="flex justify-center shrink-0 mb-6 md:mb-0">
            <ShopSectionCard image={MEDIA.assets.bookCover} />
          </div>

          <div className="flex flex-col text-left space-y-6 md:space-y-4 w-full">
            <h1 className="bg-[linear-gradient(135deg,#fff_0%,#c47020_20%,#d09a11_40%,#fff_100%)] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradientShift text-3xl md:text-4xl">
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

            <Link href="/shop">
              <button
                type="button"
                className="self-start px-8 py-3 bg-linear-to-r from-amber-400 to-amber-400 hover:from-amber-300 hover:to-amber-300 text-zinc-900 font-semibold rounded-full transition-all duration-300 hover:shadow-[0_4px_24px_rgba(251,191,36,0.4)]"
              >
                SHOP NOW
              </button>
            </Link>
          </div>
        </div>

        {/* Bottom horizontal transition element */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-yellow-500/10 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-yellow-500 to-transparent opacity-50" />
      </div>
    </section>
  );
});

CombinedHeroSection.displayName = "CombinedHeroSection";

export default CombinedHeroSection;
