import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Heart, Leaf } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { communityVisualPlaceholders, pillars } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Pillars",
  description:
    "Explore the Hope, Elevate and Resilience pillars of H.E.R Global Circle.",
  alternates: { canonical: "/pillars" },
};

const icons = [Heart, BriefcaseBusiness, Leaf] as const;

export default function PillarsPage() {
  return (
    <>
      <section className="texture-paper py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PageIntro
            eyebrow="H.E.R"
            title="Our Pillars"
            description="Hope, Elevate and Resilience bring mentorship, opportunity and wellness into one path."
          />

          {/* Replace with approved girls/youth/community photo when provided. */}
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {communityVisualPlaceholders.slice(0, 3).map((label) => (
              <div
                key={label}
                className="rounded-lg border border-gold/20 bg-paper p-6 shadow-soft"
              >
                <p className="display-script text-5xl leading-none text-teal">
                  {label}
                </p>
                <p className="mt-4 text-sm leading-7 text-ink/65">
                  Approved image space.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        {pillars.map((pillar, index) => {
          const Icon = icons[index];
          const dark = index === 1;

          return (
            <article
              key={pillar.title}
              className={dark ? "bg-forest text-white" : "bg-white text-forest"}
            >
              <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:items-center lg:px-8">
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative aspect-[5/4] overflow-hidden rounded-lg shadow-card">
                    <Image
                      src={pillar.image}
                      alt={pillar.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-4">
                    <span
                      className={`display-script text-7xl leading-none ${
                        dark ? "text-gold" : "text-teal"
                      }`}
                      aria-hidden="true"
                    >
                      {pillar.letter}
                    </span>
                    <Icon
                      className={`h-8 w-8 ${
                        dark ? "text-gold" : "text-gold"
                      }`}
                      aria-hidden="true"
                    />
                  </div>
                  <p
                    className={`section-kicker mt-3 ${
                      dark ? "!text-gold" : ""
                    }`}
                  >
                    {pillar.subtitle}
                  </p>
                  <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
                    {pillar.title}
                  </h2>
                  <p
                    className={`mt-5 max-w-2xl text-lg leading-8 ${
                      dark ? "text-cream/80" : "text-ink/70"
                    }`}
                  >
                    {pillar.description}
                  </p>
                  <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                    {pillar.focus.map((item) => (
                      <li
                        key={item}
                        className={`flex items-center gap-3 rounded-lg border px-4 py-3 ${
                          dark
                            ? "border-white/15 bg-white/10 text-cream"
                            : "border-forest/10 bg-blush/40 text-ink/75"
                        }`}
                      >
                        <span
                          className={`h-2 w-2 rounded-full ${
                            dark ? "bg-gold" : "bg-teal"
                          }`}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      <section className="bg-blush/55 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-forest sm:text-5xl">
            Build with the circle.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-ink/70">
            Partner, mentor or support programs that help young people rise.
          </p>
          <Link
            href="/partners"
            prefetch={false}
            className="focus-ring mt-8 inline-flex items-center rounded-full bg-forest px-7 py-4 font-bold text-white transition hover:bg-teal"
          >
            Become a Partner
            <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
