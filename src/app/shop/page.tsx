"use client";

import {
  ArrowLeft,
  Book,
  CheckCircle,
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
      <div className="fixed inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10">
        {/* Header with Back Button */}
        <div className="container mx-auto px-4 py-8">
          <Link
            href="/home"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
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
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-amber-400/20 rounded-2xl blur-3xl" />
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
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
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 max-w-md mx-auto">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <Star
                        key={n}
                        className="w-5 h-5 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-white text-center text-lg font-semibold">
                    4.9/5 from 200+ Educators
                  </p>
                </div>
              </div>

              {/* Book Details Section */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400/20 border border-amber-400/30 text-amber-400">
                    <Book className="w-4 h-4" />
                    <span className="text-sm font-semibold">
                      Educational Resource
                    </span>
                  </div>

                  <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    The Teacher-Gamer Handbook
                  </h1>

                  <p className="text-xl text-white/90 leading-relaxed">
                    Build literacy. Spark imagination. Empower learners.
                    Transform classrooms into immersive adventures where
                    students learn by playing, failing, and growing together.
                  </p>
                </div>

                {/* Price */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl font-bold text-white">
                      $39.99 USD
                    </span>
                    <span className="text-lg text-white/60 line-through">
                      $59.99 USD
                    </span>
                    <span className="px-3 py-1 bg-amber-400 text-zinc-900 text-sm font-semibold rounded-full">
                      33% OFF
                    </span>
                  </div>
                  <p className="text-white/70 mt-2">
                    Digital & Physical versions available
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  {/* Buy Button */}
                  <Button
                    size="lg"
                    className="w-full text-lg font-bold bg-amber-400 hover:bg-amber-300 text-zinc-900 py-6"
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
                        Buy Now
                      </>
                    )}
                  </Button>
                  {/* Buy the PDF Button */}
                  <Button
                    size="lg"
                    className="w-full text-lg font-bold bg-from bg-blue-500 hover:bg-blue-700 text-white py-6"
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
                        Buy The PDF
                      </>
                    )}
                  </Button>
                </div>

                {/* What's Inside */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-white">
                    What's Inside
                  </h2>
                  <ul className="space-y-3">
                    {bookFeatures.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-white/90"
                      >
                        <span className="text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="mt-20 space-y-8">
              <h2 className="text-3xl font-bold text-white text-center">
                Why Educators Love Our Resources
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {benefits.map(({ icon: Icon, title, description }) => (
                  <div
                    key={title}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center space-y-4"
                  >
                    <div className="w-16 h-16 mx-auto bg-amber-400/20 rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-amber-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{title}</h3>
                    <p className="text-white/80">{description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="mt-20 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="flex items-center gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <Star
                      key={n}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-white/90 text-lg italic mb-4">
                  "This handbook transformed my classroom! My students are more
                  engaged, collaborative, and excited to learn. The practical
                  strategies are easy to implement and the results are amazing."
                </p>
                <p className="text-white font-semibold">
                  - Sarah Johnson, 5th Grade Teacher
                </p>
              </div>
            </div>

            {/* Products Section */}
            <div className="mt-20 space-y-8">
              <h2 className="text-3xl font-bold text-white text-center">
                Available Products
              </h2>

              {/* Products Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Product 1: Teacher Gamer Handbook (PDF) */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden flex flex-col">
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
                    <h3 className="text-lg font-bold text-white mb-4 text-center">
                      Teacher Gamer Handbook (PDF)
                    </h3>
                    <p className="text-2xl font-bold text-white text-center mb-4">
                      $29.99 USD
                    </p>
                    <Button
                      className="w-full bg-amber-400 hover:bg-amber-300 text-zinc-900 font-bold mt-auto"
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

                {/* Product 2: Teacher Gamer Handbook (Softcover / Hardcover) */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden flex flex-col">
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
                    <h3 className="text-lg font-bold text-white mb-2 text-center">
                      Teacher Gamer Handbook (Softcover / Hardcover)
                    </h3>
                    <div className="text-center mb-4">
                      <p className="text-sm text-white/70 mb-1">
                        Starting From:
                      </p>
                      <p className="text-2xl font-bold text-white">
                        $36.99 USD
                      </p>
                    </div>
                    <Button
                      className="w-full bg-amber-400 hover:bg-amber-300 text-zinc-900 font-bold mt-auto"
                      onClick={handleCheckout}
                      disabled={isLoading}
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
                <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden flex flex-col">
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
                    <h3 className="text-lg font-bold text-white mb-2 text-center">
                      Teacher Gamer Screen (Landscape)
                    </h3>
                    <div className="text-center mb-4">
                      <p className="text-sm text-white/70 mb-1">
                        Starting From:
                      </p>
                      <p className="text-2xl font-bold text-white">$4.99 USD</p>
                    </div>
                    <Button
                      className="w-full bg-amber-400 hover:bg-amber-300 text-zinc-900 font-bold mt-auto"
                      onClick={handleCheckout}
                      disabled={isLoading}
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
                <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden flex flex-col">
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
                    <h3 className="text-lg font-bold text-white mb-2 text-center">
                      Teacher Gamer Screen (Portrait)
                    </h3>
                    <div className="text-center mb-4">
                      <p className="text-sm text-white/70 mb-1">
                        Starting From:
                      </p>
                      <p className="text-2xl font-bold text-white">$4.99 USD</p>
                    </div>
                    <Button
                      className="w-full bg-amber-400 hover:bg-amber-300 text-zinc-900 font-bold mt-auto"
                      onClick={handleCheckout}
                      disabled={isLoading}
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
              <h2 className="text-3xl font-bold text-white">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Explore our collection of educational resources designed to
                transform your classroom into an engaging learning adventure.
              </p>
              <Button
                size="lg"
                className="text-lg font-bold bg-amber-400 hover:bg-amber-300 text-zinc-900 px-12 py-6"
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
