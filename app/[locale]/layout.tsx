import type { Metadata } from "next";
import { Anonymous_Pro, PT_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Footer } from "@/components/layout/Footer";
import { getTranslations } from "next-intl/server";

const anonymousPro = Anonymous_Pro({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-anonymous-pro",
});

const ptMono = PT_Mono({
  subsets: ["latin", "cyrillic"],
  weight: ["400"],
  variable: "--font-pt-mono",
});

export const metadata: Metadata = {
  title: "Kurjun",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as "kg" | "en")) notFound();

  const messages = await getMessages();
  const t = await getTranslations({ locale });

  const fontClass = `${anonymousPro.variable} ${ptMono.variable}`;

  return (
    <html lang={locale} data-locale={locale} className={fontClass}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
          <Footer
            left={t("footer.left")}
            right={t("footer.right")}
            logoAlt={t("title")}
          />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
