import React from 'react';
import { ArrowUpRight, BookOpen } from 'lucide-react';

const ArticleSection: React.FC = () => {
  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-center gap-3 mb-10">
            <BookOpen className="w-6 h-6 text-emerald-500" />
            <h2 className="text-2xl font-bold text-white">Technical Writing</h2>
        </div>

        <a href="#" className="group block bg-surface border border-gray-800 p-8 rounded-xl hover:border-emerald-500/50 transition-all shadow-lg hover:shadow-emerald-900/20">
          <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest bg-emerald-900/20 px-2 py-1 rounded">DevOps</span>
                <span className="text-xs text-gray-500 font-mono">Dec 2024</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                Shipping Matters More Than Building: Lessons from Production
              </h3>
              <p className="text-gray-400 max-w-2xl leading-relaxed">
                Why 90% of student projects fail at the deployment stage. A deep dive into containerization, immutable infrastructure, and why "it works on localhost" is a warning sign, not a success metric.
              </p>
            </div>
            <div className="p-3 rounded-full border border-gray-700 group-hover:bg-emerald-500 group-hover:text-black group-hover:border-emerald-500 transition-all">
              <ArrowUpRight className="w-6 h-6" />
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default ArticleSection;
