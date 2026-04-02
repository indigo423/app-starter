// ============================================================
// CONFIGURATION: Replace this with your monitoring server IP
// ============================================================
export const MONITORING_PUBLIC_IP = "YOUR_MONITORING_IP";
// ============================================================

export interface Application {
  name: string;
  description: string;
  path: string;
  credentials: {
    username?: string;
    password?: string;
    note?: string;
  };
  category: "monitoring" | "visualization" | "infrastructure" | "simulation";
  icon: string;
}

export const applications: Application[] = [
  {
    name: "OpenNMS UI",
    description: "Enterprise-grade network management and monitoring platform",
    path: "/opennms",
    credentials: {
      username: "admin",
      password: "admin",
    },
    category: "monitoring",
    icon: "opennms",
  },
  {
    name: "Grafana",
    description: "Analytics and interactive visualization platform",
    path: "/grafana",
    credentials: {
      username: "admin",
      password: "admin",
    },
    category: "visualization",
    icon: "grafana",
  },
  {
    name: "Prometheus",
    description: "Metrics collection and alerting toolkit",
    path: "/prometheus",
    credentials: {
      note: "No login required",
    },
    category: "monitoring",
    icon: "prometheus",
  },
  {
    name: "Jaeger",
    description: "Distributed tracing and performance monitoring",
    path: "/jaeger",
    credentials: {
      note: "No login required",
    },
    category: "monitoring",
    icon: "jaeger",
  },
  {
    name: "Kafka UI",
    description: "Apache Kafka cluster management interface",
    path: "/kafka",
    credentials: {
      note: "No login required",
    },
    category: "infrastructure",
    icon: "kafka",
  },
  {
    name: "pgAdmin",
    description: "PostgreSQL database administration tool",
    path: "/pgadmin",
    credentials: {
      username: "admin@benchmark.lab",
      password: "admin",
    },
    category: "infrastructure",
    icon: "pgadmin",
  },
  {
    name: "Kibana",
    description: "Elasticsearch data exploration and visualization",
    path: "/kibana",
    credentials: {
      note: "No login required",
    },
    category: "visualization",
    icon: "kibana",
  },
  {
    name: "SNMP Sim (l8opensim)",
    description: "SNMP device simulator for testing and development",
    path: "/opensim",
    credentials: {
      note: "No login required",
    },
    category: "simulation",
    icon: "snmp",
  },
];

export function getApplicationUrl(path: string): string {
  return `https://${MONITORING_PUBLIC_IP}${path}`;
}
