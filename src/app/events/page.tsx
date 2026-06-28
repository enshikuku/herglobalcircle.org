import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { annualRoadmap, quarterlyEvents } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Selected quarterly events from H.E.R Global Circle across Africa and the global network.",
  alternates: { canonical: "/events" },
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

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-forest/10 bg-white">
            {quarterlyEvents.map((event, index) => (
              <article
                key={`${event.month}-${event.title}`}
                className={`grid gap-4 p-6 sm:grid-cols-[9rem_1fr_auto] sm:items-center sm:p-7 ${
                  index > 0 ? "border-t border-forest/10" : ""
                }`}
              >
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-gold">
                  {event.month}
                </p>
                <h2 className="text-xl font-bold text-forest">
                  {event.title}
                </h2>
                <p className="inline-flex items-center text-sm text-ink/65">
                  <MapPin className="mr-2 h-4 w-4 text-teal" aria-hidden="true" />
                  {event.location}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-6 text-center text-sm font-bold text-teal">
            Events are updated quarterly.
          </p>

          <details className="mt-10 rounded-lg border border-forest/10 bg-blush/40 p-5">
            <summary className="cursor-pointer text-sm font-bold uppercase tracking-[0.16em] text-forest">
              Annual roadmap
            </summary>
            <ol className="mt-5 grid gap-3 md:grid-cols-2">
              {annualRoadmap.map(([month, title, location]) => (
                <li
                  key={`${month}-${title}`}
                  className="rounded-lg border border-forest/10 bg-white p-4"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">
                    {month}
                  </p>
                  <p className="mt-2 font-bold text-forest">{title}</p>
                  <p className="mt-1 text-sm text-ink/60">{location}</p>
                </li>
              ))}
            </ol>
          </details>
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
            href="/partners"
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
