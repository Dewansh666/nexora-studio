
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NEXORA Studio | Modern Websites for Growing Businesses",
  description:
    "NEXORA Studio builds modern, responsive websites for businesses, brands, creators and professionals.",
  applicationName: "NEXORA Studio",
  keywords: [
    "NEXORA Studio",
    "website development",
    "web design",
    "business websites",
  ],
  openGraph: {
    title: "NEXORA Studio | Modern Websites",
    description:
      "Thoughtful design. Useful functionality. Websites built for growing businesses.",
    siteName: "NEXORA Studio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
