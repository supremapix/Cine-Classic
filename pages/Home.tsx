import React, { useState } from 'react';
import { TypewriterHero } from '../components/TypewriterHero';
import { MovieCard } from '../components/MovieCard';
import { MOVIES } from '../constants';
import { Search, ChevronDown } from 'lucide-react';

export const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('relevant');

  return (
    <>
      <TypewriterHero />

      <div className="max-w-7xl mx-auto px-4 py-6 md:py-10">
        
        {/* Breadcrumbs & Title */}
        <div className="flex items-center text-xs md:text-sm text-gray-500 mb-6 uppercase tracking-wide">
          <span className="font-bold text-gray-800">Acervo Completo</span>
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {MOVIES.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

         {/* Pagination Mock */}
         <div className="mt-12 flex justify-center gap-2">
           <button className="px-3 py-1 bg-cine text-white rounded-sm">1</button>
           <button className="px-3 py-1 bg-white border border-gray-300 text-gray-600 hover:bg-gray-50 rounded-sm">2</button>
           <button className="px-3 py-1 bg-white border border-gray-300 text-gray-600 hover:bg-gray-50 rounded-sm">3</button>
           <span className="px-2 py-1 text-gray-400">...</span>
           <button className="px-3 py-1 bg-white border border-gray-300 text-gray-600 hover:bg-gray-50 rounded-sm">10</button>
         </div>
      </div>
    </>
  );
};