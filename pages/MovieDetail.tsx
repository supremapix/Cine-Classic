import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOVIES } from '../constants';
import { ShoppingCart, Check, Tag, ChevronRight, Film } from 'lucide-react';

export const MovieDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const movie = MOVIES.find(m => m.id === Number(id));

  if (!movie) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-800">Filme não encontrado</h2>
        <Link to="/" className="mt-4 text-cine hover:underline">Voltar para o acervo</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center text-sm text-gray-500 mb-8 overflow-x-auto whitespace-nowrap">
        <Link to="/" className="hover:text-cine transition-colors">Home</Link>
        <ChevronRight size={14} className="mx-2" />
        <span className="hover:text-cine cursor-pointer transition-colors">{movie.category}</span>
        <ChevronRight size={14} className="mx-2" />
        <span className="font-bold text-gray-800 truncate">{movie.title}</span>
      </nav>

      <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
        {/* Left Column: Image */}
        <div className="w-full md:w-1/3 lg:w-1/4">
          <div className="bg-white p-2 border border-gray-200 shadow-lg rounded-sm">
            <div className="relative aspect-[2/3] overflow-hidden">
               <img 
                src={movie.imageUrl} 
                alt={movie.title} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-2">
             <div className="bg-gray-100 p-3 text-center text-sm text-gray-600 rounded-sm">
               <Film size={16} className="inline mr-1 mb-1"/> Mídia Digital
             </div>
          </div>
        </div>

        {/* Right Column: Details */}
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 logo-font uppercase">
            {movie.title}
          </h1>
          {movie.originalTitle && (
            <h2 className="text-xl text-gray-500 font-light mb-4 italic">
              {movie.originalTitle} {movie.year && `(${movie.year})`}
            </h2>
          )}

          <div className="flex items-baseline gap-4 mb-6 pb-6 border-b border-gray-200">
            <span className="text-4xl font-bold text-cine">
              R$ {movie.price.toFixed(2).replace('.', ',')}
            </span>
            <span className="text-sm text-gray-500">preço unitário</span>
          </div>

          {/* Action Button */}
          <button className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 mb-8">
            <ShoppingCart size={20} />
            ADICIONAR AO CARRINHO
          </button>

          {/* Description */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-800 mb-3 border-l-4 border-cine pl-3 uppercase">
              Sinopse
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              {movie.description || "Descrição detalhada não disponível para este título."}
            </p>
          </div>

          {/* Details Grid */}
          <div className="bg-gray-50 p-6 rounded-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Tag size={18} className="text-cine" />
              Características
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8">
              {movie.tags.map((tag, idx) => (
                <div key={idx} className="flex items-center gap-2 text-gray-700">
                  <Check size={16} className="text-green-500 flex-shrink-0" />
                  <span className="text-sm">{tag}</span>
                </div>
              ))}
              <div className="flex items-center gap-2 text-gray-700">
                <Check size={16} className="text-green-500 flex-shrink-0" />
                <span className="text-sm">Gênero: {movie.category}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};