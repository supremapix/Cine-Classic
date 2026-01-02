import React, { useState, useMemo } from 'react';
import { TypewriterHero } from '../components/TypewriterHero';
import { MovieCard } from '../components/MovieCard';
import { MOVIES, NAV_ITEMS } from '../constants';
import { Search, ChevronDown, MonitorPlay, Film } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';

export const Home: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('relevant');

  // Helper to normalize strings for comparison (remove accents, lowercase)
  const normalize = (str: string) => 
    str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // Determine current page title based on slug
  const pageTitle = useMemo(() => {
    if (!slug) return "Acervo Completo";
    const navItem = NAV_ITEMS.find(item => item.href.endsWith(slug));
    return navItem ? navItem.label : slug.replace('-', ' ').toUpperCase();
  }, [slug]);

  // Filter movies
  const filteredMovies = useMemo(() => {
    let result = MOVIES;

    // Filter by Category (Slug)
    if (slug) {
        if (slug === 'novidades') {
             // In a real app, this would filter by date. Here we just show everything.
             result = result;
        } else {
            result = result.filter(movie => {
                const movieCat = normalize(movie.category);
                const targetSlug = normalize(slug);
                return movieCat.includes(targetSlug) || targetSlug.includes(movieCat);
            });
        }
    }

    // Filter by Search Term
    if (searchTerm) {
      const lowerTerm = normalize(searchTerm);
      result = result.filter(movie => 
        normalize(movie.title).includes(lowerTerm) || 
        (movie.originalTitle && normalize(movie.originalTitle).includes(lowerTerm)) ||
        (movie.director && normalize(movie.director).includes(lowerTerm)) ||
        (movie.cast && movie.cast.some(actor => normalize(actor).includes(lowerTerm)))
      );
    }

    // Sort
    return result.sort((a, b) => {
      if (sortBy === 'price_asc') return a.price - b.price;
      if (sortBy === 'price_desc') return b.price - a.price;
      if (sortBy === 'name') return a.title.localeCompare(b.title);
      return a.id - b.id; // relevant (default id)
    });
  }, [slug, searchTerm, sortBy]);

  return (
    <>
      <TypewriterHero />

      <div className="max-w-7xl mx-auto px-4 py-6 md:py-10 animate-fade-in">
        
        {/* Breadcrumbs & Title */}
        <div className="flex items-center text-xs md:text-sm text-gray-500 mb-6 uppercase tracking-wide">
            <Link to="/" className="hover:text-cine font-bold mr-2 transition-colors">HOME</Link>
            <span className="mx-1 text-gray-300">/</span>
            <span className="font-bold text-gray-800 text-cine border-b-2 border-cine pb-0.5">{pageTitle}</span>
        </div>

        {/* Controls Bar */}
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-8 flex flex-col md:flex-row justify-between items-center gap-4 sticky top-[150px] z-20 transition-all duration-300">
          
          <div className="relative w-full md:w-72 group">
            <input 
              type="text"
              placeholder="Filtrar nesta lista..."
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-cine focus:ring-2 focus:ring-cine/20 transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-cine transition-colors" />
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-gray-600 font-medium">
             <span className="hidden md:inline text-gray-400 uppercase text-[10px]">Filtros Rápidos:</span>
            <div className="px-3 py-1.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded cursor-pointer transition-colors flex items-center gap-1">
              Marca <ChevronDown size={12} />
            </div>
            <div className="px-3 py-1.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded cursor-pointer transition-colors flex items-center gap-1">
              Áudio <ChevronDown size={12} />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500 uppercase font-bold">Ordenar:</span>
            <select 
              className="border border-gray-200 bg-white text-sm py-1.5 px-2 rounded-md focus:outline-none focus:border-cine cursor-pointer hover:border-gray-300 transition-colors"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="relevant">Mais Relevantes</option>
              <option value="price_asc">Menor Preço</option>
              <option value="price_desc">Maior Preço</option>
              <option value="name">Nome (A-Z)</option>
            </select>
          </div>
        </div>

        {/* Grid with Staggered Animation Logic */}
        {filteredMovies.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {filteredMovies.map((movie, index) => (
                <div 
                    key={movie.id} 
                    className="animate-fade-in-up" 
                    style={{ animationDelay: `${index * 50}ms` }} // Stagger effect
                >
                    <MovieCard movie={movie} />
                </div>
            ))}
            </div>
        ) : (
            <div className="flex flex-col items-center justify-center py-24 text-gray-500 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                <div className="p-4 bg-gray-200 rounded-full mb-4">
                     <Film size={48} className="text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-700 mb-2">Acervo não encontrado</h3>
                <p className="text-sm text-gray-500 text-center max-w-md">
                    Não encontramos filmes com os termos ou filtros selecionados. Tente navegar pelas categorias no menu superior.
                </p>
                <button 
                    onClick={() => {setSearchTerm(''); setSortBy('relevant');}}
                    className="mt-6 px-6 py-2 bg-cine text-white rounded-full font-bold hover:bg-cine-dark transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                    Limpar Filtros
                </button>
            </div>
        )}

         {/* Pagination Mock (only show if results exist and > 8) */}
         {filteredMovies.length > 8 && (
            <div className="mt-16 flex justify-center gap-2">
                <button className="w-10 h-10 flex items-center justify-center bg-cine text-white rounded-md font-bold shadow-md">1</button>
                <button className="w-10 h-10 flex items-center justify-center bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-cine hover:border-cine transition-all rounded-md">2</button>
                <button className="w-10 h-10 flex items-center justify-center bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-cine hover:border-cine transition-all rounded-md">3</button>
                <span className="w-10 h-10 flex items-center justify-center text-gray-400">...</span>
                <button className="w-10 h-10 flex items-center justify-center bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-cine hover:border-cine transition-all rounded-md">10</button>
            </div>
         )}
      </div>
    </>
  );
};