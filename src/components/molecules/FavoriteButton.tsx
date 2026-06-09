"use client";

import React from 'react';
import { Button } from '@/components/atoms/Button';
import { Movie } from '@/types';
import { useFavorites } from '@/hooks/useFavorites';

interface FavoriteButtonProps {
  movie: Movie;
  fullWidth?: boolean;
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({ movie, fullWidth }) => {
  const { isFavorite, addFavorite, removeFavorite, isMounted } = useFavorites();
  const favorite = isFavorite(movie.id);

  if (!isMounted) return null;

  return (
    <Button
      variant='secondary'
      onClick={() => favorite ? removeFavorite(movie.id) : addFavorite(movie)}
      className="gap-2 whitespace-nowrap"
      fullWidth={fullWidth}
    >
      <svg
        className={`w-5 h-5 transition-colors duration-200 ${favorite ? 'text-red-500 fill-red-500' : 'text-text-primary'}`}
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>

      <span className="text-white">
        {favorite ? 'Remove from Favorite' : 'Add to Favorite'}
      </span>
    </Button>
  );
};