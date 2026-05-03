"use client";

import { useState } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/", label: navHome },
    { href: "/#stories", label: navStories },
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
          className="flex h-11 shrink-0 items-center pl-4 pr-3 md:w-[182px] md:px-6 md:pl-12"
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

        {/* Desktop menu items */}
        <div className="hidden h-11 flex-1 items-center border-l border-brown-dark md:flex">
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

        {/* Mobile hamburger */}
        <button
          className="flex h-11 flex-1 items-center justify-end border-l border-brown-dark px-4 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          <span className="text-2xl leading-none text-brown-dark">
            {menuOpen ? "×" : "≡"}
          </span>
        </button>

        {/* Language switcher */}
        <div className="flex h-11 items-center justify-end border-l border-brown-dark px-4 md:px-6">
          <LanguageSwitcher />
        </div>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="flex flex-col border-t border-brown-dark bg-cream md:hidden">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href as "/"}
              onClick={() => setMenuOpen(false)}
              className={cn(
                "flex h-11 items-center border-b border-brown-dark px-4 text-base font-bold uppercase text-brown-dark transition-colors hover:bg-tan",
                isActive(href) && "bg-tan"
              )}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
