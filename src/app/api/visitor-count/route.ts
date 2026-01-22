import { get } from "@vercel/edge-config";
import { NextResponse } from "next/server";

export const runtime = "edge";

// Extract Edge Config ID from connection string
// Format: https://edge-config.vercel.com/<id>?token=...
function getEdgeConfigId(): string | null {
  const edgeConfig = process.env.EDGE_CONFIG;
  if (!edgeConfig) return null;
  const match = edgeConfig.match(/edge-config\.vercel\.com\/([^?]+)/);
  return match ? match[1] : null;
}

export async function GET() {
  try {
    const count = (await get<number>("visitorCount")) ?? 0;
    return NextResponse.json({ count });
  } catch (error) {
    console.error("Error reading visitor count:", error);
    return NextResponse.json({ count: 0 });
  }
}

export async function POST() {
  try {
    const currentCount = (await get<number>("visitorCount")) ?? 0;
    const newCount = currentCount + 1;

    const edgeConfigId = getEdgeConfigId();
    const token = process.env.VERCEL_OIDC_TOKEN;

    if (edgeConfigId && token) {
      await fetch(
        `https://api.vercel.com/v1/edge-config/${edgeConfigId}/items`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            items: [{ operation: "upsert", key: "visitorCount", value: newCount }],
          }),
        }
      );
    }

    return NextResponse.json({ count: newCount });
  } catch (error) {
    console.error("Error updating visitor count:", error);
    const count = (await get<number>("visitorCount")) ?? 0;
    return NextResponse.json({ count });
  }
}
