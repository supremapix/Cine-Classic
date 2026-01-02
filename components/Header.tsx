import React from 'react';
import { Search, ShoppingCart, User, Menu, Film } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="flex flex-col w-full font-sans">
      {/* Top Bar: Logo and Contact */}
      <div className="bg-cine text-white py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="bg-orange-400 text-black font-bold p-1 rounded border-2 border-black">
              <Film size={28} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter logo-font text-black" style={{ textShadow: '1px 1px 0px rgba(255,255,255,0.2)' }}>
              Cine Classic
            </h1>
          </div>
          <div className="text-sm opacity-80">
            contato@cineclassic.com.br
          </div>
        </div>
      </div>

      {/* Middle Bar: Search and Tools */}
      <div className="bg-cine-light py-3 px-4 md:px-8 border-t border-white/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-4">
          
          <button 
            className="md:hidden self-start flex items-center gap-2 text-white font-bold"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu /> CATEGORIAS
          </button>

          <div className="hidden md:flex items-center text-white font-semibold text-sm mr-4">
            <Menu className="mr-2" size={18} /> CATEGORIAS
          </div>

          <div className="flex-1 w-full relative">
            <input 
              type="text" 
              placeholder="Digite o que você procura" 
              className="w-full py-2 px-4 pr-10 rounded-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-cine-dark shadow-inner"
            />
            <button className="absolute right-0 top-0 h-full px-3 text-cine hover:text-cine-dark">
              <Search size={20} />
            </button>
          </div>

          <div className="flex items-center gap-4 text-white">
            <Search className="md:hidden" />
            <div className="flex items-center gap-1 cursor-pointer hover:opacity-80">
              <User size={24} />
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:opacity-80 relative">
              <ShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-orange-400 text-xs text-black font-bold rounded-full w-5 h-5 flex items-center justify-center">0</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Navigation (Desktop) */}
      <nav className="bg-cine-nav text-white hidden md:block">
        <div className="max-w-7xl mx-auto">
          <ul className="flex flex-wrap text-xs font-semibold">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a 
                  href={item.href} 
                  className="block py-3 px-4 hover:bg-cine-dark transition-colors border-r border-white/10"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="bg-cine-nav text-white md:hidden animate-slide-down">
          <ul className="flex flex-col text-sm font-semibold">
            {NAV_ITEMS.map((item) => (
              <li key={item.label} className="border-b border-white/10">
                <a href={item.href} className="block py-3 px-4 hover:bg-cine-dark">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};