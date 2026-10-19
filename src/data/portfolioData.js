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
    subtitle: "System Development Engineer 2 at Amazon. Specializing in architecture, scale, failure recovery, and safe delivery.",
    aboutBio: "I am a System Development Engineer 2 at Amazon (India Development Center) with a Computer Science degree from Gujarat Technological University. My work focuses on operating distributed event-driven systems on AWS—tuning JVM/Kotlin serverless latency, orchestrating multi-day Step Functions workflows with single-retry ownership, executing zero-trust security migrations, and building reliable production AI applications on Amazon Bedrock.",
    education: {
      degree: "B.S. in Computer Science & Engineering",
      institution: "Gujarat Technological University",
      period: "2015 — 2019"
    }
  },

  experience: [
    {
      id: "amazon",
      company: "Amazon",
      role: "System Development Engineer 2 (SDE 2)",
      period: "2021 — Present",
      location: "India",
      highlights: [
        "Architecting distributed event-driven platforms and serverless JVM microservices on AWS (Kotlin, Java, TypeScript, Python).",
        "Led phased migration to identity-bound OIDC storage access with server-side tenant isolation and memory caps (zero pre-prod errors, eliminated silent data corruption).",
        "Tuned Lambda JVM cold starts from 8–11s to ~1.5s (P99 −70%) and designed claim-check pattern on S3/SQS for large payloads.",
        "Halved recovery times (MTTR −70%) by instituting single retry ownership per failure class with stall alarms, and built an idempotent bulk-recovery CLI.",
        "Set team delivery standards (bake time, composite alarms, CodeDeploy gradual shifting, canaries), increasing full-CD from 48% to 84%."
      ],
      skills: ["Kotlin", "Java", "AWS Lambda", "Step Functions", "DynamoDB", "S3", "AWS CDK", "Amazon Bedrock"]
    },
    {
      id: "tcs",
      company: "Tata Consultancy Services",
      role: "Software Engineer (TCS Digital)",
      period: "June 2019 — 2021",
      location: "India",
      highlights: [
        "Built high-concurrency batch migration modules orchestrating multi-tenant branch transfers via REST APIs with zero data loss.",
        "Delivered Spring Boot microservice & Liferay DXP Proof-of-Concepts for a tier-1 European banking client modernizing core monolith flows."
      ],
      skills: ["Java/J2EE", "Spring Boot", "RESTful APIs", "SQL", "Liferay DXP"]
    }
  ],

  projects: [
    {
      id: "zero-trust-access",
      title: "Zero-Trust Access to Stored Assets",
      metricHighlight: "Zero Pre-Prod Errors",
      summary: "Migrated multi-consumer asset storage from replayable pre-signed URLs to identity-bound OIDC authenticated access with server-side tenant isolation, eliminating silent data corruption and safely routing images to multimodal models.",
      tags: ["AWS S3", "KMS Context", "OIDC Auth", "Tenant Isolation", "Kotlin"]
    },
    {
      id: "serverless-fanout",
      title: "Serverless Fan-Out at Scale",
      metricHighlight: "Cold Start 8–11s → ~1.5s (P99 −70%)",
      summary: "Overcame Lambda JVM cold starts and the 256KB queue message ceiling using an S3 claim-check pattern, provisioned concurrency tuning, and token-bucket retry budgets that absorb throttle bursts without quota increases.",
      tags: ["AWS Lambda", "SQS Fan-Out", "Claim-Check", "JVM Tuning", "CodeDeploy"]
    },
    {
      id: "self-healing-workflows",
      title: "Self-Healing Workflows & Bulk Recovery",
      metricHighlight: "Recovery 6–8h → 10–15m (MTTR −70%)",
      summary: "Eliminated duplicate side-effects in multi-day Step Functions by instituting single retry ownership per failure class with stall alarms, and built an idempotent bulk-recovery CLI (redrive, restart from failed step, dry-run) saving ~15% compute on Spot.",
      tags: ["Step Functions", "EC2 Spot", "Idempotent Recovery", "CLI Tooling", "Stall Alarms"]
    },
    {
      id: "scalable-data-access",
      title: "Scalable, Correct Data Access",
      metricHighlight: "~65% Faster Lookups • TOCTOU-Safe",
      summary: "Designed backward-compatible cursor pagination contracts with sort tie-breakers across multiple OpenSearch indexes, pairing conditional DynamoDB writes and reference checks to prevent silent data integrity failures.",
      tags: ["DynamoDB", "OpenSearch", "search_after", "Smithy API", "Conditional Writes"]
    },
    {
      id: "progressive-delivery",
      title: "Progressive Delivery & Production Safety",
      metricHighlight: "Full-CD 48% → 84%",
      summary: "Standardized team continuous deployment with bake times, composite alarms, automated rollback, and cross-account synthetic canaries—cutting oldest code in production from 53 to 16 days and catching 17 issues before customer reports.",
      tags: ["AWS CDK", "CodeDeploy", "Composite Alarms", "Synthetic Canaries", "Bake Time"]
    }
  ],

  alsoBuilt: [
    {
      title: "Bedrock RAG Assistant for Engineering Teams",
      metric: "~60% → ~95% Accuracy",
      summary: "Slack bot on Amazon Bedrock Knowledge Bases with intent-based routing across code, docs, and tickets; adopted by 25+ teams.",
      tags: ["Amazon Bedrock", "RAG", "Intent Routing"]
    },
    {
      title: "Self-Service Tenant Onboarding Portal",
      metric: "Weeks → Hours",
      summary: "React + TypeScript multi-step wizard wired to backend APIs and LLM code-generation jobs that opens boilerplate code reviews for new tenants.",
      tags: ["React + TypeScript", "LLM Code Gen", "Tenant Onboarding"]
    },
    {
      title: "Batch Fleet Capacity Right-Sizing",
      metric: "−43% Compute Cost",
      summary: "Matched a high-volume batch processing fleet to memory-optimized EC2 hosts with auto-scaling boundaries.",
      tags: ["EC2 Spot", "Cost Optimization", "Capacity Planning"]
    }
  ],

  skillCategories: [
    {
      category: "Distributed Systems & AWS",
      items: ["Event-driven fan-out", "Claim-check pattern", "Jittered exponential backoff", "Step Functions orchestration", "Multi-tenant OIDC isolation", "Lambda, SQS, SNS, S3, ECS, KMS, IAM"]
    },
    {
      category: "Backend & Core Engineering",
      items: ["Kotlin (primary)", "Java", "TypeScript", "Python", "Smithy API models", "Bounded concurrency & memory caps", "Coroutines", "JUnit 5 & MockK"]
    },
    {
      category: "AI & LLM Engineering",
      items: ["Amazon Bedrock Knowledge Bases (RAG)", "Converse API", "Intent classification", "Strands Agents", "MCP servers", "Fail-closed pipelines"]
    },
    {
      category: "Databases & Search",
      items: ["DynamoDB (GSI, conditional & transactional writes)", "OpenSearch (search_after cursor pagination)", "TOCTOU safety", "S3 offload"]
    },
    {
      category: "DevOps & Safe Delivery",
      items: ["AWS CDK (TypeScript)", "CloudFormation", "Continuous Deployment with bake time", "CodeDeploy gradual shifting", "Composite alarms", "Synthetic canaries", "Primary on-call"]
    },
    {
      category: "Frontend & Testing",
      items: ["React + TypeScript", "Multi-step async wizards", "Web security (anti-CSRF, TLS 1.2+)", "Playwright & Cypress E2E testing"]
    }
  ]
};
