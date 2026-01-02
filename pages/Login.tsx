import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AppContext';
import { Film } from 'lucide-react';

export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      login(email);
      navigate(-1); // Go back to previous page
    } else {
      alert("Por favor, preencha todos os campos (qualquer valor serve para teste).");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <div className="bg-white p-8 rounded-sm shadow-md w-full max-w-md border border-gray-200">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cine text-white mb-4">
             <Film size={24} />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 uppercase logo-font">Acessar Conta</h2>
          <p className="text-gray-500 text-sm">Entre para gerenciar seus pedidos e lista de desejos.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
            <input 
              type="email" 
              className="w-full border border-gray-300 px-3 py-2 rounded-sm focus:outline-none focus:border-cine"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Senha</label>
            <input 
              type="password" 
              className="w-full border border-gray-300 px-3 py-2 rounded-sm focus:outline-none focus:border-cine"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-cine hover:bg-cine-dark text-white font-bold py-3 rounded-sm transition-colors"
          >
            ENTRAR
          </button>
        </form>

        <div className="mt-6 text-center text-sm">
          <a href="#" className="text-gray-500 hover:text-cine">Esqueceu sua senha?</a>
          <span className="mx-2 text-gray-300">|</span>
          <a href="#" className="text-cine font-bold hover:underline">Criar conta</a>
        </div>
      </div>
    </div>
  );
};