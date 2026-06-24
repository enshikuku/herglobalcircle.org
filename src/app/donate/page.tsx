import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Heart, LockKeyhole, ShieldCheck } from "lucide-react";
import { donationCategories } from "@/lib/donations";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support H.E.R Global Circle mentorship, education, enterprise, wellness and humanitarian programs.",
  alternates: { canonical: "/donate" },
};

export default function DonatePage() {
  return (
    <>
      <section className="texture-paper py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Heart className="mx-auto h-9 w-9 text-gold" aria-hidden="true" />
          <div className="mt-5">
            <PageIntro
              eyebrow="Support the Circle"
              title="Give where hope becomes action."
              description="Your contribution can strengthen mentorship, education, enterprise, wellness and humanitarian initiatives across our growing African chapters."
            />
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2">
            {donationCategories.map((category, index) => (
              <article
                key={category.slug}
                className={`flex min-h-72 flex-col rounded-[2rem] border p-7 sm:p-8 ${
                  index === 0
                    ? "border-teal bg-teal text-white md:col-span-2"
                    : "border-forest/10 bg-white"
                }`}
              >
                <p
                  className={`text-xs font-bold uppercase tracking-[0.17em] ${
                    index === 0 ? "text-gold" : "text-teal"
                  }`}
                >
                  Donation Area {String(index + 1).padStart(2, "0")}
                </p>
                <h2
                  className={`mt-4 text-2xl font-bold sm:text-3xl ${
                    index === 0 ? "text-white" : "text-forest"
                  }`}
                >
                  {category.title}
                </h2>
                <p
                  className={`mt-4 max-w-2xl leading-7 ${
                    index === 0 ? "text-white/75" : "text-ink/65"
                  }`}
                >
                  {category.description}
                </p>

                <div className="mt-auto pt-8">
                  {category.paystackUrl ? (
                    <a
                      href={category.paystackUrl}
                      className={`focus-ring inline-flex items-center rounded-full px-6 py-3 font-bold transition ${
                        index === 0
                          ? "bg-white text-teal hover:bg-gold hover:text-forest"
                          : "bg-teal text-white hover:bg-teal-700"
                      }`}
                    >
                      Donate via Paystack
                      <ArrowRight
                        className="ml-2 h-4 w-4"
                        aria-hidden="true"
                      />
                    </a>
                  ) : (
                    <span
                      className={`inline-flex cursor-not-allowed items-center rounded-full px-6 py-3 text-sm font-bold ${
                        index === 0
                          ? "bg-white/12 text-white/75"
                          : "bg-forest/5 text-forest/50"
                      }`}
                      aria-disabled="true"
                    >
                      <LockKeyhole
                        className="mr-2 h-4 w-4"
                        aria-hidden="true"
                      />
                      Paystack link coming soon
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest py-20 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:px-8">
          <ShieldCheck
            className="h-12 w-12 text-gold"
            aria-hidden="true"
          />
          <div>
            <h2 className="text-3xl font-bold">Giving with clarity and trust</h2>
            <p className="mt-3 max-w-2xl leading-7 text-cream/75">
              Live payment links will only be enabled after each Paystack
              destination and redirect page has been verified. Until then, no
              payment details are collected by this website.
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
