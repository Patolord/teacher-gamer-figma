"use client";

import { buildSrc } from "@imagekit/next";
import { useEffect } from "react";
import { MEDIA } from "@/lib/media";

export default function VideoPreloader() {
  useEffect(() => {
    // Build ImageKit URL for preloading
    const videoUrl = buildSrc({
      urlEndpoint: "https://ik.imagekit.io/TeacherGamer/Site/",
      src: "/landing-video.mp4",
    });

    // Add prefetch link to head for faster video loading
    // Use prefetch for video resources (preload doesn't support as="video")
    const link = document.createElement("link");
    link.rel = "prefetch";
    link.as = "fetch";
    link.href = videoUrl;
    link.crossOrigin = "anonymous";
    document.head.appendChild(link);

    return () => {
      // Cleanup on unmount
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  return null;
}

