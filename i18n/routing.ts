import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["kg", "en"],
  defaultLocale: "kg",
  localePrefix: "as-needed",
});
