import type { NavigationItem } from "@/types";

/**
 * Main navigation items
 * Displayed in the first section of the sidebar
 */
export const mainNavItems: NavigationItem[] = [
  { label: "Dashboard", icon: "/DashboardIcon.svg", href: "/" },
  { label: "Products", icon: "/ProductsIcon.svg", href: "/products" },
  { label: "Favorites", icon: "/FavoritesIcon.svg", href: "/favorites" },
  { label: "Inbox", icon: "/InboxIcon.svg", href: "/inbox" },
  { label: "Order Lists", icon: "/OrderListsIcon.svg", href: "/orders" },
  { label: "Product Stock", icon: "/ProductStockIcon.svg", href: "/stock" },
];

/**
 * Page navigation items
 * Displayed in the "Pages" section of the sidebar
 */
export const pageNavItems: NavigationItem[] = [
  { label: "Pricing", icon: "/PricingIcon.svg", href: "/pricing" },
  { label: "Calender", icon: "/CalenderIcon.svg", href: "/calendar" },
  { label: "To-Do", icon: "/TodoIcon.svg", href: "/todo" },
  { label: "Contact", icon: "/ContactIcon.svg", href: "/contact" },
  { label: "Invoice", icon: "/InvoiceIcon.svg", href: "/invoice" },
  { label: "UI Elements", icon: "/UIElementsIcon.svg", href: "/ui-elements" },
  { label: "Team", icon: "/TeamIcon.svg", href: "/team" },
  { label: "Table", icon: "/TableIcon.svg", href: "/table" },
];

/**
 * Bottom navigation items
 * Displayed at the bottom of the sidebar
 */
export const bottomNavItems: NavigationItem[] = [
  { label: "Settings", icon: "/SettingsIcon.svg", href: "/settings" },
  { label: "Logout", icon: "/LogoutIcon.svg", href: "/logout" },
];
