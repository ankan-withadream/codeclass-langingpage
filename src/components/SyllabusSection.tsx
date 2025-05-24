import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Clock, BookOpen, Users, Download } from 'lucide-react';
import Button from './shared/Button';

const syllabusData = [
  {
    module: 1,
    title: "Python: What & Why?",
    subtopics: [
      "History & Philosophy of Python",
      "Use-cases & ecosystem overview (Web, Data, AI, Automation, Apps)",
      "Versions & release cycle; CPython vs. other implementations"
    ],
    hours: 4,
    sessions: 2
  },
  {
    module: 2,
    title: "Python: How?",
    subtopics: [
      "Local setup (Win/macOS/Linux)",
      "VS Code, local IDE setup",
      "GitHub Codespaces, cloud IDE setup",
      "Virtual environments (venv, pipenv)",
      "pip & package management",
      "How Python Runs (interpreted vs. compiled, bytecode, CPython execution pipeline)"
    ],
    hours: 8,
    sessions: 4
  },
  {
    module: 3,
    title: "Git & GitHub Basics",
    subtopics: [
      "Repository init, commit, branch, merge",
      "Remote workflows: push, pull, PRs",
      "Collaboration & code reviews"
    ],
    hours: 6,
    sessions: 3
  },
  {
    module: 4,
    title: "Coding with Python (Basics)",
    subtopics: [
      "Comments & docstrings",
      "Variables & data types (int, float, str, bool)",
      "Sequential types (list, tuple, set, dict)",
      "Operators (arithmetic, comparison, logical, bitwise)",
      "Indentation & code blocks",
      "Control flow: if/elif/else",
      "Loops: for, while, comprehensions",
      "Functions: def, params, return values",
      "Error handling: try/except/finally",
      "Basic I/O: print, input"
    ],
    hours: 6,
    sessions: 3
  },
  {
    module: 5,
    title: "Programming with Python (Adv.)",
    subtopics: [
      "Classes & objects",
      "OOP (encapsulation, inheritance, polymorphism)",
      "Special methods & class vs. instance attrs",
      "Problem solving & algorithmic thinking",
      "Memory-optimized programming",
      "Functional tools: lambda, map/filter, comprehensions",
      "Debugging & profiling techniques",
      "Python libraries overview (requests, pathlib, datetime, etc.)",
      "Error handling"
    ],
    hours: 6,
    sessions: 3
  },
  {
    module: 6,
    title: "Computer Science Concepts",
    subtopics: [
      "Data structures overview (arrays, lists, dicts, sets, trees)",
      "Algorithms & Big-O primer",
      "Hardware vs. software architecture basics",
      "Binary data representation & encoding",
      "Memory: RAM & ROM, stack vs. heap",
      "OS fundamentals (processes, threads, file systems)",
      "Client-server models & networking in between",
      "Database fundamentals",
      "Intro to cloud (IaaS/PaaS/SaaS)"
    ],
    hours: 10,
    sessions: 5
  },
  {
    module: 7,
    title: "Basics of Web & the Internet",
    subtopics: [
      "Parts of a data packet",
      "HTTP/S & URLs",
      "DNS, hosting, domains, IP addressing",
      "WebSockets overview",
      "Front-end vs. back-end roles",
      "HTML at a glance",
      "CSS at a glance",
      "Javascript at a glance"
    ],
    hours: 6,
    sessions: 3
  },
  {
    module: 8,
    title: "Interactive CLI Tools",
    subtopics: [
      "argparse & click",
      "User prompts & validation",
      "Logging",
      "Packaging CLI apps (entry points)"
    ],
    hours: 8,
    sessions: 4
  },
  {
    module: 9,
    title: "Local File Handling",
    subtopics: [
      "File I/O basics",
      "Handling text, CSV, JSON, binary files",
      "pathlib & os modules",
      "File metadata & permissions",
      "Working with archives (zip, tar)"
    ],
    hours: 6,
    sessions: 3
  },
  {
    module: 10,
    title: "Scripting with Python",
    subtopics: [
      "OS automation (os, subprocess)",
      "Scheduling: cron & schedulers libraries",
      "Sending emails (smtplib)",
      "File backups & reporting scripts"
    ],
    hours: 8,
    sessions: 4
  },
  {
    module: 11,
    title: "Database Operations",
    subtopics: [
      "SQLite3 setup & usage",
      "SQLAlchemy ORM basics",
      "CRUD operations & migrations",
      "Connection pooling & transactions"
    ],
    hours: 8,
    sessions: 4
  },
  {
    module: 12,
    title: "Concepts of API (REST)",
    subtopics: [
      "What is an API?",
      "Types of APIs (REST, GraphQL, gRPC)",
      "Request vs. response structure",
      "REST principles & HTTP methods",
      "JSON schemas, status codes & error handling",
      "Auth (API keys, tokens, OAuth)"
    ],
    hours: 6,
    sessions: 3
  },
  {
    module: 13,
    title: "Web Server Development",
    subtopics: [
      "Flask vs. FastAPI deep dive",
      "Routing, middleware & dependency injection",
      "Templating with Jinja2",
      "Database integration (SQLAlchemy)",
      "Building a CRUD app",
      "JWT authentication"
    ],
    hours: 10,
    sessions: 5
  },
  {
    module: 14,
    title: "Webapp Development",
    subtopics: [
      "Full-stack webapp with Django (models, views, templates)",
      "REST API with Django REST Framework",
      "Session & user management",
      "Deployment to cloud hosts"
    ],
    hours: 10,
    sessions: 5
  },
  {
    module: 15,
    title: "Desktop App Development",
    subtopics: [
      "GUI frameworks (Tkinter, PyQt)",
      "Layouts",
      "Widgets",
      "Event loops",
      "Packaging with PyInstaller"
    ],
    hours: 8,
    sessions: 4
  },
  {
    module: 16,
    title: "Data Analysis (Basics → Intermediate)",
    subtopics: [
      "NumPy array operations & broadcasting",
      "Pandas DataFrame: selection, indexing, groupby & pivot",
      "Data cleaning: handling missing & duplicate data",
      "Data transformation: merging, reshaping & time series",
      "Exploratory data analysis best practices",
      "Visualization with Matplotlib & introductory Seaborn",
      "Jupyter Notebook & magic commands",
      "Exporting results (CSV, Excel, HTML reports)"
    ],
    hours: 16,
    sessions: 8
  },
  {
    module: 17,
    title: "Web Scraping",
    subtopics: [
      "HTTP basics with requests",
      "Parsing HTML with BeautifulSoup",
      "Advanced crawling with Scrapy",
      "Handling JS-rendered pages (Selenium/Playwright)",
      "Respectful scraping: robots.txt, rate limits & proxies",
      "Storing scraped data (CSV, JSON, DB)"
    ],
    hours: 8,
    sessions: 4
  },
  {
    module: 18,
    title: "Machine Learning Fundamentals",
    subtopics: [
      "Introduction to Machine Learning concepts",
      "Supervised vs Unsupervised learning",
      "Feature engineering and data preprocessing",
      "Model evaluation and validation techniques",
      "Scikit-learn basics and common algorithms",
      "Cross-validation and hyperparameter tuning"
    ],
    hours: 10,
    sessions: 5
  },
  {
    module: 19,
    title: "Concepts of Applied AI",
    subtopics: [
      "AI vs. ML vs. Deep Learning overview",
      "AI Models",
      "LLM",
      "Prompt Engineering",
      "Custom model training",
      "AI Agents",
      "Multi agent workflows",
      "MCP tools"
    ],
    hours: 8,
    sessions: 4
  },
  {
    module: 20,
    title: "Gen AI-Powered App Development",
    subtopics: [
      "Introduction to LLMs & embeddings",
      "Using pre cooked LLM APIs",
      "Prompt engineering patterns & best practices",
      "Retrieval-augmented generation (RAG) basics",
      "Integrating LLMs into a Python app (streamlit/Flask)"
    ],
    hours: 10,
    sessions: 5
  },
  {
    module: 21,
    title: "Gen AI-Assisted Software Development",
    subtopics: [
      "AI assisted coding",
      "AI-driven testing: generating unit & integration tests",
      "Automated documentation & docstring generation",
      "AI-powered refactoring suggestions",
      "Ethical considerations & bias mitigation"
    ],
    hours: 8,
    sessions: 4
  }
];

