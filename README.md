# app-starter

A Next.js portal for network monitoring lab environments. Provides a single landing page with links and credentials for all monitoring tools in the stack.

## Stack

- [Next.js](https://nextjs.org/) 16 (App Router)
- [shadcn/ui](https://ui.shadcn.com/) + Tailwind CSS v4
- [Vercel Analytics](https://vercel.com/analytics)

## Monitoring Tools

| Tool | Category |
|------|----------|
| OpenNMS | Monitoring |
| Grafana | Visualization |
| Prometheus | Monitoring |
| Jaeger | Tracing |
| Kafka UI | Infrastructure |
| pgAdmin | Infrastructure |
| Kibana | Visualization |
| SNMP Sim | Simulation |

## Configuration

Set your monitoring server IP in `lib/applications.ts`:

```ts
export const MONITORING_PUBLIC_IP = "YOUR_MONITORING_IP";
```

To add or remove applications, edit the `applications` array in the same file.

## Development

```bash
make install   # Install dependencies
make dev       # Start dev server at http://localhost:3000
make build     # Production build
make lint      # Run ESLint
```
