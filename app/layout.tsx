import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kurjun",
  description: "Archive of Stories",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
