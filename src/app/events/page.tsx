import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { annualRoadmap, quarterlyEvents, siteImages } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Selected quarterly events from H.E.R Global Circle across Africa and the global network.",
  alternates: { canonical: "/events/" },
};

export default function EventsPage() {
  return (
    <>
      <section className="texture-paper py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PageIntro
            eyebrow="Events"
            title="Quarter 1 Events"
            description="Selected quarterly events. Events are updated quarterly."
          />
        </div>
      </section>

      <section className="bg-paper py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-card ring-1 ring-teal/25">
              <Image
                src={siteImages.youthGathering}
                alt="Event gathering"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute left-4 top-4 rounded-full bg-black px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white">
                Quarter 1
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-forest/90 px-4 py-4 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">
                  Events
                </p>
                <p className="mt-1 text-sm leading-6 text-cream/90">
                  Mentorship, enterprise and launch moments.
                </p>
              </div>
            </div>

            <div className="rounded-lg bg-forest p-6 text-white shadow-card sm:p-8">
              <div className="rounded-lg border border-white/10 bg-white/10 p-0">
                {quarterlyEvents.map((event, index) => (
                  <article
                    key={`${event.month}-${event.title}`}
                    className={`grid gap-4 p-5 sm:grid-cols-[9rem_1fr_auto] sm:items-center ${
                      index > 0 ? "border-t border-white/10" : ""
                    }`}
                  >
                    <p className="text-sm font-bold uppercase tracking-[0.16em] text-gold">
                      {event.month}
                    </p>
                    <h2 className="text-xl font-bold text-white">
                      {event.title}
                    </h2>
                    <p className="inline-flex items-center text-sm text-cream/75">
                      <MapPin
                        className="mr-2 h-4 w-4 text-teal"
                        aria-hidden="true"
                      />
                      {event.location}
                    </p>
                  </article>
                ))}
              </div>

              <p className="mt-6 text-sm font-bold uppercase tracking-[0.16em] text-teal">
                Events are updated quarterly.
              </p>

              <details className="mt-8 rounded-lg border border-white/10 bg-black/30 p-5">
                <summary className="cursor-pointer text-sm font-bold uppercase tracking-[0.16em] text-paper">
                  Annual roadmap
                </summary>
                <ol className="mt-5 grid gap-3 md:grid-cols-2">
                  {annualRoadmap.map(([month, title, location]) => (
                    <li key={`${month}-${title}`} className="rounded-lg bg-white/10 p-4">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">
                        {month}
                      </p>
                      <p className="mt-2 font-bold text-white">{title}</p>
                      <p className="mt-1 text-sm text-cream/70">{location}</p>
                    </li>
                  ))}
                </ol>
              </details>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-forest py-16 text-white sm:py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <CalendarDays className="h-8 w-8 text-gold" aria-hidden="true" />
            <h2 className="mt-4 text-3xl font-bold">
              Partner on an upcoming event.
            </h2>
            <p className="mt-3 max-w-2xl text-cream/75">
              Support mentorship, enterprise and wellness gatherings across
              the network.
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
