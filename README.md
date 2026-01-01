# DashStack - Modern Dashboard Application

A modern, responsive dashboard application built with Next.js 16, TypeScript, and Tailwind CSS v4.

## 🚀 Tech Stack

- **Framework**: [Next.js 16.1.1](https://nextjs.org/) - React framework with App Router
- **Language**: [TypeScript 5](https://www.typescriptlang.org/) - Strict type checking enabled
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS framework
- **UI Components**: [Shadcn/ui](https://ui.shadcn.com/) - Accessible component library
- **Charts**: [Recharts](https://recharts.org/) - Composable charting library
- **Icons**: Custom SVG icons + [Lucide React](https://lucide.dev/)
- **Code Quality**: ESLint + Prettier

## 📁 Project Structure

```
dashstack/
├── app/                          # Next.js App Router
│   ├── components/              # Application-specific components
│   │   ├── DashboardStats.tsx  # Stats cards (Server Component)
│   │   ├── DealsTable.tsx      # Deals table (Server Component)
│   │   ├── Header.tsx          # Header with navigation (Client Component)
│   │   ├── SalesChart.tsx      # Sales chart (Client Component)
│   │   └── Sidebar.tsx         # Sidebar navigation (Client Component)
│   ├── globals.css             # Global styles and Tailwind config
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Dashboard page (Server Component)
├── components/ui/               # Reusable UI components (Shadcn)
├── lib/
│   ├── data/                   # Centralized data files
│   │   ├── chart.ts           # Sales chart data
│   │   ├── deals.ts           # Deals table data
│   │   ├── navigation.ts      # Sidebar navigation data
│   │   └── stats.ts           # Dashboard statistics data
│   └── utils.ts               # Utility functions
├── types/
│   └── index.ts               # TypeScript type definitions
├── public/                     # Static assets (images, icons)
└── hooks/                      # Custom React hooks
```

## 🎯 Server vs Client Components

This project follows Next.js best practices by using **Server Components by default** and **Client Components only when necessary**.

### Server Components (Default)
- `app/page.tsx` - Dashboard page
- `app/components/DashboardStats.tsx` - Statistics cards
- `app/components/DealsTable.tsx` - Deals table

**Why Server Components?**
- Better performance (less JavaScript sent to client)
- Direct database/API access (if needed)
- Improved SEO
- Automatic code splitting

### Client Components (Explicit "use client")
- `app/components/Header.tsx` - Uses interactive dropdowns and search
- `app/components/Sidebar.tsx` - Uses `usePathname` hook for active state
- `app/components/SalesChart.tsx` - Uses Recharts (requires DOM manipulation)

**Why Client Components?**
- **Header**: Contains interactive elements (dropdowns, search input)
- **Sidebar**: Uses Next.js `usePathname()` hook to highlight active route
- **SalesChart**: Recharts library requires client-side rendering for interactivity

## 🗂️ Data Architecture

All static data is:
- **Centralized** in `lib/data/` directory
- **Strongly typed** using TypeScript interfaces in `types/index.ts`
- **Reusable** across components
- **Well-documented** with JSDoc comments

Example:
```typescript
// types/index.ts
export interface DashboardStat {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down";
  // ...
}

// lib/data/stats.ts
export const dashboardStats: DashboardStat[] = [
  // ...
];
```

## 🛠️ Getting Started

### Prerequisites
- Node.js 20+ 
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd dashstack

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the dashboard.

## 📜 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
npm run type-check   # Run TypeScript compiler check
```

## 🎨 Styling Approach

- **Tailwind CSS v4** for utility-first styling
- **Custom design tokens** defined in `globals.css`
- **Nunito Sans** font family applied globally
- **Consistent spacing** using Tailwind's spacing scale
- **Custom color palette** with specific brand colors

## 🧩 Component Guidelines

1. **Prefer Server Components** - Use by default unless client interactivity is needed
2. **Explicit "use client"** - Only add when using hooks, event handlers, or browser APIs
3. **Type Everything** - All props and data should have TypeScript types
4. **Centralize Data** - Keep static data in `lib/data/` with proper types
5. **Document Decisions** - Add comments explaining why a component is client/server

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Shadcn/ui Documentation](https://ui.shadcn.com/)

## 📝 License

This project is private and proprietary.
