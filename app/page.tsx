export const dynamic = "force-dynamic";

import { Suspense } from "react";
import { Activity, Server } from "lucide-react";
import { ApplicationCard } from "@/components/application-card";
import { CategoryFilter } from "@/components/category-filter";
import { applications, MONITORING_PUBLIC_IP, getApplicationUrl, Application } from "@/lib/applications";
import { Badge } from "@/components/ui/badge";

export default async function Home({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const { category } = await searchParams;
  const filtered = category
    ? applications.filter((app) => app.category === (category as Application["category"]))
    : applications;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/30 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Activity className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-foreground">
                Lab Portal
              </h1>
              <p className="text-xs text-muted-foreground">
                Monitoring & Benchmarking Tools
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="outline" className="gap-1.5 border-border/50 bg-secondary/30 text-muted-foreground">
              <Server className="h-3.5 w-3.5" />
              <code className="font-mono text-xs">{MONITORING_PUBLIC_IP}</code>
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <Suspense>
          <CategoryFilter />
        </Suspense>

        {/* Applications Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((app) => (
            <ApplicationCard key={app.name} application={app} url={getApplicationUrl(app.path)} />
          ))}
        </div>

        {/* Footer Info */}
        <div className="mt-12 rounded-lg border border-border/50 bg-card/30 p-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-sm font-medium text-foreground">
                Configuration
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                See the{" "}
                <a
                  href="https://github.com/indigo423/app-starter#readme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-foreground"
                >
                  README
                </a>{" "}
                for configuration instructions.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="font-medium">Current:</span>
              <code className="rounded border border-border/50 bg-secondary/30 px-2 py-1 font-mono">
                https://{MONITORING_PUBLIC_IP}
              </code>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
