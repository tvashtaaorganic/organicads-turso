"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";
import { generateLocalBusinessSchema } from "@/lib/metadata";

export function DynamicSchema() {
  const pathname = usePathname();
  const schema = generateLocalBusinessSchema(pathname);

  return (
    <Script
      id="localbusiness-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: schema }}
    />
  );
}
