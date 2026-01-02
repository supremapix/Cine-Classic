import React from 'react';
import { useCart, useAuth } from '../context/AppContext';
import { Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export const Cart: React.FC = () => {
  const { items, removeFromCart, cartTotal, clearCart } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (!isAuthenticated) {
      alert("Você precisa fazer login para finalizar a compra.");
      navigate('/login');
      return;
    }
    
    if (items.length === 0) return;

    alert(`Compra realizada com sucesso!\nTotal: R$ ${cartTotal.toFixed(2)}\nObrigado pela preferência.`);
    clearCart();
    navigate('/');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center p-4">
        <ShoppingBag size={64} className="text-gray-300 mb-4" />
        <h2 className="text-xl font-bold text-gray-600 mb-2">Seu carrinho está vazio</h2>
        <Link to="/" className="text-cine font-bold hover:underline flex items-center gap-2">
          <ArrowLeft size={16} /> Voltar para o acervo
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-8 logo-font uppercase border-b border-gray-200 pb-4">
        Carrinho de Compras
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items List */}
        <div className="flex-1">
          <div className="bg-white border border-gray-200 rounded-sm shadow-sm">
            {items.map((movie) => (
              <div key={movie.id} className="flex gap-4 p-4 border-b border-gray-100 last:border-0 items-center">
                <div className="w-16 h-24 bg-gray-100 flex-shrink-0">
                  <img src={movie.imageUrl} alt={movie.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 text-sm md:text-base">{movie.title}</h3>
                  <p className="text-xs text-gray-500">{movie.originalTitle}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-800 mb-2">R$ {movie.price.toFixed(2).replace('.', ',')}</p>
                  <button 
                    onClick={() => removeFromCart(movie.id)}
                    className="text-red-500 hover:text-red-700 text-xs flex items-center gap-1 ml-auto"
                  >
                    <Trash2 size={14} /> Remover
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="w-full lg:w-80">
          <div className="bg-gray-50 p-6 rounded-sm border border-gray-200 sticky top-4">
            <h3 className="font-bold text-gray-700 mb-4 uppercase text-sm">Resumo do Pedido</h3>
            
            <div className="flex justify-between items-center mb-2 text-sm text-gray-600">
              <span>Subtotal ({items.length} itens)</span>
              <span>R$ {cartTotal.toFixed(2).replace('.', ',')}</span>
            </div>
            
            <div className="border-t border-gray-200 my-4 pt-4 flex justify-between items-center">
              <span className="font-bold text-lg text-gray-800">Total</span>
              <span className="font-bold text-xl text-cine">R$ {cartTotal.toFixed(2).replace('.', ',')}</span>
            </div>

            <button 
              onClick={handleCheckout}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-sm shadow-sm transition-colors mt-2"
            >
              FINALIZAR COMPRA
            </button>
            
            <Link to="/" className="block text-center text-sm text-gray-500 hover:text-cine mt-4">
              Continuar comprando
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};