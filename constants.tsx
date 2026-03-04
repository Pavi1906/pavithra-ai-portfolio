import { Project, EngineeringNote } from './types';
import { Server, Database, Brain, Globe, Shield, Terminal, Zap, Cloud, Layers, Lock, Eye, Accessibility } from 'lucide-react';
import React from 'react';

export const PAVITHRA_PROFILE = {
  name: "Pavithra P",
  title: "AI Systems & Full Stack Engineer",
  tagline: "I design and deploy secure, scalable web systems with structured backend logic and AI integration.",
  about: {
    focus: "My engineering focus is on building deterministic systems that bridge the gap between stochastic AI models and rigid business logic. I don't just write code; I design data flows.",
    philosophy: "I believe in 'Architecture First'. Before a single line of code is written, I define the state models, API contracts, and security boundaries. This prevents technical debt and ensures scalability.",
    discipline: "Deployment is not an afterthought. I treat infrastructure as code, enforcing strict environment parity, automated testing, and observability from day one."
  },
  socials: {
    github: "https://github.com/Pavi1906",
    linkedin: "https://www.linkedin.com/in/pavithra-p-86ab722a4/",
    email: "pavithra4978@gmail.com",
    resume: "#" // Placeholder for resume link
  }
};

export const TECH_STACK = {
  frontend: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  backend: ['Node.js', 'Express', 'PostgreSQL', 'Redis'],
  ai_ml: ['Python', 'TensorFlow', 'Gemini API', 'LangChain'],
  infrastructure: ['Docker', 'Google Cloud Run', 'Nginx', 'GitHub Actions'],
  tools: ['Git', 'Postman', 'Figma', 'Jest']
};

