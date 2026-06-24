import Link from "next/link";
import { Check, Heart } from "lucide-react";

type DonationReceivedProps = {
  category?: string;
};

export function DonationReceived({ category }: DonationReceivedProps) {
  return (
    <section className="texture-paper flex min-h-[70vh] items-center py-20">
      <div className="mx-auto w-full max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal text-white shadow-soft">
          <Check className="h-8 w-8" aria-hidden="true" />
        </div>
        <p className="display-script mt-7 text-5xl text-gold sm:text-6xl">
          Thank you for your support
        </p>
        <h1 className="mt-3 text-balance text-4xl font-bold leading-tight text-forest sm:text-5xl">
          Your donation process has been received.
        </h1>
        {category ? (
          <p className="mt-4 text-sm font-bold uppercase tracking-[0.16em] text-teal">
            {category}
          </p>
        ) : null}
        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-ink/70">
          Thank you for your support. If your payment was completed
          successfully, a confirmation will be processed through our donation
          platform.
        </p>
        <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-gold/25 bg-gold/10 p-5 text-sm leading-7 text-ink/65">
          This page does not independently verify or confirm payment. If you
          need help, email{" "}
          <a
            href="mailto:info@herglobalcircle.org"
            className="focus-ring rounded-sm font-bold text-teal hover:text-forest"
          >
            info@herglobalcircle.org
          </a>
          .
        </div>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            prefetch={false}
            className="focus-ring inline-flex items-center rounded-full bg-teal px-7 py-4 font-bold text-white transition hover:bg-teal-700"
          >
            <Heart className="mr-2 h-5 w-5" aria-hidden="true" />
            Back to Home
          </Link>
          <Link
            href="/contact"
            prefetch={false}
            className="focus-ring rounded-full border border-forest/20 bg-white px-7 py-4 font-bold text-forest transition hover:border-forest"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
