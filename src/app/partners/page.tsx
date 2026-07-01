import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Handshake } from "lucide-react";

export const metadata: Metadata = {
  title: "Partnership Conversations",
  description:
    "Partnership conversations with H.E.R Global Circle now start through Contact.",
  alternates: { canonical: "/contact/" },
  robots: { index: false, follow: true },
};

export default function PartnersPage() {
  return (
    <section className="texture-paper py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <Handshake className="mx-auto h-10 w-10 text-gold" aria-hidden="true" />
        <p className="section-kicker mt-5">Partnership</p>
        <h1 className="mt-4 text-5xl font-bold leading-tight text-forest sm:text-6xl">
          Partnership conversations now start through Contact.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-ink/70">
          Use the contact page to discuss corporate, government, development or
          community collaboration.
        </p>
        <Link
          href="/contact/"
          prefetch={false}
          className="focus-ring mt-8 inline-flex items-center rounded-full bg-teal px-7 py-4 font-bold text-white transition hover:bg-teal-700"
        >
          Contact Us
          <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
