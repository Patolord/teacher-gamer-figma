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
      <div className="fixed inset-0 bg-[#1A1A1F]/80" />

      {/* Content */}
      <div className="relative z-10">
        {/* Header with Back Button */}
        <div className="container mx-auto px-4 pt-6 pb-2">
          <Link
            href="/home"
            className="inline-flex items-center gap-2 text-[#E5E4E8] hover:text-[#DAFF0D] transition-colors"
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
                  <div className="absolute inset-0 rounded-2xl blur-3xl bg-gradient-radial from-[#DAFF0D]/20 to-[#FFD85A]/20" />
                  <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-[#6A4BCF] shadow-[0_25px_50px_-12px_rgba(106,75,207,0.3),0_0_60px_rgba(106,75,207,0.1)]">
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
                <div className="backdrop-blur-sm rounded-xl p-6 max-w-md mx-auto bg-[#6A4BCF]/10 border-2 border-[#B9A7FF]/25 shadow-[0_10px_30px_rgba(106,75,207,0.3)]">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-lime-400 fill-lime-400" />
                    ))}
                  </div>
                  <p className="text-center text-lg font-semibold text-[#E5E4E8]">
                    4.9/5 from 200+ Educators
                  </p>
                </div>
              </div>

              {/* Book Details Section */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm bg-[#6A4BCF]/10 border-2 border-[#B9A7FF] shadow-[0_0_20px_rgba(106,75,207,0.3)]">
                    <Book className="w-4 h-4 text-[#DAFF0D]" />
                    <span className="text-sm font-semibold text-[#E5E4E8]">
                      Educational Resource
                    </span>
                  </div>

                  <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#E5E4E8]">
                    The Teacher-Gamer Handbook
                  </h1>

                  <p className="text-xl leading-relaxed text-[#E5E4E8]">
                    Build literacy. Spark imagination. Empower learners. Transform
                    classrooms into immersive adventures where students learn by
                    playing, failing, and growing together.
                  </p>
                </div>

                {/* Price */}
                <div className="backdrop-blur-sm rounded-xl p-6 bg-[#6A4BCF]/10 border-2 border-[#B9A7FF]/25 shadow-[0_10px_30px_rgba(106,75,207,0.3)]">
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <span className="text-4xl font-bold text-[#E5E4E8]">
                      $39.99 USD
                    </span>
                    <span className="text-lg line-through text-[#B8B5C4]">
                      $59.99 USD
                    </span>
                    <span className="px-3 py-1 text-sm font-semibold rounded-full bg-[#DAFF0D] text-[#1A1A1F]">
                      33% OFF
                    </span>
                  </div>
                  <p className="mt-2 text-[#E5E4E8]">
                    Digital & Physical versions available
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  {/* Buy Button */}
                  <Button
                    size="lg"
                    className="w-full text-lg font-bold py-6 transition-all duration-300 bg-[#DAFF0D] text-[#1A1A1F] hover:bg-[#E5FF4D] shadow-[0_4px_20px_rgba(218,255,13,0.2),0_0_40px_rgba(255,216,90,0.2)] hover:shadow-[0_6px_30px_rgba(218,255,13,0.45),0_0_50px_rgba(255,216,90,0.25)]"
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
                    className="w-full text-lg font-bold py-6 transition-all duration-300 bg-[#6A4BCF] text-[#F9F9F9] hover:bg-[#B9A7FF] shadow-[0_4px_20px_rgba(106,75,207,0.3)] hover:shadow-[0_6px_30px_rgba(106,75,207,0.3)]"
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
                  <h2 className="text-2xl font-bold text-[#E5E4E8]">
                    What's Inside
                  </h2>
                  <ul className="space-y-3">
                    {bookFeatures.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-lg text-[#E5E4E8]"
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
              <h2 className="text-3xl font-bold text-center text-[#E5E4E8]">
                Why Educators Love Our Resources
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {benefits.map(({ icon: Icon, title, description }) => (
                  <div
                    key={title}
                    className="backdrop-blur-sm rounded-xl p-6 text-center space-y-4 bg-[#6A4BCF]/10 border-2 border-[#B9A7FF]/25 shadow-[0_10px_30px_rgba(106,75,207,0.3)]"
                  >
                    <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center bg-[#DAFF0D]/20">
                      <Icon className="w-8 h-8 text-[#DAFF0D]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#E5E4E8]">
                      {title}
                    </h3>
                    <p className="text-[#B8B5C4]">{description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="mt-20 max-w-3xl mx-auto">
              <div className="backdrop-blur-sm rounded-xl p-8 bg-[#6A4BCF]/10 border-2 border-[#B9A7FF]/25 shadow-[0_10px_30px_rgba(106,75,207,0.3)]">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-lime-400 fill-lime-400" />
                  ))}
                </div>
                <p className="text-lg italic mb-4 text-[#B8B5C4]">
                  "This handbook transformed my classroom! My students are more
                  engaged, collaborative, and excited to learn. The practical
                  strategies are easy to implement and the results are amazing."
                </p>
                <p className="font-semibold text-[#E5E4E8]">
                  - Sarah Johnson, 5th Grade Teacher
                </p>
              </div>
            </div>

            {/* Products Section */}
            <div className="mt-20 space-y-8">
              <h2 className="text-3xl font-bold text-center text-[#E5E4E8]">
                Available Products
              </h2>

              {/* Products Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Product 1: Teacher Gamer Handbook (PDF) */}
                <div className="backdrop-blur-sm rounded-xl overflow-hidden flex flex-col bg-[#6A4BCF]/10 border-2 border-[#B9A7FF]/25 shadow-[0_10px_30px_rgba(106,75,207,0.3)]">
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
                    <h3 className="text-lg font-bold mb-4 text-center text-[#E5E4E8]">
                      Teacher Gamer Handbook (PDF)
                    </h3>
                    <p className="text-2xl font-bold text-center mb-4 text-[#E5E4E8]">
                      $29.99 USD
                    </p>
                    <Button
                      className="w-full font-bold mt-auto transition-all duration-300 bg-[#DAFF0D] text-[#1A1A1F] hover:bg-[#E5FF4D]"
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
                <div className="backdrop-blur-sm rounded-xl overflow-hidden flex flex-col bg-[#6A4BCF]/10 border-2 border-[#B9A7FF]/25 shadow-[0_10px_30px_rgba(106,75,207,0.3)]">
                  <div className="relative aspect-3/4 w-full">
                    <Image
                      src={MEDIA.assets.bookCover}
                      alt="Teacher Gamer Handbook (Softcover / Hardcover)"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold mb-2 text-center text-[#E5E4E8]">
                      Teacher Gamer Handbook (Softcover / Hardcover)
                    </h3>
                    <div className="text-center mb-4">
                      <p className="text-sm mb-1 text-[#B8B5C4]">
                        Starting From:
                      </p>
                      <p className="text-2xl font-bold text-[#E5E4E8]">
                        $36.99 USD
                      </p>
                    </div>
                    <Button
                      className="w-full font-bold mt-auto transition-all duration-300 bg-[#DAFF0D] text-[#1A1A1F] hover:bg-[#E5FF4D]"
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
                <div className="backdrop-blur-sm rounded-xl overflow-hidden flex flex-col bg-[#6A4BCF]/10 border-2 border-[#B9A7FF]/25 shadow-[0_10px_30px_rgba(106,75,207,0.3)]">
                  <div className="relative aspect-3/4 w-full">
                    <Image
                      src={MEDIA.assets.bookCover}
                      alt="Teacher Gamer Screen (Landscape)"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold mb-2 text-center text-[#E5E4E8]">
                      Teacher Gamer Screen (Landscape)
                    </h3>
                    <div className="text-center mb-4">
                      <p className="text-sm mb-1 text-[#B8B5C4]">
                        Starting From:
                      </p>
                      <p className="text-2xl font-bold text-[#E5E4E8]">
                        $4.99 USD
                      </p>
                    </div>
                    <Button
                      className="w-full font-bold mt-auto transition-all duration-300 bg-[#DAFF0D] text-[#1A1A1F] hover:bg-[#E5FF4D]"
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
                <div className="backdrop-blur-sm rounded-xl overflow-hidden flex flex-col bg-[#6A4BCF]/10 border-2 border-[#B9A7FF]/25 shadow-[0_10px_30px_rgba(106,75,207,0.3)]">
                  <div className="relative aspect-3/4 w-full">
                    <Image
                      src={MEDIA.assets.bookCover}
                      alt="Teacher Gamer Screen (Portrait)"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold mb-2 text-center text-[#E5E4E8]">
                      Teacher Gamer Screen (Portrait)
                    </h3>
                    <div className="text-center mb-4">
                      <p className="text-sm mb-1 text-[#B8B5C4]">
                        Starting From:
                      </p>
                      <p className="text-2xl font-bold text-[#E5E4E8]">
                        $4.99 USD
                      </p>
                    </div>
                    <Button
                      className="w-full font-bold mt-auto transition-all duration-300 bg-[#DAFF0D] text-[#1A1A1F] hover:bg-[#E5FF4D]"
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
              <h2 className="text-3xl font-bold text-[#E5E4E8]">
                Ready to Get Started?
              </h2>
              <p className="text-xl max-w-2xl mx-auto text-[#E5E4E8]">
                Explore our collection of educational resources designed to transform
                your classroom into an engaging learning adventure.
              </p>
              <Button
                size="lg"
                className="text-lg font-bold px-12 py-6 transition-all duration-300 bg-[#DAFF0D] text-[#1A1A1F] hover:bg-[#E5FF4D] shadow-[0_4px_20px_rgba(218,255,13,0.2),0_0_40px_rgba(255,216,90,0.2)] hover:shadow-[0_6px_30px_rgba(218,255,13,0.45),0_0_50px_rgba(255,216,90,0.25)]"
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
