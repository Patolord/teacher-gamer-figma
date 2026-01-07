"use client";

import { ArrowRight, Shield, Star, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { forwardRef } from "react";
import { Button } from "@/components/ui/button";
import { MEDIA } from "@/lib/media";
import ShopSectionCard from "../shop/ShopSectionCard";
import ShinyText from "@/components/ui/shinytext";

// Refined Split-Complementary Color Harmony - Magical Fantasy Theme
const theme = {
  // Primary - Deep Purple (30%)
  primary: {
    base: "#6A4BCF",
    light: "#B9A7FF", // Soft Lavender
    lighter: "#D4C9FF",
    dark: "#5538B5",
    subtle: "rgba(106, 75, 207, 0.1)",
    glow: "rgba(106, 75, 207, 0.3)",
  },
  
  // Accent - Lime Yellow (10% for CTAs, badges, highlights)
  accent: {
    lime: "#DAFF0D",
    limeLight: "#E5FF4D",
    limeDark: "#C5E600",
    limeGlow: "rgba(218, 255, 13, 0.2)",
  },
  
  // Highlight - Warm Yellow (secondary accent use)
  highlight: {
    yellow: "#FFD85A",
    yellowLight: "#FFE699",
    yellowDark: "#E6C040",
    yellowSoft: "rgba(255, 216, 90, 0.2)",
  },
  
  // Neutral - Refined Grays & Blacks (60% background/base)
  neutral: {
    darkBg: "#1A1A1F", // Dark Background
    dark: "#2A2A32",
    medium: "#6B6780",
    light: "#B8B5C4",
    lighter: "#E5E4E8",
    white: "#F9F9F9", // Neutral White
    subtle: "rgba(107, 103, 128, 0.1)",
    black60: "rgba(26, 26, 31, 0.6)", // 60% dark overlay
    black80: "rgba(26, 26, 31, 0.8)", // 80% dark overlay
    black90: "rgba(26, 26, 31, 0.9)", // 90% dark overlay
  },
  
  // Secondary - Moss/Sage (decorative accent)
  secondary: {
    sage: "#7F8067",
    sageLight: "#A5A68F",
  },
};

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
    accentColor: theme.primary.base,
  },
  {
    emoji: "⭐",
    value: "4.9/5",
    label: "Parent Rating",
    position: "-top-4 -right-4",
    accentColor: theme.accent.lime,
  },
];

