import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  eslint: { ignoreDuringBuilds: true },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  webpack(config: any, { nextRuntime, webpack }: { nextRuntime?: string; webpack: any }) {
    if (nextRuntime === "edge") {
      // DefinePlugin replaces __dirname with "/" at AST level during compilation.
      // This is needed because Vercel Edge Runtime doesn't have __dirname, and
      // webpack's eval() wrapper scoping causes ReferenceError in strict-mode modules.
      config.plugins.push(
        new webpack.DefinePlugin({ __dirname: JSON.stringify("/") })
      );
    }
    return config;
  },
};

export default withNextIntl(nextConfig);
