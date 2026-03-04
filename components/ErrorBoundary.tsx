import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] text-white p-6">
          <div className="max-w-md w-full bg-[#171717] border border-red-500/20 rounded-xl p-8 shadow-2xl">
            <div className="flex items-center gap-3 mb-4 text-red-500">
              <AlertTriangle className="w-8 h-8" />
              <h1 className="text-xl font-bold">System Runtime Error</h1>
            </div>
            <p className="text-gray-400 mb-6">
              The application encountered a critical error during rendering. This is a production safeguard to prevent silent failures.
            </p>
            <div className="bg-black/50 p-4 rounded-lg border border-gray-800 font-mono text-xs text-red-300 overflow-auto max-h-40 mb-6">
              {this.state.error?.message || 'Unknown error occurred'}
            </div>
            <button
              onClick={() => window.location.reload()}
              className="w-full bg-red-600 hover:bg-red-500 text-white font-bold py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-[#171717]"
            >
              Reload System
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
