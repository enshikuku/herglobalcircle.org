export const chapters = ["Kenya", "Uganda", "Ghana"] as const;

export const pillars = [
  {
    letter: "H",
    title: "Hope",
    subtitle: "Mentorship & Empowerment",
    description:
      "Safe mentorship spaces that build confidence, leadership and peer support for girls and youth.",
    focus: [
      "Mentorship",
      "Leadership development",
      "Confidence building",
      "Peer support",
      "Youth empowerment",
    ],
    image: "/branding/images/image_1.png",
    imageAlt: "Mentorship conversation",
  },
  {
    letter: "E",
    title: "Elevate",
    subtitle: "Education, Career & Entrepreneurship",
    description:
      "Practical learning, enterprise support and market connections that open sustainable pathways.",
    focus: [
      "Education support",
      "Career growth",
      "Skills development",
      "Entrepreneurship",
      "Market access",
    ],
    image: "/branding/images/image_3.png",
    imageAlt: "Learning workshop",
  },
  {
    letter: "R",
    title: "Resilience",
    subtitle: "Wellness & Sustainability",
    description:
      "Wellness and family support that help communities stay strong through daily pressures.",
    focus: [
      "Health and wellness",
      "Mental wellbeing",
      "Food security",
      "Family support",
      "Community resilience",
    ],
    image: "/branding/images/image_2.png",
    imageAlt: "Community gathering",
  },
] as const;

export const quarterlyEvents = [
  {
    month: "January",
    title: "Vision Boarding",
    location: "Uganda",
  },
  {
    month: "February",
    title: "Entrepreneurship Acceleration: Market Connect",
    location: "Kenya",
  },
  {
    month: "February",
    title: "Mentorship Cohort 1",
    location: "Global",
  },
  {
    month: "March",
    title: "H.E.R Global Circle Rwanda Launch",
    location: "Rwanda",
  },
] as const;

export const annualRoadmap = [
  ["April", "Women in Agribusiness Market Tour", "Uganda"],
  ["May", "Mental Health Matters", "Ghana + Global"],
  ["June", "Money Matters", "Global + Kenya"],
  ["July", "Mentorship Cohort 2 and H.E.R Connect & Grow II", "Global"],
  ["August", "H.E.R Women of Impact Honours", "Global"],
  ["October", "Breast Cancer Awareness", "Global"],
  ["November", "Global Summit", "To be announced"],
  ["December", "Reflection and Celebration", "Global"],
] as const;

export const partnerCategories = [
  "Corporate Partners",
  "Government Partners",
  "Development Partners",
  "Community Partners",
  "Mentorship Partners",
  "Enterprise Partners",
] as const;

// Replace these placeholders with confirmed partner logo files when available.
export const partnerPlaceholders = [
  "Corporate",
  "Government",
  "Development",
  "Community",
  "Mentorship",
  "Enterprise",
] as const;

// Add approved girls, youth and wider community photos to public/branding/images
// and replace these visual blocks when client-approved images are available.
export const communityVisualPlaceholders = [
  "Girls",
  "Youth",
  "Community",
  "Mentorship",
  "Enterprise",
] as const;
