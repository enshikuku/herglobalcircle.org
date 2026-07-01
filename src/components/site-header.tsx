"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, Menu, X } from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { BrandLogo } from "@/components/brand-logo";
import { mainNavigation } from "@/lib/site-content";

const useIsomorphicLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

function getInitialLogoProgress(isHomepage: boolean) {
  if (!isHomepage) {
    return 1;
  }

  if (typeof window === "undefined") {
    return 0;
  }

  return Math.min(Math.max(window.scrollY, 0) / 420, 1);
}

function getInitialScrolled(isHomepage: boolean) {
  return isHomepage && typeof window !== "undefined" ? window.scrollY > 16 : false;
}

function getInitialIsDesktop() {
  return typeof window !== "undefined"
    ? window.matchMedia("(min-width: 1024px)").matches
    : false;
}

function getInitialReducedMotion() {
  return typeof window !== "undefined"
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;
}

function getInitialViewportHeight() {
  return typeof window !== "undefined" ? window.innerHeight : 900;
}

export function SiteHeader() {
  const pathname = usePathname() ?? "/";
  const normalizedPathname =
    pathname !== "/" && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
  const isHomepage = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(() => getInitialScrolled(isHomepage));
  const [logoProgress, setLogoProgress] = useState(() =>
    getInitialLogoProgress(isHomepage),
  );
  const [measuredPathname, setMeasuredPathname] = useState<string | null>(null);
  const [isDesktop, setIsDesktop] = useState(getInitialIsDesktop);
  const [reducedMotion, setReducedMotion] = useState(getInitialReducedMotion);
  const [viewportHeight, setViewportHeight] = useState(getInitialViewportHeight);
  const [hasMeasuredViewport, setHasMeasuredViewport] = useState(false);
  const scrollFrame = useRef<number | null>(null);

  useIsomorphicLayoutEffect(() => {
    const measureScroll = () => {
      const nextScrolled = isHomepage ? window.scrollY > 16 : false;
      const nextProgress = isHomepage
        ? Math.min(Math.max(window.scrollY, 0) / 420, 1)
        : 1;

      setScrolled((current) =>
        current === nextScrolled ? current : nextScrolled,
      );
      setLogoProgress((current) =>
        Math.abs(current - nextProgress) < 0.01 ? current : nextProgress,
      );
      setMeasuredPathname(pathname);
    };

    if (!isHomepage) {
      measureScroll();
      return;
    }

    const updateFromScroll = () => {
      scrollFrame.current = null;
      measureScroll();
    };

    const onScroll = () => {
      if (scrollFrame.current !== null) {
        return;
      }
      scrollFrame.current = window.requestAnimationFrame(updateFromScroll);
    };

    measureScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (scrollFrame.current !== null) {
        window.cancelAnimationFrame(scrollFrame.current);
        scrollFrame.current = null;
      }
    };
  }, [isHomepage, pathname]);

  useIsomorphicLayoutEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updatePreferences = () => {
      setIsDesktop(desktopQuery.matches);
      setReducedMotion(motionQuery.matches);
      setViewportHeight(window.innerHeight);
      setHasMeasuredViewport(true);
    };

    updatePreferences();
    desktopQuery.addEventListener("change", updatePreferences);
    motionQuery.addEventListener("change", updatePreferences);
    window.addEventListener("resize", updatePreferences);

    return () => {
      desktopQuery.removeEventListener("change", updatePreferences);
      motionQuery.removeEventListener("change", updatePreferences);
      window.removeEventListener("resize", updatePreferences);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const hasMeasuredInitialState =
    measuredPathname === pathname && hasMeasuredViewport;
  const canTransitionLogo = hasMeasuredInitialState && !reducedMotion;
  const morphProgress = menuOpen ? 1 : logoProgress;
  const compactLogoPx = isDesktop ? 84 : 72;
  const mastheadLogoPx = isDesktop
    ? viewportHeight * 0.48
    : Math.min(Math.max(viewportHeight * 0.23, 126), 170);
  const topScale = mastheadLogoPx / compactLogoPx;
  const logoScale = isHomepage ? topScale - (topScale - 1) * morphProgress : 1;
  const mastheadOffset = isHomepage
    ? (isDesktop ? viewportHeight * 0.08 : viewportHeight * 0.025) *
      (1 - morphProgress)
    : 0;
  const mastheadOpacity = isHomepage ? 1 - morphProgress : 0;
  const compactOpacity = isHomepage ? Math.min(Math.max((morphProgress - 0.45) / 0.4, 0), 1) : 1;
  const logoTransform = hasMeasuredInitialState
    ? `translateY(${mastheadOffset}px) scale(${logoScale})`
    : `translateY(var(--her-initial-logo-offset, ${mastheadOffset}px)) scale(var(--her-initial-logo-scale, ${logoScale}))`;
  const mastheadTop = hasMeasuredInitialState
    ? `${16 + mastheadOffset + compactLogoPx * logoScale + 12}px`
    : `var(--her-initial-masthead-top, ${16 + mastheadOffset + compactLogoPx * logoScale + 12}px)`;
  const mastheadWidth = hasMeasuredInitialState
    ? `${compactLogoPx * logoScale}px`
    : `var(--her-initial-masthead-width, ${compactLogoPx * logoScale}px)`;
  const mastheadInitialOpacity = hasMeasuredInitialState
    ? mastheadOpacity
    : `var(--her-initial-masthead-opacity, ${mastheadOpacity})`;
  const mastheadTransform = hasMeasuredInitialState
    ? `translateY(${-18 * morphProgress}px)`
    : `translateY(var(--her-initial-masthead-translate, ${-18 * morphProgress}px))`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 overflow-visible border-b border-white/5 bg-forest text-white transition-shadow ${
        scrolled && !menuOpen ? "shadow-sm" : ""
      } ${menuOpen ? "shadow-none" : "backdrop-blur"}`}
    >
      <div className="mx-auto flex h-[6.25rem] max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-[7rem] lg:px-8">
        <Link
          href="/"
          className="focus-ring relative z-40 flex max-w-[72vw] items-center gap-3 rounded-full"
          aria-label="H.E.R Global Circle home"
        >
          <span
            className={`relative inline-flex shrink-0 ${
              canTransitionLogo
                ? "transition-transform duration-150 ease-out"
                : "transition-none"
            }`}
            style={{
              transform: logoTransform,
              transformOrigin: "left top",
            }}
          >
            <BrandLogo size="header" />
          </span>

          <span
            className={`hidden min-w-0 leading-tight min-[460px]:block ${
              canTransitionLogo
                ? "transition-opacity duration-150 ease-out"
                : "transition-none"
            }`}
            style={{ opacity: compactOpacity }}
          >
            <span className="block whitespace-nowrap text-sm font-bold tracking-[0.16em] text-white">
              H.E.R
            </span>
            <span className="block whitespace-nowrap text-[0.7rem] font-bold uppercase tracking-[0.18em] text-gold">
              Global Circle
            </span>
          </span>
        </Link>

        {isHomepage ? (
          <div
            className={`pointer-events-none absolute left-4 z-30 max-w-[calc(100vw-2rem)] sm:left-6 lg:left-8 xl:left-[calc((100vw-80rem)/2+2rem)] ${
              canTransitionLogo
                ? "transition-all duration-150 ease-out"
                : "transition-none"
            }`}
            style={{
              top: mastheadTop,
              width: mastheadWidth,
              opacity: mastheadInitialOpacity,
              transform: mastheadTransform,
              textAlign: "center",
            }}
            aria-hidden={mastheadOpacity < 0.05}
          >
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-white sm:text-base lg:text-lg">
              H.E.R Global Circle
            </p>
            <p className="display-script mt-1 whitespace-nowrap text-[1.85rem] leading-none text-blush sm:text-5xl lg:text-6xl">
              Hope &middot; Elevate &middot; Resilience
            </p>
          </div>
        ) : null}

        <nav className="relative z-50 hidden items-center gap-2 lg:flex" aria-label="Primary">
          {mainNavigation.map((link) => {
            const normalizedHref =
              link.href !== "/" && link.href.endsWith("/")
                ? link.href.slice(0, -1)
                : link.href;
            const active =
              link.href === "/"
                ? pathname === "/"
                : normalizedPathname === normalizedHref ||
                  normalizedPathname.startsWith(`${normalizedHref}/`);
            const donate = normalizedHref === "/donate";
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`focus-ring inline-flex items-center rounded-full px-4 py-2.5 text-sm font-bold transition ${
                  donate
                    ? "ml-1 bg-gold px-5 text-forest shadow-soft hover:-translate-y-0.5 hover:bg-white"
                    : active
                      ? "text-gold"
                      : "text-white/80 hover:text-white"
                }`}
              >
                {donate ? <Heart className="mr-2 h-4 w-4" aria-hidden="true" /> : null}
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="focus-ring relative z-50 rounded-full p-3 text-white lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        >
          {menuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`fixed inset-0 z-40 bg-forest px-6 pb-8 pt-32 text-white transition-transform lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="mx-auto flex h-full max-w-lg flex-col" aria-label="Mobile">
          <div className="flex flex-col">
            {mainNavigation.map((link) => {
              const normalizedHref =
                link.href !== "/" && link.href.endsWith("/")
                  ? link.href.slice(0, -1)
                  : link.href;
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : normalizedPathname === normalizedHref ||
                    normalizedPathname.startsWith(`${normalizedHref}/`);
              const donate = normalizedHref === "/donate";
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`border-b border-white/10 py-4 text-2xl ${
                    donate
                      ? "font-bold text-gold"
                      : active
                        ? "font-bold text-gold"
                        : "text-white"
                  }`}
                >
                  {donate ? <Heart className="mr-3 inline h-5 w-5" aria-hidden="true" /> : null}
                  {link.label}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
}
