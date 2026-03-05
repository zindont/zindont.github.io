import type { Metadata } from "next";
import { RESUME_DATA } from "@/data/resume-data";
import { generateResumeStructuredData } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} - ATS Resume`,
  description: `${RESUME_DATA.name} ATS-optimized resume`,
  robots: {
    index: true,
    follow: true,
  },
};

function renderCompany(label: string, company: string, link?: string) {
  if (!link) {
    return `${label}: ${company}`;
  }

  return (
    <>
      {label}:{" "}
      <a
        className="underline"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {company}
      </a>
    </>
  );
}

export default function AtsResumePage() {
  const structuredData = generateResumeStructuredData();

  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: Safe for JSON-LD structured data
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <main className="mx-auto my-6 w-full max-w-3xl bg-white p-6 text-[15px] leading-7 text-slate-900 print:m-0 print:p-0">
        <header className="border-b border-slate-300 pb-4">
          <h1 className="text-3xl font-bold">{RESUME_DATA.name}</h1>
          <p className="text-base font-semibold">{RESUME_DATA.about}</p>
          <p>
            Location:{" "}
            <a
              className="underline"
              href={RESUME_DATA.locationLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {RESUME_DATA.location}
            </a>
          </p>
          <p>
            Website:{" "}
            <a
              className="underline"
              href={RESUME_DATA.personalWebsiteUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {RESUME_DATA.personalWebsiteUrl}
            </a>
          </p>
          <p>Email: {RESUME_DATA.contact.email}</p>
          {RESUME_DATA.contact.tel ? (
            <p>Phone: {RESUME_DATA.contact.tel}</p>
          ) : null}
          <p>
            ATS Version:
            <a className="ml-2 underline" href="/ats">
              /ats
            </a>
          </p>
        </header>

        <section className="mt-5">
          <h2 className="text-xl font-bold">Professional Summary</h2>
          <p>{RESUME_DATA.summary}</p>
        </section>

        {RESUME_DATA.impactHighlights &&
        RESUME_DATA.impactHighlights.length > 0 ? (
          <section className="mt-5">
            <h2 className="text-xl font-bold">Impact Highlights</h2>
            <ul className="list-disc pl-5">
              {RESUME_DATA.impactHighlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </section>
        ) : null}

        <section className="mt-5">
          <h2 className="text-xl font-bold">Work Experience</h2>
          {RESUME_DATA.work.map((item) => (
            <article
              key={`${item.company}-${item.start}`}
              className="mt-4 border-b border-slate-200 pb-4 last:border-b-0"
            >
              <h3 className="text-lg font-semibold">
                {item.title} |{" "}
                {item.link ? (
                  <a
                    className="underline"
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.company}
                  </a>
                ) : (
                  item.company
                )}
              </h3>
              <p className="text-sm">
                {item.start} - {item.end ?? "Present"}
              </p>
              <ul className="list-disc pl-5 text-sm">
                {item.engagementType ? (
                  <li>Engagement Type: {item.engagementType}</li>
                ) : null}
                {item.isPrimaryEmployerRole ? (
                  <li>Employment Type: Primary Employer</li>
                ) : null}
                {item.employer ? (
                  <li>
                    {renderCompany(
                      "Employer",
                      item.employer.company,
                      item.employer.link
                    )}
                  </li>
                ) : null}
                {item.client ? (
                  <li>
                    {renderCompany(
                      "Client",
                      item.client.company,
                      item.client.link
                    )}
                  </li>
                ) : null}
                <li>Technologies: {item.badges.join(", ")}</li>
              </ul>
              <p className="mt-1">{item.description}</p>
              {item.highlights && item.highlights.length > 0 ? (
                <ul className="mt-2 list-disc pl-5">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </section>

        <section className="mt-5">
          <h2 className="text-xl font-bold">Skills</h2>
          <p>{RESUME_DATA.skills.join(", ")}</p>
        </section>

        <section className="mt-5">
          <h2 className="text-xl font-bold">Education</h2>
          {RESUME_DATA.education.map((edu) => (
            <article key={`${edu.school}-${edu.start}`} className="mt-2">
              <h3 className="font-semibold">{edu.school}</h3>
              <p>{edu.degree}</p>
              <p className="text-sm">
                {edu.start} - {edu.end}
              </p>
            </article>
          ))}
        </section>

        <section className="mt-5">
          <h2 className="text-xl font-bold">Selected Projects</h2>
          {RESUME_DATA.projects.map((project) => (
            <article key={project.title} className="mt-3">
              <h3 className="font-semibold">{project.title}</h3>
              <p>{project.description}</p>
              <p className="text-sm">
                Tech Stack: {project.techStack.join(", ")}
              </p>
              {project.link ? (
                <p className="text-sm">
                  Link:{" "}
                  <a
                    className="underline"
                    href={project.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.link.href}
                  </a>
                </p>
              ) : null}
            </article>
          ))}
        </section>
      </main>
    </>
  );
}
