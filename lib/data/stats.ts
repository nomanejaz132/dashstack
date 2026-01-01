import type { DashboardStat } from "@/types";

/**
 * Dashboard statistics data
 * Used in the DashboardStats component to display key metrics
 */
export const dashboardStats: DashboardStat[] = [
  {
    label: "Total User",
    value: "40,689",
    change: "8.5%",
    trend: "up",
    trendText: "Up from yesterday",
    icon: "/icons/User.svg",
    iconBg: "bg-[#8280FF]/20",
    iconColor: "text-purple-600",
    chartColor: "text-green-500",
  },
  {
    label: "Total Order",
    value: "10293",
    change: "1.3%",
    trend: "up",
    trendText: "Up from past week",
    icon: "/icons/Orders.svg",
    iconBg: "bg-[#FEC53D]/20",
    iconColor: "text-yellow-600",
    chartColor: "text-green-500",
  },
  {
    label: "Total Sales",
    value: "$89,000",
    change: "4.3%",
    trend: "down",
    trendText: "Down from yesterday",
    icon: "/icons/Sales.svg",
    iconBg: "bg-[#00C898]/20",
    iconColor: "text-green-600",
    chartColor: "text-red-500",
  },
  {
    label: "Total Pending",
    value: "2040",
    change: "1.8%",
    trend: "up",
    trendText: "Up from yesterday",
    icon: "/icons/Pending.svg",
    iconBg: "bg-[#FF8C00]/20",
    iconColor: "text-orange-600",
    chartColor: "text-green-500",
  },
];
