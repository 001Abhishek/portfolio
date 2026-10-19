export const portfolioData = {
  personalInfo: {
    name: "Abhishek Sudarshan Pathania",
    role: "Software Engineer & Full-Stack Developer",
    currentCompany: "Tata Consultancy Services",
    location: "Gujarat, India",
    email: "aprjaput321@gmail.com",
    github: "https://github.com/001Abhishek",
    linkedin: "https://www.linkedin.com/in/abhishek-s-pathania-095816137/",
    youtube: "https://www.youtube.com/channel/UCpud0pGbrDLfA3g5CnmjYcA/featured",
    resumeUrl: "./AbhishekResume.pdf",
    shortBio: "Software Developer passionate about crafting resilient backend architectures, scalable APIs, and modern responsive web applications.",
    aboutBio: [
      "I am a driven and self-motivated Software Developer with a Bachelor of Science in Computer Science from Gujarat Technological University. Currently contributing to mission-critical enterprise systems at Tata Consultancy Services.",
      "With a strong foundation in Java, Spring Boot, and modern web technologies, I love designing clean RESTful services, streamlining database transactions, and exploring modern cloud patterns. I continuously strive to elevate my craft, adhere to clean code principles (SOLID, MVC), and share knowledge with the developer community.",
      "In my free time, I enjoy developing side projects, experimenting with emerging tech stacks, writing technical blogs, and reading."
    ],
    education: {
      degree: "Bachelor of Science in Computer Science",
      institution: "Gujarat Technological University",
      period: "2015 — 2019",
      description: "Focused on Object-Oriented Programming, Data Structures & Algorithms, Database Management Systems, and Software Engineering."
    }
  },

  experience: [
    {
      id: "tcs",
      company: "Tata Consultancy Services",
      role: "Software Engineer",
      period: "June 2019 — Present",
      location: "India",
      badge: "Current Role",
      highlights: [
        "Architected and delivered Proof-of-Concepts (POCs) for a tier-1 European banking client migrating legacy architectures to Liferay DXP & modern Spring service layers.",
        "Engineered custom enterprise modules enabling secure, automated batch data migration across branches by orchestrating client RESTful APIs.",
        "Collaborated with cross-functional stakeholders to formulate structural API enhancements, increasing throughput and minimizing latency.",
        "Implemented reactive UI templates utilizing JSON structures and FTL templates, combining Liferay validators and custom JavaScript for frictionless user interactions."
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
        "Developed responsive user interfaces with HTML5, CSS3, JavaScript, Bootstrap, and XML.",
        "Earned high commendations from executive leadership and lead architects for code quality and turnaround speed."
      ],
      skills: ["PHP", "CodeIgniter", "MySQL", "JavaScript", "Bootstrap", "HTML/CSS", "XML"]
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
      category: "Backend & Core",
      skills: [
        { name: "Java (OOP)", level: "Advanced" },
        { name: "Spring Boot", level: "Advanced" },
        { name: "RESTful APIs", level: "Advanced" },
        { name: "Microservices", level: "Intermediate" },
        { name: "Data Structures & Algorithms", level: "Proficient" },
        { name: "Node.js / Express", level: "Intermediate" },
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
      category: "Databases & Storage",
      skills: [
        { name: "MySQL", level: "Advanced" },
        { name: "PostgreSQL", level: "Proficient" },
        { name: "MongoDB", level: "Intermediate" },
        { name: "Query Optimization", level: "Proficient" },
        { name: "Database Schema Design", level: "Advanced" }
      ]
    },
    {
      category: "DevOps, Tools & Methods",
      skills: [
        { name: "Git & GitHub", level: "Advanced" },
        { name: "GitHub Actions (CI/CD)", level: "Proficient" },
        { name: "Docker", level: "Intermediate" },
        { name: "Jenkins", level: "Intermediate" },
        { name: "JUnit / Mockito", level: "Proficient" },
        { name: "SOLID & Design Patterns", level: "Advanced" },
        { name: "JIRA & Agile", level: "Advanced" },
        { name: "SonarLint", level: "Proficient" }
      ]
    }
  ]
};
