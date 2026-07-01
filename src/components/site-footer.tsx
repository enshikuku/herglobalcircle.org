import Link from "next/link";
import { Handshake, Mail, MapPin } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { mainNavigation } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-forest text-cream">
      <div className="pattern-weave absolute inset-0 opacity-20" />
      <div className="relative mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1.15fr]">
          <div>
            <Link
              href="/"
              prefetch={false}
              className="focus-ring inline-flex items-center gap-5 rounded-full"
              aria-label="H.E.R Global Circle home"
            >
              <BrandLogo size="footer" />
              <span className="text-sm leading-relaxed text-cream/80">
                Hope. Elevate.
                <br />
                Resilience.
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-7 text-cream/75">
              Mentorship, enterprise, wellness and opportunity for Africa&apos;s
              next generation.
            </p>
          </div>

          <div>
            <h2 className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-gold">
              Navigate
            </h2>
            <ul className="grid grid-cols-2 gap-3 text-sm">
              {mainNavigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    prefetch={false}
                    className="focus-ring rounded-sm text-sm text-cream/75 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-gold">
              Active Chapters
            </h2>
            <ul className="space-y-4 text-sm text-cream/75">
              {["Kenya", "Uganda", "Ghana"].map((chapter) => (
                <li key={chapter} className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {chapter}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-gold">
              Get in Touch
            </h2>
            <p className="mb-5 text-sm leading-7 text-cream/75">
              Partner, mentor, give or ask a question.
            </p>
            <a
              href="mailto:info@herglobalcircle.org"
              className="focus-ring inline-flex items-start gap-3 rounded-sm text-sm text-cream/75 transition hover:text-white"
            >
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              info@herglobalcircle.org
            </a>
            <Link
              href="/contact/"
              prefetch={false}
              className="focus-ring mt-7 inline-flex items-center rounded-full bg-gold px-6 py-3 text-sm font-bold text-forest transition hover:bg-white"
            >
              <Handshake className="mr-2 h-4 w-4" aria-hidden="true" />
              Become a Partner
            </Link>
          </div>
        </div>

        <div className="mt-7 flex flex-col gap-3 border-t border-white/10 bg-black px-4 py-4 text-xs text-cream/70 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} H.E.R Global Circle.</p>
          <p>Empowering Communities. Building Generational Impact.</p>
        </div>
      </div>
    </footer>
  );
}
