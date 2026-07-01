import type { Metadata, Viewport } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteImages } from "@/lib/site-content";
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
        url: siteImages.communityCircle,
        width: 3185,
        height: 1382,
        alt: "H.E.R Global Circle mentorship conversation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [siteImages.communityCircle],
  },
};

export const viewport: Viewport = {
  themeColor: "#0D492B",
  colorScheme: "light",
};

const initialLogoStateScript = `
(function () {
  var root = document.documentElement;
  var path = window.location.pathname;
  var isHomepage = path === "/";
  var height = window.innerHeight || 900;
  var isDesktop = window.matchMedia("(min-width: 1024px)").matches;
  var compact = isDesktop ? 84 : 72;
  var masthead = isDesktop
    ? height * 0.48
    : Math.min(Math.max(height * 0.23, 126), 170);
  var progress = isHomepage
    ? Math.min(Math.max(window.scrollY || 0, 0) / 420, 1)
    : 1;
  var scale = isHomepage
    ? masthead / compact - (masthead / compact - 1) * progress
    : 1;
  var offset = isHomepage
    ? (isDesktop ? height * 0.08 : height * 0.025) * (1 - progress)
    : 0;
  root.style.setProperty("--her-initial-logo-scale", scale.toFixed(5));
  root.style.setProperty("--her-initial-logo-offset", offset.toFixed(2) + "px");
  root.style.setProperty(
    "--her-initial-masthead-top",
    (16 + offset + compact * scale + 12).toFixed(2) + "px"
  );
  root.style.setProperty(
    "--her-initial-masthead-width",
    (compact * scale).toFixed(2) + "px"
  );
  root.style.setProperty(
    "--her-initial-masthead-opacity",
    isHomepage ? String(1 - progress) : "0"
  );
  root.style.setProperty(
    "--her-initial-masthead-translate",
    (-18 * progress).toFixed(2) + "px"
  );
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: initialLogoStateScript }}
        />
      </head>
      <body>
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1 pt-[7rem]">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