export const PROJECTS: Project[] = [
  {
    id: 'hack2hire',
    title: 'Hack2Hire - Adaptive Interview Engine',
    category: 'Flagship System',
    problem: 'Traditional mock interview platforms lack deterministic scoring and adaptive difficulty control, leading to subjective and inconsistent candidate feedback.',
    solution: 'Designed a TypeScript-based deterministic state engine implementing policy-driven evaluation logic with adaptive difficulty modulation based on candidate response latency and accuracy.',
    architecture: ['React Frontend', 'Express API Layer', 'Deterministic Engine', 'Scoring Module', 'AI Feedback Layer'],
    techStack: ['TypeScript', 'React', 'Node.js', 'XState', 'PostgreSQL', 'Gemini API'],
    engineeringDecisions: [
      'Implemented a Finite State Machine (FSM) using XState to guarantee deterministic interview flows and prevent impossible states.',
      'Designed a "Policy-Driven" evaluation system where scoring rules are decoupled from the core engine, allowing for hot-swappable interview criteria.',
      'Secured API access via a backend proxy layer to prevent exposure of AI model keys and enforce rate limiting.'
    ],
    outcomes: [
      'Optimized control flow reduced evaluation latency by 35% in local benchmarks.',
      'Achieved 100% state determinism in automated regression testing.',
      'Engine designed with isolated session states to support concurrent interview flows.'
    ],
    benchmarkContext: 'Latency measured via local load testing (Artillery) with 100 concurrent virtual users on M2 hardware. Determinism verified via 500+ automated regression test runs.',
    loadTestSnapshot: {
      totalUsers: '100 VUs',
      peakRPS: '185 req/sec',
      errorRate: '0.0%',
      p95Latency: '240ms'
    },
    threatModel: {
      risks: ['Prompt Injection', 'API Key Exfiltration', 'Rate Limit Abuse'],
      mitigations: ['Input Sanitization', 'Backend Proxy', 'Token Bucket Limiter']
    },
    operationalConstraints: [
      'Designed for controlled horizontal scaling; current deployment validated up to 100 concurrent users',
      'Stateless API layer allows for seamless replica scaling',
      'Single-region deployment (US-East) for data locality'
    ],
    dataModel: {
      title: 'Data Integrity & Schema',
      points: [
        'Strict relational integrity with foreign key constraints for all interview artifacts.',
        'JSONB columns used for flexible, versioned scoring policy storage.',
        'Session isolation via unique composite keys to prevent cross-talk.'
      ]
    },
    testingStrategy: {
      title: 'Testing Strategy',
      points: [
        'Unit tests (Jest) covering 100% of Finite State Machine transitions.',
        'Integration tests (Supertest) for critical API endpoints.',
        'Automated regression suite for scoring logic verification.'
      ]
    },
    tradeOffs: [
      'Chose Polling over WebSockets for initial MVP to simplify deployment on serverless infrastructure (Cloud Run), accepting slightly higher latency.',
      'Used PostgreSQL for relational integrity over NoSQL, trading schema flexibility for strict data consistency in scoring.'
    ],
    limitations: [
      'Currently deployed as a single-node instance; horizontal scaling via Redis adapter is planned.',
      'Voice-to-text latency is dependent on client network conditions; implementing edge-based processing is the next step.'
    ],
    links: {
      demo: '#',
      github: '#'
    }
  },
  {
    id: 'aer-project',
    title: 'Audio Emotion Recognition API',
    category: 'AI Systems',
    problem: 'Manual emotional auditing of support calls is unscalable, slow, and subject to significant human bias.',
    solution: 'Deployed a CNN-based audio classification model trained on MFCC features, served via a containerized REST API for real-time sentiment analysis.',
    architecture: ['Audio Stream', 'MFCC Processor', 'CNN Model', 'TensorFlow Serving', 'API Gateway'],
    techStack: ['Python', 'TensorFlow', 'Keras', 'Librosa', 'Docker', 'FastAPI'],
    engineeringDecisions: [
      'Selected CNN over RNN to optimize inference speed for short (5s) audio bursts, achieving sub-200ms latency.',
      'Utilized Mel-frequency cepstral coefficients (MFCC) for robust feature extraction against background noise.',
      'Containerized the inference engine using Docker to ensure environment consistency across development and production.'
    ],
    outcomes: [
      'Achieved 82% validation accuracy on the RAVDESS dataset.',
      'Maintained sub-200ms inference latency per segment during local load testing.',
      'Designed for horizontal scalability via stateless container architecture.'
    ],
    benchmarkContext: 'Inference latency averaged 180ms on local Docker container (4 vCPU, 8GB RAM). Accuracy validation performed on 20% holdout set from RAVDESS.',
    loadTestSnapshot: {
      totalUsers: '50 VUs',
      peakRPS: '45 req/sec',
      errorRate: '0.2%',
      p95Latency: '195ms'
    },
    threatModel: {
      risks: ['Audio Replay Attacks', 'Model Inversion', 'DoS via Large Payloads'],
      mitigations: ['Payload Size Limits', 'Rate Limiting', 'Input Validation']
    },
    operationalConstraints: [
      'GPU inference not enabled for cost optimization (CPU-only)',
      'Synchronous processing blocks client (Async queue planned)'
    ],
    dataModel: {
      title: 'Data Handling',
      points: [
        'Stateless inference pipeline; no audio data persistence for privacy compliance.',
        'Redis used for ephemeral rate-limit tracking.',
        'Results returned as JSON with confidence scores.'
      ]
    },
    testingStrategy: {
      title: 'Validation Strategy',
      points: [
        'Unit tests for MFCC feature extraction consistency.',
        'Integration tests for Docker container API endpoints.',
        'Model validation against 20% holdout dataset.'
      ]
    },
    tradeOffs: [
      'Prioritized inference speed (CNN) over long-term temporal context (RNN/LSTM), accepting lower accuracy on long monologues.',
      'Used synchronous REST API for simplicity, blocking the client during inference. Async queue (Celery) planned for production.'
    ],
    limitations: [
      'Model accuracy degrades by ~15% in high-noise environments (>60dB).',
      'Currently supports English language audio patterns only.'
    ],
    links: {
      demo: '#',
      github: '#'
    }
  },
  {
    id: 'smarttask-hub',
    title: 'SmartTask Hub (RBAC System)',
    category: 'Full Stack',
    problem: 'Standard task management tools fail to handle granular permission inheritance at scale for multi-tenant organizations.',
    solution: 'Built a secure, multi-tenant task system with middleware-based Role-Based Access Control (RBAC) and indexed lookups for high-performance querying.',
    architecture: ['Client', 'API Gateway', 'Auth Middleware', 'MongoDB (Compound)', 'Redis'],
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Redis', 'JWT'],
    engineeringDecisions: [
      'Implemented compound indexing (TenantID + Status) to maintain O(log n) query performance.',
      'Integrated Redis write-through caching for high-frequency user permission checks, reducing DB load.',
      'Secured API endpoints with custom middleware to validate scope before controller execution.'
    ],
    outcomes: [
      'Reduced P95 query latency from 1.2s to 120ms in dataset simulations (100k records).',
      'Zero unauthorized access incidents during internal penetration testing.',
      'Seamless support for logical multi-tenant data isolation.'
    ],
    benchmarkContext: 'Query performance tested with 100k seeded records in MongoDB. P95 latency measured via JMeter.',
    loadTestSnapshot: {
      totalUsers: '200 VUs',
      peakRPS: '320 req/sec',
      errorRate: '0.0%',
      p95Latency: '115ms'
    },
    threatModel: {
      risks: ['Privilege Escalation', 'Tenant Data Leakage', 'SQL/NoSQL Injection'],
      mitigations: ['RBAC Middleware', 'Row-Level Security Logic', 'ODM Validation']
    },
    operationalConstraints: [
      'Eventual consistency for permission updates (Cache TTL 5m)',
      'Soft-delete only for audit compliance'
    ],
    dataModel: {
      title: 'Schema Design',
      points: [
        'Multi-tenant schema with compound indexes (TenantID + Status).',
        'Logical isolation enforced via middleware and query injection.',
        'Role definitions stored as normalized documents for flexibility.'
      ]
    },
    testingStrategy: {
      title: 'Testing Strategy',
      points: [
        'Jest unit tests for backend RBAC logic.',
        'Integration tests for API endpoints and middleware.',
        'Manual penetration testing for privilege escalation vectors.'
      ]
    },
    tradeOffs: [
      'Implemented logical isolation (Row-Level Security) instead of physical database separation to reduce infrastructure costs.',
      'Used JWT for stateless auth, accepting the trade-off of harder token revocation compared to server-side sessions.'
    ],
    limitations: [
      'Complex permission inheritance chains (>5 levels) can impact cache warming time.',
      'Full-text search is currently implemented via Regex; migration to ElasticSearch recommended for scale.'
    ],
    links: {
      demo: '#',
      github: '#'
    }
  }
];

