import React, { useState, useMemo } from 'react';
import { TypewriterHero } from '../components/TypewriterHero';
import { MovieCard } from '../components/MovieCard';
import { MOVIES, NAV_ITEMS } from '../constants';
import { Search, ChevronDown, MonitorPlay } from 'lucide-react';
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
            // Logic for "Novidades": In a real app, sort by date. 
            // Here we just return everything as "Featured".
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
        (movie.originalTitle && normalize(movie.originalTitle).includes(lowerTerm))
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

      <div className="max-w-7xl mx-auto px-4 py-6 md:py-10">
        
        {/* Breadcrumbs & Title */}
        <div className="flex items-center text-xs md:text-sm text-gray-500 mb-6 uppercase tracking-wide">
            <Link to="/" className="hover:text-cine font-bold mr-2">HOME</Link>
            <span className="mx-1">/</span>
            <span className="font-bold text-gray-800">{pageTitle}</span>
        </div>

        {/* Controls Bar */}
        <div className="bg-gray-100 p-4 rounded-sm border border-gray-200 mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
          
          <div className="relative w-full md:w-64">
            <input 
              type="text"
              placeholder="BUSCAR..."
              className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-sm text-sm focus:outline-none focus:border-cine"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-gray-600">
            <div className="flex items-center gap-1 cursor-pointer hover:text-cine">
              Marca <ChevronDown size={14} />
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-cine">
              Áudio <ChevronDown size={14} />
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-cine">
              Qualidade <ChevronDown size={14} />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500 uppercase">Ordenar por:</span>
            <select 
              className="border border-gray-300 text-sm py-1 px-2 rounded-sm focus:outline-none"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="relevant">Mais Relevantes</option>
              <option value="price_asc">Menor Preço</option>
              <option value="price_desc">Maior Preço</option>
              <option value="name">Nome</option>
            </select>
          </div>
        </div>

        {/* Grid */}
        {filteredMovies.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
            </div>
        ) : (
            <div className="flex flex-col items-center justify-center py-20 text-gray-500">
                <MonitorPlay size={48} className="mb-4 text-gray-300" />
                <p className="text-lg font-medium">Nenhum filme encontrado nesta categoria.</p>
                <p className="text-sm">Tente buscar em "Faroeste" para ver o acervo disponível.</p>
                <Link to="/" className="mt-4 px-4 py-2 bg-cine text-white rounded-sm hover:bg-cine-dark transition-colors">
                    Ver todos os filmes
                </Link>
            </div>
        )}

         {/* Pagination Mock (only show if results exist) */}
         {filteredMovies.length > 0 && (
            <div className="mt-12 flex justify-center gap-2">
                <button className="px-3 py-1 bg-cine text-white rounded-sm">1</button>
                <button className="px-3 py-1 bg-white border border-gray-300 text-gray-600 hover:bg-gray-50 rounded-sm">2</button>
                <button className="px-3 py-1 bg-white border border-gray-300 text-gray-600 hover:bg-gray-50 rounded-sm">3</button>
                <span className="px-2 py-1 text-gray-400">...</span>
                <button className="px-3 py-1 bg-white border border-gray-300 text-gray-600 hover:bg-gray-50 rounded-sm">10</button>
            </div>
         )}
      </div>
    </>
  );
};