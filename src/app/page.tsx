import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  HandHeart,
  Heart,
  Leaf,
  Mail,
  MapPin,
} from "lucide-react";
import {
  sharonMumoInitiative,
  pillars,
  quarterlyEvents,
  siteImages,
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
      <section className="relative -mt-[6.25rem] h-[100svh] overflow-hidden bg-forest pt-[6.25rem] text-white lg:-mt-[7rem] lg:h-[100dvh] lg:pt-[7rem]">
        <div className="mx-auto grid h-full max-w-7xl items-start gap-0 px-4 pb-3 sm:px-6 lg:items-center lg:grid-cols-[0.43fr_0.57fr] lg:gap-12 lg:px-8 lg:pb-8">
          <div className="hidden lg:block" aria-hidden="true" />

          <div className="relative z-10 flex min-h-0 flex-col justify-start pt-[34svh] sm:pt-[32svh] lg:justify-center lg:pt-10">
            <div className="relative min-h-0">
              <div className="absolute -left-4 top-10 h-24 w-24 border-l-4 border-t-4 border-teal" aria-hidden="true" />
              <div className="absolute -right-4 bottom-16 h-28 w-28 border-b-4 border-r-4 border-gold" aria-hidden="true" />
              <div className="relative h-[42svh] max-h-[44svh] min-h-0 overflow-hidden rounded-lg shadow-card ring-2 ring-teal/50 sm:h-[43svh] lg:h-[72dvh] lg:max-h-none lg:min-h-0">
                <Image
                  src={siteImages.communityCircle}
                  alt="Community members gathered together"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 52vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-forest/25 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-3 text-white sm:p-5 lg:p-8">
                  <h1 className="max-w-3xl text-balance text-[clamp(1.45rem,7vw,2rem)] font-bold leading-[0.98] sm:text-4xl lg:text-6xl">
                    Empowering Communities.
                    <span className="mt-1 block text-blush lg:mt-2">
                      Building Generational Impact.
                    </span>
                  </h1>

                  <p className="mt-4 hidden text-sm font-bold uppercase tracking-[0.16em] text-cream md:block lg:text-base">
                    Mentorship &middot; Enterprise &middot; Wellness &middot; Opportunity
                  </p>
                </div>

                <div className="absolute right-4 top-4 hidden max-w-44 bg-black/80 px-3 py-2 text-white sm:max-w-56 sm:px-4 sm:py-3 md:block">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">
                    Community
                  </p>
                  <p className="mt-1 text-xs leading-5 text-white/90 sm:text-sm sm:leading-6">
                    Girls, youth and women rising together.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blush/55 py-14 sm:py-18">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
          <div className="max-w-3xl">
            <p className="section-kicker">Active Chapters</p>
            <p className="mt-3 inline-flex items-center gap-2 border-y border-gold/25 py-3 text-sm font-bold uppercase tracking-[0.16em] text-forest">
              <MapPin className="h-4 w-4 text-teal" aria-hidden="true" />
              Active in Kenya &middot; Uganda &middot; Ghana
            </p>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/70">
              Mentorship, enterprise, wellness and opportunity for Africa&apos;s
              next generation. Pillars and H.E.R Enterprise are under About Us.
            </p>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-teal sm:hidden">
              Mentorship &middot; Enterprise &middot; Wellness &middot; Opportunity
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link
              href="/about/"
              prefetch={false}
              className="focus-ring inline-flex items-center rounded-full bg-gold px-7 py-4 font-bold text-forest shadow-soft transition hover:-translate-y-0.5 hover:bg-white"
            >
              Explore Our Pillars
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
            <Link
              href="/donate/"
              prefetch={false}
              className="focus-ring inline-flex items-center rounded-full border border-forest/15 bg-white px-7 py-4 font-bold text-forest transition hover:bg-forest hover:text-white"
            >
              <Heart className="mr-2 h-5 w-5" aria-hidden="true" />
              Donate
            </Link>
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
              href="/about/"
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
                href="/about/"
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
                    className={`grid gap-4 rounded-lg border p-5 shadow-soft sm:grid-cols-[4.5rem_1fr] ${
                      index === 0
                        ? "border-teal/25 bg-paper"
                        : index === 1
                          ? "border-gold/30 bg-teal/10"
                          : "border-blush/60 bg-forest text-white"
                    }`}
                  >
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-full ring-1 ${
                        index === 0
                          ? "bg-blush ring-teal/35"
                          : index === 1
                            ? "bg-paper ring-gold/40"
                            : "bg-blush ring-gold/30"
                      }`}
                    >
                      <Icon
                        className={`h-7 w-7 ${
                          index === 2 ? "text-forest" : "text-teal"
                        }`}
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <p
                        className={`text-xs font-bold uppercase tracking-[0.16em] ${
                          index === 2 ? "text-gold" : "text-teal"
                        }`}
                      >
                        {pillar.letter} - {pillar.subtitle}
                      </p>
                      <h3
                        className={`mt-2 text-2xl font-bold ${
                          index === 2 ? "text-white" : "text-forest"
                        }`}
                      >
                        {pillar.title}
                      </h3>
                      <p
                        className={`mt-2 max-w-2xl text-sm leading-7 ${
                          index === 2 ? "text-cream/80" : "text-ink/70"
                        }`}
                      >
                        {pillar.description}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {pillar.focus.slice(0, 3).map((item) => (
                          <span
                            key={item}
                            className={`rounded-full border px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.12em] ${
                              index === 2
                                ? "border-white/20 bg-white/10 text-white"
                                : index === 1
                                  ? "border-gold/30 bg-white px-3 py-1 text-forest"
                                  : "border-teal/20 bg-white text-forest/70"
                            }`}
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

      <section className="bg-paper py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-card ring-1 ring-teal/30">
            <Image
              src={siteImages.childrenYouth}
              alt="Community members gathered in a joyful moment"
              fill
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover"
            />
            <div className="absolute left-4 top-4 rounded-full bg-black px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white">
              Sharon Mumo
            </div>
          </div>
          <div>
            <p className="section-kicker">Featured Initiative</p>
            <h2 className="mt-5 text-4xl font-bold leading-tight text-forest sm:text-5xl">
              {sharonMumoInitiative.title}
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/70">
              {sharonMumoInitiative.description}
            </p>
            <div className="mt-6 inline-flex rounded-full border border-teal/20 bg-teal/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-forest">
              Support with dignity
            </div>
            <Link
              href={sharonMumoInitiative.route}
              prefetch={false}
              className="focus-ring mt-8 inline-flex items-center rounded-full bg-teal px-7 py-4 font-bold text-white transition hover:bg-teal-700"
            >
              <HandHeart className="mr-2 h-5 w-5" aria-hidden="true" />
              Visit the Initiative
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
              href="/events/"
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

      <section className="bg-paper py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-lg bg-teal p-8 text-white shadow-card sm:p-10">
            <Heart className="h-8 w-8 text-gold" aria-hidden="true" />
            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">Donate</h2>
            <p className="mt-4 max-w-xl text-lg leading-8 text-white/80">
              Support programs that move hope into action.
            </p>
            <Link
              href="/donate/"
              prefetch={false}
              className="focus-ring mt-7 inline-flex items-center rounded-full bg-white px-7 py-4 font-bold text-teal transition hover:bg-gold hover:text-forest"
            >
              Donate
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
          </div>

          <div className="rounded-lg border border-teal/20 bg-white p-8 shadow-soft sm:p-10">
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
              href="/contact/"
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
