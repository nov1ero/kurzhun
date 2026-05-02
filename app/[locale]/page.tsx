import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutLogoSection } from "@/components/sections/AboutLogoSection";
import { AboutIntroSection } from "@/components/sections/AboutIntroSection";
import { AboutContextSection } from "@/components/sections/AboutContextSection";
import { StoriesSection } from "@/components/sections/StoriesSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { CreditsSection } from "@/components/sections/CreditsSection";
import { DashedBar } from "@/components/ui/DashedBar";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("title"),
    description: t("desc"),
    alternates: {
      canonical: "/",
      languages: {
        "ky-KG": "/",
        "en-US": "/en",
        "x-default": "/",
      },
    },
  };
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  const stories = [1, 2, 3, 4, 5].map((id) => ({
    id,
    quote: t(`stories.s${id}.quote`),
    title: t(`stories.s${id}.title`),
    subtitle: t(`story.${id}.eyebrow`),
  }));

  return (
    <>
      <Navbar
        navHome={t("nav.home")}
        navStories={t("nav.stories")}
        navGallery={t("nav.gallery")}
        navAbout={t("nav.about")}
      />
      <main>
        <HeroSection
          eyebrow={t("hero.eyebrow")}
          title={t("hero.title1") + " " + t("hero.title2")}
          desc={t("hero.desc") + "\n" + t("hero.desc2")}
        />
        <AboutLogoSection />
        <AboutIntroSection body={t("about.body")} />
        <AboutContextSection
          label={t("about.context")}
          col1={t("about.col1")}
          col2={t("about.col2")}
        />
        <StoriesSection
          eyebrow={t("stories.title")}
          readAll={t("stories.readAll")}
          stories={stories}
        />
        <DashedBar />
        <GallerySection
          eyebrow={t("gallery.eyebrow")}
          viewAll={t("gallery.viewAll")}
        />
        <CreditsSection
          // heading={t("credits.heading")}
          ackHeading={t("credits.ackHeading")}
          ack1={t("credits.ack1")}
          ack2={t("credits.ack2")}
          ack3={t("credits.ack3")}
          ack4={t("credits.ack4")}
          creditsHeading={t("credits.creditsHeading")}
          person1name={t("credits.person1name")}
          person1bio={t("credits.person1bio")}
          person2name={t("credits.person2name")}
          person2bio={t("credits.person2bio")}
          person2email={t("credits.person2email")}
          webHeading={t("credits.webHeading")}
          webDesign={t("credits.webDesign")}
          webDev={t("credits.webDev")}
          supportHeading={t("credits.supportHeading")}
          supportText={t("credits.supportText")}
          supportEmail={t("credits.supportEmail")}
          copyright={t("credits.copyright")}
        />
      </main>
    </>
  );
}
