import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  eslint: { ignoreDuringBuilds: true },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  webpack(config: any, { nextRuntime }: { nextRuntime?: string }) {
    if (nextRuntime === "edge") {
      // Prevent Node.js globals from leaking into the Edge Runtime bundle.
      // __dirname is not available in Edge; mock it so any stray reference
      // gets replaced with "/" at build time instead of failing at runtime.
      config.node = { ...config.node, __dirname: "mock" };
    }
    return config;
  },
};

export default withNextIntl(nextConfig);
