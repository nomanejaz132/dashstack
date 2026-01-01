"use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
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
} from '@/components/ui/sidebar';

const navItems = [
  { label: 'Dashboard', icon: '/DashboardIcon.svg', href: '/' },
  { label: 'Products', icon: '/ProductsIcon.svg', href: '/products' },
  { label: 'Favorites', icon: '/FavoritesIcon.svg', href: '/favorites' },
  { label: 'Inbox', icon: '/InboxIcon.svg', href: '/inbox' },
  { label: 'Order Lists', icon: '/OrderListsIcon.svg', href: '/orders' },
  { label: 'Product Stock', icon: '/ProductStockIcon.svg', href: '/stock' },
];

const pageItems = [
  { label: 'Pricing', icon: '/PricingIcon.svg', href: '/pricing' },
  { label: 'Calender', icon: '/CalenderIcon.svg', href: '/calendar' },
  { label: 'To-Do', icon: '/TodoIcon.svg', href: '/todo' },
  { label: 'Contact', icon: '/ContactIcon.svg', href: '/contact' },
  { label: 'Invoice', icon: '/InvoiceIcon.svg', href: '/invoice' },
  { label: 'UI Elements', icon: '/UIElementsIcon.svg', href: '/ui-elements' },
  { label: 'Team', icon: '/TeamIcon.svg', href: '/team' },
  { label: 'Table', icon: '/TableIcon.svg', href: '/table' },
];

const bottomItems = [
  { label: 'Settings', icon: '/SettingsIcon.svg', href: '/settings' },
  { label: 'Logout', icon: '/LogoutIcon.svg', href: '/logout' },
];

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
              {navItems.map((item) => {
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
              {pageItems.map((item) => {
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
          {bottomItems.map((item) => {
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