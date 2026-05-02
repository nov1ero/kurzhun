import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

import kgCommon from "../messages/kg/common.json";
import kgHome from "../messages/kg/home.json";
import kgStories from "../messages/kg/stories.json";
import enCommon from "../messages/en/common.json";
import enHome from "../messages/en/home.json";
import enStories from "../messages/en/stories.json";

const allMessages = {
  kg: { ...kgCommon, ...kgHome, ...kgStories },
  en: { ...enCommon, ...enHome, ...enStories },
};

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = routing.locales.includes(requested as "kg" | "en")
    ? (requested as string)
    : routing.defaultLocale;

  return {
    locale,
    messages: allMessages[locale as "kg" | "en"],
  };
});
