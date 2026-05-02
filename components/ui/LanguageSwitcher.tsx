"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useParams } from "next/navigation";
import { cn } from "@/lib/cn";

const LOCALES = [
  { code: "kg", label: "KG" },
  { code: "en", label: "EN" },
];

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = params.locale as string;

  function switchLocale(locale: string) {
    router.replace(pathname, { locale });
  }

  return (
    <>
      {LOCALES.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => switchLocale(code)}
          className={cn(
            "flex h-11 w-9 items-center justify-center px-1 py-2.5 text-base uppercase",
            currentLocale === code
              ? "font-bold text-brown-dark"
              : "font-normal text-brown-mid"
          )}
          aria-current={currentLocale === code ? "true" : undefined}
        >
          {label}
        </button>
      ))}
    </>
  );
}
