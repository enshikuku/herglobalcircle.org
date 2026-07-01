import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, HandHeart, Heart, Utensils } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { sharonMumoInitiative, siteImages } from "@/lib/site-content";

export const metadata: Metadata = {
  title: sharonMumoInitiative.title,
  description:
    "Humanitarian and social support through H.E.R Global Circle, focused on dignity, care and opportunity.",
  alternates: { canonical: sharonMumoInitiative.route },
};

const icons = [Utensils, HandHeart, BookOpen] as const;

export default function SharonMumoInitiativePage() {
  return (
    <>
      <section className="bg-blush/55 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PageIntro
            eyebrow="Featured Initiative"
            title={sharonMumoInitiative.title}
            description={sharonMumoInitiative.description}
          />
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-card ring-1 ring-teal/25">
            <Image
              src={siteImages.childrenYouth}
              alt="Community members sharing a joyful moment"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 52vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-black/70 px-4 py-4 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">
                Sharon Mumo
              </p>
              <p className="mt-1 text-sm leading-6 text-white/90">
                Dignity, care, hope and opportunity.
              </p>
            </div>
          </div>
          <div>
            <p className="section-kicker">Care in Action</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-forest sm:text-5xl">
              Support that protects dignity.
            </h2>
            <div className="mt-8 grid gap-3">
              {sharonMumoInitiative.focus.map((title, index) => {
                const Icon = icons[index];
                return (
                  <div
                    key={title}
                    className="flex items-center gap-4 rounded-lg border border-forest/10 bg-blush/35 p-4"
                  >
                    <Icon className="h-5 w-5 text-teal" aria-hidden="true" />
                    <h3 className="font-bold text-forest">{title}</h3>
                  </div>
                );
              })}
            </div>
            <Link
              href="/donate/"
              prefetch={false}
              className="focus-ring mt-8 inline-flex items-center rounded-full bg-teal px-7 py-4 font-bold text-white transition hover:bg-teal-700"
            >
              <Heart className="mr-2 h-5 w-5" aria-hidden="true" />
              Support the Initiative
            </Link>
            <Link
              href="/contact/"
              prefetch={false}
              className="focus-ring ml-3 mt-8 inline-flex items-center rounded-full border border-forest/15 bg-white px-7 py-4 font-bold text-forest transition hover:bg-forest hover:text-white"
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
