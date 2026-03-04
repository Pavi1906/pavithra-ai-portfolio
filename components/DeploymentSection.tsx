import React from 'react';
import { Shield, Lock, Server, GitBranch, Terminal, Activity } from 'lucide-react';

const DeploymentSection: React.FC = () => {
  return (
    <section className="py-20 bg-black border-t border-white/5" aria-labelledby="deployment-title">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-12">
          <h2 id="deployment-title" className="text-2xl font-bold text-white mb-2">Deployment & DevOps Strategy</h2>
          <p className="text-gray-400 font-mono text-sm">Infrastructure as Code, Security, and Observability.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Environment Security */}
          <div className="p-6 rounded-xl bg-surface border border-gray-800 hover:border-emerald-500/30 transition-colors group animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded bg-emerald-900/20 text-emerald-400 group-hover:text-emerald-300 transition-colors">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white">Environment Security</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Strict separation of build-time and runtime variables. API keys are never exposed to the client bundle.
            </p>
            <div className="bg-black/50 p-3 rounded border border-gray-800 font-mono text-[10px] text-gray-500">
              <span className="text-emerald-500">process.env</span>.API_KEY <span className="text-gray-600">// Server-side only</span>
            </div>
          </div>

          {/* Card 2: CI/CD Pipeline */}
          <div className="p-6 rounded-xl bg-surface border border-gray-800 hover:border-blue-500/30 transition-colors group animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded bg-blue-900/20 text-blue-400 group-hover:text-blue-300 transition-colors">
                <GitBranch className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white">CI/CD Pipeline</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Automated testing and linting on every commit. Docker builds are triggered only on passing tests.
            </p>
            <div className="flex gap-2">
                <span className="px-2 py-1 rounded bg-gray-800 text-[10px] text-gray-300 border border-gray-700">GitHub Actions</span>
                <span className="px-2 py-1 rounded bg-gray-800 text-[10px] text-gray-300 border border-gray-700">Docker Hub</span>
            </div>
          </div>

          {/* Card 3: Observability */}
          <div className="p-6 rounded-xl bg-surface border border-gray-800 hover:border-amber-500/30 transition-colors group animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded bg-amber-900/20 text-amber-400 group-hover:text-amber-300 transition-colors">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white">Observability</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Structured JSON logging with request correlation IDs. Designed to support distributed tracing across microservices.
            </p>
            <div className="bg-black/50 p-3 rounded border border-gray-800 font-mono text-[10px] text-gray-500">
              {"{ \"traceId\": \"1a2b-3c4d\", \"level\": \"info\", \"latency\": 45 }"}
            </div>
          </div>

           {/* Card 4: CORS & Proxy */}
           <div className="p-6 rounded-xl bg-surface border border-gray-800 hover:border-purple-500/30 transition-colors group animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded bg-purple-900/20 text-purple-400 group-hover:text-purple-300 transition-colors">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white">Secure Proxy</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              All external API calls are proxied through the backend. CORS is configured to whitelist only trusted domains.
            </p>
            <div className="flex gap-2">
                <span className="px-2 py-1 rounded bg-gray-800 text-[10px] text-gray-300 border border-gray-700">Helmet.js</span>
                <span className="px-2 py-1 rounded bg-gray-800 text-[10px] text-gray-300 border border-gray-700">Rate Limiting</span>
            </div>
          </div>

           {/* Card 5: Infrastructure */}
           <div className="p-6 rounded-xl bg-surface border border-gray-800 hover:border-indigo-500/30 transition-colors group animate-in fade-in slide-in-from-bottom-4 duration-500 delay-400">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded bg-indigo-900/20 text-indigo-400 group-hover:text-indigo-300 transition-colors">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white">Infrastructure</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Containerized microservices running on Google Cloud Run (Serverless) for auto-scaling and zero-maintenance ops.
            </p>
            <div className="flex gap-2">
                <span className="px-2 py-1 rounded bg-gray-800 text-[10px] text-gray-300 border border-gray-700">Docker</span>
                <span className="px-2 py-1 rounded bg-gray-800 text-[10px] text-gray-300 border border-gray-700">Cloud Run</span>
            </div>
          </div>

           {/* Card 6: Performance */}
           <div className="p-6 rounded-xl bg-surface border border-gray-800 hover:border-pink-500/30 transition-colors group animate-in fade-in slide-in-from-bottom-4 duration-500 delay-500">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded bg-pink-900/20 text-pink-400 group-hover:text-pink-300 transition-colors">
                <Terminal className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white">Performance</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Aggressive caching strategies at the edge and application layer. Lazy loading for all heavy assets.
            </p>
            <div className="bg-black/50 p-3 rounded border border-gray-800 font-mono text-[10px] text-gray-500">
              Cache-Control: public, max-age=31536000
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DeploymentSection;
