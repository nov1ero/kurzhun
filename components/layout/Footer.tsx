import Image from "next/image";
import { Link } from "@/i18n/navigation";

const LOGO_FILTER =
  "brightness(0) saturate(100%) invert(96%) sepia(8%) saturate(300%) hue-rotate(330deg) brightness(98%)";

interface FooterProps {
  left: string;
  right: string;
  logoAlt: string;
  locale: string;
}

export function Footer({ left, right, logoAlt, locale }: FooterProps) {
  return (
    <footer className="flex h-[44px] w-full items-center bg-brown-dark px-4 md:px-12">
      {/* Left text — hidden on mobile */}
      <div className="hidden flex-1 items-center md:flex">
        <span className="text-base font-bold uppercase text-cream">
          {left}
        </span>
      </div>

      {/* Center logo — links to home */}
      <Link href="/" locale={locale} className="flex flex-1 items-center justify-center px-6 md:flex-none">
        <Image
          src="/svg/logo.svg"
          alt={logoAlt}
          width={100}
          height={27}
          style={{ filter: LOGO_FILTER }}
        />
      </Link>

      {/* Right text — hidden on mobile */}
      <div className="hidden flex-1 items-center justify-end md:flex">
        <span className="text-base font-bold uppercase text-cream">
          {right}
        </span>
      </div>
    </footer>
  );
}
