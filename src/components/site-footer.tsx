import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

const links = [
  { label: "Who We Are", href: "/about" },
  { label: "The H.E.R Pillars", href: "/programs" },
  { label: "Mama Mumo Initiative", href: "/mama-mumo" },
  { label: "H.E.R Enterprise", href: "/enterprise" },
  { label: "Impact & Events", href: "/impact" },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-forest text-cream">
      <div className="pattern-weave absolute inset-0 opacity-20" />
      <div className="relative mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1.15fr]">
          <div>
            <Link
              href="/"
              className="focus-ring inline-flex items-center gap-4 rounded-full"
              aria-label="H.E.R Global Circle home"
            >
              <span className="rounded-full bg-white p-1.5">
                <Image
                  src="/branding/logo/logo.png"
                  alt="H.E.R Global Circle"
                  width={82}
                  height={82}
                  className="h-20 w-20 object-contain"
                />
              </span>
              <span className="text-sm leading-relaxed text-cream/80">
                Hope. Elevate.
                <br />
                Resilience.
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-7 text-cream/75">
              A Pan-African foundation for empowerment, enterprise and
              generational impact.
            </p>
          </div>

          <div>
            <h2 className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-gold">
              Explore
            </h2>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
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
              Our Chapters
            </h2>
            <ul className="space-y-4 text-sm text-cream/75">
              {["Kenya (Headquarters)", "Uganda", "Ghana"].map((chapter) => (
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
            <a
              href="mailto:info@herglobalcircle.org"
              className="focus-ring inline-flex items-start gap-3 rounded-sm text-sm text-cream/75 transition hover:text-white"
            >
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              info@herglobalcircle.org
            </a>
            <Link
              href="/donate"
              className="focus-ring mt-7 inline-flex rounded-full bg-gold px-6 py-3 text-sm font-bold text-forest transition hover:bg-white"
            >
              Support Our Work
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-7 text-xs text-cream/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} H.E.R Global Circle.</p>
          <p>Empowering Communities. Building Generational Impact.</p>
        </div>
      </div>
    </footer>
  );
}
