"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/brand-logo";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Pillars", href: "/pillars" },
  { label: "Events", href: "/events" },
  { label: "Partners", href: "/partners" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const pathname = usePathname() ?? "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-forest text-white transition ${
        scrolled && !menuOpen ? "shadow-sm" : ""
      } ${menuOpen ? "shadow-none" : "backdrop-blur"}`}
    >
      <div className="mx-auto flex h-[6.25rem] max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-[7rem] lg:px-8">
        <Link
          href="/"
          prefetch={false}
          className="focus-ring relative z-50 flex items-center gap-3 rounded-full"
          aria-label="H.E.R Global Circle home"
        >
          <BrandLogo size="header" />
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-bold tracking-[0.16em] text-white">
              H.E.R
            </span>
            <span className="block text-[0.7rem] tracking-[0.18em] text-gold">
              GLOBAL CIRCLE
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                prefetch={false}
                className={`focus-ring inline-flex items-center rounded-full px-4 py-2.5 text-sm font-bold transition ${
                  active
                    ? "text-gold"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/donate"
            prefetch={false}
            className="focus-ring ml-1 inline-flex items-center rounded-full bg-gold px-5 py-2.5 text-sm font-bold text-forest shadow-soft transition hover:-translate-y-0.5 hover:bg-white"
          >
            <Heart className="mr-2 h-4 w-4" aria-hidden="true" />
            Donate
          </Link>
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
            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch={false}
                  onClick={() => setMenuOpen(false)}
                  className={`border-b border-white/10 py-4 text-2xl ${
                    active ? "font-bold text-gold" : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/donate"
              prefetch={false}
              onClick={() => setMenuOpen(false)}
              className="focus-ring mt-6 inline-flex items-center justify-center rounded-full bg-gold px-6 py-4 font-bold text-forest"
            >
              <Heart className="mr-2 h-5 w-5" aria-hidden="true" />
              Donate
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
