import type { MetadataRoute } from "next";

const BASE = "https://kurjun.vercel.app";
const STORY_IDS = [1, 2, 3, 4, 5];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, lastModified: new Date() },
    { url: `${BASE}/en`, lastModified: new Date() },
    ...STORY_IDS.map((id) => ({
      url: `${BASE}/stories/${id}`,
      lastModified: new Date(),
    })),
    ...STORY_IDS.map((id) => ({
      url: `${BASE}/en/stories/${id}`,
      lastModified: new Date(),
    })),
  ];
}
