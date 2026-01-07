import Image from "next/image";
import LandingPageClient from "@/components/landing/LandingPageClient";
import VideoPreloader from "@/components/landing/VideoPreloader";
import { MEDIA } from "@/lib/media";

export default function Home() {
  return (
    <section
      className="relative w-full h-dvh overflow-hidden bg-black"
      style={{ perspective: "1000px" }}
    >
      {/* Preload video for faster loading */}
      <VideoPreloader />

      {/* Server-rendered poster image for better LCP */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={MEDIA.poster.landingFrame}
          alt="Teacher Gamer Revolution"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={75}
        />
      </div>

      {/* Client component for interactive video and content */}
      <LandingPageClient />
    </section>
  );
}
