"use client";

import {
  ArrowLeft,
  Book,
  CheckCircle,
  ExternalLink,
  Loader2,
  ShoppingCart,
  Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MEDIA } from "@/lib/media";

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
      <div className="fixed inset-0 bg-black-80" />

      {/* Content */}
      <div className="relative z-10">
        {/* Header with Back Button */}
        <div className="container mx-auto px-4 pt-6 pb-2">
          <Link
            href="/home"
            className="inline-flex items-center gap-2 text-lighter hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-6 md:py-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Book Image Section */}
              <div className="space-y-6">
                <div className="relative aspect-3/4 w-full max-w-md mx-auto">
                  <div className="absolute inset-0 rounded-2xl blur-3xl bg-gradient-to-br from-accent-glow to-secondary-soft" />
                  <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-primary shadow-[0_25px_50px_-12px_var(--color-primary-glow),0_0_60px_var(--color-primary-subtle)]">
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
                <div className="backdrop-blur-sm rounded-xl p-6 max-w-md mx-auto bg-primary-subtle border-2 border-primary-light/25 shadow-[0_10px_30px_var(--color-primary-glow)]">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-center text-lg font-semibold text-lighter">
                    4.9/5 from 200+ Educators
                  </p>
                </div>
              </div>

              {/* Book Details Section */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm bg-primary-subtle border-2 border-primary-light shadow-[0_0_20px_var(--color-primary-glow)]">
                    <Book className="w-4 h-4 text-accent" />
                    <span className="text-sm font-semibold text-lighter">
                      Educational Resource
                    </span>
                  </div>

                  <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    <span className="text-accent">The Teacher-Gamer</span>
                    <span className="text-lighter"> Handbook</span>
                  </h1>

                  <p className="text-xl leading-relaxed text-lighter">
                    Build literacy. Spark imagination. Empower learners. Transform
                    classrooms into immersive adventures where students learn by
                    playing, failing, and growing together.
                  </p>
                </div>

                {/* Price */}
                <div className="backdrop-blur-sm rounded-xl p-6 bg-primary-subtle border-2 border-primary-light/25 shadow-[0_10px_30px_var(--color-primary-glow)]">
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <span className="text-4xl font-bold text-lighter">
                      $39.99 USD
                    </span>
                    <span className="text-lg line-through text-light">
                      $59.99 USD
                    </span>
                    <span className="px-3 py-1 text-sm font-semibold rounded-full bg-accent text-background">
                      33% OFF
                    </span>
                  </div>
                  <p className="mt-2 text-lighter">
                    Digital & Physical versions available
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  {/* Buy Now Button - External Link */}
                  <Button
                    asChild
                    size="lg"
                    className="w-full text-lg font-bold py-6 transition-all duration-300 bg-accent text-background hover:bg-accent-light shadow-[0_4px_20px_var(--color-accent-glow),0_0_40px_var(--color-secondary-soft)] hover:shadow-[0_6px_30px_rgba(218,255,13,0.45),0_0_50px_rgba(255,216,90,0.25)]"
                  >
                    <a
                      href="https://www.drivethrurpg.com/pt/product/354223/teacher-gamer-handbook"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      Buy Physical Book
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>

                  {/* Buy the PDF Button - Triggers Checkout */}
                  <Button
                    size="lg"
                    className="w-full text-lg font-bold py-6 transition-all duration-300 bg-primary text-white hover:bg-primary-light shadow-[0_4px_20px_var(--color-primary-glow)] hover:shadow-[0_6px_30px_var(--color-primary-glow)]"
                    onClick={handleCheckout}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="w-5 h-5 mr-2" />
                        Get The PDF
                      </>
                    )}
                  </Button>
                </div>

                {/* What's Inside */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">
                    <span className="text-accent">What's</span>
                    <span className="text-lighter"> Inside</span>
                  </h2>
                  <ul className="space-y-3">
                    {bookFeatures.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-lg text-lighter"
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
              <h2 className="text-3xl font-bold text-center">
                <span className="text-lighter">Why Educators Love </span>
                <span className="text-accent">Our Resources</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {benefits.map(({ icon: Icon, title, description }) => (
                  <div
                    key={title}
                    className="backdrop-blur-sm rounded-xl p-6 text-center space-y-4 bg-primary-subtle border-2 border-primary-light/25 shadow-[0_10px_30px_var(--color-primary-glow)]"
                  >
                    <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center bg-accent-glow">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-accent">
                      {title}
                    </h3>
                    <p className="text-light">{description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            <div className="mt-20 space-y-8">
              <h2 className="text-3xl font-bold text-center mb-10">
                <span className="text-accent">What Educators</span>
                <span className="text-lighter"> Are Saying</span>
              </h2>

              <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {/* Goodreads Review - Jo Falk */}
                <div className="flex flex-col backdrop-blur-sm rounded-xl p-6 bg-primary-subtle border-2 border-primary-light/25 shadow-[0_10px_30px_var(--color-primary-glow)]">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={`t1-${i}`} className="w-4 h-4 text-accent fill-accent" />
                      ))}
                    </div>
                    <span className="text-xs text-lighter/50">Goodreads</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-base italic mb-3 text-light">
                      "This book is a labour of love and adventure! It is beautifully
                      illustrated and has lots of detailed explanations and insight. As
                      an educator, I see so many possibilities and positive ways role
                      play games and Zach's way of working empowers kids."
                    </p>
                    <p className="text-sm italic mb-4 text-light">
                      "My son has been playing role play games with Zach over the last
                      few years and has grown as a thinker, strategist and in his
                      creativity through his programme."
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <p className="font-semibold text-lighter text-sm">
                      - Jo Falk
                    </p>
                    <span className="text-xs text-lighter/40">Oct 2021</span>
                  </div>
                </div>

                {/* Goodreads Review - Noan */}
                <div className="flex flex-col backdrop-blur-sm rounded-xl p-6 bg-primary-subtle border-2 border-primary-light/25 shadow-[0_10px_30px_var(--color-primary-glow)]">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={`t2-${i}`} className="w-4 h-4 text-accent fill-accent" />
                      ))}
                    </div>
                    <span className="text-xs text-lighter/50">Goodreads</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-base italic mb-3 text-light">
                      "As a teacher and a gamer (teacher-gamer) this handbook is a
                      pretty amazing tome of knowledge. It covers so many elements of
                      how to take the gaming experience and bring it into the classroom.
                      Zach provides practical advice mixed with storytelling."
                    </p>
                    <p className="text-sm italic mb-4 text-light">
                      "What Zach covers in detail is not only good ideas, rather a new
                      approach to education. It takes the concept of gamification and
                      flips it on its head... instead of thinking about what elements of
                      games can be applied to learning, it asks one to think about the
                      learning that happens while gaming."
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <p className="font-semibold text-lighter text-sm">
                      - Noan
                    </p>
                    <span className="text-xs text-lighter/40">Apr 2022</span>
                  </div>
                </div>

                {/* Goodreads Review - Belinda Sircombe-Jellett */}
                <div className="flex flex-col backdrop-blur-sm rounded-xl p-6 bg-primary-subtle border-2 border-primary-light/25 shadow-[0_10px_30px_var(--color-primary-glow)]">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={`t3-${i}`} className="w-4 h-4 text-accent fill-accent" />
                      ))}
                    </div>
                    <span className="text-xs text-lighter/50">Goodreads</span>
                  </div>
                  <p className="text-base italic mb-4 text-light flex-1">
                    "The depth of material, ideas, resources and detail in this book
                    is staggering. I cannot begin to imagine the amount of time (in
                    years) that has been dedicated to making such a comprehensive and
                    well laid out guide to RPG's as this one. Very impressive."
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <p className="font-semibold text-lighter text-sm">
                      - Belinda Sircombe-Jellett
                    </p>
                    <span className="text-xs text-lighter/40">Oct 2021</span>
                  </div>
                </div>
                {/* DriveThruRPG Review - Bruno */}
                <div className="md:col-span-3 max-w-2xl mx-auto backdrop-blur-sm rounded-xl p-6 bg-primary-subtle border-2 border-primary-light/25 shadow-[0_10px_30px_var(--color-primary-glow)]">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={`t4-${i}`} className="w-4 h-4 text-accent fill-accent" />
                      ))}
                    </div>
                    <span className="text-xs text-lighter/50">DriveThruRPG</span>
                  </div>
                  <p className="text-base italic mb-4 text-light">
                    {`"If you've ever believed RPGs could be more than "just a game," this book gives you the map to make that belief real. The Teacher Gamer Handbook isn't a manual to follow — it's an invitation to create, mess up, laugh, and learn alongside your student-players."`}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-lighter text-sm">
                      - Bruno
                    </p>
                    <span className="text-xs text-lighter/40">Nov 2025</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Section */}
            <div className="mt-20 space-y-8">
              <h2 className="text-3xl font-bold text-center">
                <span className="text-accent">Available</span>
                <span className="text-lighter"> Products</span>
              </h2>

              {/* Products Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Product 1: Teacher Gamer Handbook (PDF) */}
                <div className="backdrop-blur-sm rounded-xl overflow-hidden flex flex-col bg-primary-subtle border-2 border-primary-light/25 shadow-[0_10px_30px_var(--color-primary-glow)]">
                  <div className="relative aspect-3/4 w-full">
                    <Image
                      src={MEDIA.assets.bookCover}
                      alt="Teacher Gamer Handbook (PDF)"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold mb-4 text-center text-lighter">
                      Teacher Gamer Handbook (PDF)
                    </h3>
                    <p className="text-2xl font-bold text-center mb-4 text-lighter">
                      $29.99 USD
                    </p>
                    <Button
                      className="w-full font-bold mt-auto transition-all duration-300 bg-accent text-background hover:bg-accent-light"
                      onClick={handleCheckout}
                      disabled={isLoading}
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

                {/* Product 2: Teacher Gamer Handbook (Softcover / Hardcover) - External Link */}
                <div className="backdrop-blur-sm rounded-xl overflow-hidden flex flex-col bg-primary-subtle border-2 border-primary-light/25 shadow-[0_10px_30px_var(--color-primary-glow)]">
                  <div className="relative aspect-3/4 w-full">
                    <Image
                      src={MEDIA.assets.bookCover2}
                      alt="Teacher Gamer Handbook (Softcover / Hardcover)"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold mb-2 text-center text-lighter">
                      Teacher Gamer Handbook (Softcover / Hardcover)
                    </h3>
                    <div className="text-center mb-4">
                      <p className="text-sm mb-1 text-light">
                        Starting From:
                      </p>
                      <p className="text-2xl font-bold text-lighter">
                        $36.99 USD
                      </p>
                    </div>
                    <Button
                      asChild
                      className="w-full font-bold mt-auto transition-all duration-300 bg-accent text-background hover:bg-accent-light"
                    >
                      <a
                        href="https://www.drivethrurpg.com/pt/product/354223/teacher-gamer-handbook"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        BUY NOW
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Product 3: Teacher Gamer Screen (Landscape) - External Link */}
                <div className="backdrop-blur-sm rounded-xl overflow-hidden flex flex-col bg-primary-subtle border-2 border-primary-light/25 shadow-[0_10px_30px_var(--color-primary-glow)]">
                  <div className="relative aspect-3/4 w-full">
                    <Image
                      src={MEDIA.assets.bookCover3}
                      alt="Teacher Gamer Screen (Landscape)"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold mb-2 text-center text-lighter">
                      Teacher Gamer Screen (Landscape)
                    </h3>
                    <div className="text-center mb-4">
                      <p className="text-sm mb-1 text-light">
                        Starting From:
                      </p>
                      <p className="text-2xl font-bold text-lighter">
                        $4.99 USD
                      </p>
                    </div>
                    <Button
                      asChild
                      className="w-full font-bold mt-auto transition-all duration-300 bg-accent text-background hover:bg-accent-light"
                    >
                      <a
                        href="https://www.drivethrurpg.com/pt/product/364211/teacher-gamer-screen-landscape"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        BUY NOW
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Product 4: Teacher Gamer Screen (Portrait) - External Link */}
                <div className="backdrop-blur-sm rounded-xl overflow-hidden flex flex-col bg-primary-subtle border-2 border-primary-light/25 shadow-[0_10px_30px_var(--color-primary-glow)]">
                  <div className="relative aspect-3/4 w-full">
                    <Image
                      src={MEDIA.assets.bookCover4}
                      alt="Teacher Gamer Screen (Portrait)"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold mb-2 text-center text-lighter">
                      Teacher Gamer Screen (Portrait)
                    </h3>
                    <div className="text-center mb-4">
                      <p className="text-sm mb-1 text-light">
                        Starting From:
                      </p>
                      <p className="text-2xl font-bold text-lighter">
                        $4.99 USD
                      </p>
                    </div>
                    <Button
                      asChild
                      className="w-full font-bold mt-auto transition-all duration-300 bg-accent text-background hover:bg-accent-light"
                    >
                      <a
                        href="https://www.drivethrurpg.com/product/364214/TeacherGamer-Screen-portrait"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        BUY NOW
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-20 text-center space-y-6">
              <h2 className="text-3xl font-bold">
                <span className="text-accent">Ready to Get</span>
                <span className="text-lighter"> Started?</span>
              </h2>
              <p className="text-xl max-w-2xl mx-auto text-lighter">
                Explore our collection of educational resources designed to transform
                your classroom into an engaging learning adventure.
              </p>
              <Button
                size="lg"
                className="text-lg font-bold px-12 py-6 transition-all duration-300 bg-accent text-background hover:bg-accent-light shadow-[0_4px_20px_var(--color-accent-glow),0_0_40px_var(--color-secondary-soft)] hover:shadow-[0_6px_30px_rgba(218,255,13,0.45),0_0_50px_rgba(255,216,90,0.25)]"
                onClick={handleCheckout}
                disabled={isLoading}
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
