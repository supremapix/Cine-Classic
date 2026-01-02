import React from 'react';
import { useAuth } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { User, Package, LogOut, Settings } from 'lucide-react';

export const Profile: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="bg-cine-nav p-6 text-white flex items-center gap-4">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center border-2 border-white/50">
            <User size={32} />
          </div>
          <div>
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <p className="text-white/70 text-sm">{user.email}</p>
          </div>
        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
             <h2 className="text-lg font-bold text-gray-800 border-b pb-2">Minha Conta</h2>
             <button className="w-full flex items-center gap-3 p-3 bg-gray-50 hover:bg-gray-100 rounded-sm transition-colors text-left text-gray-700">
                <Package size={20} className="text-cine" />
                <span>Meus Pedidos</span>
             </button>
             <button className="w-full flex items-center gap-3 p-3 bg-gray-50 hover:bg-gray-100 rounded-sm transition-colors text-left text-gray-700">
                <Settings size={20} className="text-cine" />
                <span>Configurações</span>
             </button>
          </div>

          <div className="space-y-4">
             <h2 className="text-lg font-bold text-gray-800 border-b pb-2">Ações</h2>
             <button 
               onClick={handleLogout}
               className="w-full flex items-center gap-3 p-3 bg-red-50 hover:bg-red-100 text-red-700 rounded-sm transition-colors text-left font-bold"
             >
                <LogOut size={20} />
                <span>Sair da Conta</span>
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};