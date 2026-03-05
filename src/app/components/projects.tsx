import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import type { RESUME_DATA } from "@/data/resume-data";

type ProjectTags = readonly string[];

interface ProjectLinkProps {
  title: string;
  link?: string;
}

function getDisplayLink(link: string) {
  try {
    return new URL(link).hostname.replace(/^www\./, "");
  } catch {
    return link.replace(/^https?:\/\//, "").replace(/\/$/, "");
  }
}

function ProjectLink({ title, link }: ProjectLinkProps) {
  if (!link) {
    return <span>{title}</span>;
  }

  return (
    <>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 hover:text-primary hover:underline"
        aria-label={`${title} project (opens in new tab)`}
      >
        {title}
        <span
          className="size-1 rounded-full bg-emerald-500"
          title="Active project indicator"
          aria-hidden="true"
        />
      </a>
      <div
        className="hidden font-mono text-xs underline print:visible"
        aria-hidden="true"
      >
        {getDisplayLink(link)}
      </div>
    </>
  );
}

interface ProjectTagsProps {
  tags: ProjectTags;
}

function ProjectTags({ tags }: ProjectTagsProps) {
  if (tags.length === 0) return null;

  return (
    <ul
      className="mt-2 flex list-none flex-wrap gap-1 p-0"
      aria-label="Technologies used"
    >
      {tags.map((tag) => (
        <li key={tag}>
          <Badge
            className="rounded-full border border-primary/20 bg-primary/5 px-2 py-0.5 text-[10px] font-medium text-primary print:border-muted print:bg-muted/40 print:text-[8px] print:text-foreground"
            variant="secondary"
          >
            {tag}
          </Badge>
        </li>
      ))}
    </ul>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  tags: ProjectTags;
  link?: string;
}

function ProjectCard({ title, description, tags, link }: ProjectCardProps) {
  return (
    <Card className="group flex h-full flex-col overflow-hidden border border-border/70 bg-gradient-to-br from-white to-secondary/35 p-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_14px_30px_-26px_rgba(17,37,82,0.65)] print:border print:bg-white print:shadow-none">
      <CardHeader>
        <div className="space-y-1.5">
          <CardTitle className="text-base">
            <ProjectLink title={title} link={link} />
          </CardTitle>
          <CardDescription
            className="text-pretty font-mono text-sm leading-relaxed text-foreground/80 print:text-[10px]"
            aria-label="Project description"
          >
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex">
        <ProjectTags tags={tags} />
      </CardContent>
    </Card>
  );
}

interface ProjectsProps {
  projects: (typeof RESUME_DATA)["projects"];
}

const FEATURED_PROJECT_COUNT = 4;

export function Projects({ projects }: ProjectsProps) {
  const featuredProjects = projects.slice(0, FEATURED_PROJECT_COUNT);
  const remainingProjects = projects.slice(FEATURED_PROJECT_COUNT);

  return (
    <Section className="scroll-mb-16 print:space-y-4">
      <h2 className="section-title" id="side-projects">
        Selected Projects
      </h2>
      <div
        className="-mx-3 grid grid-cols-1 gap-3 md:grid-cols-2 print:hidden"
        role="feed"
        aria-labelledby="side-projects"
      >
        {featuredProjects.map((project) => (
          <article
            key={project.title}
            className="h-full print:hover:shadow-none"
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              tags={project.techStack}
              link={project.link?.href}
            />
          </article>
        ))}
      </div>

      {remainingProjects.length > 0 ? (
        <details className="mt-3 rounded-lg border border-border/70 bg-white/70 p-3 print:hidden">
          <summary className="cursor-pointer list-none font-mono text-sm text-primary hover:underline">
            Show all projects ({projects.length} total)
          </summary>
          <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
            {remainingProjects.map((project) => (
              <article key={project.title} className="h-full">
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  tags={project.techStack}
                  link={project.link?.href}
                />
              </article>
            ))}
          </div>
        </details>
      ) : null}

      <div
        className="hidden grid-cols-3 gap-2 print:grid"
        role="feed"
        aria-labelledby="side-projects"
      >
        {projects.map((project) => (
          <article
            key={project.title}
            className="h-full print:hover:shadow-none"
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              tags={project.techStack}
              link={project.link?.href}
            />
          </article>
        ))}
      </div>
    </Section>
  );
}
