import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Pillars",
  description:
    "Hope, Elevate and Resilience are now part of the About Us page.",
  alternates: { canonical: "/about/" },
};

export default function PillarsPage() {
  return (
    <section className="texture-paper py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="section-kicker">Our Pillars</p>
        <h1 className="mt-4 text-5xl font-bold leading-tight text-forest sm:text-6xl">
          Our pillars are now part of About Us.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-ink/70">
          Hope, Elevate and Resilience sit within the foundation story.
        </p>
        <Link
          href="/about/"
          prefetch={false}
          className="focus-ring mt-8 inline-flex items-center rounded-full bg-teal px-7 py-4 font-bold text-white transition hover:bg-teal-700"
        >
          Go to About Us
          <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
