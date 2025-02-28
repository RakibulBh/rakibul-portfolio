export interface BlogPost {
  header: BlogHeader;
  sections: BlogSection[];
}

export type BlogSection = {
  header: string;
  content: BlogContent[];
};

export type BlogHeader = {
  title: string;
  posted: string;
  updated: string;
  author: string;
};

export type BlogContent = {
  type: ContentType;
  language?: "go";
  format?: "mermaid";
  title?: string;
  content?: string;
  variant?: "warning";
  points?: string[];
};

export type ContentType =
  | "text"
  | "image"
  | "code"
  | "bullet"
  | "math"
  | "callout"
  | "diagram";

export const posts: BlogPost[] = [
  {
    header: {
      title: "How I Built a Load Balancer in Golang",
      author: "Rakibul Bhuiyan",
      posted: "28 Feb 2025",
      updated: "28 Feb 2025",
    },
    sections: [
      {
        header: "TL;DR",
        content: [
          {
            type: "text",
            content:
              "Built a concurrent load balancer in Go using native net/http packages that handles 5k RPM with intelligent health checks and connection pooling.",
          },
        ],
      },
      {
        header: "Overview",
        content: [
          {
            type: "text",
            content:
              "**Context**: Needed to distribute traffic across multiple microservices while learning Go's concurrency model.",
          },
          {
            type: "bullet",
            points: [
              "**Goals**: 5k requests/minute, <100ms latency, zero-downtime updates",
              "**Tech Stack**: Go 1.22, Redis (rate limiting), Prometheus (metrics)",
            ],
          },
        ],
      },
      {
        header: "Problem Statement",
        content: [
          {
            type: "text",
            content:
              "Traditional reverse proxies couldn't handle our specific requirements:",
          },
          {
            type: "bullet",
            points: [
              "Need for dynamic backend registration",
              "Custom circuit-breaking logic",
              "Real-time metrics exposure",
            ],
          },
        ],
      },
      {
        header: "Challenges",
        content: [
          {
            type: "text",
            content: "### 1. Connection Pooling",
          },
          {
            type: "code",
            language: "go",
            content: `type Pool struct {
  mu    sync.Mutex
  conns chan net.Conn
  // Context-aware connection reuse
}`,
          },
          {
            type: "text",
            content: "### 2. Health Checks",
          },
          {
            type: "code",
            language: "go",
            content: `func (b *Backend) IsHealthy() bool {
  ctx, cancel := context.WithTimeout(3 * time.Second)
  defer cancel()
  return b.ping(ctx) // Custom ICMP check
}`,
          },
        ],
      },
      {
        header: "Solution",
        content: [
          {
            type: "diagram",
            format: "mermaid",
            content: `graph LR
              A[Client] --> B[Load Balancer]
              B --> C[Backend 1]
              B --> D[Backend 2]
              B --> E[Backend 3]
              C --> F[(Redis)]
              D --> F
              E --> F`,
          },
        ],
      },
      {
        header: "Results",
        content: [
          {
            type: "bullet",
            points: [
              "✅ 5.2k RPM sustained load",
              "✅ 78ms average latency",
              "✅ 100% uptime during deployments",
            ],
          },
        ],
      },
      {
        header: "Future Improvements",
        content: [
          {
            type: "bullet",
            points: [
              "HTTP/3 support using quic-go",
              "Machine learning-based routing",
            ],
          },
        ],
      },
      {
        header: "Code Deep Dive",
        content: [
          {
            type: "code",
            language: "go",
            title: "Reverse Proxy Handler",
            content: `func (lb *LoadBalancer) ServeHTTP(w http.ResponseWriter, r *http.Request) {
  backend := lb.strategy.SelectBackend(lb.backends)
  if backend == nil {
    http.Error(w, "No healthy backends", http.StatusServiceUnavailable)
    return
  }
  backend.ReverseProxy.ServeHTTP(w, r)
}`,
          },
        ],
      },
      {
        header: "Math Behind Load Balancing",
        content: [
          {
            type: "math",
            content: `\\text{Weighted\_Score} = \\frac{(1 - \\text{CPU\_util}) \\times \\text{Weight}}{\\text{Latency}_{avg}}`,
          },
        ],
      },
      {
        header: "Critical Warning",
        content: [
          {
            type: "callout",
            variant: "warning",
            content:
              "Always implement rate limiting before load balancing to prevent cascading failures!",
          },
        ],
      },
    ],
  },
];
