import type { ResumeData } from "@/lib/types";

type WorkItem = ResumeData["work"][number];

const MONTH_TO_INDEX: Record<string, number> = {
  jan: 0,
  feb: 1,
  mar: 2,
  apr: 3,
  may: 4,
  jun: 5,
  jul: 6,
  aug: 7,
  sep: 8,
  oct: 9,
  nov: 10,
  dec: 11,
};

function toMonthIndex(value: string): number {
  const parts = value.trim().split(/\s+/);

  if (parts.length === 1) {
    const year = Number.parseInt(parts[0], 10);
    return Number.isNaN(year) ? Number.NEGATIVE_INFINITY : year * 12;
  }

  const [monthRaw, yearRaw] = parts;
  const month = MONTH_TO_INDEX[monthRaw.slice(0, 3).toLowerCase()];
  const year = Number.parseInt(yearRaw, 10);

  if (month === undefined || Number.isNaN(year)) {
    return Number.NEGATIVE_INFINITY;
  }

  return year * 12 + month;
}

function getEndIndex(item: WorkItem, nowIndex: number) {
  return item.end ? toMonthIndex(item.end) : nowIndex;
}

export function sortWorkTimeline(work: readonly WorkItem[]): WorkItem[] {
  const nowIndex = new Date().getFullYear() * 12 + new Date().getMonth();

  return [...work].sort((a, b) => {
    const aCurrent = a.end === null ? 1 : 0;
    const bCurrent = b.end === null ? 1 : 0;
    if (aCurrent !== bCurrent) return bCurrent - aCurrent;

    const aPrimary = a.isPrimaryEmployerRole ? 1 : 0;
    const bPrimary = b.isPrimaryEmployerRole ? 1 : 0;
    if (aPrimary !== bPrimary) return bPrimary - aPrimary;

    const aEnd = getEndIndex(a, nowIndex);
    const bEnd = getEndIndex(b, nowIndex);
    if (aEnd !== bEnd) return bEnd - aEnd;

    const aStart = toMonthIndex(a.start);
    const bStart = toMonthIndex(b.start);
    if (aStart !== bStart) return bStart - aStart;

    return a.company.localeCompare(b.company);
  });
}

export function getPrimaryCurrentRole(
  work: readonly WorkItem[]
): WorkItem | undefined {
  return (
    work.find((item) => item.end === null && item.isPrimaryEmployerRole) ??
    work.find((item) => item.end === null)
  );
}

export function isConcurrentRole(
  role: WorkItem,
  anchorRole: WorkItem | undefined
): boolean {
  if (!anchorRole) return false;
  if (role.company === anchorRole.company && role.start === anchorRole.start) {
    return false;
  }

  const nowIndex = new Date().getFullYear() * 12 + new Date().getMonth();

  const roleStart = toMonthIndex(role.start);
  const roleEnd = getEndIndex(role, nowIndex);
  const anchorStart = toMonthIndex(anchorRole.start);
  const anchorEnd = getEndIndex(anchorRole, nowIndex);

  return roleStart <= anchorEnd && anchorStart <= roleEnd;
}
