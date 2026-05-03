import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

const LOGO_FILTER =
  "brightness(0) saturate(100%) invert(96%) sepia(8%) saturate(300%) hue-rotate(330deg) brightness(98%)";

export async function Footer() {
  const t = await getTranslations();

  return (
    <footer className="flex h-[44px] w-full items-center bg-brown-dark px-4 md:px-12">
      {/* Left text */}
      <div className="flex flex-1 items-center">
        <span className="text-base font-bold uppercase text-cream">
          {t("footer.left")}
        </span>
      </div>

      {/* Center logo — links to home */}
      <Link href="/" className="flex items-center px-6">
        <Image
          src="/svg/logo.svg"
          alt={t("title")}
          width={100}
          height={27}
          style={{ filter: LOGO_FILTER }}
        />
      </Link>

      {/* Right text */}
      <div className="flex flex-1 items-center justify-end">
        <span className="text-base font-bold uppercase text-cream">
          {t("footer.right")}
        </span>
      </div>
    </footer>
  );
}
