import { ArrowRight, Shield, Star, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MEDIA } from "@/lib/media";

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

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url('${MEDIA.backgrounds.hero}')` }}
    >
      {/* Overlay fades in with content to show pure background first */}
      <div className="absolute inset-0 bg-black/60 animate-hero-fade-in" />

      {/* Content wrapper with CSS fade-in animation */}
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative z-10 animate-hero-fade-in">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 text-white">
              <Star className="w-4 h-4" />
              <span className="text-sm font-semibold">
                Now enrolling for Fall 2025
              </span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance text-white">
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
                className="font-semibold text-lg px-8 bg-amber-400 hover:bg-amber-300 text-zinc-900"
                asChild
              >
                <Link href="#courses">
                  Explore Courses
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-semibold text-lg px-8 bg-transparent border-white/30 text-white hover:bg-white/10"
              >
                Watch How It Works
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
    </section>
  );
}
