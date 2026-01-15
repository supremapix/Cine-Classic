import React from 'react';

export const Watermark: React.FC = () => {
  // Criamos uma grade de elementos para cobrir a tela
  const rows = Array.from({ length: 15 });
  const cols = Array.from({ length: 8 });

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden select-none opacity-[0.04]">
      <div className="flex flex-col gap-32 h-[150vh] w-[150vw] -rotate-[25deg] -translate-x-10 -translate-y-10">
        {rows.map((_, rowIndex) => (
          <div key={rowIndex} className="flex gap-48 whitespace-nowrap justify-around">
            {cols.map((_, colIndex) => (
              <a
                key={colIndex}
                href="https://www.supremasite.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 font-bold text-lg md:text-xl uppercase tracking-tighter pointer-events-auto hover:opacity-100 transition-opacity"
              >
                Desenvolvido ❤️ por <span className="text-cine">Suprema Sites Express</span>
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};