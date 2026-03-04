import { Section } from "../../components/ui/section";

interface AboutProps {
  summary: string;
  className?: string;
}

export function Summary({ summary, className }: AboutProps) {
  return (
    <Section className={className}>
      <h2 className="section-title" id="about-section">
        Profile
      </h2>
      <div className="text-pretty font-mono text-sm leading-relaxed text-foreground/80 print:text-[12px]">
        {summary}
      </div>
    </Section>
  );
}
