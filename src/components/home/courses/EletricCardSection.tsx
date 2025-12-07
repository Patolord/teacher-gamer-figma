"use client";
import EletricCard from "./EletricCard";

export function ElectricCardSection() {
  const cards = [
    {
      title: "Electric Card 1",
      description: "Electric Card Description 1",
      color: "#7df9ff",
    },
    {
      title: "Electric Card 2",
      description: "Electric Card Description 2",
      color: "#ff6b9d",
    },
    {
      title: "Electric Card 3",
      description: "Electric Card Description 3",
      color: "#ffd700",
    },
  ];

  return (
    <section className="flex items-center justify-center min-h-[60vh] px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="container max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-20">
          {cards.map((card) => (
            <EletricCard
              key={card.title}
              title={card.title}
              description={card.description}
              color={card.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
