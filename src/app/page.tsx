import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  HandHeart,
  Handshake,
  Heart,
  Leaf,
  Mail,
  MapPin,
} from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import {
  communityVisualPlaceholders,
  partnerPlaceholders,
  pillars,
  quarterlyEvents,
} from "@/lib/site-content";

export const metadata: Metadata = {
  title: {
    absolute: "H.E.R Global Circle",
  },
  alternates: { canonical: "/" },
};

const pillarIcons = [Heart, BriefcaseBusiness, Leaf] as const;

export default function HomePage() {
  return (
    <>
      <section className="bg-forest text-white">
        <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-12 px-4 py-12 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:py-16">
          <div className="max-w-3xl">
            <div className="mb-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <BrandLogo size="hero" />
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">
                  H.E.R Global Circle
                </p>
                <p className="display-script mt-1 text-4xl leading-none text-blush">
                  Hope. Elevate. Resilience.
                </p>
              </div>
            </div>

            <h1 className="text-balance text-5xl font-bold leading-[0.96] sm:text-6xl lg:text-7xl">
              Empowering Communities.
              <span className="mt-2 block text-blush">
                Building Generational Impact.
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-cream/80 sm:text-xl">
              Mentorship, enterprise, wellness and opportunity for Africa's
              next generation.
            </p>

            <p className="mt-6 inline-flex items-center gap-2 border-y border-white/15 py-3 text-sm font-bold uppercase tracking-[0.16em] text-gold">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              Active in Kenya &middot; Uganda &middot; Ghana
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/pillars"
                prefetch={false}
                className="focus-ring inline-flex items-center rounded-full bg-gold px-7 py-4 font-bold text-forest shadow-soft transition hover:-translate-y-0.5 hover:bg-white"
              >
                Explore Our Pillars
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
              <Link
                href="/donate"
                prefetch={false}
                className="focus-ring inline-flex items-center rounded-full border border-white/25 px-7 py-4 font-bold text-white transition hover:bg-white/10"
              >
                <Heart className="mr-2 h-5 w-5" aria-hidden="true" />
                Donate
              </Link>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="relative aspect-[16/11] overflow-hidden rounded-lg bg-blush sm:col-span-2">
              <Image
                src="/branding/images/image_3.png"
                alt="Youth in a workshop setting"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 56vw"
                className="object-cover object-center"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-blush">
              <Image
                src="/branding/images/image_1.png"
                alt="Mentorship conversation"
                fill
                sizes="(max-width: 640px) 50vw, 28vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-blush">
              <Image
                src="/branding/images/image_2.png"
                alt="Community celebration"
                fill
                sizes="(max-width: 640px) 50vw, 28vw"
                className="object-cover"
              />
            </div>
            {/* Replace these blocks with approved girls, youth and community photos when available. */}
            <div className="grid gap-3 sm:col-span-2 sm:grid-cols-3">
              {communityVisualPlaceholders.slice(0, 3).map((label) => (
                <div
                  key={label}
                  className="min-h-24 rounded-lg border border-gold/25 bg-paper/95 p-4 shadow-soft"
                >
                  <p className="display-script break-words text-[1.65rem] leading-none text-teal">
                    {label}
                  </p>
                  <span className="mt-4 block h-px w-10 bg-gold" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:px-8">
          <div>
            <p className="display-script text-5xl leading-none text-teal sm:text-6xl">
              Rooted in Africa.
            </p>
            <h2 className="mt-2 text-4xl font-bold leading-tight text-forest sm:text-5xl">
              Globally Connected.
            </h2>
          </div>
          <div className="max-w-2xl text-lg leading-8 text-ink/70 lg:justify-self-end">
            <p>
              H.E.R Global Circle creates space for girls, youth and women to
              rise.
            </p>
            <p className="mt-4">
              Built across Kenya, Uganda and Ghana with mentorship, enterprise
              and wellness at the centre.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-blush/55 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="section-kicker">Our Pillars</p>
              <h2 className="mt-4 text-4xl font-bold leading-tight text-forest sm:text-5xl">
                Hope, Elevate and Resilience.
              </h2>
            </div>
            <Link
              href="/pillars"
              prefetch={false}
              className="focus-ring inline-flex items-center rounded-full bg-forest px-6 py-3 font-bold text-white transition hover:bg-teal"
            >
              View Pillars
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
            <div className="rounded-lg bg-forest p-8 text-white shadow-card">
              <p className="section-kicker !text-gold">Pillars</p>
              <p className="display-script mt-4 text-5xl leading-none text-blush sm:text-6xl">
                Three paths. One circle.
              </p>
              <p className="mt-5 max-w-md text-sm leading-7 text-cream/80">
                Mentorship, learning and wellness in one simple structure.
              </p>
              <Link
                href="/pillars"
                prefetch={false}
                className="focus-ring mt-7 inline-flex items-center rounded-full bg-gold px-6 py-3 font-bold text-forest transition hover:bg-white"
              >
                View Pillars
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="grid gap-4">
            {pillars.map((pillar, index) => {
              const Icon = pillarIcons[index];
              return (
                <article
                  key={pillar.title}
                  className={`grid gap-4 rounded-lg border border-forest/10 p-5 sm:grid-cols-[4.5rem_1fr] ${
                    index === 0
                      ? "bg-paper"
                      : index === 1
                        ? "bg-blush/35"
                        : "bg-white"
                  }`}
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blush ring-1 ring-gold/40">
                    <Icon className="h-7 w-7 text-teal" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal">
                      {pillar.letter} - {pillar.subtitle}
                    </p>
                    <h3 className="mt-2 text-2xl font-bold text-forest">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-7 text-ink/70">
                      {pillar.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {pillar.focus.slice(0, 3).map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-gold/25 bg-white px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-forest/70"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/branding/images/image_2.png"
              alt="Community members gathered in a joyful moment"
              fill
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="section-kicker">Featured Initiative</p>
            <h2 className="mt-5 text-4xl font-bold leading-tight text-forest sm:text-5xl">
              Mama Mumo Initiative
            </h2>
            <p className="mt-6 text-lg leading-8 text-ink/70">
              Humanitarian care for children, young people and families,
              offered with dignity and respect.
            </p>
            <Link
              href="/donate"
              prefetch={false}
              className="focus-ring mt-8 inline-flex items-center rounded-full bg-teal px-7 py-4 font-bold text-white transition hover:bg-teal-700"
            >
              <HandHeart className="mr-2 h-5 w-5" aria-hidden="true" />
              Support the Initiative
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-forest py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <CalendarDays className="h-8 w-8 text-gold" aria-hidden="true" />
              <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
                Quarter 1 Events
              </h2>
              <p className="mt-4 text-cream/75">Events are updated quarterly.</p>
            </div>
            <Link
              href="/events"
              prefetch={false}
              className="focus-ring inline-flex items-center rounded-full bg-gold px-6 py-3 font-bold text-forest transition hover:bg-white"
            >
              View Events
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-10 grid gap-3 md:grid-cols-2">
            {quarterlyEvents.map((event) => (
              <article
                key={`${event.month}-${event.title}`}
                className="rounded-lg border border-white/15 bg-white/10 p-5"
              >
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-gold">
                  {event.month}
                </p>
                <h3 className="mt-2 text-xl font-bold">{event.title}</h3>
                <p className="mt-2 flex items-center text-sm text-cream/75">
                  <MapPin className="mr-2 h-4 w-4 text-teal" aria-hidden="true" />
                  {event.location}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blush/55 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <p className="section-kicker">Partners</p>
              <h2 className="mt-4 text-4xl font-bold leading-tight text-forest sm:text-5xl">
                Partners in Generational Impact
              </h2>
              <p className="mt-5 text-lg leading-8 text-ink/70">
                We work with corporate, government, development, community and
                ecosystem partners to expand opportunity across Africa.
              </p>
              <Link
                href="/partners"
                prefetch={false}
                className="focus-ring mt-8 inline-flex items-center rounded-full bg-forest px-7 py-4 font-bold text-white transition hover:bg-teal"
              >
                <Handshake className="mr-2 h-5 w-5" aria-hidden="true" />
                Become a Partner
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {partnerPlaceholders.map((partner) => (
                <div
                  key={partner}
                  className="flex min-h-28 items-center justify-center rounded-lg border border-gold/25 bg-paper px-4 text-center shadow-soft"
                >
                  <span className="text-sm font-bold uppercase tracking-[0.14em] text-forest">
                    {partner}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-lg bg-teal p-8 text-white sm:p-10">
            <Heart className="h-8 w-8 text-gold" aria-hidden="true" />
            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">Donate</h2>
            <p className="mt-4 max-w-xl text-lg leading-8 text-white/80">
              Support programs that move hope into action.
            </p>
            <Link
              href="/donate"
              prefetch={false}
              className="focus-ring mt-7 inline-flex items-center rounded-full bg-white px-7 py-4 font-bold text-teal transition hover:bg-gold hover:text-forest"
            >
              Donate
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
          </div>

          <div className="rounded-lg border border-forest/10 bg-paper p-8 sm:p-10">
            <Mail className="h-8 w-8 text-gold" aria-hidden="true" />
            <h2 className="mt-5 text-3xl font-bold text-forest sm:text-4xl">
              Contact
            </h2>
            <p className="mt-4 text-lg leading-8 text-ink/70">
              Email{" "}
              <a
                href="mailto:info@herglobalcircle.org"
                className="focus-ring rounded-sm font-bold text-teal hover:text-forest"
              >
                info@herglobalcircle.org
              </a>{" "}
              or send a short message.
            </p>
            <Link
              href="/contact"
              prefetch={false}
              className="focus-ring mt-7 inline-flex items-center rounded-full bg-forest px-7 py-4 font-bold text-white transition hover:bg-teal"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
