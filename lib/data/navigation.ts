import type { NavigationItem } from "@/types";

/**
 * Main navigation items
 * Displayed in the first section of the sidebar
 */
export const mainNavItems: NavigationItem[] = [
  { label: "Dashboard", icon: "/icons/DashboardIcon.svg", href: "/" },
  { label: "Products", icon: "/icons/ProductsIcon.svg", href: "/products" },
  { label: "Favorites", icon: "/icons/FavoritesIcon.svg", href: "/favorites" },
  { label: "Inbox", icon: "/icons/InboxIcon.svg", href: "/inbox" },
  { label: "Order Lists", icon: "/icons/OrderListsIcon.svg", href: "/orders" },
  { label: "Product Stock", icon: "/icons/ProductStockIcon.svg", href: "/stock" },
];

/**
 * Page navigation items
 * Displayed in the "Pages" section of the sidebar
 */
export const pageNavItems: NavigationItem[] = [
  { label: "Pricing", icon: "/icons/PricingIcon.svg", href: "/pricing" },
  { label: "Calender", icon: "/icons/CalenderIcon.svg", href: "/calendar" },
  { label: "To-Do", icon: "/icons/TodoIcon.svg", href: "/todo" },
  { label: "Contact", icon: "/icons/ContactIcon.svg", href: "/contact" },
  { label: "Invoice", icon: "/icons/InvoiceIcon.svg", href: "/invoice" },
  { label: "UI Elements", icon: "/icons/UIElementsIcon.svg", href: "/ui-elements" },
  { label: "Team", icon: "/icons/TeamIcon.svg", href: "/team" },
  { label: "Table", icon: "/icons/TableIcon.svg", href: "/table" },
];

/**
 * Bottom navigation items
 * Displayed at the bottom of the sidebar
 */
export const bottomNavItems: NavigationItem[] = [
  { label: "Settings", icon: "/icons/SettingsIcon.svg", href: "/settings" },
  { label: "Logout", icon: "/icons/LogoutIcon.svg", href: "/logout" },
];
