import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

type Skills = readonly string[];

interface SkillsListProps {
  skills: Skills;
  className?: string;
}

function SkillsList({ skills, className }: SkillsListProps) {
  return (
    <ul
      className={cn("flex list-none flex-wrap gap-1.5 p-0", className)}
      aria-label="List of skills"
    >
      {skills.map((skill) => (
        <li key={skill}>
          <Badge
            className="rounded-full border border-primary/20 bg-primary/5 px-2.5 py-1 text-[11px] font-medium text-primary print:border-muted print:bg-muted/40 print:text-foreground print:text-[10px]"
            variant="secondary"
            aria-label={`Skill: ${skill}`}
          >
            {skill}
          </Badge>
        </li>
      ))}
    </ul>
  );
}

interface SkillsProps {
  skills: Skills;
  className?: string;
}

export function Skills({ skills, className }: SkillsProps) {
  return (
    <Section className={className}>
      <h2 className="section-title" id="skills-section">
        Skills
      </h2>
      <SkillsList skills={skills} />
    </Section>
  );
}
