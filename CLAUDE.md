# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev     # Start development server
pnpm build   # Production build (TypeScript errors are ignored — see next.config.mjs)
pnpm start   # Start production server
pnpm lint    # ESLint
```

Add shadcn/ui components:
```bash
pnpm dlx shadcn@latest add <component>
```

## Commits

Use [Conventional Commits](https://www.conventionalcommits.org/): `type(scope): description`

Common types: `feat`, `fix`, `chore`, `refactor`, `docs`, `ci`

## Architecture

This is a **Next.js App Router** application (React Server Components enabled) serving as a portal/launcher for a network monitoring stack. It renders a grid of application cards, each linking to a monitoring tool with pre-configured credentials.

### Key Configuration: `lib/applications.ts`

The central data file. To add or modify a monitored application, edit the `applications` array and the `MONITORING_PUBLIC_IP` constant (currently a placeholder). The `Application` interface defines the shape:

```ts
{ name, description, path, credentials?, category, icon }
```

`getApplicationUrl()` constructs the full URL from `MONITORING_PUBLIC_IP + path`.

Pre-configured apps: OpenNMS, Grafana, Prometheus, Jaeger, Kafka UI, pgAdmin, Kibana, SNMP Sim.

### Component Structure

- `app/layout.tsx` — Root layout: Geist font, `ThemeProvider`, Vercel Analytics
- `app/page.tsx` — Home page: renders the monitoring dashboard grid
- `components/application-card.tsx` — Card UI for each app (name, description, credentials, link)
- `components/app-icon.tsx` — Maps application names to Lucide icons
- `components/theme-provider.tsx` — Thin wrapper around `next-themes`
- `components/ui/` — shadcn/ui components (57 components, "new-york" style)
- `lib/utils.ts` — `cn()` helper (clsx + tailwind-merge)
- `hooks/use-mobile.ts` — 768px breakpoint detection
- `hooks/use-toast.ts` — Toast state management

### Styling

Tailwind CSS v4 via `@tailwindcss/postcss`. Colors use OKLCH. Theme variables are defined in `styles/globals.css` — edit there to change the color scheme. Path alias `@/` maps to the project root.

### Notable Config

- `next.config.mjs` has `typescript.ignoreBuildErrors: true` and `images.unoptimized: true`
- No environment variables — `MONITORING_PUBLIC_IP` is hardcoded in `lib/applications.ts`
- Credentials are stored in plain text in `lib/applications.ts` (intentional for lab environments)
