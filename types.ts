export interface Project {
  id: string;
  title: string;
  category: 'Flagship' | 'Flagship System' | 'AI Systems' | 'Full Stack';
  problem: string;
  solution: string;
  architecture: string[]; // Array of steps e.g. ["Frontend", "API Gateway", "Service"]
  techStack: string[];
  engineeringDecisions: string[];
  outcomes: string[];
  limitations: string[]; // Critical for senior-level honesty
  benchmarkContext?: string; // e.g. "Local load testing using Artillery (100 concurrent users)"
  tradeOffs?: string[]; // e.g. "Chose Express over Fastify for ecosystem maturity"
  loadTestSnapshot?: {
    totalUsers: string;
    peakRPS: string;
    errorRate: string;
    p95Latency: string;
  };
  threatModel?: {
    risks: string[];
    mitigations: string[];
  };
  operationalConstraints?: string[];
  dataModel?: {
    title: string;
    points: string[];
  };
  testingStrategy?: {
    title: string;
    points: string[];
  };
  links: {
    demo: string;
    github: string;
  };
  imagePlaceholder?: string; // For visual interest
}

export interface EngineeringNote {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum SectionId {
  HERO = 'hero',
  PROJECTS = 'projects',
  NOTES = 'notes',
  BLOG = 'blog',
  CONTACT = 'contact',
}
