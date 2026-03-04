import { Section } from "../../components/ui/section";

interface AboutProps {
  summary: string;
  impactHighlights?: readonly string[];
  className?: string;
}

export function Summary({ summary, impactHighlights, className }: AboutProps) {
  return (
    <Section className={className}>
      <h2 className="section-title" id="about-section">
        Profile
      </h2>
      <div className="text-pretty font-mono text-sm leading-relaxed text-foreground/80 print:text-[12px]">
        {summary}
      </div>
      {impactHighlights && impactHighlights.length > 0 ? (
        <ul className="mt-2 list-disc pl-4 font-mono text-sm text-foreground/80 print:mt-1 print:text-[12px]">
          {impactHighlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      ) : null}
    </Section>
  );
}
