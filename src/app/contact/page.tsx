import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact H.E.R Global Circle to partner, mentor, give or learn more.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="texture-paper py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <PageIntro
            align="left"
            eyebrow="Contact"
            title="Start a Conversation"
            description="Partner, mentor, give or ask a question. We will keep the next step clear."
          />

          <div className="mt-10 space-y-6 border-y border-forest/10 py-8">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm">
                <Mail className="h-5 w-5 text-teal" aria-hidden="true" />
              </div>
              <div>
                <h2 className="font-bold text-forest">Email</h2>
                <a
                  href="mailto:info@herglobalcircle.org"
                  className="focus-ring mt-1 inline-block rounded-sm text-ink/65 transition hover:text-teal"
                >
                  info@herglobalcircle.org
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm">
                <MapPin className="h-5 w-5 text-gold" aria-hidden="true" />
              </div>
              <div>
                <h2 className="font-bold text-forest">Chapters</h2>
                <p className="mt-1 text-ink/65">
                  Kenya &middot; Uganda &middot; Ghana
                </p>
              </div>
            </div>
          </div>

          <Link
            href="/partners"
            prefetch={false}
            className="focus-ring mt-8 inline-flex items-center rounded-full bg-forest px-7 py-4 font-bold text-white transition hover:bg-teal"
          >
            Become a Partner
            <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
          </Link>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
