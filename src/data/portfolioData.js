export const portfolioData = {
  personalInfo: {
    name: "Abhishek Sudarshan",
    role: "System Development Engineer 2 (SDE 2)",
    currentCompany: "Amazon",
    location: "India",
    email: "aprjaput321@gmail.com",
    github: "https://github.com/001Abhishek",
    linkedin: "https://www.linkedin.com/in/abhishek-s-pathania-095816137/",
    resumeUrl: "./AbhishekResume.pdf",
    headline: "I build and run distributed, event-driven systems on AWS.",
    subtitle: "System Development Engineer 2 at Amazon — architecture, scale, failure recovery, and safe delivery.",
    aboutBio: "System Development Engineer 2 at Amazon (India Development Center) with a B.S. in Computer Science. Focused on high-throughput AWS architectures, JVM serverless performance, and production AI pipelines on Amazon Bedrock.",
    education: {
      degree: "B.S. in Computer Science & Engineering",
      institution: "Gujarat Technological University",
      period: "2015 — 2019"
    }
  },

  projects: [
    {
      id: "zero-trust-access",
      title: "Zero-Trust Access to Stored Assets",
      metricHighlight: "Zero Pre-Prod Errors",
      summary: "Replaced replayable pre-signed URLs with identity-bound OIDC access, server-side tenant isolation, and bounded memory.",
      stack: ["S3", "KMS Context", "OIDC", "Kotlin"]
    },
    {
      id: "serverless-fanout",
      title: "Serverless Fan-Out at Scale",
      metricHighlight: "Cold Start 8–11s → ~1.5s · P99 −70%",
      summary: "Eliminated JVM cold-start spikes and the 256 KB SQS ceiling via S3 claim-check, provisioned concurrency, and token-bucket retries.",
      stack: ["Lambda", "SQS", "Claim-Check", "CodeDeploy"],
      demoType: "visualizer",
      demoLabel: "Inspect Topology"
    },
    {
      id: "self-healing-workflows",
      title: "Self-Healing Workflows & Bulk Recovery",
      metricHighlight: "Recovery 6–8h → 10–15m · MTTR −70%",
      summary: "Assigned single retry owners per failure class with stall alarms, plus an idempotent bulk-recovery CLI saving ~15% on Spot.",
      stack: ["Step Functions", "EC2 Spot", "CLI Tooling"],
      demoType: "cli",
      demoLabel: "Run Recovery CLI"
    },
    {
      id: "scalable-data-access",
      title: "Scalable, Correct Data Access",
      metricHighlight: "~65% Faster Lookups · TOCTOU-Safe",
      summary: "Built backward-compatible OpenSearch cursor pagination with tie-breakers and conditional DynamoDB writes to prevent integrity bugs.",
      stack: ["DynamoDB", "OpenSearch", "Smithy API"],
      demoType: "contract",
      demoLabel: "View Contracts"
    },
    {
      id: "progressive-delivery",
      title: "Progressive Delivery & Production Safety",
      metricHighlight: "Full-CD 48% → 84%",
      summary: "Standardized bake times, composite alarms, auto-rollback, and cross-account canaries—cutting oldest prod code from 53 to 16 days.",
      stack: ["AWS CDK", "CodeDeploy", "Canaries"]
    }
  ],

  alsoBuilt: [
    {
      title: "Bedrock RAG Assistant",
      metric: "~60% → ~95% accuracy",
      summary: "Slack bot on Bedrock Knowledge Bases with intent routing; adopted by 25+ teams."
    },
    {
      title: "Self-Service Tenant Onboarding",
      metric: "Weeks → Hours",
      summary: "React + TypeScript wizard wired to LLM code-gen jobs that open boilerplate CRs."
    },
    {
      title: "Batch Fleet Right-Sizing",
      metric: "−43% compute cost",
      summary: "Matched batch workloads to memory-optimized EC2 hosts with bounded auto-scaling."
    }
  ],

  experience: [
    {
      id: "amazon",
      company: "Amazon",
      role: "System Development Engineer 2 (SDE 2)",
      period: "2021 — Present",
      location: "India",
      highlights: [
        "Own end-to-end architecture, operational readiness, and primary on-call for distributed event-driven services on AWS.",
        "Drive cross-team reliability, zero-trust security migrations, and automated safe-delivery standards across production fleets.",
        "Build internal developer tooling (bulk-recovery CLIs, Bedrock RAG assistants, LLM-backed onboarding portals)."
      ]
    },
    {
      id: "tcs",
      company: "Tata Consultancy Services",
      role: "Software Engineer (TCS Digital)",
      period: "2019 — 2021",
      location: "India",
      highlights: [
        "Built high-concurrency batch migration modules orchestrating multi-tenant branch transfers via REST APIs with zero data loss.",
        "Delivered Spring Boot microservice and Liferay DXP PoCs for a tier-1 European banking client."
      ]
    }
  ],

  skillIndex: [
    {
      label: "Languages",
      value: "Kotlin (primary), Java, TypeScript, Python"
    },
    {
      label: "AWS & Distributed",
      value: "Lambda, Step Functions, SQS/SNS, S3, ECS Fargate, EC2 Spot, KMS, IAM, OIDC"
    },
    {
      label: "Data & Search",
      value: "DynamoDB (GSIs, conditional & transactional writes), OpenSearch (search_after), S3"
    },
    {
      label: "Delivery & Ops",
      value: "AWS CDK, CloudFormation, CodeDeploy gradual shifting, composite alarms, synthetic canaries"
    },
    {
      label: "AI & LLM",
      value: "Amazon Bedrock (Knowledge Bases RAG, Converse API), Strands Agents, MCP servers, fail-closed evals"
    },
    {
      label: "Frontend & Test",
      value: "React, TypeScript, Playwright, Cypress, JUnit 5, MockK, Smithy APIs"
    }
  ]
};
