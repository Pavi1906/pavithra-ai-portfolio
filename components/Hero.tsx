import React from 'react';
import { ArrowRight, Github, Linkedin, FileText, CheckCircle2 } from 'lucide-react';
import { PAVITHRA_PROFILE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-12 relative overflow-hidden" aria-label="Introduction">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10" aria-hidden="true">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col items-start gap-8">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-950/30 text-emerald-400 text-xs font-mono tracking-wide" role="status">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
            OPEN TO WORK
          </div>

          {/* Identity */}
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
              {PAVITHRA_PROFILE.name}
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-400 font-mono">
              {PAVITHRA_PROFILE.title}
            </h2>
          </div>

          {/* Value Statement */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed font-light">
            {PAVITHRA_PROFILE.tagline}
          </p>

          {/* Actions */}
          <div className="flex flex-wrap gap-4 mt-2">
            <a 
              href="#projects"
              className="group inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              aria-label="View Engineered Systems section"
            >
              View Systems
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>
            
            <a 
              href={PAVITHRA_PROFILE.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white transition-all bg-white/5 focus:ring-2 focus:ring-gray-500 focus:outline-none"
              aria-label="Visit GitHub Profile"
            >
              <Github className="w-4 h-4" aria-hidden="true" />
              GitHub
            </a>
            
            <a 
              href={PAVITHRA_PROFILE.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white transition-all bg-white/5 focus:ring-2 focus:ring-gray-500 focus:outline-none"
              aria-label="Visit LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" aria-hidden="true" />
              LinkedIn
            </a>

            <a 
              href={PAVITHRA_PROFILE.socials.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white transition-all bg-white/5 focus:ring-2 focus:ring-gray-500 focus:outline-none"
              aria-label="Download Resume"
            >
              <FileText className="w-4 h-4" aria-hidden="true" />
              Resume
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-8 text-sm text-gray-500 font-mono list-none p-0">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" aria-hidden="true" />
              Full Stack Architecture
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" aria-hidden="true" />
              AI Integration
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" aria-hidden="true" />
              Secure Deployment
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;