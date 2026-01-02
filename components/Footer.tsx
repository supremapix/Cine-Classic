import React from 'react';
import { Heart, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200 mt-auto shadow-[0_-1px_3px_rgba(0,0,0,0.05)]">
      <div className="max-w-7xl mx-auto px-4 py-10 md:py-14">
        
        {/* Seção Principal (Mantida conforme estrutura anterior) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 border-b border-gray-100 pb-10">
          {/* About Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-bold text-gray-800 logo-font text-lg uppercase mb-3 tracking-wide">Cine Classic</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs font-light">
              Sua fonte número um para filmes clássicos, raridades e obras-primas do cinema mundial.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center justify-center">
            <h3 className="font-bold text-gray-800 text-xs uppercase mb-4 tracking-widest text-opacity-80">Navegação</h3>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-600 font-medium">
              <Link to="/" className="hover:text-cine transition-colors duration-200">Home</Link>
              <Link to="/category/novidades" className="hover:text-cine transition-colors duration-200">Novidades</Link>
              <Link to="/category/faroeste" className="hover:text-cine transition-colors duration-200">Faroeste</Link>
              <Link to="/login" className="hover:text-cine transition-colors duration-200">Minha Conta</Link>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="font-bold text-gray-800 text-xs uppercase mb-4 tracking-widest text-opacity-80">Siga-nos</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-cine transition-colors duration-300 transform hover:scale-110">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cine transition-colors duration-300 transform hover:scale-110">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cine transition-colors duration-300 transform hover:scale-110">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Rodapé Inferior - Créditos Suprema Sites Express */}
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex flex-wrap justify-center items-center gap-1.5 text-gray-600 font-medium text-sm md:text-base tracking-wide">
            <span>Desenvolvido com</span>
            <span className="inline-flex items-center justify-center text-red-500 animate-heartbeat mx-0.5" title="Amor">
              <Heart size={18} fill="currentColor" />
            </span>
            <span>pela</span>
            <a 
              href="https://www.supremasite.com.br/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-bold text-cine-dark hover:text-cine transition-all duration-200 underline-offset-4 hover:underline"
              title="Visitar Suprema Sites Express"
            >
              Suprema Sites Express
            </a>
            .
          </div>

          <p className="text-gray-400 text-xs text-center font-light">
            &copy; {new Date().getFullYear()} Cine Classic Archive. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};