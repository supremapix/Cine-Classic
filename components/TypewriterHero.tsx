import React, { useState, useEffect } from 'react';

const PHRASES = [
  "Clássicos que marcam a história.",
  "O melhor do cinema Faroeste.",
  "Reviva a Era de Ouro.",
  "Acervo Cine Classic."
];

export const TypewriterHero: React.FC = () => {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleType = () => {
      const currentPhrase = PHRASES[phraseIndex];
      
      if (isDeleting) {
        // Deleting text
        setText(currentPhrase.substring(0, text.length - 1));
        setTypingSpeed(50); // Faster delete
      } else {
        // Typing text
        setText(currentPhrase.substring(0, text.length + 1));
        setTypingSpeed(100); // Normal typing
      }

      if (!isDeleting && text === currentPhrase) {
        // Finished typing phrase, pause before deleting (The "Memory" creates a pause)
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        // Finished deleting, move to next phrase
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex, typingSpeed]);

  return (
    <div className="w-full bg-cine-dark text-white py-12 px-4 shadow-inner relative overflow-hidden">
      {/* Background pattern/overlay for vintage feel */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/film-grain.png')]"></div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-xl md:text-2xl text-cine-light font-light tracking-widest mb-4 uppercase">
          Bem-vindo ao acervo
        </h2>
        <h1 className="text-4xl md:text-6xl font-bold min-h-[80px]">
          <span className="logo-font">{text}</span>
          <span className="inline-block w-1 h-10 md:h-14 ml-1 bg-white align-middle animate-cursor"></span>
        </h1>
      </div>
    </div>
  );
};