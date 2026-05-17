import type { MetadataRoute } from "next";

const BASE = "https://kurjun.vercel.app";
const STORY_IDS = [1, 2, 3, 4, 5];

export default function sitemap(): MetadataRoute.Sitemap {
  const home = {
    url: BASE,
    lastModified: new Date(),
    alternates: {
      languages: {
        "ky-KG": BASE,
        "en-US": `${BASE}/en`,
      },
    },
  };

  const stories = STORY_IDS.map((id) => ({
    url: `${BASE}/stories/${id}`,
    lastModified: new Date(),
    alternates: {
      languages: {
        "ky-KG": `${BASE}/stories/${id}`,
        "en-US": `${BASE}/en/stories/${id}`,
      },
    },
  }));

  return [home, ...stories];
}
