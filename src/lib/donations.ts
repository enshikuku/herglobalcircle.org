export type DonationCategory = {
  slug: string;
  title: string;
  description: string;
  successPath: string;
  paystackUrl: string | null;
};

export const donationCategories: DonationCategory[] = [
  {
    slug: "general-foundation-support",
    title: "General Foundation Support",
    description:
      "Direct support where it is most useful across mentorship, education, enterprise, wellness and community care.",
    successPath: "/donation-received/general-foundation-support",
    // TODO: Replace null with the live Paystack payment link for this category.
    paystackUrl: null,
  },
  {
    slug: "mama-mumo-initiative",
    title: "Mama Mumo Initiative",
    description:
      "Humanitarian and social support that helps restore dignity, hope and opportunity for children and families.",
    successPath: "/donation-received/mama-mumo-initiative",
    // TODO: Replace null with the live Paystack payment link for this category.
    paystackUrl: null,
  },
  {
    slug: "mentorship-youth-empowerment",
    title: "Mentorship & Youth Empowerment",
    description:
      "Safe spaces, trusted mentors and leadership opportunities for girls, boys and young people.",
    successPath: "/donation-received/mentorship-youth-empowerment",
    // TODO: Replace null with the live Paystack payment link for this category.
    paystackUrl: null,
  },
  {
    slug: "education-support",
    title: "Education Support",
    description:
      "Practical resources and learning opportunities that reduce barriers and strengthen future pathways.",
    successPath: "/donation-received/education-support",
    // TODO: Replace null with the live Paystack payment link for this category.
    paystackUrl: null,
  },
  {
    slug: "women-youth-enterprise-support",
    title: "Women & Youth Enterprise Support",
    description:
      "Skills, advisory support and market connections that help women and young people build sustainable livelihoods.",
    successPath: "/donation-received/women-youth-enterprise-support",
    // TODO: Replace null with the live Paystack payment link for this category.
    paystackUrl: null,
  },
  {
    slug: "wellness-resilience-programs",
    title: "Wellness & Resilience Programs",
    description:
      "Mental, physical and community wellness initiatives that create a stable foundation for growth.",
    successPath: "/donation-received/wellness-resilience-programs",
    // TODO: Replace null with the live Paystack payment link for this category.
    paystackUrl: null,
  },
];

export function getDonationCategory(slug: string) {
  return donationCategories.find((category) => category.slug === slug);
}
