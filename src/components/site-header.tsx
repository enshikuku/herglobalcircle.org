"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Who We Are", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Mama Mumo", href: "/mama-mumo" },
  { label: "H.E.R Enterprise", href: "/enterprise" },
  { label: "Impact & Events", href: "/impact" },
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
      className={`fixed inset-x-0 top-0 z-50 border-b transition ${
        scrolled || menuOpen
          ? "border-forest/10 bg-paper/95 shadow-sm"
          : "border-transparent bg-paper/90"
      } ${scrolled && !menuOpen ? "backdrop-blur" : ""}`}
    >
      <div className="mx-auto flex h-[5.5rem] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          prefetch={false}
          className="focus-ring relative z-50 flex items-center gap-3 rounded-full"
          aria-label="H.E.R Global Circle home"
        >
          <Image
            src="/branding/logo/logo.png"
            alt="H.E.R Global Circle"
            width={68}
            height={68}
            className="h-16 w-16 object-contain"
            priority
          />
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-bold tracking-[0.16em] text-forest">
              H.E.R
            </span>
            <span className="block text-[0.7rem] tracking-[0.18em] text-teal">
              GLOBAL CIRCLE
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 xl:flex" aria-label="Primary">
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
                className={`focus-ring rounded-md py-2 text-sm transition-colors ${
                  active
                    ? "font-bold text-teal"
                    : "text-ink/75 hover:text-teal"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/donate"
            prefetch={false}
            className="focus-ring inline-flex items-center rounded-full bg-teal px-5 py-3 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-teal-700"
          >
            <Heart className="mr-2 h-4 w-4" aria-hidden="true" />
            Donate
          </Link>
        </nav>

        <button
          type="button"
          className="focus-ring relative z-50 rounded-full p-3 text-forest xl:hidden"
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
        className={`fixed inset-0 z-40 bg-paper px-6 pb-8 pt-28 transition-transform xl:hidden ${
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
                  className={`border-b border-forest/10 py-4 text-2xl ${
                    active ? "font-bold text-teal" : "text-forest"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <Link
            href="/donate"
            prefetch={false}
            onClick={() => setMenuOpen(false)}
            className="focus-ring mt-auto inline-flex items-center justify-center rounded-full bg-teal px-6 py-4 font-bold text-white"
          >
            <Heart className="mr-2 h-5 w-5" aria-hidden="true" />
            Donate Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
