import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { sharonMumoInitiative } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Initiative Moved",
  description: "This H.E.R Global Circle initiative now has an updated page.",
  alternates: { canonical: sharonMumoInitiative.route },
  robots: { index: false, follow: true },
};

export default function LegacyInitiativePage() {
  return (
    <section className="texture-paper py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="section-kicker">Updated Initiative Page</p>
        <h1 className="mt-4 text-5xl font-bold leading-tight text-forest sm:text-6xl">
          This initiative is now The Sharon Mumo Initiative.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-ink/70">
          Visit the updated page for the current name and temporary program
          wording.
        </p>
        <Link
          href={sharonMumoInitiative.route}
          prefetch={false}
          className="focus-ring mt-8 inline-flex items-center rounded-full bg-teal px-7 py-4 font-bold text-white transition hover:bg-teal-700"
        >
          View The Sharon Mumo Initiative
          <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
