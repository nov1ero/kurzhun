import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kurjun",
  description: "Archive of Stories",
  verification: {
    google: "u7tOZ0lPDqcGaFd-vk4QoPaSVbtTcpPlY2oLVZ68lkw",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
