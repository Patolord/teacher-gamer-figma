"use client";

import { ArrowLeft, ExternalLink, Loader2, ShoppingCart, Star } from "lucide-react";
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
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-7xl mx-auto">
            {/* Page Title */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold bg-[linear-gradient(135deg,#D29E2D_16%,#E0C07B_37%,#E0C07B_60%,#D29E2D_100%)] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradientShift mb-4">Shop</h1>
              <p className="text-lg text-white/80">Showing all 4 results</p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 max-w-[1400px] mx-auto">
              {/* Product 1: Teacher Gamer Handbook (PDF) */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden flex flex-col hover:border-white/40 transition-all hover:shadow-2xl">
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={MEDIA.assets.bookCover}
                    alt="Teacher Gamer Handbook (PDF)"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      DIGITAL
                    </span>
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-white mb-2 text-center">
                    Teacher Gamer Handbook (PDF)
                  </h3>
                  <p className="text-sm text-white/70 text-center mb-3 line-clamp-2">
                    Instant download. 300 pages of creative strategies and lesson plans.
                  </p>
                  <div className="flex items-center justify-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    ))}
                    <span className="text-xs text-white/60 ml-1">(4.9)</span>
                  </div>
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
              <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden flex flex-col hover:border-white/40 transition-all hover:shadow-2xl">
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={MEDIA.assets.bookCover}
                    alt="Teacher Gamer Handbook (Softcover / Hardcover)"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      PHYSICAL
                    </span>
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-white mb-2 text-center">
                    Teacher Gamer Handbook (Softcover / Hardcover)
                  </h3>
                  <p className="text-sm text-white/70 text-center mb-3 line-clamp-2">
                    Premium quality print. Choose between softcover or hardcover edition.
                  </p>
                  <div className="flex items-center justify-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    ))}
                    <span className="text-xs text-white/60 ml-1">(4.8)</span>
                  </div>
                  <div className="text-center mb-4">
                    <p className="text-xs text-white/70 mb-1">Starting From:</p>
                    <p className="text-2xl font-bold text-white">£36.99</p>
                  </div>
                  <Button
                    className="w-full bg-[#00D9FF] hover:bg-[#00B8D4] text-black font-bold mt-auto flex items-center justify-center gap-2"
                    asChild
                  >
                    <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer">
                      BUY NOW
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                  <p className="text-xs text-white/50 text-center mt-2">Opens in new tab</p>
                </div>
              </div>

              {/* Product 3: Teacher Gamer Screen (Landscape) */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden flex flex-col hover:border-white/40 transition-all hover:shadow-2xl">
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={MEDIA.assets.bookCover}
                    alt="Teacher Gamer Screen (Landscape)"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      TOOL
                    </span>
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-white mb-2 text-center">
                    Teacher Gamer Screen (Landscape)
                  </h3>
                  <p className="text-sm text-white/70 text-center mb-3 line-clamp-2">
                    Essential GM tool. Quick reference for running epic sessions.
                  </p>
                  <div className="flex items-center justify-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    ))}
                    <span className="text-xs text-white/60 ml-1">(5.0)</span>
                  </div>
                  <div className="text-center mb-4">
                    <p className="text-xs text-white/70 mb-1">Starting From:</p>
                    <p className="text-2xl font-bold text-white">£4.99</p>
                  </div>
                  <Button
                    className="w-full bg-[#00D9FF] hover:bg-[#00B8D4] text-black font-bold mt-auto flex items-center justify-center gap-2"
                    asChild
                  >
                    <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer">
                      BUY NOW
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                  <p className="text-xs text-white/50 text-center mt-2">Opens in new tab</p>
                </div>
              </div>

              {/* Product 4: Teacher Gamer Screen (Portrait) */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden flex flex-col hover:border-white/40 transition-all hover:shadow-2xl">
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={MEDIA.assets.bookCover}
                    alt="Teacher Gamer Screen (Portrait)"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      TOOL
                    </span>
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-white mb-2 text-center">
                    Teacher Gamer Screen (Portrait)
                  </h3>
                  <p className="text-sm text-white/70 text-center mb-3 line-clamp-2">
                    Compact format. Perfect for organizing your game master notes.
                  </p>
                  <div className="flex items-center justify-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    ))}
                    <span className="text-xs text-white/60 ml-1">(4.9)</span>
                  </div>
                  <div className="text-center mb-4">
                    <p className="text-xs text-white/70 mb-1">Starting From:</p>
                    <p className="text-2xl font-bold text-white">£4.99</p>
                  </div>
                  <Button
                    className="w-full bg-[#00D9FF] hover:bg-[#00B8D4] text-black font-bold mt-auto flex items-center justify-center gap-2"
                    asChild
                  >
                    <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer">
                      BUY NOW
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                  <p className="text-xs text-white/50 text-center mt-2">Opens in new tab</p>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="mt-20 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
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

            {/* CTA Section */}
            <div className="mt-20 text-center space-y-6">
              <h2 className="text-3xl font-bold bg-[linear-gradient(135deg,#D29E2D_16%,#E0C07B_37%,#E0C07B_60%,#D29E2D_100%)] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradientShift">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Explore our collection of educational resources designed to transform
                your classroom into an engaging learning adventure.
              </p>
              <Button
                size="lg"
                className="text-lg font-bold bg-green-600 hover:bg-green-700 text-white px-12 py-6"
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
                    Start Shopping
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