const projects = {
  title: "Real-Life Projects (2)",
  subtopics: [
    "Project 1: Full-stack webapp or CLI/Desktop app + DB",
    "Project 2: Gen AI-powered webapp or CLI/Desktop app",
    "Milestones, presentations & code reviews"
  ],
  hours: 40,
  sessions: 20
};

const SyllabusSection: React.FC = () => {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);
  const [showAllModules, setShowAllModules] = useState(false);

  const toggleModule = (moduleNumber: number) => {
    setExpandedModule(expandedModule === moduleNumber ? null : moduleNumber);
  };

  const displayedModules = showAllModules ? syllabusData : syllabusData.slice(0, 8);
  const totalHours = syllabusData.reduce((sum, module) => sum + module.hours, 0) + projects.hours;
  const totalSessions = syllabusData.reduce((sum, module) => sum + module.sessions, 0) + projects.sessions;

  return (
    <section id="syllabus" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Complete Curriculum</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            A comprehensive 21-module journey covering everything from Python fundamentals to advanced AI development
          </p>
          
          {/* Course Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-brand-primary/10">
              <div className="flex items-center justify-center mb-3">
                <Clock className="h-8 w-8 text-brand-primary" />
              </div>
              <div className="text-3xl font-bold text-brand-text">{totalHours}</div>
              <div className="text-sm text-gray-600">Total Hours</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-brand-primary/10">
              <div className="flex items-center justify-center mb-3">
                <BookOpen className="h-8 w-8 text-brand-primary" />
              </div>
              <div className="text-3xl font-bold text-brand-text">{totalSessions}</div>
              <div className="text-sm text-gray-600">Live Sessions</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-brand-primary/10">
              <div className="flex items-center justify-center mb-3">
                <Users className="h-8 w-8 text-brand-primary" />
              </div>
              <div className="text-3xl font-bold text-brand-text">21</div>
              <div className="text-sm text-gray-600">Modules</div>
            </div>
          </div>
        </div>

        {/* Modules List */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {displayedModules.map((module) => (
              <div 
                key={module.module}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleModule(module.module)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-brand-primary rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">{module.module}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{module.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                        <span>{module.hours} hours</span>
                        <span>•</span>
                        <span>{module.sessions} sessions</span>
                      </div>
                    </div>
                  </div>
                  {expandedModule === module.module ? (
                    <ChevronUp className="h-5 w-5 text-brand-secondary" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-brand-secondary" />
                  )}
                </button>
                
                {expandedModule === module.module && (
                  <div className="px-6 pb-6">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-3">What you'll learn:</h4>
                      <ul className="space-y-2">
                        {module.subtopics.map((subtopic, index) => (
                          <li key={index} className="flex items-start">
                            <div className="h-2 w-2 rounded-full bg-brand-primary mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm">{subtopic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Projects Section */}
            <div className="bg-gradient-to-r from-brand-primary to-brand-secondary rounded-lg shadow-sm overflow-hidden">
              <div className="p-6 text-white">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">🎯</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{projects.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-white text-opacity-90 mt-1">
                      <span>{projects.hours} hours</span>
                      <span>•</span>
                      <span>{projects.sessions} sessions</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg p-4">
                  <h4 className="font-medium text-white mb-3">Capstone Projects:</h4>
                  <ul className="space-y-2">
                    {projects.subtopics.map((subtopic, index) => (
                      <li key={index} className="flex items-start">
                        <div className="h-2 w-2 rounded-full bg-white mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-white text-opacity-90 text-sm">{subtopic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Show More/Less Button */}
          {!showAllModules && (
            <div className="text-center mt-8">
              <Button 
                variant="outline" 
                onClick={() => setShowAllModules(true)}
              >
                View All {syllabusData.length} Modules
              </Button>
            </div>
          )}

          {/* Download Syllabus */}
          <div className="text-center mt-12">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <Download className="h-12 w-12 text-brand-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Download Complete Syllabus</h3>
              <p className="text-gray-600 mb-6">
                Get the detailed curriculum with learning objectives and project requirements
              </p>
              <Button 
                href="/dist/assets/syllabus.html" 
                variant="primary"
                onClick={() => window.open('/dist/assets/syllabus.html', '_blank')}
              >
                <Download className="h-4 w-4 mr-2" />
                Download Syllabus PDF
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SyllabusSection;
