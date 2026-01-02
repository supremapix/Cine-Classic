import React from 'react';
import { Movie } from '../types';
import { ShoppingCart } from 'lucide-react';

interface Props {
  movie: Movie;
}

export const MovieCard: React.FC<Props> = ({ movie }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-sm shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col h-full group">
      <div className="relative overflow-hidden aspect-[2/3] bg-gray-100">
        <img 
          src={movie.imageUrl} 
          alt={movie.title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
      </div>
      
      <div className="p-4 flex flex-col flex-grow text-center">
        <h3 className="text-gray-800 font-bold text-sm md:text-base uppercase mb-1 line-clamp-2 min-h-[40px]">
          {movie.title}
        </h3>
        {movie.originalTitle && (
          <p className="text-gray-500 text-xs italic mb-2">{movie.originalTitle}</p>
        )}
        
        <div className="flex flex-wrap justify-center gap-1 mb-3">
          {movie.tags.slice(0, 3).map((tag, idx) => (
            <span key={idx} className="text-[10px] bg-gray-100 text-gray-600 px-1 py-0.5 rounded">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-3 border-t border-gray-100">
          <p className="text-xl font-bold text-cine mb-3">
            R$ {movie.price.toFixed(2).replace('.', ',')}
          </p>
          <button className="w-full bg-cine hover:bg-cine-dark text-white font-bold py-2 px-4 rounded-sm transition-colors flex items-center justify-center gap-2 text-sm">
            <ShoppingCart size={16} />
            COMPRAR
          </button>
        </div>
      </div>
    </div>
  );
};