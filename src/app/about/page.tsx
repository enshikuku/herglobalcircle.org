import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe2, HeartHandshake, MapPin } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { communityVisualPlaceholders, chapters } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about H.E.R Global Circle, a Pan-African community for mentorship, enterprise, wellness and opportunity.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="texture-paper py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PageIntro
            eyebrow="Who We Are"
            title="Rooted in Africa. Globally Connected."
            description="H.E.R Global Circle creates space for girls, youth and women to rise through mentorship, enterprise, wellness and opportunity."
          />

          <div className="mt-12 grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
              <Image
                src="/branding/images/image_1.png"
                alt="Mentorship conversation"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
              <div className="relative min-h-44 overflow-hidden rounded-lg">
                <Image
                  src="/branding/images/image_3.png"
                  alt="Workshop participation"
                  fill
                  sizes="(max-width: 768px) 50vw, 32vw"
                  className="object-cover"
                />
              </div>
              <div className="relative min-h-44 overflow-hidden rounded-lg">
                <Image
                  src="/branding/images/image_2.png"
                  alt="Community celebration"
                  fill
                  sizes="(max-width: 768px) 50vw, 32vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Replace with approved girls/youth/community photo when provided. */}
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {communityVisualPlaceholders.slice(0, 3).map((label) => (
              <div
                key={label}
                className="rounded-lg border border-gold/20 bg-paper p-5 shadow-soft"
              >
                <p className="display-script text-5xl leading-none text-teal">
                  {label}
                </p>
                <p className="mt-4 text-sm text-ink/65">Approved image space.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <Globe2 className="h-8 w-8 text-gold" aria-hidden="true" />
            <h2 className="mt-4 text-4xl font-bold text-forest">Our Reach</h2>
            <p className="mt-4 text-lg leading-8 text-ink/70">
              Built across Kenya, Uganda and Ghana.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {chapters.map((chapter) => (
              <div
                key={chapter}
                className="rounded-lg border border-forest/10 bg-blush/35 p-6"
              >
                <MapPin className="h-5 w-5 text-teal" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-bold text-forest">
                  {chapter}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blush/55 py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <article>
            <p className="section-kicker">Vision</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-forest sm:text-5xl">
              A continent where young people are supported to thrive.
            </h2>
          </article>
          <article className="rounded-lg bg-white p-8">
            <HeartHandshake className="h-8 w-8 text-gold" aria-hidden="true" />
            <h2 className="mt-4 text-2xl font-bold text-forest">
              Community Note
            </h2>
            <p className="mt-4 text-lg leading-8 text-ink/70">
              The circle is built by women, mentors and community leaders who
              believe opportunity should be shared across generations.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-forest py-16 text-white sm:py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <h2 className="text-3xl font-bold">See how the work is shaped.</h2>
            <p className="mt-3 max-w-2xl text-cream/75">
              Explore Hope, Elevate and Resilience.
            </p>
          </div>
          <Link
            href="/pillars"
            prefetch={false}
            className="focus-ring inline-flex items-center rounded-full bg-gold px-7 py-4 font-bold text-forest transition hover:bg-white"
          >
            View Pillars
            <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
