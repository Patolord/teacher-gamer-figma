"use client";

import { Video } from "@imagekit/next";
import LandingContent from "@/components/landing/LandingContent";
import { useLandingAnimation } from "@/hooks/useLandingAnimation";
import { MEDIA } from "@/lib/media";

export default function LandingPageClient() {
  const { landingSectionRef, videoRef, headerRef, playAnimation, isLoading } =
    useLandingAnimation();

  return (
    <>
      {/* Video element - optimized with ImageKit SDK */}
      <Video
        ref={videoRef}
        src="/landing-video.mp4"
        muted
        playsInline
        webkit-playsinline="true"
        preload="auto"
        disablePictureInPicture
        poster={MEDIA.poster.landingFrame}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0 }}
      />
      <div
        ref={landingSectionRef}
        className="absolute inset-0"
        style={{ pointerEvents: "none" }}
      />
      <div
        ref={headerRef}
        className="absolute inset-0 flex items-center justify-center"
        style={{ willChange: "transform, opacity" }}
      >
        <LandingContent onButtonClick={playAnimation} isLoading={isLoading} />
      </div>
    </>
  );
}
