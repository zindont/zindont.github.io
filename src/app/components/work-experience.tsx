import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import type { RESUME_DATA } from "@/data/resume-data";
import { cn } from "@/lib/utils";

type WorkExperience = (typeof RESUME_DATA)["work"][number];
type WorkBadges = readonly string[];

interface BadgeListProps {
  className?: string;
  badges: WorkBadges;
}

function BadgeList({ className, badges }: BadgeListProps) {
  if (badges.length === 0) return null;

  return (
    <ul
      className={cn("inline-flex list-none gap-x-1 p-0", className)}
      aria-label="Technologies used"
    >
      {badges.map((badge) => (
        <li key={badge}>
          <Badge
            variant="secondary"
            className="align-middle border border-primary/20 bg-primary/5 text-[10px] text-primary print:border-muted print:bg-muted/40 print:px-1 print:py-0.5 print:text-[8px] print:leading-tight print:text-foreground"
          >
            {badge}
          </Badge>
        </li>
      ))}
    </ul>
  );
}

interface WorkPeriodProps {
  start: WorkExperience["start"];
  end?: WorkExperience["end"];
}

function WorkPeriod({ start, end }: WorkPeriodProps) {
  return (
    <div
      className="text-xs tabular-nums text-muted-foreground sm:text-sm"
      title={`Employment period: ${start} to ${end ?? "Present"}`}
    >
      {start} - {end ?? "Present"}
    </div>
  );
}

interface CompanyLinkProps {
  company: WorkExperience["company"];
  link: WorkExperience["link"];
}

function CompanyLink({ company, link }: CompanyLinkProps) {
  if (!link) {
    return <span>{company}</span>;
  }

  return (
    <a
      className="hover:text-primary hover:underline"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${company} company website`}
    >
      {company}
    </a>
  );
}

interface WorkExperienceItemProps {
  work: WorkExperience;
}

interface CompanyMetaProps {
  label: string;
  company: string;
  link?: string;
}

function CompanyMeta({ label, company, link }: CompanyMetaProps) {
  return (
    <>
      {label}:{" "}
      {link ? (
        <a
          className="underline hover:text-primary"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {company}
        </a>
      ) : (
        company
      )}
    </>
  );
}

function WorkExperienceItem({ work }: WorkExperienceItemProps) {
  const { company, link, badges, title, start, end, description, highlights } =
    work;

  const workMeta: Array<{ id: string; node: ReactNode }> = [];

  if (work.engagementType) {
    workMeta.push({
      id: "engagement",
      node: `Engagement: ${work.engagementType}`,
    });
  }

  if (work.isPrimaryEmployerRole) {
    workMeta.push({
      id: "employment-type",
      node: "Employment: Primary Employer",
    });
  }

  if (work.employer) {
    workMeta.push({
      id: `employer-${work.employer.company}`,
      node: (
        <CompanyMeta
          label="Employer"
          company={work.employer.company}
          link={work.employer.link}
        />
      ),
    });
  }

  if (work.client) {
    workMeta.push({
      id: `client-${work.client.company}`,
      node: (
        <CompanyMeta
          label="Client"
          company={work.client.company}
          link={work.client.link}
        />
      ),
    });
  }

  return (
    <Card className="border border-border/70 bg-white/75 p-4 transition-colors hover:border-primary/35 print:border-none print:bg-transparent print:p-0">
      <CardHeader className="space-y-2 print:space-y-1">
        <div className="flex flex-col justify-between gap-x-2 gap-y-1 text-base sm:flex-row sm:items-center">
          <h3 className="inline-flex items-center gap-x-1 font-semibold leading-none print:text-sm">
            <CompanyLink company={company} link={link} />
            <BadgeList
              className="hidden gap-x-1 sm:inline-flex"
              badges={badges}
            />
          </h3>
          <WorkPeriod start={start} end={end} />
        </div>

        <h4 className="font-mono text-sm font-semibold leading-none text-foreground/80 print:text-[12px]">
          {title}
        </h4>
        {workMeta.length > 0 ? (
          <p className="font-mono text-xs text-primary/80 print:text-[10px] print:text-foreground/80">
            {workMeta.map((item, index) => (
              <span key={item.id}>
                {index > 0 ? " · " : ""}
                {item.node}
              </span>
            ))}
          </p>
        ) : null}
      </CardHeader>

      <CardContent>
        <div className="mt-1 text-sm leading-relaxed text-foreground/80 print:mt-1 print:text-[10px]">
          {description}
          {highlights && highlights.length > 0 && (
            <ul className="list-inside list-disc">
              {highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          )}
        </div>
        <div className="mt-2">
          <BadgeList
            className="-mx-2 flex-wrap gap-1 sm:hidden"
            badges={badges}
          />
        </div>
      </CardContent>
    </Card>
  );
}

interface WorkExperienceProps {
  work: (typeof RESUME_DATA)["work"];
}

export function WorkExperience({ work }: WorkExperienceProps) {
  return (
    <Section>
      <h2 className="section-title" id="work-experience">
        Experience
      </h2>
      <div
        className="space-y-3 print:space-y-0"
        role="feed"
        aria-labelledby="work-experience"
      >
        {work.map((item) => (
          <article key={`${item.company}-${item.start}`}>
            <WorkExperienceItem work={item} />
          </article>
        ))}
      </div>
    </Section>
  );
}