export const ENGINEERING_NOTES: EngineeringNote[] = [
  {
    id: 'cors',
    title: 'Production Security',
    description: 'During deployment, I replaced the wildcard CORS configuration with a strict whitelist middleware. This prevents unauthorized domain access while maintaining API usability for trusted clients.',
    tags: ['Security', 'Middleware']
  },
  {
    id: 'observability',
    title: 'Observability & Logging',
    description: 'Implemented structured JSON logging (Pino) for the AI service layer. Each request is tagged with a correlation ID to trace lifecycles across frontend and backend, designed to support distributed tracing as the system scales.',
    tags: ['DevOps', 'Monitoring']
  },
  {
    id: 'a11y',
    title: 'Accessibility Compliance',
    description: 'Enhanced the application with semantic HTML5 landmarks and ARIA live regions. Ensured focus management for modal interactions to support keyboard navigation and screen readers.',
    tags: ['UX', 'A11y']
  },
  {
    id: 'env',
    title: 'Environment Strategy',
    description: 'Refactored hardcoded configuration into strict build-time environment variable injection. This enables immutable infrastructure where the same container image runs in Staging and Production.',
    tags: ['DevOps', '12-Factor']
  },
  {
    id: 'failure-recovery',
    title: 'Failure & Recovery',
    description: 'Early load tests revealed a bottleneck in the single-node Redis instance during high-concurrency writes. I refactored the caching strategy to use a "Write-Through" pattern and implemented exponential backoff for connection retries, stabilizing the system under load.',
    tags: ['Resilience', 'Post-Mortem']
  },
  {
    id: 'state',
    title: 'State Determinism',
    description: 'For the interview engine, I moved away from `useEffect` spaghetti code to a formal State Machine. This ensures that the application can never enter an impossible state, critical for assessment integrity.',
    tags: ['Architecture', 'State']
  }
];

export const SYSTEM_INSTRUCTION = `
You are an intelligent portfolio assistant for Pavithra P, an AI Systems Architect.
Your goal is to demonstrate high engineering maturity to potential employers or hackathon judges.

Context:
${JSON.stringify(PAVITHRA_PROFILE)}

Projects:
${JSON.stringify(PROJECTS)}

Engineering Notes:
${JSON.stringify(ENGINEERING_NOTES)}

Instructions:
1. Act like a Senior Staff Engineer. Be concise, technical, and precise.
2. If asked about metrics, specify that they are from "Benchmarked Simulations" or "Validation Datasets".
3. Always mention trade-offs and limitations if asked about architecture. 
4. Explain that the current "Client-side Gemini" implementation is for "Portable Demo Purposes", but a production version would use a Backend Proxy.
5. Do not be overly enthusiastic. Be professional and confident.
`;

export const ARCHITECTURE_ICONS: Record<string, React.ReactNode> = {
  'React Client': <Globe className="w-4 h-4" />,
  'React Frontend': <Globe className="w-4 h-4" />,
  'Policy Engine (TS)': <Server className="w-4 h-4" />,
  'Deterministic Engine': <Server className="w-4 h-4" />,
  'State Machine': <Layers className="w-4 h-4" />,
  'PostgreSQL': <Database className="w-4 h-4" />,
  'Scoring Service': <Brain className="w-4 h-4" />,
  'AI Feedback Layer': <Brain className="w-4 h-4" />,
  'Audio Stream': <Terminal className="w-4 h-4" />,
  'MFCC Processor': <Zap className="w-4 h-4" />,
  'CNN Model': <Brain className="w-4 h-4" />,
  'TensorFlow Serving': <Server className="w-4 h-4" />,
  'API Gateway': <Globe className="w-4 h-4" />,
  'Express API Layer': <Shield className="w-4 h-4" />,
  'Client': <Globe className="w-4 h-4" />,
  'Auth Middleware': <Shield className="w-4 h-4" />,
  'MongoDB (Compound)': <Database className="w-4 h-4" />,
  'Redis': <Zap className="w-4 h-4" />,
  'Node/TS Engine': <Server className="w-4 h-4" />,
  'Scoring Module': <Brain className="w-4 h-4" />,
  'Audio Input': <Terminal className="w-4 h-4" />,
  'Librosa (MFCC)': <Zap className="w-4 h-4" />,
  'JSON Output': <Terminal className="w-4 h-4" />,
  'Vite Frontend': <Globe className="w-4 h-4" />,
  'Express Middleware': <Shield className="w-4 h-4" />,
  'JWT Auth': <Lock className="w-4 h-4" />,
  'MongoDB (Indexed)': <Database className="w-4 h-4" />,
  'Redis Cache': <Zap className="w-4 h-4" />,
};
