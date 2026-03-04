import React from 'react';
import { TECH_STACK } from '../constants';
import { Code2, Server, Brain, Container, Terminal } from 'lucide-react';

const TechStack: React.FC = () => {
  return (
    <section className="py-20 bg-background border-b border-white/5" aria-labelledby="stack-title">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-12">
            <h2 id="stack-title" className="text-2xl font-bold text-white mb-2">Technical Arsenal</h2>
            <p className="text-gray-400 font-mono text-sm">Production-grade tools and frameworks.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            
            {/* Frontend */}
            <div className="p-6 rounded-xl bg-surface border border-gray-800 hover:border-emerald-500/30 transition-colors animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center gap-2 mb-4 text-emerald-400">
                    <Code2 className="w-5 h-5" />
                    <h3 className="font-bold text-white text-sm uppercase tracking-wide">Frontend</h3>
                </div>
                <ul className="space-y-2">
                    {TECH_STACK.frontend.map(tech => (
                        <li key={tech} className="text-gray-400 text-sm border-l-2 border-gray-700 pl-3 hover:border-emerald-500 hover:text-white transition-colors cursor-default">
                            {tech}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Backend */}
            <div className="p-6 rounded-xl bg-surface border border-gray-800 hover:border-indigo-500/30 transition-colors animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
                <div className="flex items-center gap-2 mb-4 text-indigo-400">
                    <Server className="w-5 h-5" />
                    <h3 className="font-bold text-white text-sm uppercase tracking-wide">Backend</h3>
                </div>
                <ul className="space-y-2">
                    {TECH_STACK.backend.map(tech => (
                        <li key={tech} className="text-gray-400 text-sm border-l-2 border-gray-700 pl-3 hover:border-indigo-500 hover:text-white transition-colors cursor-default">
                            {tech}
                        </li>
                    ))}
                </ul>
            </div>

            {/* AI / ML */}
            <div className="p-6 rounded-xl bg-surface border border-gray-800 hover:border-purple-500/30 transition-colors animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
                <div className="flex items-center gap-2 mb-4 text-purple-400">
                    <Brain className="w-5 h-5" />
                    <h3 className="font-bold text-white text-sm uppercase tracking-wide">AI / ML</h3>
                </div>
                <ul className="space-y-2">
                    {TECH_STACK.ai_ml.map(tech => (
                        <li key={tech} className="text-gray-400 text-sm border-l-2 border-gray-700 pl-3 hover:border-purple-500 hover:text-white transition-colors cursor-default">
                            {tech}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Infrastructure */}
            <div className="p-6 rounded-xl bg-surface border border-gray-800 hover:border-blue-500/30 transition-colors animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
                <div className="flex items-center gap-2 mb-4 text-blue-400">
                    <Container className="w-5 h-5" />
                    <h3 className="font-bold text-white text-sm uppercase tracking-wide">DevOps</h3>
                </div>
                <ul className="space-y-2">
                    {TECH_STACK.infrastructure.map(tech => (
                        <li key={tech} className="text-gray-400 text-sm border-l-2 border-gray-700 pl-3 hover:border-blue-500 hover:text-white transition-colors cursor-default">
                            {tech}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Tools */}
            <div className="p-6 rounded-xl bg-surface border border-gray-800 hover:border-amber-500/30 transition-colors animate-in fade-in slide-in-from-bottom-4 duration-500 delay-400">
                <div className="flex items-center gap-2 mb-4 text-amber-400">
                    <Terminal className="w-5 h-5" />
                    <h3 className="font-bold text-white text-sm uppercase tracking-wide">Tools</h3>
                </div>
                <ul className="space-y-2">
                    {TECH_STACK.tools.map(tech => (
                        <li key={tech} className="text-gray-400 text-sm border-l-2 border-gray-700 pl-3 hover:border-amber-500 hover:text-white transition-colors cursor-default">
                            {tech}
                        </li>
                    ))}
                </ul>
            </div>

        </div>
      </div>
    </section>
  );
};

export default TechStack;
