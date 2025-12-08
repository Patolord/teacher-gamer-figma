"use client";

import LandingContent from "@/components/landing/LandingContent";
import { useLandingAnimation } from "@/hooks/useLandingAnimation";

export default function Home() {
  const { landingSectionRef, videoRef, headerRef, playAnimation } =
    useLandingAnimation();

  return (
    <section
      ref={landingSectionRef}
      className="relative w-full h-dvh overflow-hidden bg-black"
      style={{ perspective: "1000px" }}
    >
      <video
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        poster="/frame_001.png"
        className="absolute inset-0 w-full h-full object-cover"
      />
      +--------++++++++++++++++++++++++++++++++++++++++++++++++++++++-+øø
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
