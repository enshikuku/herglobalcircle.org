import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Heart, LockKeyhole, ShieldCheck } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { donationCategories } from "@/lib/donations";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support H.E.R Global Circle mentorship, education, enterprise, wellness and resilience programs.",
  alternates: { canonical: "/donate" },
};

export default function DonatePage() {
  return (
    <>
      <section className="texture-paper py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Heart className="mx-auto h-9 w-9 text-gold" aria-hidden="true" />
          <div className="mt-5">
            <PageIntro
              eyebrow="Donate"
              title="Support programs that move hope into action."
              description="Choose a giving area. Live payment links will be added only after verification."
            />
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-lg border border-gold/25 bg-gold/10 p-5 text-center text-sm font-bold text-forest">
            Donation links will be connected to verified payment channels
            before launch.
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {donationCategories.map((category) => (
            <article
              key={category.slug}
              className="flex min-h-72 flex-col rounded-lg border border-forest/10 bg-white p-6"
            >
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal">
                Giving Area
              </p>
              <h2 className="mt-4 text-2xl font-bold text-forest">
                {category.title}
              </h2>
              <p className="mt-4 leading-7 text-ink/65">
                {category.description}
              </p>

              <div className="mt-auto pt-8">
                {category.paystackUrl ? (
                  <a
                    href={category.paystackUrl}
                    className="focus-ring inline-flex items-center rounded-full bg-teal px-6 py-3 font-bold text-white transition hover:bg-teal-700"
                  >
                    Donate via Paystack
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </a>
                ) : (
                  <span
                    className="inline-flex cursor-not-allowed items-center rounded-full bg-forest/5 px-6 py-3 text-sm font-bold text-forest/55"
                    aria-disabled="true"
                  >
                    <LockKeyhole className="mr-2 h-4 w-4" aria-hidden="true" />
                    Paystack placeholder
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-forest py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:px-8">
          <ShieldCheck className="h-12 w-12 text-gold" aria-hidden="true" />
          <div>
            <h2 className="text-3xl font-bold">Giving stays careful.</h2>
            <p className="mt-3 max-w-2xl leading-7 text-cream/75">
              This static website does not verify payment. Confirmation will be
              handled by the verified payment channel.
            </p>
          </div>
          <Link
            href="/contact"
            prefetch={false}
            className="focus-ring rounded-full border border-white/20 px-6 py-3 text-center font-bold text-white transition hover:bg-white/10"
          >
            Discuss a Gift
          </Link>
        </div>
      </section>
    </>
  );
}
