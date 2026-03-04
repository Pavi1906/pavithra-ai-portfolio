import React from 'react';
import { ENGINEERING_NOTES } from '../constants';
import { Terminal } from 'lucide-react';

const EngineeringNotes: React.FC = () => {
  return (
    <section id="notes" className="py-20 bg-black/50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-center gap-3 mb-10">
          <Terminal className="w-6 h-6 text-emerald-500" />
          <h2 className="text-2xl font-bold text-white">Engineering Decisions & Learnings</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {ENGINEERING_NOTES.map((note) => (
            <div key={note.id} className="bg-surface border border-gray-800 p-6 rounded-lg hover:border-gray-600 transition-colors">
              <div className="flex gap-2 mb-3">
                {note.tags.map(tag => (
                  <span key={tag} className="text-[10px] uppercase font-bold tracking-wider text-secondary px-2 py-0.5 bg-secondary/10 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{note.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed font-mono">
                {note.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineeringNotes;
