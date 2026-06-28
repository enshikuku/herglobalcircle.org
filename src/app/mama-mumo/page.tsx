import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, HandHeart, Heart, Utensils } from "lucide-react";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Mama Mumo Initiative",
  description:
    "Support the Mama Mumo Initiative through H.E.R Global Circle.",
  alternates: { canonical: "/mama-mumo" },
};

const focusAreas = [
  ["Food Security", Utensils],
  ["Healthcare Support", HandHeart],
  ["Education", BookOpen],
] as const;

export default function MamaMumoPage() {
  return (
    <>
      <section className="bg-blush/55 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PageIntro
            eyebrow="Featured Initiative"
            title="Mama Mumo Initiative"
            description="Humanitarian care for children, young people and families, offered with dignity and respect."
          />
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/branding/images/image_2.png"
              alt="Community members sharing a joyful moment"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 52vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="section-kicker">Care in Action</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-forest sm:text-5xl">
              Support that protects dignity.
            </h2>
            <div className="mt-8 grid gap-3">
              {focusAreas.map(([title, Icon]) => (
                <div
                  key={title}
                  className="flex items-center gap-4 rounded-lg border border-forest/10 bg-blush/35 p-4"
                >
                  <Icon className="h-5 w-5 text-teal" aria-hidden="true" />
                  <h3 className="font-bold text-forest">{title}</h3>
                </div>
              ))}
            </div>
            <Link
              href="/donate"
              prefetch={false}
              className="focus-ring mt-8 inline-flex items-center rounded-full bg-teal px-7 py-4 font-bold text-white transition hover:bg-teal-700"
            >
              <Heart className="mr-2 h-5 w-5" aria-hidden="true" />
              Support the Initiative
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
