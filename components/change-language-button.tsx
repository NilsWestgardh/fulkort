import React from "react";
import { useToast } from "@/hooks/use-toast";
// Utils
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
// Components
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// Icons
import { ChevronDown } from "lucide-react";

const DEFAULT_LOCALE = "se" as const;

const languages = {
  se: {
    code: "se",
    self: "🇸🇪 Svenska",
    other: "🇬🇧 Engelska",
  },
  en: {
    code: "en",
    self: "🇬🇧 English",
    other: "🇸🇪 Swedish",
  },
} as const;

type LanguageCode = keyof typeof languages;

export default function ChangeLanguageButton() {
  const router = useRouter();
  const pathname = usePathname();
  const { toast } = useToast();
  const t = useTranslations("ChangeLanguageButton");

  // Get current locale from pathname
  const currentLocale = (pathname?.split("/")[1] ||
    DEFAULT_LOCALE) as LanguageCode;

  async function handleLanguageChange(locale: LanguageCode) {
    await router.push(pathname, { locale });

    toast({
      title: t("toastTitle"),
      description: t("toastDescription", {
        language: languages[locale].self,
      }),
    });
  }

  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  {languages[currentLocale].self}
                  <ChevronDown className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="bottom"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem onClick={() => handleLanguageChange("se")}>
                  <span>
                    {currentLocale === "en"
                      ? languages.se.other
                      : languages.se.self}
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLanguageChange("en")}>
                  <span>
                    {currentLocale === "se"
                      ? languages.en.other
                      : languages.en.self}
                  </span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
