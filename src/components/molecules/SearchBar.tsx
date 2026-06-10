"use client"
import React from 'react';
import { Input } from '../atoms/Input';
import { useMovieSearchStore } from '@/store/search';

interface SearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onClear?: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onClear, value, ...props }) => {

  const searchTerm = useMovieSearchStore((state) => state.searchTerm);
  const setSearchTerm = useMovieSearchStore((state) => state.setSearchTerm);

  const handleClear = () => {
    setSearchTerm("");
  };


  return (
    <form onSubmit={(e) => e.preventDefault()} className="relative w-full max-w-2xl mx-auto">
      <Input 
        type="text" 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        // icon={<span className="text-xl">🔍</span>} 
        placeholder="Cari film favoritmu..." 
        className="text-lg py-4 shadow-lg shadow-black/50"
        {...props} 
      />
      {searchTerm && (
        <button 
          type="button"
          onClick={handleClear}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-50 bg-zinc-800 hover:bg-zinc-700 rounded-full w-6 h-6 flex items-center justify-center text-sm transition-colors"
        >
          ✕
        </button>
      )}
    </form>
  );
};
