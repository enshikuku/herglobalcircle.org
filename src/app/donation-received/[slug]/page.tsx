import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DonationReceived } from "@/components/donation-received";
import { donationCategories, getDonationCategory } from "@/lib/donations";

export const dynamicParams = false;

export function generateStaticParams() {
  return donationCategories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getDonationCategory(slug);

  if (!category) {
    return {};
  }

  return {
    title: `${category.title} Donation Process Received`,
    description:
      "Thank you for supporting H.E.R Global Circle. Payment confirmation is processed by the donation platform.",
    robots: { index: false, follow: false },
  };
}

export default async function DonationCategoryReceivedPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getDonationCategory(slug);

  if (!category) {
    notFound();
  }

  return <DonationReceived category={category.title} />;
}
