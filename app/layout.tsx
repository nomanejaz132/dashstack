import type { Metadata } from "next";
import { Geist, Geist_Mono, Nunito_Sans } from "next/font/google";

import { SidebarProvider, SidebarInset } from "@/components/ui";
import { Sidebar, Header } from "@/app/components";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DashStack",
  description: "DashStack - Next.js Admin Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${nunitoSans.variable} antialiased`}
        suppressHydrationWarning
      >
        <SidebarProvider>
          <Sidebar />
          <SidebarInset>
            <Header />
            <main className="flex-1 overflow-y-auto bg-[#F5F6FA] p-7.5 dark:bg-gray-900/50">
              {children}
            </main>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
