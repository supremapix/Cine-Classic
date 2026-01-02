import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          
          {/* Main attribution line requested */}
          <div className="flex items-center gap-2 text-gray-700 font-medium text-sm md:text-base">
            <span>Desenvolvido com</span>
            <span className="inline-flex items-center justify-center text-red-500 animate-heartbeat" aria-label="amor">
              <Heart size={20} fill="currentColor" />
            </span>
            <span>pela</span>
            <a 
              href="https://www.supremasite.com.br/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cine-dark hover:text-cine font-bold transition-colors duration-300 relative group"
            >
              Suprema Sites Express
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cine transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          <p className="text-gray-400 text-xs text-center">
            &copy; {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};