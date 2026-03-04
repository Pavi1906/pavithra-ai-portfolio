import React from 'react';
import { PAVITHRA_PROFILE } from '../constants';
import { Terminal, Layers, ShieldCheck } from 'lucide-react';

const TechnicalIdentity: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-surface border-y border-white/5" aria-labelledby="identity-title">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-12 text-center">
            <h2 id="identity-title" className="text-2xl font-bold text-white mb-2">Technical Identity</h2>
            <p className="text-gray-400 font-mono text-sm">Engineering Philosophy & Core Focus</p>
        </div>

        <div className="space-y-8">
            
            {/* Focus */}
            <div className="flex gap-6 items-start group">
                <div className="p-3 rounded-lg bg-emerald-900/20 text-emerald-400 border border-emerald-500/20 group-hover:border-emerald-500/50 transition-colors shrink-0">
                    <Terminal className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-white mb-2">Engineering Focus</h3>
                    <p className="text-gray-400 leading-relaxed">
                        {PAVITHRA_PROFILE.about.focus}
                    </p>
                </div>
            </div>

            {/* Philosophy */}
            <div className="flex gap-6 items-start group">
                <div className="p-3 rounded-lg bg-indigo-900/20 text-indigo-400 border border-indigo-500/20 group-hover:border-indigo-500/50 transition-colors shrink-0">
                    <Layers className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-white mb-2">Architectural Philosophy</h3>
                    <p className="text-gray-400 leading-relaxed">
                        {PAVITHRA_PROFILE.about.philosophy}
                    </p>
                </div>
            </div>

            {/* Discipline */}
            <div className="flex gap-6 items-start group">
                <div className="p-3 rounded-lg bg-blue-900/20 text-blue-400 border border-blue-500/20 group-hover:border-blue-500/50 transition-colors shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-white mb-2">Deployment Discipline</h3>
                    <p className="text-gray-400 leading-relaxed">
                        {PAVITHRA_PROFILE.about.discipline}
                    </p>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default TechnicalIdentity;
