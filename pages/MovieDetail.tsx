import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOVIES } from '../constants';
import { ShoppingCart, Check, Tag, ChevronRight, Film, User, Video, Star, Award, Info, Clapperboard, Globe } from 'lucide-react';
import { useCart } from '../context/AppContext';

export const MovieDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const movie = MOVIES.find(m => m.id === Number(id));
  const { addToCart } = useCart();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

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
      {/* Header Banner Background */}
      <div className="w-full h-64 md:h-80 bg-gray-900 relative -mb-32 overflow-hidden border-b-4 border-yellow-500 shadow-xl">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/film-grain.png')] opacity-30 z-10"></div>
        {/* Background blurred image effect */}
        <div 
            className="absolute inset-0 bg-cover bg-center opacity-40 blur-sm scale-110"
            style={{ backgroundImage: `url(${movie.imageUrl})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-16 relative z-20">
        
        {/* Breadcrumb */}
        <nav className="flex items-center text-xs md:text-sm text-gray-300 mb-8 overflow-x-auto whitespace-nowrap pt-4 font-medium uppercase tracking-wider scrollbar-hide">
          <Link to="/" className="hover:text-yellow-400 transition-colors flex-shrink-0">Acervo</Link>
          <ChevronRight size={14} className="mx-2 text-gray-500 flex-shrink-0" />
          <Link to={`/category/${movie.category.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-yellow-400 cursor-pointer transition-colors flex-shrink-0">
              {movie.category}
          </Link>
          <ChevronRight size={14} className="mx-2 text-gray-500 flex-shrink-0" />
          <span className="text-white font-bold truncate">{movie.title}</span>
        </nav>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          {/* Left Column: Image Poster */}
          <div className="w-full md:w-1/3 lg:w-1/4 flex-shrink-0 relative group">
            <div className="bg-white p-2 shadow-2xl rounded-sm transform group-hover:rotate-0 rotate-1 transition-all duration-500 border border-gray-200 relative z-10">
              <div className="relative aspect-[2/3] overflow-hidden bg-gray-800">
                 <img 
                  src={movie.imageUrl} 
                  alt={movie.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-100"
                />
                <div className="absolute top-2 right-2 bg-yellow-500 text-black font-bold text-xs px-2 py-1 rounded shadow-md uppercase">
                    {movie.specs?.type || 'Clássico'}
                </div>
              </div>
            </div>
            
            {/* Purchase Box Mobile/Desktop */}
            <div className="mt-6 bg-white p-6 rounded-lg shadow-lg border-t-4 border-cine border-l border-r border-b border-gray-100">
               <div className="flex justify-between items-end mb-4 border-b border-gray-100 pb-4">
                  <span className="text-sm text-gray-500 font-medium">Preço Digital</span>
                  <span className="text-4xl font-bold text-gray-800 tracking-tight">
                    R$ {movie.price.toFixed(2).replace('.', ',')}
                  </span>
               </div>
               
               <button 
                  onClick={() => addToCart(movie)}
                  className="w-full bg-cine hover:bg-cine-dark text-white font-bold py-4 px-6 rounded shadow-lg hover:shadow-cine/30 transition-all duration-300 flex items-center justify-center gap-3 transform hover:-translate-y-1 active:translate-y-0"
               >
                  <ShoppingCart size={20} />
                  ADICIONAR AO CARRINHO
               </button>

               <div className="mt-4 space-y-2 text-xs text-gray-500 font-medium">
                 <div className="flex items-center gap-2 text-green-700 bg-green-50 p-2 rounded">
                    <Check size={14} strokeWidth={3} /> Download em Alta Definição
                 </div>
                 <div className="flex items-center gap-2 text-gray-600 bg-gray-50 p-2 rounded">
                    <Check size={14} /> Legendas em Português
                 </div>
               </div>
            </div>
          </div>

          {/* Right Column: Details Content */}
          <div className="flex-1 flex flex-col text-gray-800">
            
            {/* Title Section */}
            <div className="mb-8 animate-slide-in-right">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-cine-dark text-white text-xs font-bold uppercase rounded tracking-wider shadow-sm">
                        {movie.category}
                    </span>
                    {movie.year && (
                        <span className="px-3 py-1 bg-gray-200 text-gray-700 text-xs font-bold rounded border border-gray-300">
                            {movie.year}
                        </span>
                    )}
                     {movie.specs?.duration && (
                        <span className="flex items-center gap-1 text-xs font-semibold text-gray-500 uppercase">
                            <Clapperboard size={12}/> {movie.specs.duration}
                        </span>
                    )}
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white md:text-gray-900 mb-2 logo-font uppercase tracking-tight leading-none drop-shadow-md md:drop-shadow-none">
                  {movie.title}
                </h1>
                
                {movie.originalTitle && (
                  <h2 className="text-xl md:text-2xl text-gray-400 font-serif italic flex items-center gap-2">
                    {movie.originalTitle}
                  </h2>
                )}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 gap-8 mt-4">
                
                {/* Sinopse */}
                <div className="prose max-w-none">
                    <h3 className="text-lg font-bold text-cine uppercase tracking-widest mb-3 flex items-center gap-2 border-b border-gray-200 pb-1">
                        <Info size={18} /> Sinopse
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg font-light bg-gray-50 p-6 border-l-4 border-cine rounded-r-lg">
                        {movie.description}
                    </p>
                </div>

                {/* Cast & Crew */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {movie.director && (
                        <div className="bg-white p-4 rounded border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                            <h4 className="text-xs font-bold text-gray-400 uppercase mb-2">Direção</h4>
                            <p className="font-bold text-gray-800 flex items-center gap-2 text-lg">
                                <Video size={18} className="text-yellow-600" /> {movie.director}
                            </p>
                        </div>
                    )}
                    {movie.cast && (
                        <div className="bg-white p-4 rounded border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                            <h4 className="text-xs font-bold text-gray-400 uppercase mb-2">Elenco Principal</h4>
                            <p className="font-medium text-gray-700 flex flex-wrap gap-2 leading-relaxed">
                                {movie.cast.map((actor, idx) => (
                                    <span key={idx} className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded text-sm text-gray-800">
                                        <User size={12} className="text-cine"/> {actor}
                                    </span>
                                ))}
                            </p>
                        </div>
                    )}
                </div>

                {/* Extra Details (Curiosities & Importance) */}
                {(movie.curiosities || movie.importance) && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                        {movie.curiosities && (
                            <div className="bg-yellow-50 p-5 rounded-lg border border-yellow-100 relative overflow-hidden group hover:shadow-lg transition-all">
                                <Award size={100} className="absolute -right-6 -bottom-6 text-yellow-200 opacity-50 group-hover:rotate-12 transition-transform" />
                                <h3 className="text-sm font-bold text-yellow-800 uppercase mb-2 flex items-center gap-2 relative z-10">
                                    <Star size={16} fill="currentColor" /> Curiosidades
                                </h3>
                                <p className="text-sm text-yellow-900 italic relative z-10 leading-relaxed">
                                    "{movie.curiosities}"
                                </p>
                            </div>
                        )}
                        {movie.importance && (
                            <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 relative overflow-hidden group hover:shadow-lg transition-all">
                                <Globe size={100} className="absolute -right-6 -bottom-6 text-blue-200 opacity-50 group-hover:rotate-12 transition-transform" />
                                <h3 className="text-sm font-bold text-blue-800 uppercase mb-2 flex items-center gap-2 relative z-10">
                                    <Award size={16} /> Importância Histórica
                                </h3>
                                <p className="text-sm text-blue-900 relative z-10 leading-relaxed font-medium">
                                    {movie.importance}
                                </p>
                            </div>
                        )}
                    </div>
                )}

                {/* Specs Tags */}
                <div className="pt-6 border-t border-gray-100">
                  <h3 className="text-xs font-bold text-gray-400 mb-4 uppercase tracking-wider">
                    Ficha Técnica
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {movie.specs && (
                        <>
                            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded border border-gray-200 font-mono">
                                {movie.specs.country}
                            </span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded border border-gray-200 font-mono">
                                {movie.specs.studio}
                            </span>
                        </>
                    )}
                    {movie.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white text-cine-dark text-sm rounded border border-cine/20 flex items-center gap-2 shadow-sm">
                        <Tag size={12} />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};