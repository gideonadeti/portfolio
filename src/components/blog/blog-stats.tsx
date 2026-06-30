"use client";

import { Eye } from "lucide-react";
import { useEffect, useState } from "react";

export function BlogStats({ slug }: { slug: string }) {
  const [views, setViews] = useState(0);

  useEffect(() => {
    const viewed = sessionStorage.getItem(`blog:viewed:${slug}`);
    if (!viewed) {
      fetch(`/api/blog/${slug}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "view" }),
      })
        .then((r) => r.json())
        .then((s) => {
          sessionStorage.setItem(`blog:viewed:${slug}`, "1");
          setViews(typeof s.views === "number" ? s.views : 0);
        })
        .catch(() => {});
    } else {
      fetch(`/api/blog/${slug}`)
        .then((r) => r.json())
        .then((s) => setViews(typeof s.views === "number" ? s.views : 0))
        .catch(() => {});
    }
  }, [slug]);

  return (
    <div className="flex items-center gap-1.5 my-8 text-sm text-muted-foreground">
      <Eye className="size-4" />
      <span>{views}</span>
    </div>
  );
}
