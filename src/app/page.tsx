"use client";

import LandingContent from "@/components/landing/LandingContent";
import { useLandingAnimation } from "@/hooks/useLandingAnimation";
import { MEDIA } from "@/lib/media";

export default function Home() {
  const { landingSectionRef, videoRef, headerRef, playAnimation } =
    useLandingAnimation();

  return (
    <section
      ref={landingSectionRef}
      className="relative w-full h-dvh overflow-hidden bg-black"
      style={{ perspective: "1000px" }}
    >
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video
        ref={videoRef}
        muted
        playsInline
        webkit-playsinline="true"
        preload="auto"
        disablePictureInPicture
        poster={MEDIA.poster.landingFrame}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        ref={headerRef}
        className="absolute inset-0 flex items-center justify-center"
        style={{ willChange: "transform, opacity" }}
      >
        <LandingContent onButtonClick={playAnimation} />
      </div>
    </section>
  );
}
