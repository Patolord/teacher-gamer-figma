import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import ElectricBorder from "@/components/shared/ElectricBorder";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Refined Split-Complementary Color Harmony - Magical Fantasy Theme
const theme = {
  primary: {
    base: "#6A4BCF",
    subtle: "rgba(106, 75, 207, 0.1)",
  },
  accent: {
    lime: "#DAFF0D",
    limeLight: "#E5FF4D",
  },
  neutral: {
    darkBg: "#1A1A1F",
    lighter: "#E5E4E8",
    medium: "#6B6780",
  },
};

type EletricCardProps = {
  title: string;
  description: string;
  color: string;
  badge?: string;
  href?: string;
};

export default function EletricCard({
  title,
  description,
  color,
  badge: _badge,
  href,
}: EletricCardProps) {
  return (
    <ElectricBorder
      color={color}
      speed={1}
      chaos={0.5}
      thickness={2}
      style={{ borderRadius: 16 }}
    >
      <Card 
        className="border-0 h-full min-h-[400px] bg-black/50 backdrop-blur-sm flex flex-col rounded-2xl overflow-hidden"
        style={{
          color: theme.neutral.lighter
        }}
      >
        <CardHeader>
          <CardTitle 
            className="text-3xl mb-4 font-pirata-one"
            style={{ color: theme.neutral.lighter }}
          >
            {title}
          </CardTitle>
          <CardDescription 
            className="font-light text-base"
            style={{ color: theme.neutral.lighter }}
          >
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent 
          className="font-light text-base"
          style={{ color: theme.neutral.medium }}
        >
        </CardContent>
        <CardFooter className="mt-auto px-6">
          <Button
            variant="outline"
            className="w-full border-2 rounded-xl py-6 flex items-center justify-center gap-2 font-semibold transition-all duration-300"
            style={{
              borderColor: color,
              backgroundColor: 'transparent',
              color: theme.neutral.lighter,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = `${color}20`;
              e.currentTarget.style.borderColor = color;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.borderColor = color;
            }}
            asChild
          >
            <Link href={href || "#"}>
              Learn More
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </ElectricBorder>
  );
}
