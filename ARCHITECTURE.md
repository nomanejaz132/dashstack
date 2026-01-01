# Architecture Documentation

## Overview

DashStack is built following Next.js 16 App Router best practices with a strong emphasis on Server Components, TypeScript type safety, and clean code organization.

## Core Architectural Principles

### 1. Server-First Approach

**Default to Server Components** - Components are Server Components unless they explicitly need client-side features.

#### Server Components

- `app/page.tsx` - Main dashboard page
- `app/components/DashboardStats.tsx` - Statistics display
- `app/components/DealsTable.tsx` - Data table

**Benefits:**

- Reduced JavaScript bundle size
- Faster initial page load
- Better SEO
- Direct access to backend resources (if needed)

#### Client Components

Components marked with `"use client"` directive:

1. **`app/components/Sidebar.tsx`**
   - **Reason**: Uses `usePathname()` hook from `next/navigation`
   - **Purpose**: Highlight active navigation item based on current route

2. **`app/components/SalesChart.tsx`**
   - **Reason**: Uses Recharts library (requires DOM manipulation)
   - **Purpose**: Interactive data visualization

3. **`app/components/Header.tsx`**
   - **Reason**: Contains interactive dropdowns and search input
   - **Purpose**: User interaction and navigation

### 2. Type System

All data structures are strongly typed using TypeScript interfaces defined in `types/index.ts`.

```typescript
// Centralized type definitions
types/
└── index.ts
    ├── DashboardStat
    ├── Deal
    ├── SalesDataPoint
    ├── NavigationItem
    └── NavigationGroup
```

**Benefits:**

- Compile-time type checking
- Better IDE autocomplete
- Self-documenting code
- Prevents runtime errors

### 3. Data Organization

Static data is centralized in `lib/data/` directory:

```
lib/data/
├── stats.ts        # Dashboard statistics
├── deals.ts        # Deals table data
├── chart.ts        # Sales chart data
└── navigation.ts   # Sidebar navigation
```

**Pattern:**

```typescript
// 1. Define type
export interface DashboardStat {
  /* ... */
}

// 2. Create data file
export const dashboardStats: DashboardStat[] = [
  /* ... */
];

// 3. Import in component
import { dashboardStats } from "@/lib/data/stats";
```

**Benefits:**

- Single source of truth
- Easy to update and maintain
- Type-safe data access
- Reusable across components

### 4. Component Structure

```
app/components/          # Application-specific components
├── DashboardStats.tsx  # Server Component
├── DealsTable.tsx      # Server Component
├── Header.tsx          # Client Component (interactive)
├── SalesChart.tsx      # Client Component (recharts)
└── Sidebar.tsx         # Client Component (usePathname)

components/ui/          # Reusable UI primitives (Shadcn)
├── button.tsx
├── card.tsx
├── table.tsx
└── ...
```

**Naming Conventions:**

- PascalCase for component files
- Descriptive names indicating purpose
- Export named functions (not default)

### 5. Styling Architecture

**Tailwind CSS v4** with custom configuration:

```css
/* globals.css */
@theme {
  /* Custom design tokens */
  --color-*: ...;
  --font-*: ...;
}

@layer base {
  /* Global styles */
  * {
    @apply font-nunito;
  }
}
```

**Approach:**

- Utility-first with Tailwind
- Custom design tokens for brand colors
- Consistent spacing scale
- No CSS modules or styled-components

### 6. Code Quality Tools

#### ESLint

- Next.js recommended config
- TypeScript support
- Automatic on save (if configured)

#### Prettier

- Consistent code formatting
- Tailwind class sorting plugin
- Runs on `npm run format`

#### TypeScript

- Strict mode enabled
- No implicit any
- Path aliases (`@/*`)

### 7. Asset Management

Static assets are organized for scalability and performance:

- **`/public/icons/`**: Centralized SVG icons for navigation and UI elements.
- **`/public/images/`**: Optimized images, logos, and avatars.
- **`next/image`**: Always used for automatic image optimization, lazy loading, and layout stability.
- **SVGs**: Preferred for icons and logos to ensure crispness and small bundle size.

## Data Flow

```
┌─────────────────┐
│  Static Data    │
│  (lib/data/)    │
└────────┬────────┘
         │
         ├──────────────────────────────┐
         │                              │
         ▼                              ▼
┌─────────────────┐          ┌──────────────────┐
│ Server Component│          │ Client Component │
│  (Dashboard)    │          │   (Sidebar)      │
└────────┬────────┘          └────────┬─────────┘
         │                            │
         ▼                            ▼
    ┌────────┐                  ┌─────────┐
    │  HTML  │                  │ Browser │
    └────────┘                  └─────────┘
```

## File Organization Best Practices

1. **Colocation** - Keep related files close together
2. **Separation of Concerns** - Data, types, and components in separate directories
3. **Explicit Exports** - Use named exports for better refactoring
4. **Path Aliases** - Use `@/` prefix for absolute imports

## Performance Considerations

1. **Server Components** - Reduce client-side JavaScript
2. **Image Optimization** - Use `next/image` for all images
3. **Code Splitting** - Automatic with Next.js App Router
4. **Type Safety** - Catch errors at compile time

## Future Scalability

The architecture supports:

- **API Integration** - Server Components can fetch data directly
- **Database Access** - Server-side data fetching
- **Authentication** - Server-side session management
- **Internationalization** - Server-side translation
- **Testing** - Clear separation enables unit and integration tests

## Development Workflow

1. **Plan** - Define types first
2. **Data** - Create centralized data files
3. **Components** - Build Server Components by default
4. **Interactivity** - Add Client Components only when needed
5. **Style** - Apply Tailwind utilities
6. **Document** - Add JSDoc comments for complex logic
7. **Test** - Run type-check and lint before commit

## Conventions

- **File Names**: PascalCase for components, kebab-case for utilities
- **Imports**: Absolute paths with `@/` alias
- **Types**: Defined in `types/index.ts`
- **Data**: Centralized in `lib/data/`
- **Comments**: JSDoc for public APIs, inline for complex logic
