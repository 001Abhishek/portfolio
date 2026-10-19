export const portfolioData = {
  personalInfo: {
    name: "Abhishek Sudarshan Pathania",
    role: "System Development Engineer 2 (SDE 2)",
    currentCompany: "Amazon",
    location: "India",
    email: "aprjaput321@gmail.com",
    github: "https://github.com/001Abhishek",
    linkedin: "https://www.linkedin.com/in/abhishek-s-pathania-095816137/",
    youtube: "https://www.youtube.com/channel/UCpud0pGbrDLfA3g5CnmjYcA/featured",
    resumeUrl: "./AbhishekResume.pdf",
    headline: "I build and run distributed, event-driven systems on AWS, with a focus on architecture, scale, failure recovery and safe delivery.",
    shortBio: "System Development Engineer 2 @ Amazon specializing in distributed event-driven architectures, JVM/Kotlin serverless performance, resilient multi-day workflows, zero-trust cloud security, and LLM-assisted systems.",
    aboutBio: [
      "I am a System Development Engineer 2 (SDE 2) at Amazon (Amazon India Development Center) with a Computer Science Engineering degree from Gujarat Technological University.",
      "I build and operate distributed, event-driven architectures on AWS, with a rigorous focus on system design, bounded concurrency, failure recovery domains, and automated progressive delivery pipelines.",
      "My day-to-day spans optimizing high-throughput Kotlin/Java services, architecting Step Functions and SQS/SNS fan-out systems, enforcing multi-tenant tenant isolation, and implementing production AI & LLM applications on Amazon Bedrock."
    ],
    education: {
      degree: "Bachelor of Science in Computer Science & Engineering",
      institution: "Gujarat Technological University",
      period: "2015 — 2019",
      description: "Focused on Distributed Systems, Algorithms, Data Structures, Relational Database Management, and Object-Oriented Architecture."
    }
  },

  experience: [
    {
      id: "amazon",
      company: "Amazon",
      role: "System Development Engineer 2 (SDE 2)",
      period: "2021 — Present",
      location: "India",
      badge: "Current Role",
      highlights: [
        "Architecting and operating high-scale, event-driven distributed platforms and serverless JVM microservices on AWS (Kotlin, Java, TypeScript, Python).",
        "Driving large-scale zero-trust identity and storage access migrations with server-side tenant isolation, safe retries, and bounded memory caps.",
        "Halving operational recovery times (MTTR -70%) by instituting single-retry ownership per failure class, stall alarms, and idempotent bulk-recovery CLIs.",
        "Establishing team-wide progressive continuous deployment standards (bake time, composite alarms, CodeDeploy gradual shifting, synthetic canaries) raising full-CD from 48% to 84%."
      ],
      skills: ["Distributed Systems", "AWS (Lambda, ECS, Step Functions, DynamoDB, S3)", "Kotlin", "Java", "AWS CDK", "CodeDeploy", "Amazon Bedrock", "OpenSearch"]
    },
    {
      id: "tcs",
      company: "Tata Consultancy Services",
      role: "Software Engineer (TCS Digital)",
      period: "June 2019 — 2021",
      location: "India",
      badge: "Previous Role",
      highlights: [
        "Architected and delivered Proof-of-Concepts (POCs) for a tier-1 European banking client migrating legacy architectures to modern Spring service layers and Liferay DXP.",
        "Engineered custom enterprise modules enabling secure, automated batch data migration across branches by orchestrating client RESTful APIs.",
        "Collaborated with cross-functional stakeholders to formulate structural API enhancements, increasing throughput and minimizing latency.",
        "Implemented reactive UI templates utilizing JSON structures and FTL templates, combining validators and custom JavaScript for frictionless user interactions."
      ],
      skills: ["Java/J2EE", "Spring Boot", "Liferay 7.2 DXP", "RESTful APIs", "SQL", "JavaScript", "FTL", "JSON", "JSP"]
    },
    {
      id: "windex",
      company: "Windex Software Solution",
      role: "Software Developer Intern",
      period: "May 2018 — July 2018",
      location: "India",
      badge: "Internship",
      highlights: [
        "Contributed to full-stack development of a web portal compensating users for product and software reviews.",
        "Constructed modular controller and database query pipelines using PHP CodeIgniter and MySQL.",
        "Developed responsive user interfaces with HTML5, CSS3, JavaScript, Bootstrap, and XML."
      ],
      skills: ["PHP", "CodeIgniter", "MySQL", "JavaScript", "Bootstrap", "HTML/CSS"]
    }
  ],

  projects: [
    {
      id: "zero-trust-access",
      title: "Zero-Trust Access to Stored Assets",
      category: "Distributed & Serverless",
      badge: "Zero-Trust Security & Storage",
      metricHighlight: "Zero Pre-Prod Errors",
      problem: "Services shared stored assets through replayable pre-signed URLs, and the storage layer could not tell one consumer from another.",
      role: "Designed and led a phased migration to identity-bound, authenticated access across an ingestion service and its consumers, with server-side tenant isolation, safe retries, and bounded memory.",
      impact: "Zero errors in pre-production, eliminated a class of silent data corruption, and ensured image content securely reaches multimodal models.",
      impactMetrics: [
        { label: "Pre-Prod Errors", value: "0 Errors" },
        { label: "Data Integrity", value: "Corruption Eliminated" },
        { label: "Security", value: "Identity-Bound OIDC" },
        { label: "Model Ingestion", value: "Multimodal Safe" }
      ],
      tags: ["AWS S3", "KMS Context", "OIDC Auth", "Tenant Isolation", "Kotlin", "Multimodal Ingestion", "Bounded Memory"],
      type: "Production Architecture"
    },
    {
      id: "serverless-fanout",
      title: "Serverless Fan-Out at Scale",
      category: "Distributed & Serverless",
      badge: "High-Throughput Fan-Out",
      metricHighlight: "Cold Start 8–11s → ~1.5s",
      problem: "A Lambda fan-out platform had JVM cold starts that leaked into user-facing latency, a hard queue-message size limit, and retries that could not ride out a rate-limited dependency.",
      role: "Profiled and tuned cold start, added the claim-check pattern for large payloads, moved deployments to gradual shifting with auto-rollback, and redesigned the retry budget.",
      impact: "Cold start dropped from 8–11 s to ~1.5 s, P99 latency reduced by 70%, eliminated payload ceilings, and absorbed throttle bursts without requesting quota increases.",
      impactMetrics: [
        { label: "Cold Start", value: "8–11s → ~1.5s" },
        { label: "P99 Latency", value: "-70%" },
        { label: "Payload Limit", value: "Uncapped (Claim-Check)" },
        { label: "Throttling", value: "Zero Quota Increase" }
      ],
      tags: ["AWS Lambda", "SQS Fan-Out", "Claim-Check Pattern", "JVM Tuning", "Provisioned Concurrency", "CodeDeploy"],
      type: "Production Architecture"
    },
    {
      id: "self-healing-workflows",
      title: "Self-Healing Workflows and Bulk Recovery",
      category: "Resilience & Workflows",
      badge: "Fault-Tolerant Orchestration",
      metricHighlight: "Recovery 6–8h → 10–15 min",
      problem: "Multi-day workflows repeated side effects under layered retries, hid stuck runs until their final timeout, and needed hours of manual recovery after outages.",
      role: "Gave each failure class one retry owner, added stall alarms, and built an idempotent bulk-recovery CLI (redrive, restart from failed step, dry-run).",
      impact: "Recovery time slashed from 6–8 hours to 10–15 minutes with zero duplicate processing, MTTR dropped by 70%, and saved ~15% compute on Spot instances.",
      impactMetrics: [
        { label: "Recovery Time", value: "6–8h → 10–15 min" },
        { label: "MTTR Reduction", value: "-70%" },
        { label: "Compute Savings", value: "~15% on Spot" },
        { label: "Processing Safety", value: "Zero Duplicates" }
      ],
      tags: ["AWS Step Functions", "EC2 Spot", "Idempotent Redrive", "Stall Alarms", "Recovery CLI", "Resilience"],
      type: "Production Architecture"
    },
    {
      id: "scalable-data-access",
      title: "Scalable, Correct Data Access",
      category: "Data & Storage",
      badge: "Consistency & Cursor Pagination",
      metricHighlight: "~65% Faster Lookups",
      problem: "A history API capped results across two search indexes, and a schemaless store let duplicate names and dangling references break behavior silently.",
      role: "Designed backward-compatible cursor pagination with tie-breakers, and added idempotent, race-safe writes and integrity checks.",
      impact: "Delivered full history at any depth for every existing caller, achieved ~65% faster lookups, and eradicated silent data integrity failures.",
      impactMetrics: [
        { label: "Lookup Speed", value: "~65% Faster" },
        { label: "History Depth", value: "Uncapped at Any Depth" },
        { label: "Race Safety", value: "TOCTOU Safe" },
        { label: "API Contract", value: "Backward Compatible" }
      ],
      tags: ["DynamoDB", "OpenSearch", "search_after", "Conditional Writes", "Smithy API", "TOCTOU-Safe"],
      type: "Production Architecture"
    },
    {
      id: "progressive-delivery",
      title: "Progressive Delivery and Production Safety",
      category: "Delivery & Safety",
      badge: "Continuous Deployment Standard",
      metricHighlight: "Full-CD 48% → 84%",
      problem: "Releases waited on manual approvals, pipelines stayed blocked for weeks, and issues surfaced only when customers reported them.",
      role: "Set the team's delivery standard (bake time, composite alarms, auto-rollback, staged rollout) and built cross-account synthetic canaries.",
      impact: "Full-CD deployments jumped from 48% to 84%, oldest code in production dropped from 53 to 16 days, and caught 17 issues before any customer reported them.",
      impactMetrics: [
        { label: "Full-CD Rate", value: "48% → 84%" },
        { label: "Production Lead Time", value: "53 → 16 Days" },
        { label: "Pre-Caught Issues", value: "17 Issues" },
        { label: "Deployment Safety", value: "Auto-Rollback" }
      ],
      tags: ["AWS CDK", "CodeDeploy", "Composite Alarms", "Synthetic Canaries", "Bake Time", "Continuous Delivery"],
      type: "Production Architecture"
    }
  ],

  alsoBuilt: [
    {
      title: "RAG Assistant for Engineering Teams",
      category: "AI & LLM Engineering",
      metric: "95% Accuracy",
      description: "Slack bot built on Amazon Bedrock Knowledge Bases with scheduled indexing of code, docs, and tickets. LLM-first intent classification raised question-routing accuracy from ~60% to ~95%, adopted by 25+ teams.",
      tags: ["Amazon Bedrock", "RAG", "Knowledge Bases", "Slack Bot", "Intent Routing"]
    },
    {
      title: "Self-Service Tenant Onboarding Portal",
      category: "AI & Full-Stack",
      metric: "Weeks → Hours",
      description: "Multi-step interactive onboarding wizard wired to backend APIs and LLM code generation jobs that automatically opens boilerplates and code reviews for new tenants, cutting onboarding from weeks to hours.",
      tags: ["React + TypeScript", "LLM Code Gen", "Tenant Onboarding", "Full-Stack"]
    },
    {
      title: "Batch Fleet Capacity Right-Sizing",
      category: "Cloud Infrastructure",
      metric: "-43% Compute Cost",
      description: "Profiled utilization and matched batch processing fleet to memory-optimized EC2 hosts with auto-scaling boundaries, achieving a 43% reduction in annual compute spend.",
      tags: ["EC2 Spot", "Cost Optimization", "Capacity Planning", "Batch Fleet"]
    }
  ],

  skillCategories: [
    {
      category: "Distributed Systems & Cloud",
      summary: "Event-driven, high-concurrency systems engineered for scale, tenant isolation, and failure recovery.",
      skills: [
        { name: "Event-Driven Architecture", detail: "Queue-based fan-out, claim-check for large messages, async callback tokens" },
        { name: "Resilience & Failure Recovery", detail: "One retry owner per failure class, jittered exponential backoff with time budgets, idempotent redelivery, dead-letter queues, bulk redrive" },
        { name: "Scalability & Concurrency", detail: "Cold-start tuning, provisioned concurrency, bounded thread & connection pools, token bucket rate limiters" },
        { name: "Long-Running Workflows", detail: "Step Functions orchestration, per-step timeouts, stall detection, multi-day executions" },
        { name: "Multi-Tenant Security", detail: "OIDC service-to-service auth, caller-identity propagation, tenant isolation, KMS encryption context, least-privilege IAM" },
        { name: "AWS Core", detail: "Lambda, ECS Fargate, EC2 Spot, SQS, SNS, Step Functions, S3, API Gateway, ALB, VPC, PrivateLink, KMS, IAM" }
      ]
    },
    {
      category: "Backend & Core Engineering",
      summary: "Modern typed languages, contract-first API design, memory guards, and resilient integration.",
      skills: [
        { name: "Languages", detail: "Kotlin (primary), Java, TypeScript, Python" },
        { name: "API Design", detail: "REST/JSON from Smithy models, backward-compatible contracts, cursor pagination, feature flags" },
        { name: "Concurrency & Resource Control", detail: "Permits, semaphores, bounded thread pools, memory caps on untrusted input (decompression-bomb guards)" },
        { name: "Service Integration", detail: "Apache HttpClient tuning, retries with repeatable payloads, strict response status validation" },
        { name: "Frameworks & Libraries", detail: "Dagger, Guice, Jackson, Kotlin coroutines, FFmpeg & Thumbnailator" },
        { name: "Testing & Verification", detail: "JUnit 5, MockK, Mockito, pytest, wire-format pinning contract tests" }
      ]
    },
    {
      category: "AI & LLM Engineering",
      summary: "Production RAG, agent runtimes, and fail-closed evaluation pipelines on Amazon Bedrock.",
      skills: [
        { name: "RAG & Knowledge Bases", detail: "Amazon Bedrock Knowledge Bases with scheduled indexing of code, documentation, and tickets" },
        { name: "LLM Applications", detail: "Bedrock Converse API, intent classification, structured code-parsed outputs, intent-based model routing" },
        { name: "Agent Runtimes", detail: "Strands Agents, MCP servers, A2A and HTTP agent runtimes, multimodal inputs" },
        { name: "Reliable LLM Pipelines", detail: "Fail-closed evaluation, strict input size/count bounds, zero decisions on partial evidence" },
        { name: "LLM Code Generation", detail: "Automated onboarding portal generating boilerplate code reviews for newly provisioned tenants" }
      ]
    },
    {
      category: "Databases & Search",
      summary: "High-throughput schemaless storage, cursor pagination, and race-condition safety.",
      skills: [
        { name: "DynamoDB", detail: "Key and GSI design, conditional writes for idempotency & race safety, transactional writes, PITR" },
        { name: "OpenSearch", detail: "search_after cursor pagination, sort tie-breakers, multi-index queries, query latency tuning" },
        { name: "Data Integrity", detail: "Index uniqueness checks, reference checks prior to deletion, TOCTOU-safe updates" },
        { name: "S3 Storage", detail: "Large-payload claim-check offload, tightly scoped producer/consumer IAM policies" }
      ]
    },
    {
      category: "DevOps, CI/CD & Observability",
      summary: "Infrastructure as Code, progressive safe delivery, synthetic canaries, and incident response.",
      skills: [
        { name: "Infrastructure as Code", detail: "AWS CDK (TypeScript), CloudFormation, reusable construct libraries, 30+ package framework migrations" },
        { name: "CI/CD & Delivery", detail: "Full continuous deployment, bake time, staged rollout, gradual traffic shifting (CodeDeploy), composite alarm auto-rollback" },
        { name: "Observability", detail: "CloudWatch metrics, composite alarms, Logs Insights, baseline threshold tuning, stall alarms, synthetic canaries" },
        { name: "Incident Response", detail: "Primary on-call rotation, root-cause analysis, runbooks, AI-assisted first-pass investigation" },
        { name: "Containers & Tooling", detail: "Docker, container Lambdas, Gradle, npm, bulk-operation CLIs with dry-run, detekt & ktlint" }
      ]
    },
    {
      category: "Frontend & Web",
      summary: "React with TypeScript, robust validation flows, custom hooks, and synthetic canaries.",
      skills: [
        { name: "React + TypeScript", detail: "Multi-step wizards with validation and edit flows, custom polling hooks for async jobs" },
        { name: "Web Security", detail: "Anti-CSRF tokens, authenticated sessions, TLS 1.2+ policies" },
        { name: "End-to-End Testing", detail: "Cypress, Playwright, timing-resilient polling assertions, synthetic UI canaries" },
        { name: "Full-Stack Integration", detail: "UIs seamlessly wired to backend service APIs and LLM generation jobs" }
      ]
    }
  ]
};
