"use client";

// Hooks
import { useSidebar } from "@/components/ui/sidebar";
// Utils
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
import { Button } from "@/components/ui/button";
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
                <p className="text-xs text-muted-foreground">Credits</p>
                <p className="text-sm font-semibold">
                  {CREDITS_LIMIT} cards left
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
                Buy credits
              </Button>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
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
      </SidebarContent>
      <SidebarFooter>
        <div>
          <Button variant="ghost">🇸🇪 Swedish</Button>
        </div>
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
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Billing</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
