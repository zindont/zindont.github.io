import { RESUME_DATA } from "@/data/resume-data";

const SITE_URL = "https://zindont.github.io";

export function generatePersonStructuredData() {
  const primaryRole =
    RESUME_DATA.work.find((job) => job.isPrimaryEmployerRole) ??
    RESUME_DATA.work[0];
  const primaryEmployer = primaryRole?.employer ?? {
    company: primaryRole?.company ?? "",
    link: primaryRole?.link,
  };

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: RESUME_DATA.name,
    alternateName: RESUME_DATA.initials,
    description: RESUME_DATA.about,
    url: SITE_URL,
    image: `${SITE_URL}${RESUME_DATA.avatarUrl}`,
    sameAs: [
      RESUME_DATA.personalWebsiteUrl,
      ...RESUME_DATA.contact.social.map((social) => social.url),
    ],
    address: {
      "@type": "Place",
      name: RESUME_DATA.location,
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: RESUME_DATA.contact.email,
      telephone: RESUME_DATA.contact.tel,
      contactType: "professional",
    },
    jobTitle: primaryRole?.title ?? "Technical Lead",
    worksFor: primaryEmployer.company
      ? {
          "@type": "Organization",
          name: primaryEmployer.company,
          url: primaryEmployer.link,
        }
      : undefined,
    alumniOf: RESUME_DATA.education.map((edu) => ({
      "@type": "EducationalOrganization",
      name: edu.school,
    })),
    hasOccupation: RESUME_DATA.work.map((job) => ({
      "@type": "Occupation",
      name: job.title,
      occupationLocation: {
        "@type": "Place",
        name: RESUME_DATA.location,
      },
      occupationalCategory: "Software Engineering",
    })),
    knowsAbout: RESUME_DATA.skills,
  };
}

export function generateWebPageStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${RESUME_DATA.name} - Resume`,
    description: RESUME_DATA.about,
    url: SITE_URL,
    inLanguage: "en-US",
    isPartOf: {
      "@type": "WebSite",
      name: `${RESUME_DATA.name}'s Professional Resume`,
      url: SITE_URL,
    },
    about: {
      "@type": "Person",
      name: RESUME_DATA.name,
    },
    mainEntity: generatePersonStructuredData(),
  };
}

export function generateResumeStructuredData() {
  const person = generatePersonStructuredData();

  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: new Date().toISOString(),
    dateModified: new Date().toISOString(),
    mainEntity: person,
    about: person,
    name: `${RESUME_DATA.name} - Professional Resume`,
    description: `Professional resume and portfolio of ${RESUME_DATA.name}, ${RESUME_DATA.about}`,
    url: SITE_URL,
  };
}
