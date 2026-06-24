import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BriefcaseBusiness,
  Calculator,
  Heart,
  Lightbulb,
  Megaphone,
  TrendingUp,
  Users,
} from "lucide-react";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "H.E.R Enterprise",
  description:
    "Explore H.E.R Enterprise professional services and social-enterprise support for sustainable business growth.",
  alternates: { canonical: "/enterprise" },
};

const services = [
  {
    title: "Branding & Communications",
    text: "Clear narratives and visual communication that help organisations connect with the people they serve.",
    icon: Megaphone,
  },
  {
    title: "Marketing & Digital Visibility",
    text: "Practical strategies that strengthen reach, relevance and consistent audience engagement.",
    icon: TrendingUp,
  },
  {
    title: "Accounting & Taxation Support",
    text: "Professional financial guidance that supports compliance, visibility and sustainable decisions.",
    icon: Calculator,
  },
  {
    title: "Career & Skills Development",
    text: "Targeted learning that equips individuals and teams for changing workplace and enterprise needs.",
    icon: Lightbulb,
  },
  {
    title: "Business Support Services",
    text: "Operational assistance designed to make everyday enterprise activities more focused and effective.",
    icon: Users,
  },
  {
    title: "Advisory & Growth Solutions",
    text: "Experienced guidance for organisations navigating complexity, change and responsible growth.",
    icon: BriefcaseBusiness,
  },
];

export default function EnterprisePage() {
  return (
    <>
      <section className="texture-paper py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <PageIntro
              align="left"
              eyebrow="The Social Enterprise Arm"
              title="H.E.R Enterprise"
              description="Converting opportunity into sustainable economic outcomes through professional services that empower businesses and support community impact."
            />
            <div className="mt-8 inline-flex items-center rounded-full bg-gold/10 px-5 py-3 text-sm font-bold text-gold-700">
              <Heart className="mr-2 h-4 w-4" aria-hidden="true" />
              Proceeds support H.E.R Global Circle programs
            </div>
          </div>
          <div className="relative aspect-[5/4] overflow-hidden rounded-[2.5rem] shadow-card">
            <Image
              src="/branding/images/image_1.png"
              alt="Two professional women in a focused conversation"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="section-kicker">Professional Services</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-forest sm:text-5xl">
              Expertise that moves organisations forward.
            </h2>
            <p className="mt-5 text-lg leading-8 text-ink/70">
              Partner with H.E.R Enterprise for practical, accountable support
              that creates business value and contributes to wider social
              impact.
            </p>
          </div>

          <div className="mt-14 grid border-y border-forest/10 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.title}
                className={`p-8 ${
                  index > 0 ? "border-t border-forest/10" : ""
                } ${index % 2 === 1 ? "md:border-l" : ""} ${
                  index >= 2 ? "lg:border-t" : ""
                } ${
                  index % 3 !== 0 ? "lg:border-l" : "lg:border-l-0"
                } border-forest/10`}
              >
                <service.icon
                  className="h-8 w-8 text-teal"
                  aria-hidden="true"
                />
                <h3 className="mt-5 text-xl font-bold text-forest">
                  {service.title}
                </h3>
                <p className="mt-3 leading-7 text-ink/65">{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest py-20 text-center text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold">Ready to elevate your business?</h2>
          <p className="mt-5 text-lg leading-8 text-cream/75">
            Tell us what you are building and where experienced support could
            make the difference.
          </p>
        <Link
          href="/contact"
          prefetch={false}
            className="focus-ring mt-8 inline-flex rounded-full bg-gold px-8 py-4 font-bold text-forest transition hover:bg-white"
          >
            Discuss Your Needs
          </Link>
        </div>
      </section>
    </>
  );
}
