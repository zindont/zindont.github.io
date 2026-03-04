import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "An Ho",
  initials: "AH",
  location: "Nha Trang, Vietnam (GMT+7)",
  locationLink: "https://www.google.com/maps/place/Nha+Trang",
  about:
    "Technical Lead and Senior Backend Engineer specializing in scalable Node.js systems and delivery execution.",
  summary:
    "Technical Lead and Senior Backend Engineer with 10+ years delivering SaaS, ecommerce, and internal platforms. 7+ years in technical leadership responsibilities across architecture, delivery, and production operations. Led cross-company execution for long-running client programs (Wizy -> Marketflow) and owned Node.js/TypeScript backend systems end to end.",
  impactHighlights: [
    "10+ years of engineering delivery across backend and platform roles (Nov 2014 - Present).",
    "7+ years in technical leadership responsibilities (May 2018 - Present).",
    "4+ years leading cross-company execution between employer and client (Wizy -> Marketflow, Jun 2021 - Present).",
    "Hands-on ownership from architecture and implementation to release governance and production support.",
  ],
  avatarUrl: "/avatar.jpg",
  personalWebsiteUrl: "https://zindo.info",
  contact: {
    email: "an.ho1991@gmail.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/zindont",
        icon: "github",
      },
    ],
  },
  education: [
    {
      school: "Nha Trang University",
      degree: "Bachelor of Information Technology",
      start: "2009",
      end: "2014",
    },
  ],
  work: [
    {
      company: "Marketflow",
      link: "https://marketflow.com/",
      badges: ["Technical Lead", "Node.js", "Payments", "SaaS"],
      title: "Technical Lead",
      start: "Jun 2021",
      end: null,
      engagementType: "Client Project",
      employer: {
        company: "Wizy.vn",
        link: "https://wizy.vn/",
      },
      client: {
        company: "Marketflow",
        link: "https://marketflow.com/",
      },
      description:
        "Delivered backend architecture and payment integrations for Marketflow as a long-term client program under Wizy.",
      highlights: [
        "Owned delivery across a 4+ year engagement (Jun 2021 - Present) for SaaS and payment-critical workflows.",
        "Coordinated roadmap, technical decisions, and releases between 2 organizations: Marketflow stakeholders and Wizy engineering.",
        "Maintained continuous production support while shipping backend features throughout the engagement lifecycle.",
      ],
    },
    {
      company: "Wizy.vn",
      link: "https://wizy.vn/",
      badges: ["Technical Lead", "System Design", "Node.js", "Team Leadership"],
      title: "Technical Lead",
      start: "Jun 2021",
      end: null,
      engagementType: "Direct Employment",
      isPrimaryEmployerRole: true,
      employer: {
        company: "Wizy.vn",
        link: "https://wizy.vn/",
      },
      description:
        "Primary employer role leading backend architecture and distributed execution for global client solutions.",
      highlights: [
        "Served as primary Technical Lead from Jun 2021 to Present, defining architecture and delivery standards.",
        "Led distributed collaboration across internal and client streams, including the Marketflow program.",
        "Owned planning, release governance, and production issue response for Node.js services.",
      ],
    },
    {
      company: "ICW",
      link: "https://icw.io/",
      badges: ["Node.js", "TypeScript", "NestJS", "APIs"],
      title: "Backend Node.js Developer",
      start: "Oct 2021",
      end: "Oct 2023",
      engagementType: "Project Engagement",
      description:
        "Built compliance-focused backend services for the QMAS quality management platform.",
      highlights: [
        "Delivered and maintained APIs over a 24-month engagement (Oct 2021 - Oct 2023).",
        "Implemented TypeScript/NestJS backend modules integrated with React product components.",
        "Shipped production-ready features for regulated quality and compliance workflows.",
      ],
    },
    {
      company: "DevPanel",
      link: "https://devpanel.com/",
      badges: ["Backend", "DevOps", "AWS", "CI/CD"],
      title: "Backend Developer & DevOps Engineer",
      start: "May 2020",
      end: "Aug 2023",
      engagementType: "Remote Engagement",
      description:
        "Owned backend and DevOps execution for high-traffic AWS-hosted websites with reliability and cost focus.",
      highlights: [
        "Drove backend and operations over a 39-month engagement (May 2020 - Aug 2023).",
        "Handled deployments, environment operations, and incident response for production workloads.",
        "Improved release consistency through tighter CI/CD and release routines.",
      ],
    },
    {
      company: "INFOdation",
      link: "https://infodation.com",
      badges: ["Technical Lead", "Solution Design", "Architecture", "Node.js"],
      title: "Technical Lead",
      start: "May 2018",
      end: "Mar 2022",
      engagementType: "Direct Employment",
      description:
        "Led solution architecture and implementation across multiple client projects.",
      highlights: [
        "Led technical solutioning over a 46-month period (May 2018 - Mar 2022).",
        "Translated business requirements into executable backend architecture and delivery plans.",
        "Guided engineers through estimation, implementation, and project handoff phases.",
      ],
    },
    {
      company: "Pangara AB",
      link: "https://pangara.com/portfolios/anhtl",
      badges: ["WordPress", "WooCommerce", "Consulting"],
      title: "Senior WordPress Developer",
      start: "Jan 2018",
      end: "Mar 2022",
      engagementType: "Consulting",
      description:
        "Delivered custom WordPress and ecommerce implementations for Nordic clients.",
      highlights: [
        "Completed 4+ years of consulting delivery (Jan 2018 - Mar 2022) for Nordic customers.",
        "Built custom WordPress and WooCommerce implementations for business-facing websites.",
        "Owned delivery from customization through long-term maintenance of production storefronts.",
      ],
    },
    {
      company: "WiseRobot",
      link: "https://wiserobot.com/",
      badges: ["PHP", "Node.js", "Backend"],
      title: "PHP / Node.js Backend Developer",
      start: "Nov 2014",
      end: "May 2018",
      engagementType: "Direct Employment",
      description:
        "Built backend features, test coverage, and bug fixes for PHP and Node.js products.",
      highlights: [
        "Delivered backend development across a 42-month tenure (Nov 2014 - May 2018).",
        "Implemented features, fixes, and test improvements in active production codebases.",
        "Supported release flow from coding through QA handoff and production issue resolution.",
      ],
    },
    {
      company: "Bestarion",
      link: "https://bestarion.com/",
      badges: ["Vue.js", "Frontend", "Part-time"],
      title: "Frontend Developer",
      start: "Jan 2020",
      end: "Mar 2020",
      engagementType: "Part-time Contract",
      description:
        "Contributed to a Vue.js project by shipping UI components and frontend features.",
      highlights: [
        "Contributed during a focused 3-month part-time engagement (Jan 2020 - Mar 2020).",
        "Delivered Vue.js components and UI features aligned with existing frontend architecture.",
      ],
    },
  ],
  skills: [
    "Technical Leadership",
    "System Design",
    "Node.js",
    "TypeScript",
    "NestJS",
    "REST APIs",
    "Backend Architecture",
    "CI/CD",
    "AWS",
    "Docker",
    "Linux",
    "Payment Integrations",
    "MySQL / PostgreSQL",
    "PHP",
    "WordPress",
    "WooCommerce",
    "Vue.js / Nuxt.js",
    "System Architecture",
  ],
  projects: [
    {
      title: "Marketflow Platform Delivery",
      techStack: ["Node.js", "Payments", "SaaS", "Technical Leadership"],
      description:
        "4+ year backend delivery stream for payment and business-critical SaaS workflows.",
      link: {
        label: "marketflow.com",
        href: "https://marketflow.com/",
      },
    },
    {
      title: "ICW - QMAS",
      techStack: ["Node.js", "TypeScript", "NestJS", "React"],
      description:
        "Compliance platform backend implementation for regulated workflows and API delivery.",
      link: {
        label: "qmas.icw.io",
        href: "https://qmas.icw.io/",
      },
    },
    {
      title: "The Nueva School",
      techStack: ["PHP", "Internal Platform"],
      description: "Internal management platform development in PHP.",
      link: {
        label: "my.nuevaschool.org",
        href: "https://my.nuevaschool.org/",
      },
    },
    {
      title: "EE Accommodations",
      techStack: ["Node.js", "Strapi", "MongoDB", "Google Cloud"],
      description:
        "Backend development for accommodation platform with Strapi headless CMS.",
      link: {
        label: "homee.nu",
        href: "https://homee.nu",
      },
    },
    {
      title: "Pliable.io",
      techStack: ["Node.js", "Elasticsearch"],
      description:
        "Backend services and search infrastructure implementation for production use cases.",
      link: {
        label: "pliable.io",
        href: "https://pliable.io/",
      },
    },
    {
      title: "DevPanel High-Traffic Operations",
      techStack: ["Node.js", "AWS", "DevOps", "CI/CD"],
      description:
        "Backend and cloud operations ownership for high-traffic production websites over a multi-year engagement.",
      link: {
        label: "devpanel.com",
        href: "https://devpanel.com/",
      },
    },
  ],
} as const;
