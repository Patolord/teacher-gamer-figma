import { ArrowRightIcon } from "lucide-react";
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
};

export default function EletricCard({
  title,
  description,
  color,
  badge,
}: EletricCardProps) {
  return (
    <ElectricBorder
      color={color}
      speed={1}
      chaos={0.5}
      thickness={2}
      style={{ borderRadius: 16 }}
    >
      <Card className="border-0 h-full min-h-[400px] bg-black/50 backdrop-blur-sm text-white flex flex-col">
        <CardHeader>
          <CardTitle className="text-3xl mb-4 font-pirata-one">
            {title}
          </CardTitle>
          <CardDescription className="text-gray-400 font-light text-base">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="text-gray-400 font-light text-base">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam ea
          aliquam delectus? Alias dicta omnis ab repellendus quae magnam cum?
        </CardContent>
        <CardFooter className="mt-auto px-6">
          <Button
            variant="outline"
            className="w-full text-black border rounded-xl py-6 flex items-center justify-center gap-2"
          >
            Learn More
            <ArrowRightIcon className="w-4 h-4" />
          </Button>
        </CardFooter>
      </Card>
    </ElectricBorder>
  );
}
