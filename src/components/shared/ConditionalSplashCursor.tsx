"use client";

import { usePathname } from "next/navigation";
import SplashCursor from "./SplashCursor";

// Pages where SplashCursor should be disabled
const DISABLED_PATHS = ["/teachers-map"];

export default function ConditionalSplashCursor() {
  const pathname = usePathname();

  // Check if current path should have splash cursor disabled
  const isDisabled = DISABLED_PATHS.some((path) => pathname?.startsWith(path));

  if (isDisabled) {
    return null;
  }

  return <SplashCursor />;
}

