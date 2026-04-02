import {
  Activity,
  BarChart3,
  Database,
  GitBranch,
  Layers,
  LineChart,
  Network,
  Radio,
} from "lucide-react";

interface AppIconProps {
  name: string;
  className?: string;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  opennms: Network,
  grafana: BarChart3,
  prometheus: Activity,
  jaeger: GitBranch,
  kafka: Layers,
  pgadmin: Database,
  kibana: LineChart,
  snmp: Radio,
};

export function AppIcon({ name, className }: AppIconProps) {
  const Icon = iconMap[name] || Activity;
  return <Icon className={className} />;
}
