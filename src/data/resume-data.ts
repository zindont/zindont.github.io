import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "An Ho",
  initials: "AH",
  location: "Nha Trang, Vietnam (GMT+7)",
  locationLink: "https://www.google.com/maps/place/Nha+Trang",
  about:
    "Technical Lead and Senior Backend Developer focused on scalable Node.js systems.",
  summary:
    "Backend-focused engineer with 10+ years building SaaS, ecommerce, and internal platforms using Node.js, TypeScript, and AWS. Strong WordPress/PHP foundation, experienced in leading distributed teams, shipping payment integrations, and owning DevOps workflows.",
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
        "Led backend delivery and payment integrations for a long-running client program.",
      highlights: [
        "Sustained a 4+ year client engagement (Jun 2021 - Present) with continuous delivery of backend features.",
        "Coordinated requirements and releases between Marketflow stakeholders and the Wizy engineering team.",
        "Focused on Node.js service integrations for payment and business-critical workflows.",
      ],
    },
    {
      company: "Wizy.vn",
      link: "https://wizy.vn/",
      badges: ["Technical Lead", "Node.js", "Architecture", "Remote"],
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
        "Led technical direction for software solutions and digital services targeting global clients.",
      highlights: [
        "Primary employer role from Jun 2021 to Present, leading backend architecture and delivery strategy.",
        "Directed distributed teams across client engagements, including Marketflow delivery streams.",
        "Owned technical planning for Node.js systems, release processes, and production support.",
      ],
    },
    {
      company: "ICW",
      link: "https://icw.io/",
      badges: ["Node.js", "TypeScript", "NestJS", "Compliance"],
      title: "Backend Node.js Developer",
      start: "Oct 2021",
      end: "Oct 2023",
      engagementType: "Project Engagement",
      description:
        "Developed backend services for the QMAS quality compliance management platform.",
      highlights: [
        "Built and maintained compliance APIs during a 2-year engagement (Oct 2021 - Oct 2023).",
        "Implemented Node.js, TypeScript, and NestJS services integrated with React-based product modules.",
        "Shipped production features for regulated quality and compliance workflows.",
      ],
    },
    {
      company: "DevPanel",
      link: "https://devpanel.com/",
      badges: ["Backend", "DevOps", "AWS", "Linux"],
      title: "Backend Developer & DevOps Engineer",
      start: "May 2020",
      end: "Aug 2023",
      engagementType: "Remote Engagement",
      description:
        "Scaled and operated high-traffic sites on AWS with a focus on reliability, deployment flow, and cost efficiency.",
      highlights: [
        "Owned backend and DevOps execution across a 3+ year engagement (May 2020 - Aug 2023).",
        "Operated AWS-hosted workloads with emphasis on deployment reliability and incident handling.",
        "Improved release consistency through tighter build and operations workflows.",
      ],
    },
    {
      company: "INFOdation",
      link: "https://infodation.com",
      badges: ["Technical Lead", "Solution Design", "PHP", "Node.js"],
      title: "Technical Lead",
      start: "May 2018",
      end: "Mar 2022",
      engagementType: "Direct Employment",
      description:
        "Defined technical solutions and led implementation across multiple client projects.",
      highlights: [
        "Led technical solutioning over a 3+ year period (May 2018 - Mar 2022).",
        "Translated business requirements into executable backend architecture and delivery plans.",
        "Guided implementation across multiple concurrent client initiatives.",
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
        "Handled both feature delivery and long-term maintenance for production storefronts.",
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
        "Delivered backend development for 3+ years (Nov 2014 - May 2018) across PHP and Node.js systems.",
        "Implemented features, fixes, and test improvements in active production codebases.",
        "Supported full delivery flow from coding to QA handoff and issue resolution.",
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
    "Node.js",
    "TypeScript",
    "NestJS",
    "PHP",
    "WordPress",
    "WooCommerce",
    "AWS",
    "Docker",
    "Linux",
    "Vue.js / Nuxt.js",
    "MySQL / PostgreSQL",
    "CI/CD",
    "System Architecture",
    "Payment Integrations",
  ],
  projects: [
    {
      title: "ICW - QMAS",
      techStack: ["Node.js", "TypeScript", "NestJS", "React"],
      description:
        "Quality compliance management platform backend development.",
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
      description: "Backend services and search infrastructure implementation.",
      link: {
        label: "pliable.io",
        href: "https://pliable.io/",
      },
    },
    {
      title: "Motion Design",
      techStack: ["Vue.js", "Nuxt.js", "Node.js", "AWS"],
      description:
        "Animation platform for interactive motion effects on web elements.",
      link: {
        label: "motion-design.app",
        href: "http://motion-design.app",
      },
    },
    {
      title: "Kamixa",
      techStack: ["WordPress", "WooCommerce", "Vue.js"],
      description:
        "Ecommerce experience implementation for interior design products.",
      link: {
        label: "kamixa.se",
        href: "https://kamixa.se",
      },
    },
  ],
} as const;
