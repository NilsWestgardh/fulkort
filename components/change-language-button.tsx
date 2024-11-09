"use client";

// Hooks
import React from "react";
import { useToast } from "@/hooks/use-toast";
import { useLocale } from "next-intl";
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

const languages = {
  se: {
    code: "se",
    flag: "🇸🇪",
    self: "Svenska",
    other: "Swedish",
  },
  en: {
    code: "en",
    flag: "🇬🇧",
    self: "English",
    other: "Engelska",
  },
} as const;

type LanguageCode = keyof typeof languages;

export default function ChangeLanguageButton() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale() as LanguageCode;
  const { toast } = useToast();
  const t = useTranslations("ChangeLanguageButton");

  async function handleLanguageChange(newLocale: LanguageCode) {
    // Replace path with current path + new locale
    await router.replace(pathname, { locale: newLocale });

    toast({
      title: t("toastTitle"),
      description: t("toastDescription", {
        language: languages[newLocale].other,
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
                  <span
                    className="
                      flex 
                      justify-center 
                      items-center 
                      w-[1rem] 
                      h-[1rem] 
                      pt-0.5
                    "
                  >
                    {languages[locale].flag}
                  </span>
                  <span>{languages[locale].self}</span>
                  <ChevronDown className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="bottom"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem onClick={() => handleLanguageChange("se")}>
                  <span
                    className="
                      flex 
                      justify-center 
                      items-center 
                      w-[1rem] 
                      h-[1rem] 
                      pt-0.5
                    "
                  >
                    {languages.se.flag}
                  </span>
                  <span>
                    {locale === "se" ? languages.se.self : languages.se.other}
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLanguageChange("en")}>
                  <span
                    className="
                      flex 
                      justify-center 
                      items-center 
                      w-[1rem] 
                      h-[1rem] 
                      pt-0.5
                    "
                  >
                    {languages.en.flag}
                  </span>
                  <span>
                    {locale === "en" ? languages.en.self : languages.en.other}
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
