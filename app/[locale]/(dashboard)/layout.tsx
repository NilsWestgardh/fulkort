import React from "react";
// Utils
import { cookies } from "next/headers";
// Components
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/toaster";
import { AppSidebar } from "@/components/app-sidebar";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar:state")?.value === "true";

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      <main
        className="
          flex
          flex-row
          w-full
          h-screen
          overflow-hidden
        "
      >
        <div className="pt-4 pl-4">
          <SidebarTrigger />
        </div>
        <div
          className="
            flex
            flex-col
            justify-start
            items-center
            w-full
            overflow-y-auto
          "
        >
          {children}
        </div>
      </main>
      <Toaster />
    </SidebarProvider>
  );
}
