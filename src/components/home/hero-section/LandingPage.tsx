"use client";

import type { RefObject } from "react";
import HeroContent from "./HeroContent";
import ScrollDownIndicator from "./ScrollDownIndicator";

interface HeroSectionProps {
  headerRef: RefObject<HTMLDivElement | null>;
  heroImgRef?: RefObject<HTMLDivElement | null>;
  videoRef: RefObject<HTMLVideoElement | null>;
  heroSectionRef: RefObject<HTMLElement | null>;
  onGetStartedClick?: () => void;
}

export default function LandingPage({
  headerRef,
  videoRef,
  heroSectionRef,
  onGetStartedClick,
}: HeroSectionProps) {
  return (
    <>
      <section
        ref={heroSectionRef}
        className="hero-section hero relative w-full overflow-hidden bg-black"
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
          height: "100vh",
          minHeight: "-webkit-fill-available",
        }}
      >
        {/* Video for frame animation */}
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          poster="/frame_001.png"
          className="w-full h-full object-cover"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            backgroundColor: "#000000",
          }}
        />

        {/* Hero Content with 3D transform */}
        <div
          ref={headerRef}
          className="header absolute top-1/2 left-1/2 w-full flex flex-col items-center gap-6 text-center"
          style={{
            transform: "translate(-50%, -50%)",
            transformOrigin: "center",
            willChange: "transform, opacity",
            opacity: 0,
          }}
        >
          <HeroContent
            title="Teacher Gamer Revolution"
            description="The future of education is here. Join the Teacher Gamer Revolution and revolutionize the way you learn."
            buttonText="Get Started Now"
            onButtonClick={onGetStartedClick}
          />
        </div>

        {/* Scroll Down Indicator */}
        <ScrollDownIndicator style={{ opacity: 0 }} />
      </section>
    </>
  );
}