const CombinedHeroSection = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section
      id="hero-section"
      ref={ref}
      className="relative w-full overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url('${MEDIA.backgrounds.hero}')` }}
    >
      {/* 40% black overlay - provides contrast while maintaining magical atmosphere */}
      <div 
        className="absolute inset-0 animate-hero-fade-in" 
        style={{ backgroundColor: "rgba(26, 26, 31, 0.4)" }}
      />

      {/* Hero Section Content with CSS fade-in animation */}
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative z-10 animate-hero-fade-in">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white backdrop-blur-sm"
              style={{ 
                backgroundColor: theme.primary.subtle,
                border: `2px solid ${theme.primary.light}`,
                boxShadow: `0 0 20px ${theme.primary.glow}`
              }}
            >
              <Star 
                className="w-4 h-4" 
                style={{ color: theme.accent.lime, fill: theme.accent.lime }}
              />
              <span className="text-sm font-semibold">
                Now enrolling for Fall 2025
              </span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              <ShinyText
                speed={3}
                delay={1}
                color={theme.primary.base}
                shineColor="#fff"
                spread={30}
                yoyo
              >
                A Safe Space for Kids to{" "}
                <span 
                  className="bg-clip-text text-transparent"
                  style={{ 
                    backgroundImage: `linear-gradient(135deg, ${theme.accent.lime} 0%, ${theme.highlight.yellow} 50%, ${theme.accent.lime} 100%)`
                  }}
                >
                  Play & Learn
                </span>
              </ShinyText>
            </h1>

            <p 
              className="text-lg md:text-xl leading-relaxed max-w-xl"
              style={{ color: theme.neutral.lighter }}
            >
              Where education meets adventure in a secure, monitored
              environment. Our platform creates a nurturing space where children
              can explore, create, and grow through game-based learning—all
              while parents and teachers have complete peace of mind.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="font-semibold text-lg px-8 transition-all duration-300"
                style={{
                  backgroundColor: theme.accent.lime,
                  color: theme.neutral.darkBg,
                  boxShadow: `0 4px 20px ${theme.accent.limeGlow}, 0 0 40px ${theme.highlight.yellowSoft}`,
                }}
                onClick={() => {
                  const coursesSection =
                    document.getElementById("courses-section");
                  if (coursesSection) {
                    coursesSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = theme.accent.limeLight;
                  e.currentTarget.style.boxShadow = `0 6px 30px ${theme.accent.lime}70, 0 0 50px ${theme.highlight.yellow}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = theme.accent.lime;
                  e.currentTarget.style.boxShadow = `0 4px 20px ${theme.accent.limeGlow}, 0 0 40px ${theme.highlight.yellowSoft}`;
                }}
              >
                Explore Courses
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-semibold text-lg px-8 text-white transition-all duration-300"
                style={{
                  backgroundColor: 'transparent',
                  borderColor: theme.primary.light,
                  borderWidth: '2px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = theme.primary.subtle;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
                asChild
              >
                <Link href="/media">Watch How It Works</Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              {features.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon 
                    className="w-5 h-5" 
                    style={{ color: theme.accent.lime }}
                  />
                  <span 
                    className="text-sm font-medium"
                    style={{ color: theme.neutral.lighter }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div 
              className="aspect-square overflow-hidden rounded-4xl shadow-2xl"
              style={{ 
                backgroundColor: theme.neutral.white,
                border: `4px solid ${theme.primary.base}`,
                boxShadow: `0 25px 50px -12px ${theme.primary.glow}, 0 0 60px ${theme.primary.subtle}`
              }}
            >
              <Image
                src={MEDIA.hero.image}
                alt="Children learning and playing safely in an educational environment"
                fill
                className="object-cover rounded-4xl transparent"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {stats.map(({ emoji, value, label, position, accentColor }) => (
              <div
                key={label}
                className={`absolute ${position} p-4 rounded-2xl shadow-lg backdrop-blur-sm`}
                style={{
                  backgroundColor: theme.neutral.white,
                  border: `2px solid ${accentColor}40`,
                  boxShadow: `0 10px 30px ${theme.neutral.darkBg}40, 0 0 20px ${accentColor}30`
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${accentColor}20` }}
                  >
                    <span className="text-2xl">{emoji}</span>
                  </div>
                  <div>
                    <p 
                      className="font-bold"
                      style={{ color: theme.neutral.darkBg }}
                    >
                      {value}
                    </p>
                    <p 
                      className="text-sm"
                      style={{ color: theme.neutral.medium }}
                    >
                      {label}
                    </p>
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
          <span 
            className="text-sm uppercase tracking-wider"
            style={{ color: theme.neutral.lighter }}
          >
            Scroll
          </span>
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            style={{ color: theme.accent.lime }}
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
            <h1 className="text-3xl md:text-4xl">
              <ShinyText
                speed={3}
                delay={1}
                color={theme.accent.lime}
                shineColor="#fff"
                spread={30}
                yoyo
              >
                The Teacher-Gamer Handbook
              </ShinyText>
            </h1>

            <h2 
              className="text-base md:text-lg leading-relaxed"
              style={{ color: theme.neutral.lighter }}
            >
              Build literacy. Spark imagination. Empower learners. Transform
              classrooms into immersive adventures where students learn by
              playing, failing, and growing together.
            </h2>

            <ul 
              className="list-disc list-inside text-sm md:text-base space-y-2"
              style={{ color: theme.neutral.lighter }}
            >
              <li>📘 300 pages of creative strategies and lesson plans</li>
              <li>🎲 36 life skills through collaborative RPG experiences</li>
              <li>⚔️ Designed for educators guiding 10+ year-old learners</li>
              <li>🔥 40+ hours of co-creative play and storytelling</li>
            </ul>

            <h2 
              className="text-base md:text-lg leading-relaxed"
              style={{ color: theme.neutral.lighter }}
            >
              A complete framework to bring the power of role-playing into
              education.
            </h2>

            <Link href="/shop">
              <button
                type="button"
                className="self-start px-8 py-3 font-semibold rounded-full transition-all duration-300"
                style={{
                  backgroundColor: theme.accent.lime,
                  color: theme.neutral.darkBg,
                  boxShadow: `0 4px 20px ${theme.accent.limeGlow}, 0 0 40px ${theme.highlight.yellowSoft}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = theme.accent.limeLight;
                  e.currentTarget.style.boxShadow = `0 6px 30px ${theme.accent.lime}70, 0 0 50px ${theme.highlight.yellow}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = theme.accent.lime;
                  e.currentTarget.style.boxShadow = `0 4px 20px ${theme.accent.limeGlow}, 0 0 40px ${theme.highlight.yellowSoft}`;
                }}
              >
                SHOP NOW
              </button>
            </Link>
          </div>
        </div>

        {/* Bottom horizontal transition element - magical glow */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{
            background: `linear-gradient(to top, ${theme.highlight.yellowSoft}, transparent)`
          }}
        />
        <div 
          className="absolute bottom-0 left-0 right-0 h-px opacity-60"
          style={{
            background: `linear-gradient(to right, transparent, ${theme.accent.lime}, ${theme.highlight.yellow}, ${theme.accent.lime}, transparent)`
          }}
        />
      </div>
    </section>
  );
});

CombinedHeroSection.displayName = "CombinedHeroSection";

export default CombinedHeroSection;
