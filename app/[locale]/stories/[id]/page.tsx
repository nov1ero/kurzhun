import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { StoryEditorialSpread } from "@/components/story/StoryEditorialSpread";
import { StoryDescription } from "@/components/story/StoryDescription";
import { StoryPhotoSection } from "@/components/story/StoryPhotoSection";
import { StoryQuoteContact } from "@/components/story/StoryQuoteContact";
import { StoryVideoSection } from "@/components/story/StoryVideoSection";
import { StoryNav } from "@/components/story/StoryNav";
import { DashedBar } from "@/components/ui/DashedBar";
import { CreditsSection } from "@/components/sections/CreditsSection";

const STORY_IDS = [1, 2, 3, 4, 5] as const;
type StoryId = (typeof STORY_IDS)[number];

interface PageProps {
  params: Promise<{ locale: string; id: string }>;
}

export function generateStaticParams() {
  const locales = ["kg", "en"];
  return locales.flatMap((locale) =>
    STORY_IDS.map((id) => ({ locale, id: String(id) }))
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, id } = await params;
  const numId = Number(id) as StoryId;
  if (!STORY_IDS.includes(numId)) return {};

  const t = await getTranslations({ locale });
  return {
    title: `${t(`story.${numId}.title`)} — Kurjun`,
    alternates: {
      languages: {
        "ky-KG": `/stories/${id}`,
        "en-US": `/en/stories/${id}`,
        "x-default": `/stories/${id}`,
      },
    },
  };
}

export default async function StoryPage({ params }: PageProps) {
  const { locale, id } = await params;
  const numId = Number(id) as StoryId;
  if (!STORY_IDS.includes(numId)) notFound();

  const t = await getTranslations({ locale });

  const prevId = numId > 1 ? (numId - 1) as StoryId : null;
  const nextId = numId < 5 ? (numId + 1) as StoryId : null;

  const videoCaption = `${t(`story.${numId}.name`)} · ${t(`story.${numId}.location`)} · ${t(`story.${numId}.date`)}`;

  return (
    <>
      <Navbar
        navHome={t("nav.home")}
        navStories={t("nav.stories")}
        navGallery={t("nav.gallery")}
        navAbout={t("nav.about")}
      />
      <main>
        <StoryEditorialSpread
          id={numId}
          recorded={t("story.recorded")}
          date={t(`story.${numId}.date`)}
          title={t(`story.${numId}.title`)}
          name={t(`story.${numId}.name`)}
          location={t(`story.${numId}.location`)}
          lead={t(`story.${numId}.lead`)}
        />
        <StoryDescription body={t(`story.${numId}.body`)} />
        <StoryPhotoSection id={numId} photoIndex={1} />
        <StoryPhotoSection id={numId} photoIndex={2} split />

        <StoryQuoteContact
          contactText={t(`story.${numId}.contactText`)}
          contactInfo={t(`story.${numId}.contactInfo`)}
        />

        <StoryVideoSection
          caption={videoCaption}
          videoLabel={t("story.video")}
        />

        <StoryNav
          prevId={prevId}
          nextId={nextId}
          prevTitle={prevId ? t(`story.${prevId}.title`) : ""}
          nextTitle={nextId ? t(`story.${nextId}.title`) : ""}
          prevLabel={t("story.prev")}
          nextLabel={t("story.next")}
          homeLabel={t("nav.home")}
          mainPage={"Main Page"}
        />

        <DashedBar />

        <CreditsSection
          heading={t("credits.heading")}
          desc={t("credits.desc")}
          support={t("credits.support")}
          email={t("credits.email")}
          credits={t("credits.credits")}
        />
      </main>
    </>
  );
}
