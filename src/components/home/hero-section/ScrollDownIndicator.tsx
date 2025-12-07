import { ChevronDown } from "lucide-react";
import { forwardRef, CSSProperties } from "react";

interface ScrollDownIndicatorProps {
  style?: CSSProperties;
}

const ScrollDownIndicator = forwardRef<HTMLDivElement, ScrollDownIndicatorProps>(({ style }, ref) => {
  return (
    <div
      ref={ref}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce"
      style={style}
    >
      <span className="text-white text-sm font-light">Scroll</span>
      <ChevronDown className="w-6 h-6 text-white" />
    </div>
  );
});

ScrollDownIndicator.displayName = "ScrollDownIndicator";

export default ScrollDownIndicator;
