"use client";

// Hooks
import { useSidebar } from "@/components/ui/sidebar";
// Utils
import { useTranslations } from "next-intl";
import clsx from "clsx";
import Link from "next/link";
// Components
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuBadge,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
// Custom components
import ChangeLanguageButton from "@/components/change-language-button";
// Icons
import { Snowflake, ChevronUp, User2 } from "lucide-react";

const CREDITS_LIMIT = 3;
// const MAX_MESSAGE_CHARS = 176;

// Menu items.
const items = [
  {
    title: "Create card",
    url: "/create",
    icon: Snowflake,
  },
  {
    title: "My cards",
    url: "/cards",
    icon: Snowflake,
  },
];

export function AppSidebar() {
  const { state, isMobile } = useSidebar();
  const t = useTranslations("Sidebar");

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader
        className={clsx("flex", {
          hidden: state === "collapsed" || isMobile,
        })}
      >
        <SidebarMenu>
          <SidebarMenuItem>
            <div
              id="credits-container"
              className="
                flex
                flex-row
                justify-between
                items-center
                w-full
                gap-4
                p-2
                rounded-md
                hover:bg-accent
              "
            >
              <div
                id="credits-info"
                className="
                  flex
                  flex-col
                  justify-start
                  items-start
                "
              >
                <p className="text-xs text-muted-foreground">{t("credits")}</p>
                <p className="text-sm font-semibold">
                  {t("cardsLeft", { count: CREDITS_LIMIT })}
                </p>
              </div>
              <Button
                size="sm"
                className="
                  font-semibold
                  bg-gradient-to-r 
                  from-red-500 
                  to-blue-500
                  hover:from-red-600
                  hover:to-blue-600
                "
              >
                {t("buyCredits")}
              </Button>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <Separator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                  {item.url === "/create" && (
                    <SidebarMenuBadge>{CREDITS_LIMIT}</SidebarMenuBadge>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {state !== "collapsed" && <Separator />}
        {state !== "collapsed" && <ChangeLanguageButton />}
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> Username
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem>
                  <span>{t("account")}</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>{t("billing")}</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>{t("signOut")}</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
