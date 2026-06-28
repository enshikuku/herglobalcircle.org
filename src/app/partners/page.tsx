import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  GraduationCap,
  Handshake,
  Landmark,
  UsersRound,
} from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { partnerCategories, partnerPlaceholders } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Partner with H.E.R Global Circle to expand opportunity across Africa.",
  alternates: { canonical: "/partners" },
};

const icons = [
  Building2,
  Landmark,
  Handshake,
  UsersRound,
  GraduationCap,
  BriefcaseBusiness,
] as const;

export default function PartnersPage() {
  return (
    <>
      <section className="texture-paper py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PageIntro
            eyebrow="Partners"
            title="Partners in Generational Impact"
            description="We work with corporate, government, development, community and ecosystem partners to expand opportunity across Africa."
          />
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {partnerCategories.map((category, index) => {
              const Icon = icons[index];
              return (
                <article
                  key={category}
                  className="rounded-lg border border-gold/20 bg-paper p-6 shadow-soft"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blush ring-1 ring-gold/40">
                    <Icon className="h-6 w-6 text-teal" aria-hidden="true" />
                  </div>
                  <h2 className="mt-5 text-xl font-bold text-forest">
                    {category}
                  </h2>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-blush/55 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <p className="section-kicker">Logo Provision</p>
              <h2 className="mt-4 text-4xl font-bold leading-tight text-forest sm:text-5xl">
                A clean place for confirmed collaborators.
              </h2>
              <p className="mt-5 text-lg leading-8 text-ink/70">
                Partner logos will be added as collaborations are confirmed.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {partnerPlaceholders.map((partner) => (
                <div
                  key={partner}
                  className="flex min-h-32 items-center justify-center rounded-lg border border-gold/20 bg-paper px-5 text-center shadow-soft"
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

      <section className="bg-forest py-16 text-white sm:py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <Handshake className="h-8 w-8 text-gold" aria-hidden="true" />
            <h2 className="mt-4 text-3xl font-bold">Become a Partner</h2>
            <p className="mt-3 max-w-2xl text-cream/75">
              Bring funding, mentorship, networks or technical support into the
              circle.
            </p>
          </div>
          <Link
            href="/contact"
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
