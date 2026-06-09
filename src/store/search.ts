import { create } from "zustand";

interface MovieSearchState {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export const useMovieSearchStore = create<MovieSearchState>((set) => ({
  searchTerm: "",
  setSearchTerm: (term) => set({ searchTerm: term }),
}));
