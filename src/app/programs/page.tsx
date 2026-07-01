import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Programs",
  description: "H.E.R Global Circle programs are now presented under About Us.",
  alternates: { canonical: "/about/" },
  robots: { index: false, follow: true },
};

export default function ProgramsPage() {
  return (
    <section className="texture-paper py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="section-kicker">Programs</p>
        <h1 className="mt-4 text-5xl font-bold leading-tight text-forest sm:text-6xl">
          Programs are now presented under About Us.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-ink/70">
          Hope, Elevate, Resilience, Community, Enterprise and initiatives now
          sit together on the About Us page.
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
