import type { Metadata } from "next";
import { CalendarDays, MapPin } from "lucide-react";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Impact & Events",
  description:
    "Review H.E.R Global Circle strategic impact goals and the 2026 program roadmap.",
  alternates: { canonical: "/impact" },
};

const goals = [
  ["1,000", "MSMEs supported by 2027"],
  ["$2M", "in access to finance and trade opportunities"],
  ["5,000", "girls, youth and women equipped with skills"],
  ["10,000", "girls and young women connected to mentors by 2030"],
  ["500", "professional mentors across Africa"],
  ["10", "African countries with active chapters by 2030"],
  ["1M", "girls, youth and women in our community by 2030"],
  ["20", "long-term strategic partnerships"],
  ["5,000", "people reached annually with wellness initiatives"],
] as const;

const events = [
  ["January", "Vision Boarding", "Uganda"],
  ["February", "Entrepreneurship Acceleration: Market Connect", "Kenya"],
  ["February", "Mentorship Cohort 1", "Global"],
  ["March", "H.E.R Global Circle Rwanda Launch", "Rwanda"],
  ["April", "Women in Agribusiness Market Tour", "Uganda"],
  ["May", "Mental Health Matters", "Ghana + Global"],
  ["June", "Money Matters", "Global + Kenya"],
  ["July", "Mentorship Cohort 2 & H.E.R Connect & Grow II", "Global"],
  ["August", "H.E.R Women of Impact Honours", "Global"],
  ["October", "Breast Cancer Awareness", "Global"],
  ["November", "Global Summit", "To be announced"],
  ["December", "Reflection and Celebration", "Global"],
] as const;

export default function ImpactPage() {
  return (
    <>
      <section className="texture-paper py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PageIntro
            eyebrow="Looking Forward"
            title="2025–2030 Strategic Vision"
            description="Clear goals guide how we scale opportunity, strengthen partnerships and build a more connected Africa."
          />

          <div className="mt-16 grid border-y border-forest/10 sm:grid-cols-2 lg:grid-cols-3">
            {goals.map(([number, text], index) => (
              <article
                key={`${number}-${text}`}
                className={`p-8 text-center ${
                  index > 0 ? "border-t border-forest/10" : ""
                } ${index % 2 === 1 ? "sm:border-l" : ""} ${
                  index >= 2 ? "lg:border-t" : ""
                } ${
                  index % 3 !== 0 ? "lg:border-l" : "lg:border-l-0"
                } border-forest/10`}
              >
                <p className="text-4xl font-bold text-teal sm:text-5xl">
                  {number}
                </p>
                <p className="mx-auto mt-3 max-w-xs leading-7 text-ink/65">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-forest py-20 text-white sm:py-28">
        <div className="pattern-weave absolute inset-0 opacity-25" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <CalendarDays
              className="mx-auto h-8 w-8 text-gold"
              aria-hidden="true"
            />
            <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
              2026 Roadmap
            </h2>
            <p className="mt-4 text-lg text-cream/75">
              A year of learning, connection, enterprise and well-being.
            </p>
          </div>

          <ol className="mt-14 border-y border-white/15">
            {events.map(([month, title, location]) => (
              <li
                key={`${month}-${title}`}
                className="grid gap-3 border-b border-white/15 py-6 last:border-b-0 sm:grid-cols-[8rem_1fr_auto] sm:items-center sm:gap-6"
              >
                <span className="text-sm font-bold uppercase tracking-[0.15em] text-gold">
                  {month}
                </span>
                <span className="text-lg font-bold text-white">{title}</span>
                <span className="inline-flex items-center text-sm text-cream/65">
                  <MapPin className="mr-2 h-4 w-4 text-teal" aria-hidden="true" />
                  {location}
                </span>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-center text-xs leading-6 text-cream/55">
            Program dates and locations may be updated. Contact us for current
            participation and partnership information.
          </p>
        </div>
      </section>
    </>
  );
}
