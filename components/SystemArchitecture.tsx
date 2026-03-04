import React from 'react';
import { Cloud, Server, Brain, Globe, Shield, Database, ArrowRight, Box } from 'lucide-react';

const SystemArchitecture: React.FC = () => {
  return (
    <section className="py-20 bg-[#0f0f0f] border-y border-white/5" aria-labelledby="arch-title">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-12">
            <h2 id="arch-title" className="text-2xl font-bold text-white mb-2">System Architecture Standard</h2>
            <p className="text-gray-400 font-mono text-sm">My standard deployment pattern for scalable AI applications.</p>
        </div>

        {/* Desktop Diagram */}
        <div className="hidden md:flex flex-col gap-8 animate-in fade-in zoom-in-95 duration-700">
            <div className="relative flex items-center justify-between gap-4 p-8 border border-dashed border-gray-800 rounded-xl bg-black/20" aria-label="System Architecture Diagram">
                
                {/* Client Layer */}
                <div className="flex flex-col items-center gap-4 z-10 group">
                    <div className="w-32 h-24 rounded-xl bg-surface border border-gray-700 flex flex-col items-center justify-center shadow-lg relative group-hover:border-emerald-500/50 transition-colors">
                        <div className="absolute -top-3 px-2 py-1 bg-emerald-900/50 text-emerald-400 text-[10px] font-mono rounded border border-emerald-500/30">FRONTEND</div>
                        <Globe className="w-6 h-6 text-gray-300 mb-2 group-hover:text-emerald-400 transition-colors" />
                        <span className="text-xs font-bold text-white">React / TS</span>
                    </div>
                </div>

                <ArrowRight className="w-4 h-4 text-gray-600" />

                {/* API Layer */}
                <div className="flex flex-col items-center gap-4 z-10 group">
                    <div className="w-32 h-24 rounded-xl bg-surface border border-gray-700 flex flex-col items-center justify-center shadow-lg relative group-hover:border-indigo-500/50 transition-colors">
                        <div className="absolute -top-3 px-2 py-1 bg-indigo-900/50 text-indigo-400 text-[10px] font-mono rounded border border-indigo-500/30">API LAYER</div>
                        <Shield className="w-6 h-6 text-gray-300 mb-2 group-hover:text-indigo-400 transition-colors" />
                        <span className="text-xs font-bold text-white">Express Proxy</span>
                    </div>
                </div>

                <ArrowRight className="w-4 h-4 text-gray-600" />

                {/* Core Engine */}
                <div className="flex flex-col items-center gap-4 z-10 group">
                    <div className="w-32 h-24 rounded-xl bg-surface border border-gray-700 flex flex-col items-center justify-center shadow-lg relative group-hover:border-amber-500/50 transition-colors">
                        <div className="absolute -top-3 px-2 py-1 bg-amber-900/50 text-amber-400 text-[10px] font-mono rounded border border-amber-500/30">CORE ENGINE</div>
                        <Server className="w-6 h-6 text-gray-300 mb-2 group-hover:text-amber-400 transition-colors" />
                        <span className="text-xs font-bold text-white">State Machine</span>
                    </div>
                </div>

                <ArrowRight className="w-4 h-4 text-gray-600" />

                {/* AI Layer */}
                 <div className="flex flex-col items-center gap-4 z-10 group">
                    <div className="w-32 h-24 rounded-xl bg-surface border border-gray-700 flex flex-col items-center justify-center shadow-lg relative group-hover:border-purple-500/50 transition-colors">
                        <div className="absolute -top-3 px-2 py-1 bg-purple-900/50 text-purple-400 text-[10px] font-mono rounded border border-purple-500/30">AI MODEL</div>
                        <Brain className="w-6 h-6 text-gray-300 mb-2 group-hover:text-purple-400 transition-colors" />
                        <span className="text-xs font-bold text-white">Gemini / TF</span>
                    </div>
                </div>

                <ArrowRight className="w-4 h-4 text-gray-600" />

                {/* Deployment Layer */}
                <div className="flex flex-col items-center gap-4 z-10 group">
                    <div className="w-32 h-24 rounded-xl bg-surface border border-gray-700 flex flex-col items-center justify-center shadow-lg relative group-hover:border-blue-500/50 transition-colors">
                        <div className="absolute -top-3 px-2 py-1 bg-blue-900/50 text-blue-400 text-[10px] font-mono rounded border border-blue-500/30">DEPLOYMENT</div>
                        <Box className="w-6 h-6 text-gray-300 mb-2 group-hover:text-blue-400 transition-colors" />
                        <span className="text-xs font-bold text-white">Docker / Cloud Run</span>
                    </div>
                </div>

            </div>
            
            <div className="grid grid-cols-3 gap-4 text-xs text-gray-500 font-mono text-center">
                <div>Strict Separation of Concerns</div>
                <div>Deterministic State Management</div>
                <div>Immutable Infrastructure</div>
            </div>
        </div>

        {/* Mobile Fallback (Simple List) */}
        <div className="md:hidden space-y-4">
             <div className="p-4 bg-surface border border-gray-700 rounded-lg flex items-center gap-4">
                <Globe className="w-6 h-6 text-emerald-500" aria-hidden="true" />
                <div>
                    <h4 className="font-bold text-white">Frontend</h4>
                    <p className="text-xs text-gray-500">React, TypeScript, Tailwind</p>
                </div>
             </div>
             <div className="flex justify-center" aria-hidden="true"><ArrowRight className="rotate-90 text-gray-600" /></div>
             <div className="p-4 bg-surface border border-gray-700 rounded-lg flex items-center gap-4">
                <Shield className="w-6 h-6 text-indigo-500" aria-hidden="true" />
                <div>
                    <h4 className="font-bold text-white">API Gateway</h4>
                    <p className="text-xs text-gray-500">Express, Rate Limiting, Auth</p>
                </div>
             </div>
             <div className="flex justify-center" aria-hidden="true"><ArrowRight className="rotate-90 text-gray-600" /></div>
             <div className="p-4 bg-surface border border-gray-700 rounded-lg flex items-center gap-4">
                <Server className="w-6 h-6 text-amber-500" aria-hidden="true" />
                <div>
                    <h4 className="font-bold text-white">Core Engine</h4>
                    <p className="text-xs text-gray-500">Business Logic, State Machines</p>
                </div>
             </div>
             <div className="flex justify-center" aria-hidden="true"><ArrowRight className="rotate-90 text-gray-600" /></div>
             <div className="p-4 bg-surface border border-gray-700 rounded-lg flex items-center gap-4">
                <Brain className="w-6 h-6 text-purple-500" aria-hidden="true" />
                <div>
                    <h4 className="font-bold text-white">AI Inference</h4>
                    <p className="text-xs text-gray-500">Gemini, TensorFlow</p>
                </div>
             </div>
             <div className="flex justify-center" aria-hidden="true"><ArrowRight className="rotate-90 text-gray-600" /></div>
             <div className="p-4 bg-surface border border-gray-700 rounded-lg flex items-center gap-4">
                <Box className="w-6 h-6 text-blue-500" aria-hidden="true" />
                <div>
                    <h4 className="font-bold text-white">Deployment</h4>
                    <p className="text-xs text-gray-500">Docker, CI/CD</p>
                </div>
             </div>
        </div>
      </div>
    </section>
  );
};

export default SystemArchitecture;