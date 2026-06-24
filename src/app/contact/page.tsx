import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact H.E.R Global Circle to partner, mentor, give or learn more about our programs.",
  alternates: { canonical: "/contact" },
};

const opportunities = [
  "Corporate partnerships",
  "Government collaboration",
  "Development sector partnerships",
  "Mentorship partnerships",
  "Program sponsorship",
  "Chapter development",
];

export default function ContactPage() {
  return (
    <section className="texture-paper py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[.85fr_1.15fr] lg:px-8">
        <div>
          <PageIntro
            align="left"
            eyebrow="Get in Touch"
            title="Partner With Us"
            description="Whether you want to give, mentor, partner or build with us, there is space in the circle."
          />

          <div className="mt-10 space-y-7 border-y border-forest/10 py-8">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                <Mail className="h-5 w-5 text-teal" aria-hidden="true" />
              </div>
              <div>
                <h2 className="font-bold text-forest">Email Us</h2>
                <a
                  href="mailto:info@herglobalcircle.org"
                  className="focus-ring mt-1 inline-block rounded-sm text-ink/65 transition hover:text-teal"
                >
                  info@herglobalcircle.org
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                <MapPin className="h-5 w-5 text-gold" aria-hidden="true" />
              </div>
              <div>
                <h2 className="font-bold text-forest">Active Chapters</h2>
                <p className="mt-1 text-ink/65">
                  Kenya (Headquarters) · Uganda · Ghana
                </p>
              </div>
            </div>
          </div>

          <div className="mt-9">
            <h2 className="text-xl font-bold text-forest">
              Partnership Opportunities
            </h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {opportunities.map((opportunity) => (
                <li
                  key={opportunity}
                  className="flex items-center gap-3 text-sm text-ink/65"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                  {opportunity}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
