"use client";

import Image from "next/image";
import { Link, usePathname } from "@/i18n/navigation";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { TopBar } from "@/components/ui/TopBar";
import { cn } from "@/lib/cn";

interface NavbarProps {
  navHome: string;
  navStories: string;
  navGallery: string;
  navAbout: string;
}

export function Navbar({ navHome, navStories, navGallery, navAbout }: NavbarProps) {
  const pathname = usePathname();

  const links = [
    { href: "/", label: navHome },
    { href: "/stories", label: navStories },
    { href: "/#gallery", label: navGallery },
    { href: "/#about", label: navAbout },
  ];

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href.replace("/#", "/"));
  }

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top ornament bar */}
      <div className="border-b border-brown-dark">
        <TopBar />
      </div>

      {/* Main nav row */}
      <nav className="flex h-11 w-full items-center bg-cream">
        {/* Logo */}
        <Link
          href="/"
          className="flex h-11 w-[182px] shrink-0 items-center px-6 pl-12"
          aria-label="Курjun — Home"
        >
          <Image
            src="/svg/logo.svg"
            alt="Куржун"
            width={100}
            height={27}
            priority
          />
        </Link>

        {/* Menu items */}
        <div className="flex h-11 flex-1 items-center border-l border-brown-dark">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href as "/"}
              className={cn(
                "flex h-11 items-center justify-center px-3 py-2.5 text-base font-bold uppercase text-brown-dark transition-colors hover:bg-tan",
                isActive(href) && "border-b-2 border-brown-dark bg-tan"
              )}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Language switcher */}
        <div className="flex h-11 items-center justify-end border-l border-brown-dark px-6">
          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  );
}
