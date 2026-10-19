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
      id: "portfolio",
      title: "Modern Developer Portfolio",
      description: "High-performance, responsive personal portfolio built with React 18, Vite, and Tailwind CSS. Features glassmorphism UI, theme toggle, modular data structure, and automated GitHub Pages CI/CD.",
      image: "./images/portfolio.png",
      tags: ["React", "Vite", "Tailwind CSS", "GitHub Actions", "CI/CD"],
      githubUrl: "https://github.com/001Abhishek/portfolio",
      liveUrl: "https://001abhishek.github.io/portfolio/",
      featured: true
    },
    {
      id: "covid-tracker",
      title: "Covid-19 Global Tracker",
      description: "Comprehensive data dashboard tracking real-time COVID-19 pandemic statistics across countries. Provides dynamic charts and metrics for active, recovered, and deceased cases.",
      image: "./images/covid.png",
      tags: ["React", "Chart.js", "REST APIs", "Bootstrap", "Data Viz"],
      githubUrl: "https://github.com/001Abhishek/covid_tracker",
      liveUrl: "https://github.com/001Abhishek/covid_tracker",
      featured: true
    },
    {
      id: "quotes-generator",
      title: "Dynamic Quotes Generator",
      description: "Web application generating curated inspirational quotes on demand with one-click social sharing, clipboard integration, and fluid transitions.",
      image: "./images/quotes.png",
      tags: ["JavaScript", "HTML5/CSS3", "Web APIs", "Responsive UI"],
      githubUrl: "https://github.com/001Abhishek/quotes_generator",
      liveUrl: "https://github.com/001Abhishek/quotes_generator",
      featured: true
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
