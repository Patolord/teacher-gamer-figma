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
  badge,
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
      <Card className="border-0 h-full min-h-[400px] bg-black/50 backdrop-blur-sm text-white flex flex-col rounded-2xl overflow-hidden">
        <CardHeader>
          <CardTitle className="text-3xl mb-4 font-pirata-one">
            {title}
          </CardTitle>
          <CardDescription className="text-gray-400 font-light text-base">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="text-gray-400 font-light text-base"></CardContent>
        <CardFooter className="mt-auto px-6">
          <Button
            variant="outline"
            className="w-full bg-linear-to-r from-amber-400 to-amber-400 hover:from-amber-300 hover:to-amber-300 text-zinc-900 border-0 rounded-xl py-6 flex items-center justify-center gap-2 font-semibold transition-all duration-300 hover:shadow-[0_4px_24px_rgba(251,191,36,0.4)]"
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
