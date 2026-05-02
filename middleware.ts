import { NextRequest, NextResponse } from "next/server";

// Custom locale routing — deliberately does NOT use next-intl/middleware.
// createMiddleware from next-intl triggers __dirname in Vercel Edge Runtime.
// This implementation replicates localePrefix:"as-needed" for kg (default) + en.

const locales = ["kg", "en"] as const;
type Locale = (typeof locales)[number];
const defaultLocale: Locale = "kg";

function pathnameLocale(pathname: string): Locale | null {
  for (const locale of locales) {
    if (pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)) {
      return locale;
    }
  }
  return null;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const locale = pathnameLocale(pathname);

  if (locale === defaultLocale) {
    // /kg or /kg/... → redirect to remove the redundant prefix
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(`/${defaultLocale}`.length) || "/";
    return NextResponse.redirect(url, 308);
  }

  if (locale !== null) {
    // /en or /en/... → serve as-is
    return NextResponse.next();
  }

  // No locale prefix → rewrite internally to /kg/... so Next.js [locale] segment resolves
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)", "/"],
};
