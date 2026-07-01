export const chapters = ["Kenya", "Uganda", "Ghana"] as const;

export const mainNavigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about/" },
  { label: "Events", href: "/events/" },
  { label: "Donate", href: "/donate/" },
  { label: "Contact", href: "/contact/" },
] as const;

export const siteImages = {
  conversation: "/images/image_1.png",
  womenConnection: "/images/image_2.png",
  girlsLeadership: "/images/image_3.png",
  workshop: "/images/pexels-diva-plavalaguna-6150530.jpg",
  communityCircle: "/images/pexels-droneafrica-12431091.jpg",
  youthGathering: "/images/pexels-mk_photoz-2149411980-33166795.jpg",
  childrenYouth: "/images/pexels-simplice-11326785.jpg",
  girlsEducation: "/images/pexels-speakmediauganda-34185234.jpg",
  communityResilience: "/images/pexels-zeusdcreator-17902855.jpg",
} as const;

export const pillars = [
  {
    letter: "H",
    title: "Hope",
    subtitle: "Mentorship & Empowerment",
    description:
      "Safe spaces for mentorship, confidence-building, leadership and peer support for girls, boys and young people.",
    focus: [
      "Mentorship & Leadership Development",
      "Personal Growth & Confidence Building",
      "Community & Peer Support",
      "Youth empowerment",
      "Character & Resilience",
    ],
    image: siteImages.conversation,
    imageAlt: "Mentorship conversation",
  },
  {
    letter: "E",
    title: "Elevate",
    subtitle: "Education, Career & Entrepreneurship",
    description:
      "Tools, networks and opportunities that help people grow academically, professionally and economically.",
    focus: [
      "Education Support",
      "Career Advancement",
      "Skills Development",
      "Entrepreneurship Support",
      "Market Access",
    ],
    image: siteImages.workshop,
    imageAlt: "Learning workshop",
  },
  {
    letter: "R",
    title: "Resilience",
    subtitle: "Wellness & Sustainability",
    description:
      "Wellness, food security, family support and community systems that strengthen long-term resilience.",
    focus: [
      "Health & Wellness",
      "Mental Wellbeing",
      "Food Security & Nutrition",
      "Family Support",
      "Community Resilience",
    ],
    image: siteImages.communityResilience,
    imageAlt: "Community gathering",
  },
] as const;

export const herCommunity = {
  title: "H.E.R Global Circle Community",
  description:
    "The core community and empowerment platform bringing together girls, boys, young women and young men through mentorship, leadership development, entrepreneurship support, wellness initiatives and collaborative growth.",
  focus: [
    "Leadership & Personal Development",
    "Career Advancement & Mentorship",
    "Entrepreneurship & Business Growth",
    "Wellness & Resilience",
    "Networking & Ecosystem Collaboration",
    "Intergenerational Empowerment",
  ],
} as const;

export const enterpriseServices = [
  "Branding & Communications",
  "Marketing & Digital Visibility",
  "Accounting & Taxation Support",
  "Career & Skills Development",
  "Business Support Services",
  "Professional Advisory & Growth Solutions",
] as const;

export const herEnterprise = {
  title: "H.E.R Enterprise",
  description:
    "H.E.R Enterprise is the social enterprise arm of the Foundation, converting opportunity into sustainable economic outcomes for women and young people.",
  supportNote: "Proceeds support foundation programs and community initiatives.",
  services: enterpriseServices,
} as const;

// Temporary client-approved placeholder. Replace with final wording when Rahel shares updated copy.
export const sharonMumoInitiative = {
  title: "The Sharon Mumo Initiative",
  route: "/sharon-mumo-initiative/",
  description:
    "The Sharon Mumo Initiative is a humanitarian and social support initiative focused on restoring dignity, care and opportunity for underserved children, young people and families through food security, healthcare support and access to education.",
  focus: ["Food Security", "Healthcare Support", "Access to Education"],
} as const;

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

// Add approved girls, youth and wider community photos to public/images
// and replace these visual blocks when client-approved images are available.
export const communityVisualPlaceholders = [
  "Girls",
  "Youth",
  "Community",
  "Mentorship",
  "Enterprise",
] as const;
