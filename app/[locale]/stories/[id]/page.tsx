import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { StoryEditorialSpread } from "@/components/story/StoryEditorialSpread";
import { StoryDescription } from "@/components/story/StoryDescription";
import { StoryPhotoSection } from "@/components/story/StoryPhotoSection";
import { StoryQuoteContact } from "@/components/story/StoryQuoteContact";
import { StoryVideoSection } from "@/components/story/StoryVideoSection";
import { StoryTextSection } from "@/components/story/StoryTextSection";
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

  const quoteContactOrnOnly = <StoryQuoteContact />;

  const quoteContact = (
    <StoryQuoteContact
      showContact
      contactText={t(`story.${numId}.contactText`)}
      contactInfo={t(`story.${numId}.contactInfo`)}
    />
  );

  const nav = (
    <StoryNav
      prevId={prevId}
      nextId={nextId}
      prevTitle={prevId ? t(`story.${prevId}.title`) : ""}
      nextTitle={nextId ? t(`story.${nextId}.title`) : ""}
      prevLabel={t("story.prev")}
      nextLabel={t("story.next")}
      homeLabel={t("nav.home")}
      mainPage={t("story.home")}
    />
  );

  const video = (
    <StoryVideoSection
      videoUrl={t(`story.${numId}.videoUrl`)}
      caption={videoCaption}
      videoLabel={t("story.video")}
    />
  );


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
        <StoryDescription body={t(`story.${numId}.bodyMain`)} />

        {numId === 1 && (
          <>
            <StoryPhotoSection
              id={1}
              photoIndex={1}
              textContent={t("story.1.bodyPhoto1")}
            />
            <StoryPhotoSection
              id={1}
              photoIndex={2}
              split
              textContent={t("story.1.bodyPhoto2")}
            />
            {quoteContactOrnOnly}
            <StoryPhotoSection
              id={1}
              photoIndex={3}
              split
              reversed
              textContent={t("story.1.bodyPhoto3")}
              featuredQuote={t("story.1.photo3FeaturedQuote")}
              featuredName={t("story.1.name")}
            />
            <StoryPhotoSection id={1} photoIndex={4} />
            {quoteContact}
            {video}
          </>
        )}

        {numId === 2 && (
          <>
            <StoryPhotoSection
              id={2}
              photoIndex={1}
              textContent={t("story.2.bodyPhoto1")}
            />
            {quoteContactOrnOnly}
            <StoryPhotoSection
              id={2}
              photoIndex={2}
              textContent={t("story.2.bodyPhoto2")}
            />
            <StoryPhotoSection id={2} photoIndex={3} />
            <StoryPhotoSection
              id={2}
              photoIndex={4}
              split
              textContent={t("story.2.bodyPhoto3")}
            />
            <StoryTextSection
              text={t("story.2.text")}
              name={t("story.2.name")}
            />
            {quoteContact}
            <StoryPhotoSection id={2} photoIndex={5} />
          </>
        )}

        {numId === 3 && (
          <>
            <StoryPhotoSection
              id={3}
              photoIndex={1}
              textContent={t("story.3.bodyPhoto1")}
            />
            {quoteContact}
            <StoryPhotoSection
              id={3}
              photoIndex={2}
              split
              reversed
              textContent={t("story.3.bodyPhoto2")}
            />
            <StoryPhotoSection id={3} photoIndex={3} />
            {video}
          </>
        )}

        {numId === 4 && (
          <>
            <StoryPhotoSection
              id={4}
              photoIndex={1}
              textContent={t("story.4.bodyPhoto1")}
            />
            <StoryPhotoSection
              id={4}
              photoIndex={2}
              split
              textContent={t("story.4.bodyPhoto2")}
            />
            {quoteContactOrnOnly}
            <StoryPhotoSection
              id={4}
              photoIndex={3}
              split
              reversed
              textContent={t("story.4.bodyPhoto3")}
            />
            <StoryPhotoSection id={4} photoIndex={4} />
            {quoteContact}
          </>
        )}

        {numId === 5 && (
          <>
            <StoryPhotoSection
              id={5}
              photoIndex={1}
              split
              textContent={t("story.5.bodyPhoto1")}
            />
            <StoryPhotoSection
              id={5}
              photoIndex={2}
              split
              reversed
              textContent={t("story.5.bodyPhoto2")}
            />
            {quoteContact}
            <StoryPhotoSection
              id={5}
              photoIndex={3}
              textContent={t("story.5.bodyPhoto3")}
            />
            <StoryPhotoSection id={5} photoIndex={4} />
            {video}
          </>
        )}

        {nav}

        <DashedBar />

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
