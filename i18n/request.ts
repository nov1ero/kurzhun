import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = routing.locales.includes(requested as "kg" | "en")
    ? (requested as string)
    : routing.defaultLocale;

  const common = (await import(`../messages/${locale}/common.json`)).default;
  const home = (await import(`../messages/${locale}/home.json`)).default;
  const stories = (await import(`../messages/${locale}/stories.json`)).default;

  return {
    locale,
    messages: { ...common, ...home, ...stories },
  };
});
