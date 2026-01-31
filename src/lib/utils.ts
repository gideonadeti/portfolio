import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Parse date string as UTC midnight when date-only (YYYY-MM-DD) for consistent behavior across server/client. */
export function parseDateUTC(dateStr: string): Date {
  const normalized = dateStr.includes("T") ? dateStr : `${dateStr}T00:00:00Z`;
  return new Date(normalized);
}

/** Format a date for display (month, day, year) using the same UTC parse. */
export function formatFullDate(dateStr: string): string {
  const date = parseDateUTC(dateStr);
  return date.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

/** Format date with relative "ago" — only accurate when currentTime is the viewer's now (e.g. client-side). */
export function formatDateWithRelative(
  dateStr: string,
  currentTime: number = Date.now(),
): string {
  const targetTime = parseDateUTC(dateStr).getTime();
  const timeDifference = Math.abs(currentTime - targetTime);
  const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const fullDate = formatFullDate(dateStr);

  if (daysAgo < 1) {
    return "Today";
  }
  if (daysAgo < 7) {
    return `${fullDate} (${daysAgo}d ago)`;
  }
  if (daysAgo < 30) {
    const weeksAgo = Math.floor(daysAgo / 7);
    return `${fullDate} (${weeksAgo}w ago)`;
  }
  if (daysAgo < 365) {
    const monthsAgo = Math.floor(daysAgo / 30);
    return `${fullDate} (${monthsAgo}mo ago)`;
  }
  const yearsAgo = Math.floor(daysAgo / 365);
  return `${fullDate} (${yearsAgo}y ago)`;
}

/** @deprecated Use BlogDate component on blog pages so "ago" uses the viewer's current time. */
export function formatDate(date: string) {
  return formatDateWithRelative(date, Date.now());
}
