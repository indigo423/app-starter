export const dynamic = "force-dynamic";

import { Activity, Server, Settings } from "lucide-react";
import { ApplicationCard } from "@/components/application-card";
import { applications, MONITORING_PUBLIC_IP, getApplicationUrl } from "@/lib/applications";
import { Badge } from "@/components/ui/badge";

export default function Home() {
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
                Network Monitoring
              </h1>
              <p className="text-xs text-muted-foreground">
                Benchmark Lab Portal
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="outline" className="gap-1.5 border-border/50 bg-secondary/30 text-muted-foreground">
              <Server className="h-3.5 w-3.5" />
              <code className="font-mono text-xs">{MONITORING_PUBLIC_IP}</code>
            </Badge>
            <Badge variant="outline" className="gap-1.5 border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Online
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Settings className="h-4 w-4" />
            <span className="text-sm font-medium uppercase tracking-wider">
              Applications
            </span>
          </div>
          <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
            Monitoring & Benchmarking Tools
          </h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Access all network monitoring, visualization, and infrastructure
            management applications from this central dashboard.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="mb-6 flex flex-wrap gap-2">
          <Badge className="bg-secondary/50 text-secondary-foreground hover:bg-secondary/70">
            All
          </Badge>
          <Badge variant="outline" className="border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
            Monitoring
          </Badge>
          <Badge variant="outline" className="border-blue-500/30 bg-blue-500/10 text-blue-400">
            Visualization
          </Badge>
          <Badge variant="outline" className="border-amber-500/30 bg-amber-500/10 text-amber-400">
            Infrastructure
          </Badge>
          <Badge variant="outline" className="border-pink-500/30 bg-pink-500/10 text-pink-400">
            Simulation
          </Badge>
        </div>

        {/* Applications Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {applications.map((app) => (
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
                Update the{" "}
                <code className="rounded bg-secondary/50 px-1.5 py-0.5 font-mono">
                  MONITORING_PUBLIC_IP
                </code>{" "}
                variable in{" "}
                <code className="rounded bg-secondary/50 px-1.5 py-0.5 font-mono">
                  lib/applications.ts
                </code>{" "}
                to point to your monitoring server.
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
