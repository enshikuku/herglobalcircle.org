import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe2, HeartHandshake, Network } from "lucide-react";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Who We Are",
  description:
    "Discover H.E.R Global Circle, a Pan-African ecosystem for empowerment, enterprise, wellness, education and generational impact.",
  alternates: { canonical: "/about" },
};

const commitments = [
  {
    title: "Ecosystem Building",
    text: "We link mentorship, wellness, education and enterprise instead of treating them as separate needs.",
    icon: Network,
  },
  {
    title: "Local Relevance",
    text: "Each chapter responds to its community while sharing a unified Pan-African vision and standard of care.",
    icon: Globe2,
  },
  {
    title: "Dignity in Action",
    text: "Our work is grounded in respect, accountability and the belief that every person carries possibility.",
    icon: HeartHandshake,
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="texture-paper py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PageIntro
            eyebrow="Our Story"
            title="Rooted in Africa. Globally Connected."
            description="H.E.R Global Circle is an ecosystem platform for girls, boys, young women and young men. We build the relationships, skills, well-being and opportunity that allow communities to thrive."
          />

          <div className="mt-16 grid gap-5 md:grid-cols-[1.2fr_.8fr]">
            <div className="relative min-h-[420px] overflow-hidden rounded-[2.5rem]">
              <Image
                src="/branding/images/image_1.png"
                alt="Two women in a mentoring conversation"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 62vw"
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-5 md:grid-cols-1">
              <div className="relative min-h-52 overflow-hidden rounded-[2rem]">
                <Image
                  src="/branding/images/image_2.png"
                  alt="Women sharing a joyful community moment"
                  fill
                  sizes="(max-width: 768px) 50vw, 32vw"
                  className="object-cover"
                />
              </div>
              <div className="relative min-h-52 overflow-hidden rounded-[2rem]">
                <Image
                  src="/branding/images/image_3.png"
                  alt="A woman participating in a workshop"
                  fill
                  sizes="(max-width: 768px) 50vw, 32vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="display-script text-5xl text-gold sm:text-6xl">
                Why the circle matters
              </p>
              <h2 className="mt-2 text-4xl font-bold leading-tight text-forest">
                Lasting change grows through connection.
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-8 text-ink/70">
              <p>
                We do not see empowerment as a single workshop, donation or
                moment. It is a connected journey: confidence strengthened by
                mentorship, opportunity expanded through education and
                enterprise, and resilience supported through wellness and
                community care.
              </p>
              <p>
                By bringing people, institutions and resources into one circle,
                we help individuals move from potential to participation—and
                from participation to leadership.
              </p>
            </div>
          </div>

          <div className="mt-16 divide-y divide-forest/10 border-y border-forest/10">
            {commitments.map((commitment) => (
              <article
                key={commitment.title}
                className="grid gap-5 py-8 sm:grid-cols-[auto_.45fr_1fr] sm:items-start sm:gap-8"
              >
                <commitment.icon
                  className="h-7 w-7 text-teal"
                  aria-hidden="true"
                />
                <h3 className="text-xl font-bold text-forest">
                  {commitment.title}
                </h3>
                <p className="leading-7 text-ink/65">{commitment.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-forest py-20 text-white sm:py-24">
        <div className="pattern-weave absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="section-kicker !text-gold">Our vision</p>
          <h2 className="mt-5 text-balance text-4xl font-bold leading-tight sm:text-5xl">
            A continent where every young person has the support and opportunity
            to thrive.
          </h2>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              href="/programs"
              className="focus-ring inline-flex items-center rounded-full bg-gold px-7 py-4 font-bold text-forest transition hover:bg-white"
            >
              Explore the H.E.R Pillars
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
            <Link
              href="/impact"
              className="focus-ring rounded-full border border-white/25 px-7 py-4 font-bold text-white transition hover:bg-white/10"
            >
              View Our Impact Goals
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
