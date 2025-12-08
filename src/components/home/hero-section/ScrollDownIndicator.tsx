import { ChevronDown } from "lucide-react";

export default function ScrollDownIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce">
      <span className="text-white text-sm font-light">Scroll</span>
      <ChevronDown className="w-6 h-6 text-white" />
    </div>
  );
}
