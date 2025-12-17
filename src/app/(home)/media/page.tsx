"use client";

import {
  ExternalLink,
  Headphones,
  Image as ImageIcon,
  Play,
  Video,
  Volume2,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Podcast episodes - Replace with your actual Podbean episode IDs
const podcastEpisodes = [
  {
    id: "episode-1",
    title: "The Power of Game-Based Learning",
    description:
      "Exploring how tabletop RPGs transform education and build critical thinking skills in young minds.",
    embedId: "pb-fudp4-17a3ee4", // Replace with your actual Podbean embed ID
    duration: "45 min",
    date: "Dec 2024",
  },
  {
    id: "episode-2",
    title: "Building Confidence Through Role-Play",
    description:
      "How imaginative play helps children develop social skills and self-expression.",
    embedId: "pb-fudp4-17a3ee4", // Replace with your actual Podbean embed ID
    duration: "38 min",
    date: "Nov 2024",
  },
  {
    id: "episode-3",
    title: "The Teacher-Gamer Methodology",
    description:
      "An in-depth look at our unique approach to combining teaching with gaming.",
    embedId: "pb-fudp4-17a3ee4", // Replace with your actual Podbean embed ID
    duration: "52 min",
    date: "Oct 2024",
  },
];

// Gallery items - Replace with your actual images
const galleryItems = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=600&q=80",
    alt: "Tabletop gaming session",
    category: "Sessions",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1594652634010-275456c808d0?w=600&q=80",
    alt: "Kids learning together",
    category: "Learning",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1551966775-a4ddc8df052b?w=600&q=80",
    alt: "Dice and game pieces",
    category: "Equipment",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1606503153255-59d8b8b82176?w=600&q=80",
    alt: "Creative storytelling",
    category: "Sessions",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1632501641765-e568d28b0015?w=600&q=80",
    alt: "Character creation workshop",
    category: "Workshops",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80",
    alt: "Group collaboration",
    category: "Learning",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=600&q=80",
    alt: "Miniature painting session",
    category: "Workshops",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1604076913837-52ab5629fba9?w=600&q=80",
    alt: "Adventure map creation",
    category: "Equipment",
  },
];

const categories = ["All", "Sessions", "Learning", "Workshops", "Equipment"];

