"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MEDIA } from "@/lib/media";

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
      data-scroll-section={sectionIndex}
      className="flex justify-center min-h-screen pt-24 pb-40 bg-black relative"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${MEDIA.backgrounds.substack}')` }}
      />

      {/* Top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50 z-10" />
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-yellow-500/10 to-transparent pointer-events-none z-10" />

      {/* Content centered horizontally, starting from top */}
      <div
        data-section-content
        data-animate
        className="relative z-10 w-full max-w-2xl px-8 md:px-12"
      >
        <h2 className="text-4xl pb-8 bg-[linear-gradient(135deg,#fff_0%,#c47020_20%,#d09a11_40%,#fff_100%)] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradientShift">Latest from Substack</h2>

        {loading && (
          <div className="text-yellow-500/70 py-8 text-center">
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
                <div className="backdrop-blur-sm rounded-lg shadow-lg border border-yellow-500/20 p-6 md:p-8 hover:shadow-xl hover:border-yellow-500/40 transition-all">
                  <h3 className="text-xl pb-4 text-gray-900 font-semibold group-hover:text-yellow-600 transition-colors px-10">
                    {post.title}
                  </h3>

                  <p className="pb-6 text-gray-700 leading-relaxed px-10">
                    {post.description}
                  </p>

                  <div className="flex items-center gap-2 text-yellow-600 group-hover:text-yellow-700 transition-colors font-medium px-10">
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
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-yellow-500/10 to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50 z-10" />
    </section>
  );
}
