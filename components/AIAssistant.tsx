import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Cpu, Loader2, AlertCircle } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: "I'm the system context for Pavithra's portfolio. Ask me about her architecture decisions, tech stack, or specific project implementations.",
      timestamp: new Date()
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
    // Focus input when opened
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);
    setError(null);

    try {
      const responseText = await sendMessageToGemini(input, messages);
      const modelMsg: ChatMessage = { role: 'model', text: responseText, timestamp: new Date() };
      setMessages(prev => [...prev, modelMsg]);
    } catch (err) {
      console.error(err);
      setError("Failed to connect to AI service. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Chat Window */}
      {isOpen && (
        <div 
            className="bg-surface border border-gray-700 rounded-xl shadow-2xl w-[350px] md:w-[400px] h-[500px] flex flex-col overflow-hidden mb-4 animate-in slide-in-from-bottom-5 fade-in duration-300"
            role="dialog"
            aria-label="AI Portfolio Assistant Chat"
            aria-modal="false" // It's not a modal that blocks background
        >
          {/* Header */}
          <div className="bg-surfaceHighlight p-4 flex justify-between items-center border-b border-gray-700">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Cpu className="w-5 h-5 text-emerald-500" aria-hidden="true" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-500 rounded-full animate-pulse" aria-hidden="true"></span>
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Portfolio Context AI</h3>
                <p className="text-[10px] text-emerald-400 font-mono">Gemini 3 Flash • Production Mode</p>
              </div>
            </div>
            <button 
                onClick={() => setIsOpen(false)} 
                className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded"
                aria-label="Close chat"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>

          {/* Messages */}
          <div 
            className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#0a0a0a]"
            role="log"
            aria-live="polite"
            aria-atomic="false"
          >
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] rounded-lg p-3 text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-emerald-600 text-white rounded-br-none shadow-lg' 
                      : 'bg-surfaceHighlight text-gray-200 border border-gray-700 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start" role="status" aria-label="Processing response">
                 <div className="bg-surfaceHighlight p-3 rounded-lg rounded-bl-none border border-gray-700 flex items-center gap-2">
                    <Loader2 className="w-3 h-3 text-emerald-500 animate-spin" aria-hidden="true" />
                    <span className="text-xs text-gray-400">Processing context...</span>
                 </div>
              </div>
            )}
            
            {error && (
                <div className="flex justify-center my-2" role="alert">
                    <div className="bg-red-900/20 border border-red-500/50 text-red-200 text-xs px-3 py-1 rounded-full flex items-center gap-2">
                        <AlertCircle className="w-3 h-3" aria-hidden="true" />
                        {error}
                    </div>
                </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-surfaceHighlight border-t border-gray-700">
            <div className="relative">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about architecture or trade-offs..."
                aria-label="Chat message input"
                className="w-full bg-black/50 border border-gray-600 rounded-lg pl-4 pr-10 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 transition-all placeholder:text-gray-600 focus:ring-1 focus:ring-emerald-500"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                aria-label="Send message"
                className="absolute right-2 top-2 text-emerald-500 hover:text-emerald-400 disabled:opacity-30 disabled:cursor-not-allowed p-1 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded"
              >
                <Send className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close AI Assistant" : "Open AI Assistant"}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        className="bg-emerald-600 hover:bg-emerald-500 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-105 group relative border border-white/10 focus:outline-none focus:ring-4 focus:ring-emerald-500/50"
      >
        {!isOpen && (
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-background animate-pulse" aria-hidden="true"></span>
        )}
        <MessageSquare className="w-6 h-6" aria-hidden="true" />
      </button>
    </div>
  );
};

export default AIAssistant;