export default function MediaPage() {
  useScrollAnimation();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<
    (typeof galleryItems)[0] | null
  >(null);

  const filteredGallery =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-linear-to-b from-zinc-950 via-zinc-900 to-zinc-950">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmYmJmMjQiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAwdi02aC02djZoNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50" />
        </div>

        {/* Glowing orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[128px] animate-pulse" />
        <div
          className="absolute bottom-20 right-1/4 w-80 h-80 bg-orange-500/10 rounded-full blur-[100px] animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div data-animate className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 mb-8">
              <Headphones className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-medium text-amber-300">
                Media Hub
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-[linear-gradient(135deg,#fff_0%,#fbbf24_25%,#f59e0b_50%,#fff_100%)] bg-size-[300%_300%] bg-clip-text text-transparent animate-[gradientShift_8s_ease-in-out_infinite]">
              Podcasts & Gallery
            </h1>

            <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto">
              Dive into conversations about game-based learning, explore
              behind-the-scenes moments, and discover the magic of the
              Teacher-Gamer methodology.
            </p>
          </div>
        </div>

      </section>

      {/* Video Section */}
      <section className="relative py-16 lg:py-20">
        {/* Section background */}
        <div className="absolute inset-0 bg-linear-to-b from-zinc-950/80 to-zinc-900/50" />

        <div className="container mx-auto px-4 relative z-10">

          {/* Video Embed Container */}
          <div data-animate className="max-w-4xl mx-auto">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-linear-to-r from-amber-600 via-orange-500 to-amber-600 rounded-2xl opacity-30 blur-lg group-hover:opacity-50 transition-opacity duration-500" />

              <div className="relative bg-zinc-900/90 backdrop-blur-sm border border-amber-500/30 rounded-2xl overflow-hidden">
                {/* Video Container - 16:9 aspect ratio */}
                <div className="aspect-video w-full bg-zinc-800 flex items-center justify-center">
                  {/* Replace this iframe src with your actual video embed URL (YouTube, Vimeo, etc.) */}
                  <iframe
                    title="Teacher Gamer Introduction Video"
                    src="https://www.youtube.com/embed/TOU90iP2VJY"
                    width="100%"
                    height="100%"
                    className="absolute inset-0 w-full h-full"
                    style={{ border: "none" }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section transitions */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-amber-500/5 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-amber-500/50 to-transparent" />
      </section>

      {/* Podcast Section */}
      <section className="relative py-20 lg:py-28">
        {/* Section background */}
        <div className="absolute inset-0 bg-linear-to-b from-zinc-900/50 to-zinc-950/80" />

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-linear-to-b from-amber-500/5 to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div
            data-animate
            className="flex items-center justify-center gap-4 mb-12"
          >
            <div className="h-px flex-1 max-w-32 bg-linear-to-r from-transparent to-amber-500/50" />
            <div className="flex items-center gap-3">
              <Volume2 className="w-6 h-6 text-amber-400" />
              <h2 className="text-3xl md:text-4xl font-semibold text-white">
                Latest Episodes
              </h2>
            </div>
            <div className="h-px flex-1 max-w-32 bg-linear-to-l from-transparent to-amber-500/50" />
          </div>

          {/* Featured Episode */}
          <div data-animate className="max-w-4xl mx-auto mb-16">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-linear-to-r from-amber-600 via-orange-500 to-amber-600 rounded-2xl opacity-30 blur-lg group-hover:opacity-50 transition-opacity duration-500" />

              <div className="relative bg-zinc-900/90 backdrop-blur-sm border border-amber-500/30 rounded-2xl overflow-hidden">
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 text-xs font-semibold bg-amber-500 text-zinc-900 rounded-full uppercase tracking-wider">
                      Featured
                    </span>
                    <span className="text-zinc-500 text-sm">
                      {podcastEpisodes[0].date}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    {podcastEpisodes[0].title}
                  </h3>
                  <p className="text-zinc-400 mb-6 text-lg">
                    {podcastEpisodes[0].description}
                  </p>

                  {/* Podbean Embed - Replace src with your actual Podbean player URL */}
                  <div className="aspect-3/1 rounded-xl overflow-hidden bg-zinc-800">
                  <iframe
                        title="TGPC - The Power of Writing"
                        width="100%"
                        height="100%"
                        style={{ border: "none", minWidth: "min(100%, 430px)", height: "100%" }}
                        scrolling="no"
                        data-name="pb-iframe-player"
                        src="https://www.podbean.com/player-v2/?from=embed&i=c2a9e-18cbbb7-pb&square=1&share=1&download=1&fonts=Arial&skin=3267a3&font-color=ffffff&rtl=0&logo_link=episode_page&btn-skin=c73a3a&size=300"
                        loading="lazy"
                        allowFullScreen
                      />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Episode Grid */}
          <div
            data-animate-stagger
            className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          >
            {podcastEpisodes.slice(1).map((episode) => (
              <div
                key={episode.id}
                className="group relative bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 hover:border-amber-500/40 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(251,191,36,0.15)]"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-zinc-500 text-sm">
                      {episode.date}
                    </span>
                    <span className="text-amber-400 text-sm font-medium">
                      {episode.duration}
                    </span>
                  </div>

                  <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {episode.title}
                  </h4>
                  <p className="text-zinc-400 text-sm mb-4 line-clamp-2">
                    {episode.description}
                  </p>

                  <button
                    type="button"
                    className="flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium transition-colors"
                  >
                    <Play className="w-4 h-4 fill-current" />
                    <span>Listen Now</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Podbean Subscribe Link */}
          <div data-animate className="text-center mt-12">
            <a
              href="https://www.podbean.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-amber-500 to-orange-500 text-zinc-900 font-semibold rounded-full hover:from-amber-400 hover:to-orange-400 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(251,191,36,0.4)]"
            >
              <Headphones className="w-5 h-5" />
              Subscribe on Podbean
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Section transitions */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-amber-500/5 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-amber-500/50 to-transparent" />
      </section>

      {/* Gallery Section */}
      <section className="relative py-20 lg:py-28">
        {/* Decorative background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-24 bg-linear-to-b from-amber-500/5 to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div
            data-animate
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="h-px flex-1 max-w-32 bg-linear-to-r from-transparent to-amber-500/50" />
            <div className="flex items-center gap-3">
              <ImageIcon className="w-6 h-6 text-amber-400" />
              <h2 className="text-3xl md:text-4xl font-semibold text-white">
                Gallery
              </h2>
            </div>
            <div className="h-px flex-1 max-w-32 bg-linear-to-l from-transparent to-amber-500/50" />
          </div>

          <p
            data-animate
            className="text-center text-zinc-400 mb-12 max-w-2xl mx-auto"
          >
            Explore moments from our sessions, workshops, and the creative world
            of game-based learning.
          </p>

          {/* Category Filter */}
          <div
            data-animate
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-amber-500 text-zinc-900 shadow-[0_4px_16px_rgba(251,191,36,0.4)]"
                    : "bg-zinc-800/80 text-zinc-300 hover:bg-zinc-700 hover:text-white border border-zinc-700 hover:border-zinc-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredGallery.map((item, index) => (
              <button
                type="button"
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className={`group relative aspect-square overflow-hidden rounded-xl cursor-pointer ${
                  index === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Image */}
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes={
                    index === 0
                      ? "(max-width: 768px) 100vw, 50vw"
                      : "(max-width: 768px) 50vw, 25vw"
                  }
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-zinc-900/90 via-zinc-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category tag */}
                <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-2 py-1 text-xs font-medium bg-amber-500/90 text-zinc-900 rounded-md">
                    {item.category}
                  </span>
                </div>

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-medium text-sm">{item.alt}</p>
                </div>

                {/* Border glow on hover */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-amber-500/50 transition-colors duration-300" />
              </button>
            ))}
          </div>
        </div>

        {/* Bottom transition */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-zinc-950 to-transparent pointer-events-none" />
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/95 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
          onKeyDown={(e) => e.key === "Escape" && setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            type="button"
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors text-4xl font-light"
            onClick={() => setSelectedImage(null)}
            aria-label="Close lightbox"
          >
            ×
          </button>

          <div className="relative max-w-5xl max-h-[85vh] w-full aspect-4/3">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain rounded-lg"
              sizes="100vw"
            />
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
            <span className="px-3 py-1 text-xs font-medium bg-amber-500/90 text-zinc-900 rounded-full mr-3">
              {selectedImage.category}
            </span>
            <span className="text-white font-medium">{selectedImage.alt}</span>
          </div>
        </div>
      )}
    </div>
  );
}
