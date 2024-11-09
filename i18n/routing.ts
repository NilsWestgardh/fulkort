import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  // List supported locales
  locales: ["en", "se"],
  // Default locale
  defaultLocale: "se",
});

// Wrapper for Next.js navigation APIs
export const { Link, redirect, usePathname, useRouter } = createNavigation(
  routing,
);
