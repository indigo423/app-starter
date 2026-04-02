"use client";

import { ExternalLink, Key, User, Lock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Application } from "@/lib/applications";
import { AppIcon } from "./app-icon";

interface ApplicationCardProps {
  application: Application;
  url: string;
}

const categoryColors: Record<Application["category"], string> = {
  monitoring: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  visualization: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  infrastructure: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  simulation: "bg-pink-500/20 text-pink-400 border-pink-500/30",
};

export function ApplicationCard({ application, url }: ApplicationCardProps) {
  const hasCredentials = application.credentials.username && application.credentials.password;

  return (
    <Card className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/5">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      <CardHeader className="relative pb-3">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/50 text-primary">
              <AppIcon name={application.icon} className="h-6 w-6" />
            </div>
            <div>
              <CardTitle className="text-lg font-semibold text-foreground">
                {application.name}
              </CardTitle>
              <Badge 
                variant="outline" 
                className={`mt-1 text-xs capitalize ${categoryColors[application.category]}`}
              >
                {application.category}
              </Badge>
            </div>
          </div>
        </div>
        <CardDescription className="mt-3 text-sm text-muted-foreground">
          {application.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="relative space-y-4">
        <div className="rounded-lg border border-border/50 bg-secondary/30 p-3">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Key className="h-3.5 w-3.5" />
            <span className="font-medium">Credentials</span>
          </div>
          {hasCredentials ? (
            <div className="mt-2 space-y-1.5">
              <div className="flex items-center gap-2 text-sm">
                <User className="h-3.5 w-3.5 text-muted-foreground" />
                <code className="rounded bg-background/50 px-1.5 py-0.5 font-mono text-xs text-foreground">
                  {application.credentials.username}
                </code>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Lock className="h-3.5 w-3.5 text-muted-foreground" />
                <code className="rounded bg-background/50 px-1.5 py-0.5 font-mono text-xs text-foreground">
                  {application.credentials.password}
                </code>
              </div>
            </div>
          ) : (
            <p className="mt-2 text-sm text-emerald-400">
              {application.credentials.note}
            </p>
          )}
        </div>

        <Button
          asChild
          className="w-full gap-2 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground"
        >
          <a href={url} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4" />
            Open Application
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
