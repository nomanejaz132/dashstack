"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarHeader,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { mainNavItems, pageNavItems, bottomNavItems } from "@/lib/data/navigation";

/**
 * Sidebar Component
 * 
 * Client Component - Uses usePathname hook from next/navigation to determine
 * active route and highlight the corresponding navigation item.
 */
function Sidebar() {
  const pathname = usePathname();

  return (
    <ShadcnSidebar>
      <SidebarHeader className="h-17.5 justify-center">
         <div className="flex justify-center w-full px-4">
            <Image src="/DashStack.png" alt="DashStack" width={129} height={27} priority />
         </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                    <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton 
                        asChild 
                        isActive={isActive} 
                        tooltip={item.label}
                        className={isActive ? "" : ""}
                    >
                        <Link href={item.href}>
                        <Image 
                            src={item.icon} 
                            alt={item.label} 
                            width={22} 
                            height={25} 
                            className={cn("w-[22px] h-[25px]", isActive && "brightness-0 invert")}
                        />
                        <span>{item.label}</span>
                        </Link>
                    </SidebarMenuButton>
                    </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        <SidebarGroup>
          <SidebarGroupLabel>Pages</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {pageNavItems.map((item) => {
                 const isActive = pathname === item.href;
                 return (
                    <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton 
                        asChild 
                        isActive={isActive} 
                        tooltip={item.label}
                        className={isActive ? "" : ""}
                    >
                        <Link href={item.href}>
                        <Image 
                            src={item.icon} 
                            alt={item.label} 
                            width={22} 
                            height={25} 
                            className={cn("w-[22px] h-[25px]", isActive && "brightness-0 invert")}
                        />
                        <span>{item.label}</span>
                        </Link>
                    </SidebarMenuButton>
                    </SidebarMenuItem>
                 )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

<SidebarSeparator />

        <SidebarGroup>
          <SidebarMenu>
          {bottomNavItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton 
                    asChild 
                    isActive={isActive} 
                    tooltip={item.label}
                    className={cn(
                        isActive ? "bg-blue-600 text-white hover:bg-blue-600 hover:text-white" : ""
                    )}
                  >
                    <Link href={item.href}>
                      <Image 
                        src={item.icon} 
                        alt={item.label} 
                        width={22} 
                        height={25} 
                        className={cn("w-[22px] h-[25px]", isActive && "brightness-0 invert")}
                      />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )
          })}
          </SidebarMenu>
      </SidebarGroup>
      </SidebarContent>
      
    </ShadcnSidebar>
  );
}

export default Sidebar;