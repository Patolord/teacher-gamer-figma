import { NextResponse } from "next/server";
import Parser from "rss-parser";

const parser = new Parser();

export async function GET() {
  try {
    const feed = await parser.parseURL(
      "https://zacharyreznichek.substack.com/feed"
    );

    // Extract posts from feed items
    const posts = feed.items.map((item) => ({
      title: item.title || "",
      description: item.contentSnippet || item.content || "",
      link: item.link || "",
      pubDate: item.pubDate || "",
    }));

    return NextResponse.json({ posts });
  } catch (error) {
    console.error("Error fetching RSS feed:", error);
    return NextResponse.json(
      { error: "Failed to fetch RSS feed" },
      { status: 500 }
    );
  }
}
