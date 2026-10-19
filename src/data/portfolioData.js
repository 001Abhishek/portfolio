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
    shortBio: "System Development Engineer 2 @ Amazon specializing in large-scale distributed systems, mission-critical security migrations, AI-powered backend systems, and cloud-native architectures.",
    aboutBio: [
      "I am a System Development Engineer 2 (SDE 2) at Amazon (Amazon India Development Center) with a strong foundation in Computer Science Engineering from Gujarat Technological University.",
      "At Amazon, I focus on engineering resilient distributed systems, driving critical infrastructure and security migrations, and architecting AI-powered backend workflows capable of operating seamlessly at massive global scale.",
      "Prior to Amazon, I contributed to enterprise banking POCs and high-throughput data migration microservices at Tata Consultancy Services (TCS Digital). I am passionate about system design, performance profiling, clean code architecture (SOLID, MVC), and sharing insights across the engineering community."
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
        "Architecting and optimizing large-scale distributed systems and high-throughput backend services powering mission-critical workflows at Amazon.",
        "Leading critical enterprise-grade security migrations and infrastructure modernization initiatives with zero operational downtime.",
        "Designing and integrating AI-driven backend automation pipelines and operational intelligence systems.",
        "Championing operational excellence, rigorous code reviews, automated CI/CD deployments, and high-availability design patterns across distributed teams."
      ],
      skills: ["Distributed Systems", "Java", "AWS", "Microservices Architecture", "System Design", "Cloud Infrastructure", "Security Migrations", "AI Automation"]
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
      id: "sec-migration",
      title: "Distributed Security & Fleet Migration Platform",
      category: "Distributed Systems",
      context: "Amazon Production Fleet & Infrastructure",
      badge: "Scale: Millions of RPS",
      metricHighlight: "Zero Downtime Migration",
      description: "Engineered and executed large-scale zero-downtime security authorization migrations across high-concurrency multi-region distributed services.",
      challenge: "Modernizing core authorization frameworks across mission-critical production fleets without causing latency spikes, service degradation, or customer disruption.",
      architectureHighlights: [
        "Designed multi-phase canary rollout mechanisms with automated health-check telemetry and instantaneous automated rollbacks.",
        "Constructed high-throughput token validation and permission caching pipelines supporting millions of requests per second.",
        "Implemented circuit breakers, exponential backoff with jitter, and adaptive rate limiters to safeguard against thundering-herd cascades."
      ],
      impactMetrics: [
        { label: "Availability", value: "99.999%" },
        { label: "Customer Impact", value: "Zero Downtime" },
        { label: "Throughput", value: "Millions RPS" },
        { label: "Scope", value: "Multi-Region" }
      ],
      tags: ["Distributed Systems", "AWS (Lambda, ECS, DynamoDB)", "Java", "IAM Security", "CloudWatch", "Microservices"],
      type: "Production Architecture"
    },
    {
      id: "ai-telemetry",
      title: "AI-Driven Telemetry & Automated Self-Healing Engine",
      category: "Cloud & Infrastructure",
      context: "Operational Intelligence & Reliability @ Amazon",
      badge: "AI & Stream Processing",
      metricHighlight: "40%+ MTTR Reduction",
      description: "Architected an intelligent telemetry analytics pipeline that evaluates streaming service health signals and automates production operational mitigations.",
      challenge: "Diagnosing complex distributed microservice failures rapidly across massive telemetry volumes and reducing operator alert fatigue.",
      architectureHighlights: [
        "Engineered real-time stream ingestion pipelines processing high-velocity metric and log streams to detect statistical anomalies.",
        "Integrated AI/ML-assisted root-cause diagnosis that correlates latency anomalies with upstream dependencies and fleet deployments.",
        "Developed automated remediation runners capable of mitigating common fault patterns autonomously, slashing human intervention time."
      ],
      impactMetrics: [
        { label: "MTTR Reduction", value: "40%+" },
        { label: "Event Pipeline", value: "Real-Time Streaming" },
        { label: "Resolution", value: "Autonomous Mitigation" },
        { label: "Telemetry", value: "Distributed Logs & Metrics" }
      ],
      tags: ["AWS EventBridge", "Kinesis / SQS", "Python & Java", "AI/ML Diagnostics", "CloudWatch", "Distributed Tracing"],
      type: "Production Architecture"
    },
    {
      id: "data-migration-engine",
      title: "High-Throughput Branch Data Migration & Reconciliation Engine",
      category: "Enterprise Systems",
      context: "Enterprise Retail Platform @ TCS",
      badge: "High-Concurrency Batch Pipeline",
      metricHighlight: "100% Data Fidelity",
      description: "Developed an asynchronous distributed data orchestration pipeline migrating multi-tenant user accounts and stateful records between branch nodes.",
      challenge: "Safely orchestrating massive data migration across disparate branch networks with strict relational consistency and strict rate quotas.",
      architectureHighlights: [
        "Engineered an idempotent batch processing worker cluster leveraging client RESTful APIs with adaptive backpressure control.",
        "Created an automated schema mapping and checksum reconciliation engine guaranteeing zero data loss or discrepancy.",
        "Implemented dead-letter retry queues with compensation transactions to handle transient network partitions gracefully."
      ],
      impactMetrics: [
        { label: "Data Integrity", value: "100% Fidelity" },
        { label: "Data Loss", value: "Zero Records Lost" },
        { label: "Architecture", value: "Idempotent Batching" },
        { label: "Concurrency", value: "Adaptive Rate Throttling" }
      ],
      tags: ["Java", "Spring Boot", "RESTful APIs", "SQL Optimization", "Batch Processing", "Redis", "JMS"],
      type: "Enterprise System"
    },
    {
      id: "banking-dxp",
      title: "Core Banking Modernization & Service Architecture",
      category: "Enterprise Systems",
      context: "Tier-1 European Banking Portal @ TCS",
      badge: "Enterprise Modernization",
      metricHighlight: "35% Latency Improvement",
      description: "Architected modern microservice layers and dynamic presentation tiers for a European tier-1 bank migrating from legacy monoliths.",
      challenge: "Deconstructing brittle monolithic architectures into scalable, secure services complying with rigorous European banking standards.",
      architectureHighlights: [
        "Designed RESTful service gateways abstracting legacy core banking systems to deliver unified, high-speed API endpoints.",
        "Engineered dynamic UI templates utilizing JSON structures and FTL with multi-tier validation, cutting submission round-trips.",
        "Integrated financial-grade OAuth access policies and distributed caching layers to guarantee sub-second account summary rendering."
      ],
      impactMetrics: [
        { label: "Latency", value: "35% Faster" },
        { label: "Audience", value: "500k+ Active Users" },
        { label: "Compliance", value: "Banking Regulations" },
        { label: "Pattern", value: "Microservices Gateway" }
      ],
      tags: ["Java / J2EE", "Spring Boot", "Liferay DXP", "Microservices Gateway", "Oracle SQL", "REST APIs"],
      type: "Enterprise System"
    }
  ],

  skillCategories: [
    {
      category: "Distributed Systems & Cloud",
      skills: [
        { name: "Distributed Systems", level: "Advanced" },
        { name: "AWS Cloud", level: "Advanced" },
        { name: "System Design", level: "Advanced" },
        { name: "Microservices", level: "Advanced" },
        { name: "Security Migrations", level: "Advanced" },
        { name: "AI Backend Automation", level: "Proficient" }
      ]
    },
    {
      category: "Backend & Core",
      skills: [
        { name: "Java (OOP)", level: "Expert" },
        { name: "Spring Boot", level: "Advanced" },
        { name: "RESTful APIs", level: "Advanced" },
        { name: "Data Structures & Algorithms", level: "Advanced" },
        { name: "Node.js / Express", level: "Proficient" },
        { name: "Hibernate / JPA", level: "Proficient" }
      ]
    },
    {
      category: "Frontend & Web",
      skills: [
        { name: "React", level: "Proficient" },
        { name: "JavaScript (ES6+)", level: "Advanced" },
        { name: "Tailwind CSS", level: "Advanced" },
        { name: "HTML5 & CSS3", level: "Expert" },
        { name: "Bootstrap", level: "Advanced" },
        { name: "Responsive UI/UX", level: "Advanced" }
      ]
    },
    {
      category: "Databases, DevOps & Tools",
      skills: [
        { name: "MySQL / PostgreSQL", level: "Advanced" },
        { name: "DynamoDB / NoSQL", level: "Proficient" },
        { name: "Git & GitHub Actions", level: "Advanced" },
        { name: "Docker & Containers", level: "Proficient" },
        { name: "CI/CD & Operational Excellence", level: "Advanced" },
        { name: "SOLID & Design Patterns", level: "Expert" }
      ]
    }
  ]
};
