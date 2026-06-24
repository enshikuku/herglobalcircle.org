import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BriefcaseBusiness, Heart, Leaf, Sparkles } from "lucide-react";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore the Hope, Elevate and Resilience pillars that shape H.E.R Global Circle programs.",
  alternates: { canonical: "/programs" },
};

const pillars = [
  {
    letter: "H",
    title: "Hope",
    subtitle: "Mentorship & Empowerment",
    description:
      "Building confidence, character and resilience through trusted relationships, safe spaces and leadership development.",
    items: [
      "Mentorship programs",
      "Leadership development",
      "Confidence building",
      "Peer support networks",
      "Youth empowerment",
    ],
    image: "/branding/images/image_1.png",
    imageAlt: "Two women in a mentorship conversation",
    icon: Heart,
    tone: "bg-white text-forest",
    accent: "text-teal",
  },
  {
    letter: "E",
    title: "Elevate",
    subtitle: "Education, Career & Entrepreneurship",
    description:
      "Equipping women and young people with knowledge, skills, market access and business support for sustainable livelihoods.",
    items: [
      "Education support",
      "Career advancement",
      "Skills development",
      "Business acceleration",
      "Market access",
    ],
    image: "/branding/images/image_3.png",
    imageAlt: "A woman participating in a professional learning event",
    icon: BriefcaseBusiness,
    tone: "bg-forest text-white",
    accent: "text-gold",
  },
  {
    letter: "R",
    title: "Resilience",
    subtitle: "Wellness & Sustainability",
    description:
      "Supporting physical, mental, nutritional and community well-being so people have the stability and strength to thrive.",
    items: [
      "Health and wellness",
      "Mental health support",
      "Food security",
      "Nutrition education",
      "Family and community support",
    ],
    image: "/branding/images/image_2.png",
    imageAlt: "Women sharing a joyful and supportive community moment",
    icon: Leaf,
    tone: "bg-blush/55 text-forest",
    accent: "text-teal",
  },
];

export default function ProgramsPage() {
  return (
    <>
      <section className="texture-paper py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PageIntro
            eyebrow="How We Work"
            title="The H.E.R Pillars"
            description="Hope, Elevate and Resilience form one connected approach to holistic, generational impact."
          />
        </div>
      </section>

      {pillars.map((pillar, index) => (
        <section
          key={pillar.title}
          className={`relative overflow-hidden py-20 sm:py-28 ${pillar.tone}`}
        >
          {index === 1 ? (
            <div className="pattern-weave absolute inset-0 opacity-25" />
          ) : null}
          <div className="relative mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
            <div className={index % 2 === 1 ? "lg:order-2" : ""}>
              <div className="relative aspect-[5/4] overflow-hidden rounded-[2.5rem] shadow-card">
                <Image
                  src={pillar.image}
                  alt={pillar.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className={index % 2 === 1 ? "lg:order-1" : ""}>
              <span
                className={`display-script block text-8xl leading-none opacity-25 ${pillar.accent}`}
                aria-hidden="true"
              >
                {pillar.letter}
              </span>
              <p className={`section-kicker -mt-4 ${pillar.accent}`}>
                {pillar.subtitle}
              </p>
              <h2 className="mt-4 text-5xl font-bold sm:text-6xl">
                {pillar.title}
              </h2>
              <p
                className={`mt-6 text-lg leading-8 ${
                  index === 1 ? "text-cream/80" : "text-ink/70"
                }`}
              >
                {pillar.description}
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {pillar.items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <pillar.icon
                      className={`h-5 w-5 shrink-0 ${pillar.accent}`}
                      aria-hidden="true"
                    />
                    <span
                      className={
                        index === 1 ? "text-cream/90" : "text-ink/75"
                      }
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-teal py-20 text-white sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Sparkles className="mx-auto h-8 w-8 text-gold" aria-hidden="true" />
          <p className="display-script mt-4 text-5xl text-gold sm:text-6xl">
            H.E.R Global Circle Community
          </p>
          <h2 className="mt-4 text-balance text-3xl font-bold leading-tight sm:text-4xl">
            More than a program—an invitation to belong.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/80">
            Join a Pan-African network of leaders, mentors and peers committed
            to intergenerational empowerment.
          </p>
          <Link
            href="/contact"
            prefetch={false}
            className="focus-ring mt-9 inline-flex rounded-full bg-white px-8 py-4 font-bold text-teal transition hover:bg-gold hover:text-forest"
          >
            Join the Circle
          </Link>
        </div>
      </section>
    </>
  );
}
