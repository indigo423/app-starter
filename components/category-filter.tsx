"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Application } from "@/lib/applications";

const categories: { value: Application["category"] | "all"; label: string; className: string }[] = [
  { value: "all", label: "All", className: "border-border/50 bg-secondary/50 text-secondary-foreground hover:bg-secondary/70" },
  { value: "lab", label: "Lab", className: "border-violet-500/30 bg-violet-500/10 text-violet-400 hover:bg-violet-500/20" },
  { value: "monitoring", label: "Monitoring", className: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20" },
  { value: "infrastructure", label: "Infrastructure", className: "border-amber-500/30 bg-amber-500/10 text-amber-400 hover:bg-amber-500/20" },
  { value: "data-discovery", label: "Data Discovery", className: "border-blue-500/30 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20" },
  { value: "simulation", label: "Simulation", className: "border-pink-500/30 bg-pink-500/10 text-pink-400 hover:bg-pink-500/20" },
];

export function CategoryFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const active = searchParams.get("category") ?? "all";

  function select(value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value === "all") {
      params.delete("category");
    } else {
      params.set("category", value);
    }
    router.push(`?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="mb-6 flex flex-wrap gap-2">
      {categories.map(({ value, label, className }) => (
        <Badge
          key={value}
          variant="outline"
          className={`cursor-pointer transition-all ${className} ${active === value ? "ring-1 ring-current ring-offset-1 ring-offset-background" : "opacity-60 hover:opacity-100"}`}
          onClick={() => select(value)}
        >
          {label}
        </Badge>
      ))}
    </div>
  );
}
