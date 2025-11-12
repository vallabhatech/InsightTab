import React from 'react';
import { Brain, Github } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-indigo-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-2 rounded-xl">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              SmartContent
            </h1>
          </div>
          <nav className="flex items-center gap-6">
            <a 
              href="#features" 
              className="text-gray-600 hover:text-indigo-600 transition-colors hidden md:block"
            >
              Features
            </a>
            <a 
              href="#about" 
              className="text-gray-600 hover:text-indigo-600 transition-colors hidden md:block"
            >
              About
            </a>
            <a 
              href="https://github.com/prabhsharan1/smart-content"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-xl hover:opacity-90 transition-all font-medium"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;