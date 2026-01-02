import React, { useState, useMemo } from 'react';
import { TypewriterHero } from '../components/TypewriterHero';
import { MovieCard } from '../components/MovieCard';
import { MOVIES, NAV_ITEMS } from '../constants';
import { Search, ChevronDown, MonitorPlay, Film, Filter } from 'lucide-react';
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

      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 animate-fade-in">
        
        {/* Breadcrumbs & Title */}
        <div className="flex items-center text-xs md:text-sm text-gray-500 mb-6 uppercase tracking-wide">
            <Link to="/" className="hover:text-cine font-bold mr-2 transition-colors">HOME</Link>
            <span className="mx-1 text-gray-300">/</span>
            <span className="font-bold text-gray-800 text-cine border-b-2 border-cine pb-0.5">{pageTitle}</span>
        </div>

        {/* Controls Bar - Modern & Floating */}
        <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 mb-10 flex flex-col md:flex-row justify-between items-center gap-4 sticky top-[80px] z-30 transition-all duration-300">
          
          <div className="relative w-full md:w-80 group">
            <input 
              type="text"
              placeholder="Filtrar por título, diretor..."
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-300 rounded text-sm focus:outline-none focus:border-cine focus:ring-2 focus:ring-cine/20 transition-all shadow-inner"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-cine transition-colors" />
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-gray-600 font-medium">
            <div className="px-4 py-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded cursor-pointer transition-colors flex items-center gap-2 group">
              <Filter size={14} className="group-hover:text-cine" /> Gênero <ChevronDown size={12} />
            </div>
            <div className="px-4 py-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded cursor-pointer transition-colors flex items-center gap-2 group">
              Ano <ChevronDown size={12} />
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <span className="text-xs text-gray-500 uppercase font-bold whitespace-nowrap">Ordenar por:</span>
            <select 
              className="w-full md:w-auto border border-gray-300 bg-white text-sm py-2 px-3 rounded focus:outline-none focus:border-cine cursor-pointer hover:border-gray-400 transition-colors shadow-sm"
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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
            {filteredMovies.map((movie, index) => (
                <div 
                    key={movie.id} 
                    className="opacity-0 animate-fade-in-up" 
                    style={{ animationDelay: `${index * 70}ms`, animationFillMode: 'forwards' }} // Stagger effect
                >
                    <MovieCard movie={movie} />
                </div>
            ))}
            </div>
        ) : (
            <div className="flex flex-col items-center justify-center py-32 text-gray-500 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
                <div className="p-6 bg-gray-100 rounded-full mb-4 animate-bounce">
                     <Film size={64} className="text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-700 mb-2 logo-font">Nenhum clássico encontrado</h3>
                <p className="text-sm text-gray-500 text-center max-w-md mb-6">
                    Sua busca não retornou resultados no nosso acervo. Tente termos diferentes ou navegue pelas categorias.
                </p>
                <button 
                    onClick={() => {setSearchTerm(''); setSortBy('relevant');}}
                    className="px-8 py-3 bg-cine text-white rounded font-bold hover:bg-cine-dark transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                    Limpar Filtros
                </button>
            </div>
        )}

         {/* Pagination Mock */}
         {filteredMovies.length > 10 && (
            <div className="mt-20 flex justify-center gap-2">
                <button className="w-12 h-12 flex items-center justify-center bg-cine text-white rounded font-bold shadow-md hover:bg-cine-dark transition-colors">1</button>
                <button className="w-12 h-12 flex items-center justify-center bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-cine hover:border-cine transition-all rounded font-medium">2</button>
                <button className="w-12 h-12 flex items-center justify-center bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-cine hover:border-cine transition-all rounded font-medium">3</button>
                <span className="w-12 h-12 flex items-center justify-center text-gray-400 font-bold">...</span>
                <button className="w-12 h-12 flex items-center justify-center bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-cine hover:border-cine transition-all rounded font-medium">Last</button>
            </div>
         )}
      </div>
    </>
  );
};