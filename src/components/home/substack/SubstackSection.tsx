"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MEDIA } from "@/lib/media";
import ShinyText from "@/components/ui/shinytext";

// Refined Split-Complementary Color Harmony - Magical Fantasy Theme
const theme = {
  primary: {
    base: "#6A4BCF",
    light: "#B9A7FF",
    subtle: "rgba(106, 75, 207, 0.1)",
    glow: "rgba(106, 75, 207, 0.3)",
  },
  accent: {
    lime: "#DAFF0D",
    limeLight: "#E5FF4D",
  },
  highlight: {
    yellow: "#FFD85A",
    yellowSoft: "rgba(255, 216, 90, 0.2)",
  },
  neutral: {
    darkBg: "#1A1A1F",
    lighter: "#E5E4E8",
  },
};

type Props = { sectionIndex?: number };

type Post = {
  title: string;
  description: string;
  link: string;
  pubDate?: string;
};

export default function SubstackSection({ sectionIndex }: Props) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRSS = async () => {
      try {
        const response = await fetch("/api/substack");
        if (!response.ok) {
          throw new Error("Failed to fetch RSS feed");
        }
        const data = await response.json();
        if (data.posts && data.posts.length > 0) {
          setPosts(data.posts.slice(0, 3));
        } else {
          setError("No posts found");
        }
      } catch (err) {
        console.error("Error fetching Substack feed:", err);
        setError("Failed to load latest posts");
      } finally {
        setLoading(false);
      }
    };

    fetchRSS();
  }, []);

  return (
    <section
      id="substack-section"
      data-scroll-section={sectionIndex}
      className="flex justify-center min-h-screen pt-24 pb-40 bg-black relative"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${MEDIA.backgrounds.substack}')` }}
      />
      {/* 40% black overlay */}
      <div 
        className="absolute inset-0" 
        style={{ backgroundColor: "rgba(26, 26, 31, 0.4)" }}
      />

      {/* Top gradient */}
      <div 
        className="absolute top-0 left-0 right-0 h-px opacity-60 z-10"
        style={{
          background: `linear-gradient(to right, transparent, ${theme.accent.lime}, ${theme.highlight.yellow}, ${theme.accent.lime}, transparent)`
        }}
      />
      <div 
        className="absolute top-0 left-0 right-0 h-24 pointer-events-none z-10"
        style={{
          background: `linear-gradient(to bottom, ${theme.highlight.yellowSoft}, transparent)`
        }}
      />

      {/* Content centered horizontally, starting from top */}
      <div
        data-section-content
        data-animate
        className="relative z-10 w-full max-w-2xl px-8 md:px-12"
      >
        <h2 className="text-4xl pb-8">
          <ShinyText
            speed={3}
            delay={1}
            color={theme.accent.lime}
            shineColor="#fff"
            spread={30}
            yoyo
          >
            Latest from Substack
          </ShinyText>
        </h2>

        {loading && (
          <div 
            className="py-8 text-center"
            style={{ color: theme.accent.lime }}
          >
            Loading latest posts...
          </div>
        )}

        {error && (
          <div className="text-red-500/70 py-8 text-center">
            {error}. Please try again later.
          </div>
        )}

        {posts.length > 0 && (
          <div className="flex flex-col gap-6">
            {posts.map((post) => (
              <Link
                key={post.link}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div 
                  className="backdrop-blur-sm rounded-lg shadow-lg border-2 p-6 md:p-8 transition-all"
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    borderColor: `${theme.primary.light}80`,
                    boxShadow: `0 10px 30px ${theme.primary.glow}`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
                    e.currentTarget.style.borderColor = theme.accent.lime;
                    e.currentTarget.style.boxShadow = `0 10px 40px ${theme.accent.limeGlow}, 0 0 30px ${theme.primary.glow}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
                    e.currentTarget.style.borderColor = `${theme.primary.light}80`;
                    e.currentTarget.style.boxShadow = `0 10px 30px ${theme.primary.glow}`;
                  }}
                >
                  <h3 
                    className="text-xl pb-4 font-semibold transition-colors px-10"
                    style={{ color: theme.neutral.lighter }}
                  >
                    {post.title}
                  </h3>

                  <p 
                    className="pb-6 leading-relaxed px-10"
                    style={{ color: theme.neutral.lighter }}
                  >
                    {post.description}
                  </p>

                  <div 
                    className="flex items-center gap-2 transition-colors font-medium px-10"
                    style={{ color: theme.accent.lime }}
                  >
                    <span>Read more</span>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Bottom gradient */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none z-10"
        style={{
          background: `linear-gradient(to top, ${theme.highlight.yellowSoft}, transparent)`
        }}
      />
      <div 
        className="absolute bottom-0 left-0 right-0 h-px opacity-60 z-10"
        style={{
          background: `linear-gradient(to right, transparent, ${theme.accent.lime}, ${theme.highlight.yellow}, ${theme.accent.lime}, transparent)`
        }}
      />
    </section>
  );
}
