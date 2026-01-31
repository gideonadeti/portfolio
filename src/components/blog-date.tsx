"use client";

import { formatFullDate, formatDateWithRelative, parseDateUTC } from "@/lib/utils";
import { useEffect, useState } from "react";

export function BlogDate({ publishedAt }: { publishedAt: string }) {
  const [display, setDisplay] = useState(() => formatFullDate(publishedAt));

  useEffect(() => {
    setDisplay(formatDateWithRelative(publishedAt, Date.now()));
  }, [publishedAt]);

  return (
    <time dateTime={parseDateUTC(publishedAt).toISOString()}>{display}</time>
  );
}
