import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Globe2,
  HandHeart,
  HeartHandshake,
  MapPin,
  UsersRound,
} from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import {
  chapters,
  herCommunity,
  herEnterprise,
  pillars,
  sharonMumoInitiative,
  siteImages,
} from "@/lib/site-content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about H.E.R Global Circle, a Pan-African community for mentorship, enterprise, wellness and opportunity.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <>
      <section className="texture-paper py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PageIntro
            eyebrow="Who We Are"
            title="About Us"
            description="H.E.R Global Circle is a Pan-African foundation and ecosystem platform creating space for girls, youth and women to rise through mentorship, enterprise, wellness and opportunity."
          />

          <div className="mt-12 grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg shadow-card ring-1 ring-teal/25">
              <Image
                src={siteImages.womenConnection}
                alt="Women gathered in conversation"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
              <div className="relative min-h-44 overflow-hidden rounded-lg">
                <Image
                  src={siteImages.workshop}
                  alt="Workshop participation"
                  fill
                  sizes="(max-width: 768px) 50vw, 32vw"
                  className="object-cover"
                />
              </div>
              <div className="relative min-h-44 overflow-hidden rounded-lg">
                <Image
                  src={siteImages.girlsEducation}
                  alt="School girls gathered together"
                  fill
                  sizes="(max-width: 768px) 50vw, 32vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-lg bg-teal p-6 text-white shadow-card sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <Globe2 className="h-8 w-8 text-gold" aria-hidden="true" />
                <p className="mt-4 text-sm font-bold uppercase tracking-[0.18em] text-cream">
                  Our Reach
                </p>
                <h2 className="mt-3 text-3xl font-bold text-white">
                  Kenya, Uganda and Ghana
                </h2>
                <p className="mt-4 leading-7 text-paper/85">
                  The circle is built across active chapters and connected by a
                  shared commitment to dignity, care and opportunity.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {chapters.map((chapter) => (
                  <div
                    key={chapter}
                    className="rounded-lg border border-white/15 bg-black/20 p-5"
                  >
                    <MapPin className="h-5 w-5 text-gold" aria-hidden="true" />
                    <h3 className="mt-4 text-xl font-bold text-white">
                      {chapter}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pillars" className="bg-blush/55 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="section-kicker">Our Pillars</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-forest sm:text-5xl">
              Hope, Elevate and Resilience.
            </h2>
            <p className="mt-5 text-lg leading-8 text-ink/70">
              The foundation&apos;s work sits under three connected pillars that
              keep support practical, human and focused.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {pillars.map((pillar, index) => (
              <article
                key={pillar.title}
                className={`overflow-hidden rounded-lg border shadow-soft ${
                  index === 2
                    ? "border-forest bg-forest text-white"
                    : "border-gold/20 bg-white text-forest"
                }`}
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={pillar.image}
                    alt={pillar.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-black px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white">
                    {pillar.letter} - {pillar.title}
                  </div>
                </div>
                <div className="p-6">
                  <p
                    className={`text-xs font-bold uppercase tracking-[0.16em] ${
                      index === 2 ? "text-gold" : "text-teal"
                    }`}
                  >
                    {pillar.subtitle}
                  </p>
                  <h3
                    className={`mt-3 text-2xl font-bold ${
                      index === 2 ? "text-white" : "text-forest"
                    }`}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    className={`mt-3 leading-7 ${
                      index === 2 ? "text-cream/80" : "text-ink/70"
                    }`}
                  >
                    {pillar.description}
                  </p>
                  <ul className="mt-5 grid gap-2">
                    {pillar.focus.slice(0, 5).map((item) => (
                      <li
                        key={item}
                        className={`flex items-center gap-2 text-sm ${
                          index === 2 ? "text-cream/85" : "text-ink/75"
                        }`}
                      >
                        <CheckCircle2
                          className={`h-4 w-4 shrink-0 ${
                            index === 2 ? "text-gold" : "text-teal"
                          }`}
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                  {index === 2 ? (
                    <Link
                      href={sharonMumoInitiative.route}
                      prefetch={false}
                      className="focus-ring mt-6 inline-flex items-center rounded-full bg-gold px-5 py-3 text-sm font-bold text-forest transition hover:bg-white"
                    >
                      {sharonMumoInitiative.title}
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Link>
                  ) : null}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-8 rounded-lg border border-gold/25 bg-white p-6 shadow-soft sm:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-card ring-1 ring-teal/25">
              <Image
                src={siteImages.childrenYouth}
                alt="Community support for children, young people and families"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-black/70 px-4 py-4 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">
                  Humanitarian Support
                </p>
                <p className="mt-1 text-sm leading-6 text-white/90">
                  Dignity, care and opportunity.
                </p>
              </div>
            </div>
            <div>
              <HandHeart className="h-8 w-8 text-teal" aria-hidden="true" />
              <p className="section-kicker mt-5">Under Resilience</p>
              <h3 className="mt-4 text-3xl font-bold leading-tight text-forest sm:text-4xl">
                {sharonMumoInitiative.title}
              </h3>
              <p className="mt-4 leading-7 text-ink/70">
                {sharonMumoInitiative.description}
              </p>
              <Link
                href={sharonMumoInitiative.route}
                prefetch={false}
                className="focus-ring mt-7 inline-flex items-center rounded-full bg-teal px-6 py-3 font-bold text-white transition hover:bg-teal-700"
              >
                Read More
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-teal py-16 text-white sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <div>
            <UsersRound className="h-8 w-8 text-gold" aria-hidden="true" />
            <p className="mt-5 text-sm font-bold uppercase tracking-[0.18em] text-cream">
              Community Platform
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
              {herCommunity.title}
            </h2>
            <p className="mt-5 text-lg leading-8 text-paper/85">
              {herCommunity.description}
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {herCommunity.focus.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-white/15 bg-black/20 px-4 py-4 text-sm font-bold text-white"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-card ring-1 ring-teal/25">
            <Image
              src={siteImages.conversation}
              alt="Training and enterprise conversation"
              fill
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-black/70 px-4 py-4 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">
                Enterprise
              </p>
              <p className="mt-1 text-sm leading-6 text-white/90">
                Professional support that funds community work.
              </p>
            </div>
          </div>

          <div>
            <BriefcaseBusiness className="h-8 w-8 text-gold" aria-hidden="true" />
            <p className="section-kicker mt-5">Social Enterprise</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-forest sm:text-5xl">
              {herEnterprise.title}
            </h2>
            <p className="mt-5 text-lg leading-8 text-ink/70">
              {herEnterprise.description}
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {herEnterprise.services.map((service) => (
                <div
                  key={service}
                  className="rounded-lg border border-gold/20 bg-white px-4 py-3 text-sm font-bold text-forest"
                >
                  {service}
                </div>
              ))}
            </div>
            <p className="mt-6 rounded-lg border border-teal/20 bg-blush/40 p-4 font-bold text-forest">
              {herEnterprise.supportNote}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
          <div>
            <HandHeart className="h-8 w-8 text-teal" aria-hidden="true" />
            <p className="section-kicker mt-5">Humanitarian Support</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-forest sm:text-5xl">
              {sharonMumoInitiative.title}
            </h2>
            <p className="mt-5 text-lg leading-8 text-ink/70">
              {sharonMumoInitiative.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {sharonMumoInitiative.focus.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-teal/25 bg-teal/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-forest"
                >
                  {item}
                </span>
              ))}
            </div>
            <Link
              href={sharonMumoInitiative.route}
              prefetch={false}
              className="focus-ring mt-8 inline-flex items-center rounded-full bg-teal px-7 py-4 font-bold text-white transition hover:bg-teal-700"
            >
              Visit the Initiative
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-card ring-1 ring-gold/25">
            <Image
              src={siteImages.childrenYouth}
              alt="Community members sharing a joyful moment"
              fill
              sizes="(max-width: 1024px) 100vw, 44vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-forest py-16 text-white sm:py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <HeartHandshake className="h-8 w-8 text-gold" aria-hidden="true" />
            <h2 className="mt-4 text-3xl font-bold">Partner With Us</h2>
            <p className="mt-3 max-w-2xl text-cream/75">
              Corporate, government, development and community partners can
              support mentorship, enterprise, wellness and humanitarian care.
            </p>
          </div>
          <Link
            href="/contact/"
            prefetch={false}
            className="focus-ring inline-flex items-center rounded-full bg-gold px-7 py-4 font-bold text-forest transition hover:bg-white"
          >
            Become a Partner
            <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
