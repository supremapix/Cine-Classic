import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Movie } from '../types';

// --- Auth Types & Context ---
interface User {
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

// --- Cart Types & Context ---
interface CartContextType {
  items: Movie[];
  addToCart: (movie: Movie) => void;
  removeFromCart: (movieId: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);
const CartContext = createContext<CartContextType | undefined>(undefined);

// --- Provider Component ---
export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Auth State
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string) => {
    // Simulating login
    setUser({ name: 'Cliente Cine Classic', email });
  };

  const logout = () => {
    setUser(null);
  };

  // Cart State
  const [items, setItems] = useState<Movie[]>([]);

  const addToCart = (movie: Movie) => {
    // Check if already in cart to avoid duplicates (optional logic, but good for UX)
    if (!items.find(i => i.id === movie.id)) {
      setItems(prev => [...prev, movie]);
    } else {
        alert("Este filme já está no seu carrinho!");
    }
  };

  const removeFromCart = (movieId: number) => {
    setItems(prev => prev.filter(item => item.id !== movieId));
  };

  const clearCart = () => {
    setItems([]);
  };

  const cartTotal = items.reduce((total, item) => total + item.price, 0);

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      <CartContext.Provider value={{ items, addToCart, removeFromCart, clearCart, cartTotal, cartCount: items.length }}>
        {children}
      </CartContext.Provider>
    </AuthContext.Provider>
  );
};

// --- Custom Hooks ---
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AppProvider');
  return context;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within an AppProvider');
  return context;
};