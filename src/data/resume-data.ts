import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "An Ho",
  initials: "AH",
  location: "Nha Trang, Vietnam (GMT+7)",
  locationLink: "https://www.google.com/maps/place/Nha+Trang",
  about: "Backend Software Engineer",
  summary:
    "Backend engineer with 10+ years building SaaS, ecommerce, and internal platforms. Currently full-time Backend Developer at ICW (Feb 2024 - Present), with prior 4+ year delivery at Marketflow and hands-on ownership across Node.js, NestJS, WordPress/WooCommerce, and production operations.",
  impactHighlights: [
    "10+ years of software engineering delivery across backend and web platforms (Nov 2014 - Present).",
    "Current full-time Backend Developer at ICW (Feb 2024 - Present).",
    "4+ years at Marketflow (Jun 2021 - Jul 2025) building lead-generation and affiliate marketing backend systems.",
    "Hands-on execution across APIs, data pipelines, WooCommerce payment workflows, and production stability.",
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
      company: "ICW",
      link: "https://icw.io/",
      badges: ["Node.js", "NestJS", "Backend", "Remote"],
      title: "Backend Developer",
      start: "Feb 2024",
      end: null,
      engagementType: "Direct Employment",
      isPrimaryEmployerRole: true,
      description:
        "Backend development for ICW products, focused on API delivery and production reliability.",
      highlights: [
        "Current full-time role since Feb 2024, delivering backend features and maintenance.",
        "Developed and maintained Node.js/NestJS services for production workflows.",
        "Supported remote collaboration, release cycles, and ongoing issue resolution.",
      ],
    },
    {
      company: "AllRide",
      badges: ["WooCommerce", "Payments", "Contract", "Remote"],
      title: "Backend Developer / WooCommerce Specialist",
      start: "Jun 2025",
      end: "Jul 2025",
      engagementType: "Contract",
      description:
        "Supported the migration of WooCommerce payment systems from Stripe to Mollie with minimal service disruption.",
      highlights: [
        "Optimized high-traffic ecommerce performance, including page-load and checkout reliability.",
        "Provided operational support for AllRide's WooCommerce infrastructure.",
        "Collaborated with product and DevOps teams on secure payment workflow execution.",
      ],
    },
    {
      company: "Marketflow",
      link: "https://marketflow.com/",
      badges: ["Node.js", "NestJS", "MySQL", "REST APIs"],
      title: "Technical Specialist",
      start: "Jun 2021",
      end: "Jul 2025",
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
        "Built and operated backend systems for a scalable lead-generation and affiliate-marketing ecosystem.",
      highlights: [
        "Developed APIs to collect, validate, and normalize leads from multiple sources.",
        "Built routing logic for lead quality, pricing, quotas, and buyer-cap rules.",
        "Designed databases, automation jobs, and reporting pipelines for high-traffic stability.",
      ],
    },
    {
      company: "ICW",
      link: "https://icw.io/",
      badges: ["Node.js", "NestJS", "Backend", "Remote"],
      title: "Backend Developer",
      start: "Oct 2021",
      end: "Oct 2023",
      engagementType: "Direct Employment",
      description:
        "Backend development for ICW platforms and supporting services.",
      highlights: [
        "Completed a 2-year full-time engagement (Oct 2021 - Oct 2023).",
        "Implemented backend features and maintenance tasks for production systems.",
        "Worked remotely with cross-functional teams on delivery and support.",
      ],
    },
    {
      company: "DevPanel",
      link: "https://devpanel.com/",
      badges: ["Node.js", "AWS", "DevOps", "Part-time"],
      title: "Backend Developer",
      start: "May 2020",
      end: "Aug 2023",
      engagementType: "Part-time",
      description:
        "Part-time backend and operations execution for high-traffic production websites.",
      highlights: [
        "Maintained a 3+ year part-time engagement (May 2020 - Aug 2023).",
        "Handled deployments, environment operations, and incident response for production workloads.",
        "Supported backend improvements for performance and delivery consistency.",
      ],
    },
    {
      company: "INFOdation",
      link: "https://infodation.com",
      badges: ["Technical Lead", "Node.js", "Vue.js", "AWS"],
      title: "Technical Lead",
      start: "Aug 2018",
      end: "Apr 2022",
      engagementType: "Direct Employment",
      description:
        "Led technical direction across Node.js/Vue.js projects and delivery execution.",
      highlights: [
        "Led full-time delivery over 3 years 9 months (Aug 2018 - Apr 2022).",
        "Worked across Node.js, Vue.js, Nuxt.js, AWS, and Laravel stacks.",
        "Owned planning, implementation guidance, and team coordination.",
      ],
    },
    {
      company: "INFOdation",
      link: "https://infodation.com",
      badges: ["PHP", "Laravel", "Web Development"],
      title: "PHP Web Developer",
      start: "May 2018",
      end: "Aug 2018",
      engagementType: "Direct Employment",
      description:
        "Delivered PHP web-development tasks during an initial onboarding period at INFOdation.",
      highlights: [
        "4-month role (May 2018 - Aug 2018) before transitioning to Technical Lead.",
        "Contributed to backend implementation and maintenance tasks.",
      ],
    },
    {
      company: "Pangara AB",
      link: "https://pangara.com/portfolios/anhtl",
      badges: ["WordPress", "PHP", "Freelance"],
      title: "WordPress Developer",
      start: "Jan 2018",
      end: "Aug 2021",
      engagementType: "Freelance",
      description:
        "Freelance WordPress development for Pangara client projects.",
      highlights: [
        "Delivered over 3 years 8 months (Jan 2018 - Aug 2021) as a freelance contributor.",
        "Implemented custom WordPress solutions, plugins, templates, and integration logic.",
        "Supported ongoing delivery and maintenance across production sites.",
      ],
    },
    {
      company: "Bestarion",
      link: "https://bestarion.com/",
      badges: ["Vue.js", "Frontend", "Freelance"],
      title: "Frontend Developer",
      start: "Feb 2020",
      end: "Apr 2020",
      engagementType: "Freelance",
      description:
        "Contributed to a FinTech project as a frontend developer using Vue.js.",
      highlights: [
        "Focused 3-month freelance engagement (Feb 2020 - Apr 2020).",
        "Delivered frontend features and UI components with Vue.js.",
      ],
    },
    {
      company: "WiseRobot",
      link: "https://wiserobot.com/",
      badges: ["PHP", "WordPress", "Magento", "Linux"],
      title: "Web Developer",
      start: "Nov 2014",
      end: "May 2018",
      engagementType: "Direct Employment",
      description:
        "Web developer with a strong focus on backend PHP and ecommerce platform delivery.",
      highlights: [
        "3 years 7 months full-time role (Nov 2014 - May 2018).",
        "Built and maintained PHP backend code across WordPress and Magento projects.",
        "Supported Linux operations, QA workflows, and system maintenance.",
      ],
    },
  ],
  skills: [
    "Node.js",
    "TypeScript",
    "NestJS",
    "JavaScript",
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
    "Magento",
    "Vue.js",
    "Nuxt.js",
    "Tailwind CSS",
    "Laravel",
  ],
  projects: [
    {
      title: "Marketflow",
      techStack: ["Node.js", "Payments", "SaaS", "Technical Leadership"],
      description:
        "4+ years building and operating lead-generation and affiliate-marketing backend systems.",
      link: {
        label: "marketflow.com",
        href: "https://marketflow.com/",
      },
    },
    {
      title: "AllRide Payment Migration",
      techStack: ["WooCommerce", "Stripe", "Mollie", "Performance"],
      description:
        "Contract engagement to migrate payment workflows and improve checkout reliability for high-traffic ecommerce operations.",
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
      title: "DevPanel",
      techStack: ["Node.js", "AWS", "DevOps", "CI/CD"],
      description:
        "Part-time backend and cloud operations ownership for high-traffic production websites over a multi-year engagement.",
      link: {
        label: "devpanel.com",
        href: "https://devpanel.com/",
      },
    },
    {
      title: "WiseRobot",
      techStack: ["PHP", "WordPress", "Magento", "Linux"],
      description:
        "Backend and ecommerce implementation across WordPress/Magento systems with operations support.",
      link: {
        label: "wiserobot.com",
        href: "https://wiserobot.com/",
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
