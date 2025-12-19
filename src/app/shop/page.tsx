"use client";

import { ArrowLeft, ExternalLink, Loader2, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MEDIA } from "@/lib/media";

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
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-7xl mx-auto">
            {/* Shop Title */}
            <div className="mb-12">
              <h1 className="text-5xl md:text-6xl font-bold text-white text-center">
                Shop
              </h1>
            </div>

            {/* Products Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Product 1: Teacher Gamer Handbook (PDF) */}
              <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden flex flex-col hover:border-[#00D9FF]/50 transition-colors">
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={MEDIA.assets.bookCover}
                    alt="Teacher Gamer Handbook (PDF)"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-base font-bold text-white mb-2 text-center">
                    Teacher Gamer Handbook (PDF)
                  </h3>
                  <p className="text-sm text-white/80 text-center mb-3 line-clamp-2">
                    Get ready to WORLD BUILD with your students. The full-color digital PDF manual.
                  </p>
                  <p className="text-2xl font-bold text-white text-center mb-4">
                    £29.99
                  </p>
                  <Button
                    className="w-full bg-[#00D9FF] hover:bg-[#00B8D4] text-black font-bold mt-auto"
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

              {/* Product 2: Teacher Gamer Handbook (Softcover / Hardcover) */}
              <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden flex flex-col hover:border-[#00D9FF]/50 transition-colors">
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={MEDIA.assets.bookCover}
                    alt="Teacher Gamer Handbook (Softcover / Hardcover)"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-base font-bold text-white mb-2 text-center">
                    Teacher Gamer Handbook (Softcover / Hardcover)
                  </h3>
                  <p className="text-sm text-white/80 text-center mb-3 line-clamp-2">
                    Full color manual. 36 life-skills, 40+ hours of co-creative play.
                  </p>
                  <div className="text-center mb-4">
                    <p className="text-sm text-white/70 mb-1">Starting From:</p>
                    <p className="text-2xl font-bold text-white">£36.99</p>
                  </div>
                  <Button
                    className="w-full bg-[#00D9FF] hover:bg-[#00B8D4] text-black font-bold mt-auto"
                    onClick={handleCheckout}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        BUY NOW
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </div>
              </div>

              {/* Product 3: Teacher Gamer Screen (Landscape) */}
              <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden flex flex-col hover:border-[#00D9FF]/50 transition-colors">
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={MEDIA.assets.bookCover}
                    alt="Teacher Gamer Screen (Landscape)"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-base font-bold text-white mb-2 text-center">
                    Teacher Gamer Screen (Landscape)
                  </h3>
                  <p className="text-sm text-white/80 text-center mb-3 line-clamp-2">
                    Game Master companion. Organizational privacy for the person running the game.
                  </p>
                  <div className="text-center mb-4">
                    <p className="text-sm text-white/70 mb-1">Starting From:</p>
                    <p className="text-2xl font-bold text-white">£4.99</p>
                  </div>
                  <Button
                    className="w-full bg-[#00D9FF] hover:bg-[#00B8D4] text-black font-bold mt-auto"
                    onClick={handleCheckout}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        BUY NOW
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </div>
              </div>

              {/* Product 4: Teacher Gamer Screen (Portrait) */}
              <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden flex flex-col hover:border-[#00D9FF]/50 transition-colors">
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={MEDIA.assets.bookCover}
                    alt="Teacher Gamer Screen (Portrait)"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-base font-bold text-white mb-2 text-center">
                    Teacher Gamer Screen (Portrait)
                  </h3>
                  <p className="text-sm text-white/80 text-center mb-3 line-clamp-2">
                    Game Master companion. Organizational privacy for the person running the game.
                  </p>
                  <div className="text-center mb-4">
                    <p className="text-sm text-white/70 mb-1">Starting From:</p>
                    <p className="text-2xl font-bold text-white">£4.99</p>
                  </div>
                  <Button
                    className="w-full bg-[#00D9FF] hover:bg-[#00B8D4] text-black font-bold mt-auto"
                    onClick={handleCheckout}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        BUY NOW
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="mt-20 space-y-8">
              <h2 className="text-3xl font-bold text-white text-center">
                What Educators Are Saying
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Testimonial 1 */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-white/90 text-base italic mb-4">
                    "This handbook transformed my classroom! My students are more
                    engaged, collaborative, and excited to learn. The practical
                    strategies are easy to implement and the results are amazing."
                  </p>
                  <p className="text-white font-semibold">
                    - Sarah Johnson, 5th Grade Teacher
                  </p>
                </div>

                {/* Testimonial 2 */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-white/90 text-base italic mb-4">
                    "As someone new to RPGs, I was nervous at first. But the
                    Teacher-Gamer method made it so accessible. My students now ask
                    when we can play every day!"
                  </p>
                  <p className="text-white font-semibold">
                    - Michael Chen, Middle School Teacher
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Spacing */}
        <div className="h-20" />
      </div>
    </main>
  );
}



