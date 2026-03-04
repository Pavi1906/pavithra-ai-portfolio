import React, { useState } from 'react';
import { Project } from '../types';
import { ExternalLink, Github, ArrowRight, ChevronDown, ChevronUp, AlertTriangle, Scale, Activity, ShieldCheck, ServerCrash, Cpu, Database, CheckCircle2 } from 'lucide-react';
import { ARCHITECTURE_ICONS } from '../constants';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);
  const expandId = `expand-${project.id}`;

  return (
    <article className="glass-panel rounded-xl p-8 mb-8 hover:border-gray-600 transition-all duration-300 group animate-in fade-in slide-in-from-bottom-4" aria-labelledby={`title-${project.id}`}>
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Left: Context & Solution */}
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider bg-emerald-900/20 px-3 py-1 rounded border border-emerald-500/20">
              {project.category}
            </span>
            <div className="flex gap-3">
              <a 
                href={project.links.github} 
                className="text-gray-400 hover:text-white transition-colors focus:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded" 
                title="View Source"
                aria-label={`View source code for ${project.title} on GitHub`}
              >
                <Github className="w-5 h-5" aria-hidden="true" />
              </a>
              <a 
                href={project.links.demo} 
                className="text-gray-400 hover:text-white transition-colors focus:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded" 
                title="Live Demo"
                aria-label={`View live demo for ${project.title}`}
              >
                <ExternalLink className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <h3 id={`title-${project.id}`} className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
            {project.title}
          </h3>

          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">The Problem</h4>
              <p className="text-gray-300 leading-relaxed text-sm">{project.problem}</p>
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">The Solution</h4>
              <p className="text-gray-300 leading-relaxed text-sm">{project.solution}</p>
            </div>
          </div>
        </div>

        {/* Right: Specs & Results */}
        <div className="lg:w-1/3 space-y-6 lg:border-l border-gray-800 lg:pl-8">
          
          <div>
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Tech Stack</h4>
            <div className="flex flex-wrap gap-2" aria-label="Technologies used">
              {project.techStack.map(tech => (
                <span key={tech} className="text-[10px] px-2 py-1 bg-gray-800/50 text-gray-300 rounded border border-gray-700 hover:border-emerald-500/50 transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-emerald-500 uppercase tracking-wide mb-2">Impact & Metrics</h4>
            <ul className="space-y-2">
              {project.outcomes.map((outcome, i) => (
                <li key={i} className="text-sm text-white font-medium flex items-start gap-2">
                  <span className="text-emerald-500 mt-1" aria-hidden="true">▹</span>
                  {outcome}
                </li>
              ))}
            </ul>
            
            {/* Benchmark Context - Credibility Booster */}
            {project.benchmarkContext && (
                <div className="mt-4 p-3 bg-black/30 rounded border border-gray-800 flex gap-3 items-start">
                    <Activity className="w-4 h-4 text-gray-500 mt-0.5 shrink-0" />
                    <div>
                        <h5 className="text-[10px] font-bold text-gray-500 uppercase tracking-wide mb-1">Benchmark Context</h5>
                        <p className="text-xs text-gray-400 font-mono leading-relaxed">
                            {project.benchmarkContext}
                        </p>
                    </div>
                </div>
            )}
          </div>

        </div>
      </div>

      {/* Interactive Expandable Section */}
      <div className="mt-8 pt-6 border-t border-gray-800">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls={expandId}
          className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors focus:outline-none focus:text-white"
        >
          {isOpen ? <ChevronUp className="w-4 h-4" aria-hidden="true" /> : <ChevronDown className="w-4 h-4" aria-hidden="true" />}
          {isOpen ? "Hide Engineering Details" : "View Architecture, Threat Model & Load Tests"}
        </button>

        {isOpen && (
          <div id={expandId} className="mt-6 grid md:grid-cols-2 gap-8 animate-in slide-in-from-top-2 fade-in duration-300">
             {/* Left Column: Architecture & Load Tests */}
            <div className="space-y-6">
                {/* Architecture Visualization */}
                <div>
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">Data Flow & Architecture</h4>
                    <div className="flex flex-col gap-2 bg-black/40 p-4 rounded-lg border border-gray-800">
                    {project.architecture.map((step, index) => (
                        <div key={index} className="flex items-center gap-3">
                            <div className="p-1.5 bg-gray-800 rounded text-gray-300" aria-hidden="true">
                                {ARCHITECTURE_ICONS[step] || <div className="w-4 h-4" />}
                            </div>
                            <span className="text-sm text-gray-300">{step}</span>
                            {index < project.architecture.length - 1 && (
                                <div className="h-4 w-px bg-gray-700 mx-auto my-1 ml-3.5 opacity-50" role="presentation"></div>
                            )}
                        </div>
                    ))}
                    </div>
                </div>

                {/* Load Test Snapshot - The "Proof" */}
                {project.loadTestSnapshot && (
                    <div>
                        <h4 className="text-xs font-bold text-blue-400 uppercase tracking-wide mb-3 flex items-center gap-2">
                            <ServerCrash className="w-3 h-3" />
                            Load Test Snapshot
                        </h4>
                        <div className="grid grid-cols-2 gap-2 bg-blue-900/10 border border-blue-500/20 p-3 rounded-lg">
                            <div>
                                <div className="text-[10px] text-blue-300/70 uppercase">Peak Load</div>
                                <div className="text-sm font-mono font-bold text-blue-100">{project.loadTestSnapshot.totalUsers}</div>
                            </div>
                            <div>
                                <div className="text-[10px] text-blue-300/70 uppercase">Throughput</div>
                                <div className="text-sm font-mono font-bold text-blue-100">{project.loadTestSnapshot.peakRPS}</div>
                            </div>
                            <div>
                                <div className="text-[10px] text-blue-300/70 uppercase">P95 Latency</div>
                                <div className="text-sm font-mono font-bold text-blue-100">{project.loadTestSnapshot.p95Latency}</div>
                            </div>
                            <div>
                                <div className="text-[10px] text-blue-300/70 uppercase">Error Rate</div>
                                <div className="text-sm font-mono font-bold text-emerald-400">{project.loadTestSnapshot.errorRate}</div>
                            </div>
                        </div>
                    </div>
                )}
                
                {/* Trade-offs - Seniority Signal */}
                {project.tradeOffs && (
                    <div>
                        <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-wide mb-3 flex items-center gap-2">
                            <Scale className="w-3 h-3" />
                            Architectural Trade-offs
                        </h4>
                        <ul className="space-y-2">
                            {project.tradeOffs.map((tradeoff, i) => (
                                <li key={i} className="text-xs text-gray-400 pl-4 border-l-2 border-indigo-500/20">
                                    {tradeoff}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

             {/* Right Column: Threat Model, Decisions & Constraints */}
            <div className="space-y-6">
                
                {/* AI Determinism Note for Flagship */}
                {project.category.includes('Flagship') && (
                    <div className="p-3 bg-purple-900/10 border border-purple-500/20 rounded-lg">
                        <h4 className="text-xs font-bold text-purple-400 uppercase tracking-wide mb-1">AI Architecture Philosophy</h4>
                        <p className="text-xs text-gray-300 leading-relaxed">
                            AI generates qualitative feedback only. All scoring decisions are deterministic, policy-driven, and reproducible to eliminate stochastic bias.
                        </p>
                    </div>
                )}

                {/* Threat Model - Security Depth */}
                {project.threatModel && (
                    <div>
                        <h4 className="text-xs font-bold text-emerald-500 uppercase tracking-wide mb-3 flex items-center gap-2">
                            <ShieldCheck className="w-3 h-3" />
                            Threat Model Considered
                        </h4>
                        <div className="bg-emerald-900/10 border border-emerald-500/20 rounded-lg p-3 space-y-3">
                            <div>
                                <div className="text-[10px] text-emerald-500/70 uppercase mb-1">Attack Vectors</div>
                                <div className="flex flex-wrap gap-1">
                                    {project.threatModel.risks.map(risk => (
                                        <span key={risk} className="text-[10px] px-1.5 py-0.5 bg-emerald-500/10 text-emerald-200 rounded border border-emerald-500/20">{risk}</span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <div className="text-[10px] text-emerald-500/70 uppercase mb-1">Mitigation Strategy</div>
                                <div className="flex flex-wrap gap-1">
                                    {project.threatModel.mitigations.map(mitigation => (
                                        <span key={mitigation} className="text-[10px] px-1.5 py-0.5 bg-emerald-500/10 text-emerald-200 rounded border border-emerald-500/20">{mitigation}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Data Model - New Section */}
                {project.dataModel && (
                    <div>
                        <h4 className="text-xs font-bold text-cyan-500 uppercase tracking-wide mb-3 flex items-center gap-2">
                            <Database className="w-3 h-3" />
                            {project.dataModel.title}
                        </h4>
                        <ul className="space-y-2">
                            {project.dataModel.points.map((point, i) => (
                                <li key={i} className="text-xs text-gray-400 pl-4 border-l-2 border-cyan-500/20">
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Testing Strategy - New Section */}
                {project.testingStrategy && (
                    <div>
                        <h4 className="text-xs font-bold text-pink-500 uppercase tracking-wide mb-3 flex items-center gap-2">
                            <CheckCircle2 className="w-3 h-3" />
                            {project.testingStrategy.title}
                        </h4>
                        <ul className="space-y-2">
                            {project.testingStrategy.points.map((point, i) => (
                                <li key={i} className="text-xs text-gray-400 pl-4 border-l-2 border-pink-500/20">
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Operational Constraints */}
                {project.operationalConstraints && (
                    <div>
                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3 flex items-center gap-2">
                            <Cpu className="w-3 h-3" />
                            Operational Constraints
                        </h4>
                        <ul className="space-y-2">
                            {project.operationalConstraints.map((constraint, i) => (
                                <li key={i} className="text-xs text-gray-400 pl-4 border-l-2 border-gray-700">
                                    {constraint}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Limitations - Honesty Signal */}
                <div>
                    <h4 className="text-xs font-bold text-amber-500 uppercase tracking-wide mb-3 flex items-center gap-2">
                        <AlertTriangle className="w-3 h-3" />
                        Current System Limitations
                    </h4>
                    <ul className="space-y-2">
                        {project.limitations.map((limit, i) => (
                            <li key={i} className="text-xs text-gray-400 pl-4 border-l-2 border-amber-500/20 italic">
                                {limit}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
