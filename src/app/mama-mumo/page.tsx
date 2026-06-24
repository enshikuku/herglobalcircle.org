import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, HandHeart, Heart, Utensils } from "lucide-react";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Mama Mumo Initiative",
  description:
    "Learn about the Mama Mumo Initiative, extending humanitarian care, dignity and opportunity to children, young people and families.",
  alternates: { canonical: "/mama-mumo" },
};

const focusAreas = [
  {
    title: "Food Security",
    text: "Supporting access to nutritious food so children and families can learn, grow and live with dignity.",
    icon: Utensils,
  },
  {
    title: "Healthcare Support",
    text: "Helping vulnerable communities access essential wellness and medical support with care and respect.",
    icon: HandHeart,
  },
  {
    title: "Education",
    text: "Reducing barriers to learning through practical resources and support that protect a child’s opportunity.",
    icon: BookOpen,
  },
];

export default function MamaMumoPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-blush/55 py-20 sm:py-28">
        <div className="absolute -left-28 top-10 h-80 w-80 rounded-full border border-gold/25" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PageIntro
            eyebrow="In Loving Memory"
            title="Mama Mumo Initiative"
            description="A humanitarian and social support initiative focused on restoring dignity, hope and opportunity to underserved children, young people and families."
          />
          <p className="mt-8 text-center text-xs font-bold uppercase tracking-[0.18em] text-forest/55">
            Established in memory of Sharon Mumo · Inspired by Naomi Musyoki
          </p>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-8">
          <div className="relative min-h-[520px] overflow-hidden rounded-[2.5rem]">
            <Image
              src="/branding/images/image_2.png"
              alt="Women gathering in a joyful moment of community"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 52vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="display-script text-5xl text-gold sm:text-6xl">
              Care that restores
            </p>
            <h2 className="mt-2 text-4xl font-bold leading-tight text-forest sm:text-5xl">
              Dignity is at the centre of every act of support.
            </h2>
            <p className="mt-6 text-lg leading-8 text-ink/70">
              The Mama Mumo Initiative responds to immediate needs while
              protecting the hope and potential of the people it serves. Our
              aim is not only to provide assistance, but to help create a path
              toward stability, learning and renewed possibility.
            </p>

            <div className="mt-10 divide-y divide-forest/10 border-y border-forest/10">
              {focusAreas.map((area) => (
                <article
                  key={area.title}
                  className="grid grid-cols-[auto_1fr] gap-5 py-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blush">
                    <area.icon
                      className="h-5 w-5 text-forest"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-forest">
                      {area.title}
                    </h3>
                    <p className="mt-2 leading-7 text-ink/65">{area.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-forest py-20 text-white sm:py-24">
        <div className="pattern-weave absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Heart className="mx-auto h-10 w-10 text-blush" aria-hidden="true" />
          <h2 className="mt-7 text-balance text-4xl font-bold leading-tight sm:text-5xl">
            Join us in extending care, dignity and restoration.
          </h2>
          <Link
            href="/donate"
            prefetch={false}
            className="focus-ring mt-9 inline-flex rounded-full bg-blush px-8 py-4 font-bold text-forest transition hover:bg-white"
          >
            Support Mama Mumo Initiative
          </Link>
        </div>
      </section>
    </>
  );
}
