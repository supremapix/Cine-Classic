import React from 'react';
import { Search, ShoppingCart, User, Menu, Film, LogIn } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { Link, useLocation } from 'react-router-dom';
import { useCart, useAuth } from '../context/AppContext';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const { cartCount } = useCart();
  const { isAuthenticated, user } = useAuth();
  const location = useLocation();

  return (
    <header className="flex flex-col w-full font-sans shadow-lg z-50 relative">
      {/* Top Bar: Logo and Contact */}
      <div className="bg-cine text-white py-4 px-4 md:px-8 relative overflow-hidden">
        {/* Abstract background effect */}
        <div className="absolute top-0 right-0 w-64 h-full bg-white/5 skew-x-12 transform translate-x-10"></div>
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
          <Link to="/" className="flex items-center gap-3 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-orange-500 text-black font-bold p-1.5 rounded border-2 border-black group-hover:rotate-12 transition-transform duration-300 shadow-lg">
              <Film size={32} />
            </div>
            <div className="flex flex-col">
               <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter logo-font text-white drop-shadow-md">
                Cine Classic
              </h1>
              <span className="text-[10px] tracking-[0.3em] uppercase text-cine-light font-bold">Archive Collection</span>
            </div>
          </Link>
          <div className="text-sm font-medium bg-black/20 px-4 py-1 rounded-full border border-white/10 backdrop-blur-sm">
            contato@cineclassic.com.br
          </div>
        </div>
      </div>

      {/* Middle Bar: Search and Tools */}
      <div className="bg-white py-4 px-4 md:px-8 border-b border-gray-100 shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-4">
          
          <button 
            className="md:hidden self-start flex items-center gap-2 text-cine font-bold"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu /> MENU
          </button>

          <div className="flex-1 w-full relative group">
            <input 
              type="text" 
              placeholder="Busque por título, ator ou diretor..." 
              className="w-full py-3 px-5 pr-12 rounded-full border-2 border-gray-200 text-gray-700 focus:outline-none focus:border-cine focus:ring-4 focus:ring-cine/10 transition-all duration-300 bg-gray-50"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 bg-cine text-white rounded-full flex items-center justify-center hover:bg-cine-dark transition-colors shadow-md group-hover:scale-110 duration-200">
              <Search size={18} />
            </button>
          </div>

          <div className="flex items-center gap-6 text-gray-600">
            {/* User Auth Link */}
            {isAuthenticated ? (
               <Link to="/profile" className="flex items-center gap-2 cursor-pointer hover:text-cine transition-colors group" title="Meu Perfil">
                <div className="bg-gray-100 p-2 rounded-full group-hover:bg-cine/10 transition-colors">
                   <User size={20} />
                </div>
                <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-gray-400">Olá,</span>
                    <span className="text-xs font-bold text-gray-800 leading-none">{user?.name.split(' ')[0]}</span>
                </div>
              </Link>
            ) : (
              <Link to="/login" className="flex items-center gap-2 cursor-pointer hover:text-cine transition-colors group" title="Fazer Login">
                <div className="bg-gray-100 p-2 rounded-full group-hover:bg-cine/10 transition-colors">
                    <LogIn size={20} />
                </div>
                <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-gray-400">Conta</span>
                    <span className="text-xs font-bold text-gray-800 leading-none">Entrar</span>
                </div>
              </Link>
            )}

            {/* Cart Link */}
            <Link to="/cart" className="flex items-center gap-1 cursor-pointer hover:text-cine transition-colors relative group">
              <div className="p-2 relative">
                  <ShoppingCart size={24} className="group-hover:scale-110 transition-transform duration-200" />
                  {cartCount > 0 && (
                    <span className="absolute top-0 right-0 bg-red-500 text-[10px] text-white font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-sm border-2 border-white animate-pulse">
                      {cartCount}
                    </span>
                  )}
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Navigation (Desktop) with IMPACT ANIMATION */}
      <nav className="bg-cine-nav text-white hidden md:block border-t border-white/10 shadow-inner relative z-30">
        <div className="max-w-7xl mx-auto">
          <ul className="flex flex-wrap justify-center text-sm font-bold uppercase tracking-wider">
            {NAV_ITEMS.map((item) => {
               const isActive = location.pathname === item.href;
               return (
              <li key={item.label} className="relative group">
                <Link 
                  to={item.href} 
                  className={`block py-4 px-6 relative z-10 transition-colors duration-300 ${isActive ? 'text-yellow-400' : 'text-white/90 hover:text-white'}`}
                >
                  {item.label}
                </Link>
                {/* Impact Hover Effect */}
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-yellow-500 transform origin-left transition-transform duration-300 ease-out ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></div>
                <div className="absolute inset-0 bg-white/10 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom -z-0"></div>
              </li>
            )})}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      <nav 
        className={`bg-cine-nav text-white md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col text-sm font-semibold">
          {NAV_ITEMS.map((item) => (
            <li key={item.label} className="border-b border-white/10">
              <Link 
                to={item.href} 
                className="block py-4 px-4 hover:bg-cine-dark active:bg-cine-dark transition-colors border-l-4 border-transparent hover:border-yellow-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};