import { useEffect, useState } from "react";
import { useFavoritesStore } from "@/store/favorit";


export function useFavorites() {
  const store = useFavoritesStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return {
    favorites: mounted ? store.favorites : [],
    addFavorite: store.addFavorite,
    removeFavorite: store.removeFavorite,
    isFavorite: (movieId: number) => {
      if (!mounted) return false;
      return store.favorites.some((m) => m.id === movieId);
    },
    isMounted: mounted,
  };
}
