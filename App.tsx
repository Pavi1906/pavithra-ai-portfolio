import React from 'react';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import EngineeringNotes from './components/EngineeringNotes';
import ArticleSection from './components/ArticleSection';
import SystemArchitecture from './components/SystemArchitecture';
import TechnicalIdentity from './components/TechnicalIdentity';
import TechStack from './components/TechStack';
import DeploymentSection from './components/DeploymentSection';
import AIAssistant from './components/AIAssistant';
import { PROJECTS, PAVITHRA_PROFILE } from './constants';
import { Mail, Github, Linkedin, FileText } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-gray-200 selection:bg-emerald-500/30 font-sans">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-40 bg-background/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-xl font-bold tracking-tighter text-white font-mono">
            PV<span className="text-emerald-500">.</span>DEV
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-8 text-sm font-medium text-gray-400">
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#projects" className="hover:text-white transition-colors">Systems</a>
              <a href="#notes" className="hover:text-white transition-colors">Engineering</a>
            </div>
            
            {/* Social Icons in Navbar for quick access */}
            <div className="flex items-center gap-4 pl-8 border-l border-gray-800">
               <a 
                 href={PAVITHRA_PROFILE.socials.github} 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-white transition-colors"
                 aria-label="GitHub Profile"
               >
                 <Github className="w-4 h-4" />
               </a>
               <a 
                 href={PAVITHRA_PROFILE.socials.linkedin} 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-white transition-colors"
                 aria-label="LinkedIn Profile"
               >
                 <Linkedin className="w-4 h-4" />
               </a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        
        <TechnicalIdentity />

        <TechStack />
        
        <SystemArchitecture />

        <section id="projects" className="py-20 container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Selected Engineering Systems</h2>
              <p className="text-gray-400 font-mono text-sm">Architectural deep dives into production-grade projects.</p>
            </div>
          </div>
          
          <div className="space-y-6">
            {PROJECTS.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <DeploymentSection />

        <EngineeringNotes />
        
        <ArticleSection />

        <section className="py-20 border-t border-white/5 bg-gradient-to-b from-background to-surface">
            <div className="container mx-auto px-6 max-w-4xl text-center">
                <h2 className="text-3xl font-bold text-white mb-6">Ready to Ship?</h2>
                <p className="text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
                    I am currently open to roles in Full Stack Development and AI Engineering. 
                    Let's discuss how I can bring production discipline and architectural clarity to your team.
                </p>
                <div className="flex justify-center gap-4">
                    <a 
                        href={`mailto:${PAVITHRA_PROFILE.socials.email}`}
                        className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg shadow-emerald-900/20"
                    >
                        <Mail className="w-5 h-5" />
                        Contact Me
                    </a>
                    <a 
                        href={PAVITHRA_PROFILE.socials.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border border-gray-700 hover:border-gray-500 text-white px-8 py-4 rounded-lg font-bold transition-all bg-surface"
                    >
                        <FileText className="w-5 h-5" />
                        Download Resume
                    </a>
                </div>
            </div>
        </section>

        <footer className="py-8 border-t border-white/5 bg-[#050505]">
            <div className="container mx-auto px-6 flex flex-col items-center gap-4 text-sm text-gray-600">
                <p>&copy; {new Date().getFullYear()} Pavithra P. Built with React, Tailwind & Gemini 3.</p>
                
                {/* Verification Links */}
                <div className="flex items-center gap-4 text-xs font-mono">
                    <a href={PAVITHRA_PROFILE.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors">
                        GitHub
                    </a>
                    <span className="text-gray-800">|</span>
                    <a href={PAVITHRA_PROFILE.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors">
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
      </main>

      <AIAssistant />
    </div>
  );
};

export default App;
