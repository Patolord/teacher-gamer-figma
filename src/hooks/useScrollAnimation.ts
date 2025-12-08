"use client";

import { useEffect } from "react";

/**
 * Hook to enable scroll-triggered CSS animations using Intersection Observer.
 *
 * Add `data-animate` to elements you want to animate on scroll.
 * Add `data-animate-stagger` for staggered children animations.
 *
 * Variants:
 * - `data-animate` or `data-animate="fade-up"` - fade in + slide up (default)
 * - `data-animate="fade"` - fade in only
 * - `data-animate="slide-left"` - slide from left
 * - `data-animate="slide-right"` - slide from right
 * - `data-animate="scale"` - scale up
 */
export function useScrollAnimation() {
  useEffect(() => {
    // Skip if IntersectionObserver is not supported
    if (typeof IntersectionObserver === "undefined") {
      // Fallback: make all elements visible immediately
      document
        .querySelectorAll("[data-animate], [data-animate-stagger]")
        .forEach((el) => {
          el.classList.add("is-visible");
        });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            // Once animated, stop observing (animation plays once)
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of element is visible
        rootMargin: "0px 0px -600px 0px", // Element needs to be 150px into viewport before triggering
      }
    );

    // Observe all elements with animation attributes
    const animatedElements = document.querySelectorAll(
      "[data-animate], [data-animate-stagger]"
    );

    animatedElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
}
