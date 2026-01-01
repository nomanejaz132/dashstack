import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { SidebarTrigger } from '@/components/ui/sidebar';

export function Header() {
  return (
    <header className="sticky top-0 z-10 flex h-17.5 items-center justify-between border-b bg-white px-6 dark:bg-gray-950">
      {/* Left side: Sidebar Trigger & Search */}
      <div className="flex items-center gap-4">
        <SidebarTrigger className="-ml-2 cursor-pointer hover:cursor-pointer" />
        {/* Custom Hamburger if SidebarTrigger isn't enough or design specifically requests separate */}
        
        <div className="relative w-96 hidden md:block">
          <Image 
            src="/SearchIcon.svg" 
            alt="Search" 
            width={16} 
            height={16} 
            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            type="search"
            placeholder="Search"
            className="w-full rounded-full bg-gray-100 pl-10 focus-visible:ring-1 focus-visible:ring-blue-600 dark:bg-gray-900" 
          />
        </div>
      </div>

      {/* Right side: Icons, Language, Profile */}
      <div className="flex items-center gap-4 md:gap-6">
        {/* Notification */}
        <Button variant="ghost" size="icon" className="relative text-gray-500 hover:text-blue-600 cursor-pointer hover:cursor-pointer">
           <Image src="/BellIcon.svg" alt="Notifications" width={20} height={20} className="h-5 w-5" />
           <Badge className="absolute -right-1 -top-1 px-1.5 py-0.5 text-xs bg-red-500 hover:bg-red-600 border-none min-w-[18px] h-[18px] flex items-center justify-center">
             6
           </Badge>
        </Button>

        {/* Language Selector */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2 px-0 hover:bg-transparent cursor-pointer hover:cursor-pointer">
              <div className="h-5 w-8 overflow-hidden rounded-sm">
                  <Image src="/UKFlag.png" alt="UK" width={32} height={20} className="h-full w-full object-cover" /> 
              </div>
              <span className="hidden text-sm font-medium text-gray-700 md:block dark:text-gray-300">English</span>
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem className="cursor-pointer">English</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">Spanish</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">French</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Profile */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-3 pl-0 hover:bg-transparent cursor-pointer hover:cursor-pointer">
               <Avatar>
                <AvatarImage src="/UserAvatar.png" alt="Moni Roy" />
                <AvatarFallback>MR</AvatarFallback>
              </Avatar>
              <div className="hidden text-left md:block">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">Moni Roy</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Admin</p>
              </div>
               <div className="rounded-full border p-1 border-gray-200">
                  <ChevronDown className="h-3 w-3 text-gray-500" />
               </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-500">Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
