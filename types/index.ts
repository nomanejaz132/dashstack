/**
 * Centralized type definitions for the DashStack application
 */

// Dashboard Statistics
export interface DashboardStat {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down";
  trendText: string;
  icon: string;
  iconBg: string;
  iconColor: string;
  chartColor: string;
}

// Deals Table
export interface Deal {
  product: string;
  location: string;
  date: string;
  piece: number;
  amount: string;
  status: "Delivered" | "Pending" | "Rejected";
  statusColor: string;
  image: string;
}

// Sales Chart
export interface SalesDataPoint {
  name: string;
  value: number;
}

// Navigation
export interface NavigationItem {
  label: string;
  icon: string;
  href: string;
}

export interface NavigationGroup {
  label?: string;
  items: NavigationItem[];
}
