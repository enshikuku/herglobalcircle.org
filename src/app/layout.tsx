import type { Metadata, Viewport } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const title = "H.E.R Global Circle";
const description = "Empowering Communities. Building Generational Impact.";

export const metadata: Metadata = {
  metadataBase: new URL("https://herglobalcircle.org"),
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description,
  applicationName: title,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      {
        url: "/branding/favicon/favicon.ico",
        type: "image/x-icon",
      },
      {
        url: "/branding/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/branding/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: "/branding/favicon/apple-touch-icon.png",
  },
  manifest: "/branding/favicon/site.webmanifest",
  openGraph: {
    type: "website",
    url: "https://herglobalcircle.org",
    siteName: title,
    title,
    description,
    images: [
      {
        url: "/branding/images/image_1.png",
        width: 3185,
        height: 1382,
        alt: "Women in conversation at H.E.R Global Circle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/branding/images/image_1.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0D492B",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1 pt-[5.5rem]">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
