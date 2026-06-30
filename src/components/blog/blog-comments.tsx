"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

const GISCUS_THEMES: Record<string, string> = {
  light: "light",
  dark: "dark",
};

export function BlogComments({ slug }: { slug: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mounted = useRef(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (mounted.current) return;
    mounted.current = true;

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.setAttribute("data-repo", "gideonadeti/portfolio");
    script.setAttribute("data-repo-id", "R_kgDONLdg-Q");
    script.setAttribute("data-category", "Announcements");
    script.setAttribute("data-category-id", "DIC_kwDONLdg-c4DAOnZ");
    script.setAttribute("data-mapping", "url");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "bottom");
    script.setAttribute("data-theme", GISCUS_THEMES[resolvedTheme ?? ""] ?? "light");
    script.setAttribute("data-lang", "en");
    script.setAttribute("crossorigin", "anonymous");

    containerRef.current?.appendChild(script);
  }, []);

  useEffect(() => {
    const theme = GISCUS_THEMES[resolvedTheme ?? ""] ?? "light";
    const iframe = document.querySelector<HTMLIFrameElement>("iframe.giscus-frame");
    iframe?.contentWindow?.postMessage(
      { giscus: { setConfig: { theme } } },
      "https://giscus.app",
    );
  }, [resolvedTheme]);

  return (
    <section className="mt-16 pt-8 border-t border-border" id="comments">
      <h2 className="text-lg font-semibold mb-6">Comments</h2>
      <div ref={containerRef} />
    </section>
  );
}
