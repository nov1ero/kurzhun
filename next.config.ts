import type { NextConfig } from "next";
import path from "path";

// We intentionally do NOT use createNextIntlPlugin here.
// The plugin adds a webpack alias (next-intl/config → i18n/request.ts) for ALL
// builds — including the Edge middleware build. That alias pulls next-intl/server
// (Node.js-only, uses __dirname) into the Edge bundle, causing
// ReferenceError: __dirname is not defined on Vercel Edge Runtime.
//
// Instead, we add the alias manually, only for non-Edge builds.

const nextConfig: NextConfig = {
  eslint: { ignoreDuringBuilds: true },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  webpack(config: any, { nextRuntime }: { nextRuntime?: string }) {
    if (nextRuntime !== "edge") {
      // Server (nodejs) and client builds: alias next-intl/config → request.ts
      // so getTranslations() can find our getRequestConfig() implementation.
      config.resolve = config.resolve || {};
      config.resolve.alias = config.resolve.alias || {};
      config.resolve.alias["next-intl/config"] = path.resolve(
        "./i18n/request.ts"
      );
    }
    // Edge build: NO alias → request.ts NOT in Edge bundle → no __dirname error.
    return config;
  },
};

export default nextConfig;
