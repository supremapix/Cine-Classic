import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOVIES } from '../constants';
import { ShoppingCart, Check, Tag, ChevronRight, Film, User, Video, Star } from 'lucide-react';
import { useCart } from '../context/AppContext';

export const MovieDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const movie = MOVIES.find(m => m.id === Number(id));
  const { addToCart } = useCart();

  if (!movie) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center animate-fade-in">
        <h2 className="text-2xl font-bold text-gray-800">Filme não encontrado</h2>
        <Link to="/" className="mt-4 text-cine hover:underline">Voltar para o acervo</Link>
      </div>
    );
  }

  return (
    <div className="animate-fade-in-up">
      {/* Header Banner Background (Optional visual flair) */}
      <div className="w-full h-48 bg-gradient-to-r from-cine-nav to-cine-dark relative -mb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/film-grain.png')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-12 relative z-10">
        
        {/* Breadcrumb */}
        <nav className="flex items-center text-xs md:text-sm text-white/80 mb-6 overflow-x-auto whitespace-nowrap pt-4">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight size={14} className="mx-2" />
          <Link to={`/category/${movie.category.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-white cursor-pointer transition-colors">
              {movie.category}
          </Link>
          <ChevronRight size={14} className="mx-2" />
          <span className="font-bold text-white truncate">{movie.title}</span>
        </nav>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 bg-white p-6 md:p-8 rounded-lg shadow-xl border border-gray-100">
          {/* Left Column: Image */}
          <div className="w-full md:w-1/3 lg:w-1/4 flex-shrink-0">
            <div className="bg-gray-200 p-1 border border-gray-300 shadow-lg rounded-sm transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="relative aspect-[2/3] overflow-hidden group">
                 <img 
                  src={movie.imageUrl} 
                  alt={movie.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
               <div className="bg-gray-50 p-3 text-center text-sm text-gray-600 rounded-sm border border-gray-200 flex items-center justify-center gap-2">
                 <Film size={16} className="text-cine"/> Mídia Digital (Download)
               </div>
               <div className="bg-green-50 p-3 text-center text-sm text-green-700 rounded-sm border border-green-100 flex items-center justify-center gap-2 font-bold">
                 <Check size={16}/> Disponível Imediatamente
               </div>
            </div>
          </div>

          {/* Right Column: Details */}
          <div className="flex-1 flex flex-col">
            <div className="border-b border-gray-100 pb-6 mb-6">
                <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-cine text-white text-xs font-bold uppercase rounded-full tracking-wider shadow-sm">
                        {movie.category}
                    </span>
                    {movie.year && (
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full border border-gray-200">
                            {movie.year}
                        </span>
                    )}
                </div>
                
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2 logo-font uppercase tracking-tight leading-tight">
                  {movie.title}
                </h1>
                
                {movie.originalTitle && (
                  <h2 className="text-lg md:text-xl text-gray-500 font-light italic flex items-center gap-2">
                    <span className="w-8 h-[1px] bg-gray-300"></span>
                    {movie.originalTitle}
                  </h2>
                )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                {/* Info Block */}
                <div className="lg:col-span-2 space-y-6">
                    <div>
                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2 flex items-center gap-1">
                            <Video size={14} /> Sinopse
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-lg font-light">
                        {movie.description || "Descrição detalhada não disponível para este título."}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {movie.director && (
                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                                <h4 className="text-xs font-bold text-gray-400 uppercase mb-1">Direção</h4>
                                <p className="font-medium text-gray-800 flex items-center gap-2">
                                    <Video size={16} className="text-cine" /> {movie.director}
                                </p>
                            </div>
                        )}
                        {movie.cast && (
                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                                <h4 className="text-xs font-bold text-gray-400 uppercase mb-1">Elenco Principal</h4>
                                <p className="font-medium text-gray-800 flex items-center gap-2 flex-wrap">
                                    <User size={16} className="text-cine" /> 
                                    {movie.cast.join(", ")}
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Purchase Block */}
                <div className="lg:col-span-1">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-inner">
                        <p className="text-sm text-gray-500 mb-1">Preço unitário</p>
                        <div className="flex items-baseline gap-1 mb-6">
                            <span className="text-sm font-medium text-gray-400">R$</span>
                            <span className="text-4xl font-bold text-cine-dark">
                            {movie.price.toFixed(2).replace('.', ',')}
                            </span>
                        </div>

                        <button 
                            onClick={() => addToCart(movie)}
                            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-green-500/30 transform hover:-translate-y-1 mb-4 group"
                        >
                            <ShoppingCart size={20} className="group-hover:animate-bounce" />
                            ADICIONAR
                        </button>
                        
                        <div className="text-xs text-center text-gray-400 flex flex-col gap-1">
                            <span className="flex items-center justify-center gap-1"><Check size={12}/> Pagamento Seguro</span>
                            <span className="flex items-center justify-center gap-1"><Check size={12}/> Download Imediato</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Details Tags */}
            <div className="mt-auto border-t border-gray-100 pt-6">
              <h3 className="text-sm font-bold text-gray-800 mb-4 flex items-center gap-2 uppercase tracking-wider">
                <Tag size={16} className="text-cine" />
                Especificações Técnicas
              </h3>
              <div className="flex flex-wrap gap-2">
                {movie.tags.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-md border border-gray-200 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-cine rounded-full"></div>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};