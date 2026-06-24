import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe2, Heart, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Home",
  alternates: { canonical: "/" },
};

const principles = [
  {
    title: "Ecosystem Building",
    description:
      "We connect mentorship, wellness, education and enterprise so progress can be sustained by the community itself.",
    icon: Users,
  },
  {
    title: "Pan-African Reach",
    description:
      "Our chapters in Kenya, Uganda and Ghana bring a shared vision to locally grounded work.",
    icon: Globe2,
  },
  {
    title: "Generational Impact",
    description:
      "We invest in girls, boys, women and young people so opportunity can travel across families and generations.",
    icon: Heart,
  },
];

export default function HomePage() {
  return (
    <>
      <section className="texture-paper relative overflow-hidden">
        <div className="absolute -right-28 top-0 h-72 w-72 rounded-full border border-gold/25 sm:h-[34rem] sm:w-[34rem]" />
        <div className="absolute -right-10 top-16 h-56 w-56 rounded-full border border-teal/20 sm:h-[28rem] sm:w-[28rem]" />

        <div className="relative mx-auto grid min-h-[calc(100vh-5.5rem)] max-w-7xl items-center gap-14 px-4 py-16 sm:px-6 lg:grid-cols-[1.03fr_.97fr] lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="display-script mb-3 text-5xl leading-none text-gold sm:text-6xl">
              Welcome to the Circle
            </p>
            <h1 className="text-balance text-5xl font-bold leading-[0.96] text-forest sm:text-6xl lg:text-7xl">
              Empowering Communities.
              <span className="mt-2 block text-teal">
                Building Generational Impact.
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-ink/75 sm:text-xl">
              A Pan-African foundation advancing mentorship, enterprise,
              wellness, education and opportunity across Kenya, Uganda and
              Ghana.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/donate"
                className="focus-ring inline-flex items-center rounded-full bg-teal px-7 py-4 font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-teal-700"
              >
                <Heart className="mr-2 h-5 w-5" aria-hidden="true" />
                Donate
              </Link>
              <Link
                href="/contact"
                className="focus-ring inline-flex items-center rounded-full border border-forest/15 bg-white px-7 py-4 font-bold text-forest transition hover:border-forest hover:bg-forest hover:text-white"
              >
                Partner With Us
              </Link>
              <Link
                href="/programs"
                className="focus-ring inline-flex items-center rounded-full px-5 py-4 font-bold text-forest transition hover:text-teal"
              >
                Explore Our Work
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </div>

            <div className="mt-10 border-t border-forest/10 pt-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-forest">
                Active in Kenya · Uganda · Ghana
              </p>
              <p className="mt-2 text-sm leading-6 text-ink/60">
                Mentorship · Enterprise · Wellness · Education · Humanitarian
                Support
              </p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl pb-12 lg:pb-0">
            <div className="relative aspect-[1.27/1] overflow-hidden rounded-[2.5rem] border-[10px] border-white bg-blush shadow-card">
              <Image
                src="/branding/images/image_1.png"
                alt="Two women sharing an engaged conversation"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-3 -left-2 w-40 overflow-hidden rounded-[1.75rem] border-[7px] border-white bg-white shadow-soft sm:-left-8 sm:w-52">
              <div className="relative aspect-square">
                <Image
                  src="/branding/images/image_2.png"
                  alt="Women celebrating in community"
                  fill
                  sizes="208px"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-5 right-3 rounded-full bg-forest px-5 py-3 text-sm font-bold text-white shadow-soft sm:right-8">
              Hope · Elevate · Resilience
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-forest py-20 text-white sm:py-24">
        <div className="pattern-weave absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <Heart className="mx-auto h-9 w-9 text-gold" aria-hidden="true" />
          <blockquote className="mt-7 text-balance text-3xl font-bold leading-tight sm:text-5xl">
            “When women build space at the table, girls and young people rise
            with them.”
          </blockquote>
          <div className="mx-auto mt-8 h-px w-24 bg-gold" />
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
            <div>
              <p className="display-script text-5xl text-teal sm:text-6xl">
                Rooted in Africa
              </p>
              <h2 className="mt-1 text-4xl font-bold leading-tight text-forest sm:text-5xl">
                Globally connected, locally grounded.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-ink/70 lg:justify-self-end">
              H.E.R Global Circle is an ecosystem platform for girls, boys,
              young women and young men. Through leadership, mentorship,
              entrepreneurship, wellness, education and economic inclusion, we
              are building a foundation for lasting change.
            </p>
          </div>

          <div className="mt-16 grid border-y border-forest/10 md:grid-cols-3">
            {principles.map((principle, index) => (
              <article
                key={principle.title}
                className={`py-9 md:px-8 ${
                  index > 0
                    ? "border-t border-forest/10 md:border-l md:border-t-0"
                    : ""
                }`}
              >
                <principle.icon
                  className="h-7 w-7 text-gold"
                  aria-hidden="true"
                />
                <h3 className="mt-5 text-xl font-bold text-forest">
                  {principle.title}
                </h3>
                <p className="mt-3 leading-7 text-ink/65">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/about"
              className="focus-ring inline-flex items-center rounded-full text-sm font-bold uppercase tracking-[0.15em] text-teal transition hover:text-forest"
            >
              Read our full story
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-blush/55 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_.8fr] lg:items-center lg:px-8">
          <div className="relative min-h-[420px] overflow-hidden rounded-[2.5rem]">
            <Image
              src="/branding/images/image_3.png"
              alt="A woman contributing during a professional gathering"
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover object-center"
            />
          </div>
          <div className="lg:pl-6">
            <p className="section-kicker">There is space in the circle</p>
            <h2 className="mt-5 text-4xl font-bold leading-tight text-forest sm:text-5xl">
              Give. Mentor. Partner. Build with us.
            </h2>
            <p className="mt-6 text-lg leading-8 text-ink/70">
              Every meaningful connection expands what is possible for a woman,
              a young person, a family and the community around them.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="focus-ring rounded-full bg-forest px-7 py-4 font-bold text-white transition hover:bg-teal"
              >
                Start a Conversation
              </Link>
              <Link
                href="/impact"
                className="focus-ring rounded-full border border-forest/20 px-7 py-4 font-bold text-forest transition hover:border-forest"
              >
                See Our Vision
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
