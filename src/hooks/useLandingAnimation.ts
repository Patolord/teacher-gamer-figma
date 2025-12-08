"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import { startTransition, useCallback, useRef } from "react";

const floatingTextStyle = `
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.9);
  color: #ffffff;
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: bold;
  text-align: center;
  opacity: 0;
  pointer-events: none;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
  white-space: nowrap;
`;

function createFloatingText(text: string, zIndex: number, blur = false) {
  const el = document.createElement("div");
  el.textContent = text;
  el.style.cssText = `${floatingTextStyle}z-index:${zIndex};${
    blur ? "filter:blur(2px);" : ""
  }`;
  document.body.appendChild(el);
  return el;
}

function animateFloatingText(
  tl: gsap.core.Timeline,
  el: HTMLElement,
  startAt: number,
  duration: number
) {
  // Fade in and float up
  tl.to(
    el,
    {
      opacity: 1,
      y: -20,
      scale: 0.9,
      duration: duration * 0.03,
      ease: "power2.out",
    },
    startAt
  );
  // Hold visible
  tl.to(
    el,
    { opacity: 1, duration: duration * 0.04, ease: "none" },
    startAt + duration * 0.03
  );
  // Fade out
  tl.to(
    el,
    {
      opacity: 0,
      y: -40,
      scale: 0.85,
      duration: duration * 0.03,
      ease: "power2.in",
    },
    startAt + duration * 0.07
  );
  // Remove element
  tl.call(() => el.remove(), [], startAt + duration * 0.1);
}

export function useLandingAnimation() {
  const headerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const landingSectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  useGSAP(() => {
    const video = videoRef.current;
    const header = headerRef.current;

    if (!video) return;

    video.src = "/landing-video.mp4";
    video.pause();
    video.currentTime = 0;

    if (header) {
      gsap.set(header, { opacity: 1 });
    }
  });

  const playAnimation = useCallback(() => {
    const header = headerRef.current;
    const video = videoRef.current;

    if (!video) return;

    const startAnimation = () => {
      if (!video.duration) return;

      timelineRef.current?.kill();

      const duration = video.duration / 0.9;
      const tl = gsap.timeline();

      // Header fade out
      if (header) {
        tl.to(
          header,
          {
            opacity: 0,
            duration: duration * 0.15,
            ease: "power2.out",
          },
          0
        );
      }

      // Video playback
      tl.to(
        video,
        {
          currentTime: video.duration,
          duration: duration * 0.8,
          ease: "none",
        },
        0
      );

      // Floating text 1 (35-45%)
      const text1 = createFloatingText("Welcome to the Revolution", 1000, true);
      animateFloatingText(tl, text1, duration * 0.35, duration);

      // Floating text 2 (45-55%)
      const text2 = createFloatingText("Join the Movement", 1001);
      animateFloatingText(tl, text2, duration * 0.45, duration);

      // Create and fade in black overlay
      let overlay = overlayRef.current;
      if (!overlay) {
        overlay = document.createElement("div");
        overlay.style.cssText =
          "position:fixed;inset:0;background:#000;z-index:99999;opacity:0;pointer-events:none";
        document.body.appendChild(overlay);
        overlayRef.current = overlay;
      }

      tl.to(
        overlay,
        {
          opacity: 1,
          duration: duration * 0.1,
          ease: "power2.in",
          onComplete: () => {
            sessionStorage.setItem("transitionOverlay", "true");
            startTransition(() => router.push("/home"));
          },
        },
        duration * 0.8
      );

      timelineRef.current = tl;
      video.currentTime = 0;
      video.play().catch(() => {});
    };

    if (video.readyState >= 2) {
      startAnimation();
    } else {
      video.addEventListener("loadeddata", startAnimation, { once: true });
      video.load();
    }
  }, [router]);

  return { landingSectionRef, videoRef, headerRef, playAnimation };
}
