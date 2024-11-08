"use client";

// Hooks
import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
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
  SE: "🇸🇪 Swedish",
  EN: "🇬🇧 English",
};

export default function ChangeLanguageButton() {
  const [language, setLanguage] = useState(languages.SE);
  const { toast } = useToast();

  function handleLanguageChange(newLanguage: string) {
    toast({
      title: "Language changed",
      description: `You have changed the language to ${newLanguage}`,
    });
    setLanguage(newLanguage);
  }

  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  {language === languages.SE ? "🇸🇪 Svenska" : language}
                  <ChevronDown className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="bottom"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem
                  onClick={() => handleLanguageChange(languages.SE)}
                >
                  <span>
                    {language === languages.SE ? "🇸🇪 Svenska" : languages.SE}
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleLanguageChange(languages.EN)}
                >
                  <span>
                    {language === languages.SE ? "🇬🇧 Engelska" : languages.EN}
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
