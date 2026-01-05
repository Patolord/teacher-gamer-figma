"use client";

import { ArrowLeft, Book, CheckCircle, Loader2, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MEDIA } from "@/lib/media";

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
};

const bookFeatures = [
  "📘 300 pages of creative strategies and lesson plans",
  "🎲 36 life skills through collaborative RPG experiences",
  "⚔️ Designed for educators guiding 10+ year-old learners",
  "🔥 40+ hours of co-creative play and storytelling",
  "✨ Step-by-step implementation guides",
  "🎯 Classroom-tested activities and scenarios",
  "📊 Assessment tools and progress tracking",
  "💡 Tips from experienced game master educators",
];

const benefits = [
  {
    icon: Book,
    title: "Complete Framework",
    description: "Everything you need to integrate RPGs into your curriculum",
  },
  {
    icon: Star,
    title: "Proven Methods",
    description: "Tested in real classrooms with measurable results",
  },
  {
    icon: CheckCircle,
    title: "Easy to Follow",
    description: "Clear instructions for educators of all experience levels",
  },
];

export default function ShopPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error("Checkout error:", data.error);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Checkout error:", error);
      setIsLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen">
      {/* Background */}
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${MEDIA.backgrounds.hero}')` }}
      />
      <div 
        className="fixed inset-0" 
        style={{ backgroundColor: theme.neutral.black80 }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Header with Back Button */}
        <div className="container mx-auto px-4 py-8">
          <Link
            href="/home"
            className="inline-flex items-center gap-2 transition-colors"
            style={{ 
              color: theme.neutral.lighter,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = theme.accent.lime;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = theme.neutral.lighter;
            }}
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Book Image Section */}
              <div className="space-y-6">
                <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
                  <div 
                    className="absolute inset-0 rounded-2xl blur-3xl"
                    style={{ 
                      background: `radial-gradient(circle, ${theme.accent.limeGlow}, ${theme.highlight.yellowSoft})` 
                    }}
                  />
                  <div 
                    className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl"
                    style={{
                      border: `4px solid ${theme.primary.base}`,
                      boxShadow: `0 25px 50px -12px ${theme.primary.glow}, 0 0 60px ${theme.primary.subtle}`
                    }}
                  >
                    <Image
                      src={MEDIA.assets.bookCover}
                      alt="The Teacher-Gamer Handbook Cover"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* Rating/Reviews */}
                <div 
                  className="backdrop-blur-sm rounded-xl p-6 max-w-md mx-auto"
                  style={{
                    backgroundColor: theme.primary.subtle,
                    border: `2px solid ${theme.primary.light}40`,
                    boxShadow: `0 10px 30px ${theme.primary.glow}`
                  }}
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-5 h-5" 
                        style={{ 
                          color: theme.accent.lime, 
                          fill: theme.accent.lime 
                        }} 
                      />
                    ))}
                  </div>
                  <p 
                    className="text-center text-lg font-semibold"
                    style={{ color: theme.neutral.lighter }}
                  >
                    4.9/5 from 200+ Educators
                  </p>
                </div>
              </div>

              {/* Book Details Section */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div 
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm"
                    style={{
                      backgroundColor: theme.primary.subtle,
                      border: `2px solid ${theme.primary.light}`,
                      boxShadow: `0 0 20px ${theme.primary.glow}`
                    }}
                  >
                    <Book 
                      className="w-4 h-4" 
                      style={{ color: theme.accent.lime }}
                    />
                    <span 
                      className="text-sm font-semibold"
                      style={{ color: theme.neutral.lighter }}
                    >
                      Educational Resource
                    </span>
                  </div>

                  <h1 
                    className="text-4xl md:text-5xl font-bold leading-tight"
                    style={{ color: theme.neutral.lighter }}
                  >
                    The Teacher-Gamer Handbook
                  </h1>

                  <p 
                    className="text-xl leading-relaxed"
                    style={{ color: theme.neutral.lighter }}
                  >
                    Build literacy. Spark imagination. Empower learners. Transform
                    classrooms into immersive adventures where students learn by
                    playing, failing, and growing together.
                  </p>
                </div>

                {/* Price */}
                <div 
                  className="backdrop-blur-sm rounded-xl p-6"
                  style={{
                    backgroundColor: theme.primary.subtle,
                    border: `2px solid ${theme.primary.light}40`,
                    boxShadow: `0 10px 30px ${theme.primary.glow}`
                  }}
                >
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <span 
                      className="text-4xl font-bold"
                      style={{ color: theme.neutral.lighter }}
                    >
                      $39.99 USD
                    </span>
                    <span 
                      className="text-lg line-through"
                      style={{ color: theme.neutral.light }}
                    >
                      $59.99 USD
                    </span>
                    <span 
                      className="px-3 py-1 text-sm font-semibold rounded-full"
                      style={{
                        backgroundColor: theme.accent.lime,
                        color: theme.neutral.darkBg
                      }}
                    >
                      33% OFF
                    </span>
                  </div>
                  <p 
                    className="mt-2"
                    style={{ color: theme.neutral.lighter }}
                  >
                    Digital & Physical versions available
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                {/* Buy Button */}
                <Button
                  size="lg"
                  className="w-full text-lg font-bold py-6 transition-all duration-300"
                  style={{
                    backgroundColor: theme.accent.lime,
                    color: theme.neutral.darkBg,
                    boxShadow: `0 4px 20px ${theme.accent.limeGlow}, 0 0 40px ${theme.highlight.yellowSoft}`,
                  }}
                  onClick={handleCheckout}
                  disabled={isLoading}
                  onMouseEnter={(e) => {
                    if (!isLoading) {
                      e.currentTarget.style.backgroundColor = theme.accent.limeLight;
                      e.currentTarget.style.boxShadow = `0 6px 30px ${theme.accent.lime}70, 0 0 50px ${theme.highlight.yellow}40`;
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = theme.accent.lime;
                    e.currentTarget.style.boxShadow = `0 4px 20px ${theme.accent.limeGlow}, 0 0 40px ${theme.highlight.yellowSoft}`;
                  }}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      Buy Now
                    </>
                  )}
                </Button>
                {/* Buy the PDF Button */}
                <Button
                  size="lg"
                  className="w-full text-lg font-bold py-6 transition-all duration-300"
                  style={{
                    backgroundColor: theme.primary.base,
                    color: theme.neutral.white,
                    boxShadow: `0 4px 20px ${theme.primary.glow}`,
                  }}
                  onClick={handleCheckout}
                  disabled={isLoading}
                  onMouseEnter={(e) => {
                    if (!isLoading) {
                      e.currentTarget.style.backgroundColor = theme.primary.light;
                      e.currentTarget.style.boxShadow = `0 6px 30px ${theme.primary.glow}`;
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = theme.primary.base;
                    e.currentTarget.style.boxShadow = `0 4px 20px ${theme.primary.glow}`;
                  }}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      Buy The PDF
                    </>
                  )}
                </Button>
                </div>

                {/* What's Inside */}
                <div className="space-y-4">
                  <h2 
                    className="text-2xl font-bold"
                    style={{ color: theme.neutral.lighter }}
                  >
                    What's Inside
                  </h2>
                  <ul className="space-y-3">
                    {bookFeatures.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-lg"
                        style={{ color: theme.neutral.lighter }}
                      >
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="mt-20 space-y-8">
              <h2 
                className="text-3xl font-bold text-center"
                style={{ color: theme.neutral.lighter }}
              >
                Why Educators Love Our Resources
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {benefits.map(({ icon: Icon, title, description }) => (
                  <div
                    key={title}
                    className="backdrop-blur-sm rounded-xl p-6 text-center space-y-4"
                    style={{
                      backgroundColor: theme.primary.subtle,
                      border: `2px solid ${theme.primary.light}40`,
                      boxShadow: `0 10px 30px ${theme.primary.glow}`
                    }}
                  >
                    <div 
                      className="w-16 h-16 mx-auto rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${theme.accent.lime}20` }}
                    >
                      <Icon 
                        className="w-8 h-8" 
                        style={{ color: theme.accent.lime }}
                      />
                    </div>
                    <h3 
                      className="text-xl font-bold"
                      style={{ color: theme.neutral.lighter }}
                    >
                      {title}
                    </h3>
                    <p style={{ color: theme.neutral.light }}>
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="mt-20 max-w-3xl mx-auto">
              <div 
                className="backdrop-blur-sm rounded-xl p-8"
                style={{
                  backgroundColor: theme.primary.subtle,
                  border: `2px solid ${theme.primary.light}40`,
                  boxShadow: `0 10px 30px ${theme.primary.glow}`
                }}
              >
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5" 
                      style={{ 
                        color: theme.accent.lime, 
                        fill: theme.accent.lime 
                      }}
                    />
                  ))}
                </div>
                <p 
                  className="text-lg italic mb-4"
                  style={{ color: theme.neutral.light }}
                >
                  "This handbook transformed my classroom! My students are more
                  engaged, collaborative, and excited to learn. The practical
                  strategies are easy to implement and the results are amazing."
                </p>
                <p 
                  className="font-semibold"
                  style={{ color: theme.neutral.lighter }}
                >
                  - Sarah Johnson, 5th Grade Teacher
                </p>
              </div>
            </div>

            {/* Products Section */}
            <div className="mt-20 space-y-8">
              <h2 
                className="text-3xl font-bold text-center"
                style={{ color: theme.neutral.lighter }}
              >
                Available Products
              </h2>
              
              {/* Products Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Product 1: Teacher Gamer Handbook (PDF) */}
                <div 
                  className="backdrop-blur-sm rounded-xl overflow-hidden flex flex-col"
                  style={{
                    backgroundColor: theme.primary.subtle,
                    border: `2px solid ${theme.primary.light}40`,
                    boxShadow: `0 10px 30px ${theme.primary.glow}`
                  }}
                >
                  <div className="relative aspect-[3/4] w-full">
                    <Image
                      src={MEDIA.assets.bookCover}
                      alt="Teacher Gamer Handbook (PDF)"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 
                      className="text-lg font-bold mb-4 text-center"
                      style={{ color: theme.neutral.lighter }}
                    >
                      Teacher Gamer Handbook (PDF)
                    </h3>
                    <p 
                      className="text-2xl font-bold text-center mb-4"
                      style={{ color: theme.neutral.lighter }}
                    >
                      $29.99 USD
                    </p>
                    <Button
                      className="w-full font-bold mt-auto transition-all duration-300"
                      style={{
                        backgroundColor: theme.accent.lime,
                        color: theme.neutral.darkBg,
                      }}
                      onClick={handleCheckout}
                      disabled={isLoading}
                      onMouseEnter={(e) => {
                        if (!isLoading) e.currentTarget.style.backgroundColor = theme.accent.limeLight;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = theme.accent.lime;
                      }}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        "ADD TO CART"
                      )}
                    </Button>
                  </div>
                </div>

                {/* Product 2: Teacher Gamer Handbook (Softcover / Hardcover) */}
                <div 
                  className="backdrop-blur-sm rounded-xl overflow-hidden flex flex-col"
                  style={{
                    backgroundColor: theme.primary.subtle,
                    border: `2px solid ${theme.primary.light}40`,
                    boxShadow: `0 10px 30px ${theme.primary.glow}`
                  }}
                >
                  <div className="relative aspect-[3/4] w-full">
                    <Image
                      src={MEDIA.assets.bookCover}
                      alt="Teacher Gamer Handbook (Softcover / Hardcover)"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 
                      className="text-lg font-bold mb-2 text-center"
                      style={{ color: theme.neutral.lighter }}
                    >
                      Teacher Gamer Handbook (Softcover / Hardcover)
                    </h3>
                    <div className="text-center mb-4">
                      <p 
                        className="text-sm mb-1"
                        style={{ color: theme.neutral.light }}
                      >
                        Starting From:
                      </p>
                      <p 
                        className="text-2xl font-bold"
                        style={{ color: theme.neutral.lighter }}
                      >
                        $36.99 USD
                      </p>
                    </div>
                    <Button
                      className="w-full font-bold mt-auto transition-all duration-300"
                      style={{
                        backgroundColor: theme.accent.lime,
                        color: theme.neutral.darkBg,
                      }}
                      onClick={handleCheckout}
                      disabled={isLoading}
                      onMouseEnter={(e) => {
                        if (!isLoading) e.currentTarget.style.backgroundColor = theme.accent.limeLight;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = theme.accent.lime;
                      }}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        "BUY NOW"
                      )}
                    </Button>
                    
                  </div>
                </div>

                {/* Product 3: Teacher Gamer Screen (Landscape) */}
                <div 
                  className="backdrop-blur-sm rounded-xl overflow-hidden flex flex-col"
                  style={{
                    backgroundColor: theme.primary.subtle,
                    border: `2px solid ${theme.primary.light}40`,
                    boxShadow: `0 10px 30px ${theme.primary.glow}`
                  }}
                >
                  <div className="relative aspect-[3/4] w-full">
                    <Image
                      src={MEDIA.assets.bookCover}
                      alt="Teacher Gamer Screen (Landscape)"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 
                      className="text-lg font-bold mb-2 text-center"
                      style={{ color: theme.neutral.lighter }}
                    >
                      Teacher Gamer Screen (Landscape)
                    </h3>
                    <div className="text-center mb-4">
                      <p 
                        className="text-sm mb-1"
                        style={{ color: theme.neutral.light }}
                      >
                        Starting From:
                      </p>
                      <p 
                        className="text-2xl font-bold"
                        style={{ color: theme.neutral.lighter }}
                      >
                        $4.99 USD
                      </p>
                    </div>
                    <Button
                      className="w-full font-bold mt-auto transition-all duration-300"
                      style={{
                        backgroundColor: theme.accent.lime,
                        color: theme.neutral.darkBg,
                      }}
                      onClick={handleCheckout}
                      disabled={isLoading}
                      onMouseEnter={(e) => {
                        if (!isLoading) e.currentTarget.style.backgroundColor = theme.accent.limeLight;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = theme.accent.lime;
                      }}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        "BUY NOW"
                      )}
                    </Button>
                  </div>
                </div>

                {/* Product 4: Teacher Gamer Screen (Portrait) */}
                <div 
                  className="backdrop-blur-sm rounded-xl overflow-hidden flex flex-col"
                  style={{
                    backgroundColor: theme.primary.subtle,
                    border: `2px solid ${theme.primary.light}40`,
                    boxShadow: `0 10px 30px ${theme.primary.glow}`
                  }}
                >
                  <div className="relative aspect-[3/4] w-full">
                    <Image
                      src={MEDIA.assets.bookCover}
                      alt="Teacher Gamer Screen (Portrait)"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 
                      className="text-lg font-bold mb-2 text-center"
                      style={{ color: theme.neutral.lighter }}
                    >
                      Teacher Gamer Screen (Portrait)
                    </h3>
                    <div className="text-center mb-4">
                      <p 
                        className="text-sm mb-1"
                        style={{ color: theme.neutral.light }}
                      >
                        Starting From:
                      </p>
                      <p 
                        className="text-2xl font-bold"
                        style={{ color: theme.neutral.lighter }}
                      >
                        $4.99 USD
                      </p>
                    </div>
                    <Button
                      className="w-full font-bold mt-auto transition-all duration-300"
                      style={{
                        backgroundColor: theme.accent.lime,
                        color: theme.neutral.darkBg,
                      }}
                      onClick={handleCheckout}
                      disabled={isLoading}
                      onMouseEnter={(e) => {
                        if (!isLoading) e.currentTarget.style.backgroundColor = theme.accent.limeLight;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = theme.accent.lime;
                      }}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        "BUY NOW"
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-20 text-center space-y-6">
              <h2 
                className="text-3xl font-bold"
                style={{ color: theme.neutral.lighter }}
              >
                Ready to Get Started?
              </h2>
              <p 
                className="text-xl max-w-2xl mx-auto"
                style={{ color: theme.neutral.lighter }}
              >
                Explore our collection of educational resources designed to transform
                your classroom into an engaging learning adventure.
              </p>
              <Button
                size="lg"
                className="text-lg font-bold px-12 py-6 transition-all duration-300"
                style={{
                  backgroundColor: theme.accent.lime,
                  color: theme.neutral.darkBg,
                  boxShadow: `0 4px 20px ${theme.accent.limeGlow}, 0 0 40px ${theme.highlight.yellowSoft}`,
                }}
                onClick={handleCheckout}
                disabled={isLoading}
                onMouseEnter={(e) => {
                  if (!isLoading) {
                    e.currentTarget.style.backgroundColor = theme.accent.limeLight;
                    e.currentTarget.style.boxShadow = `0 6px 30px ${theme.accent.lime}70, 0 0 50px ${theme.highlight.yellow}40`;
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = theme.accent.lime;
                  e.currentTarget.style.boxShadow = `0 4px 20px ${theme.accent.limeGlow}, 0 0 40px ${theme.highlight.yellowSoft}`;
                }}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Get Started - Buy PDF
                  </>
                )}
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



