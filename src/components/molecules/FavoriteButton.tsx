"use client";

import React from 'react';
import { Button } from '@/components/atoms/Button';
import { Movie } from '@/types';
import { useFavorites } from '@/hooks/useFavorites';
import { Heart } from 'lucide-react';
import { Text } from '../atoms/Text';

interface FavoriteButtonProps {
  movie: Movie;
  fullWidth?: boolean;
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({ movie, fullWidth }) => {
  const { isFavorite, addFavorite, removeFavorite, isMounted } = useFavorites();
  const favorite = isFavorite(movie.id);

  if (!isMounted) return (
    <Button
      variant='secondary'
      className="gap-2 whitespace-nowrap"
      fullWidth={fullWidth}
    >
      <Heart className={`w-5 h-5 transition-colors duration-200 text-primary'}`} />
      <Text className='text-white'>
        { 'Add to Favorite'}
      </Text>
    </Button>
  );

  return (
    <Button
      variant='secondary'
      onClick={() => favorite ? removeFavorite(movie.id) : addFavorite(movie)}
      className="gap-2 whitespace-nowrap"
      fullWidth={fullWidth}
    >
      <Heart className={`w-5 h-5 transition-colors duration-200 ${favorite ? 'text-red-500 fill-red-500' : 'text-primary'}`} />
      <Text className='text-white'>
        {favorite ? 'Remove from Favorite' : 'Add to Favorite'}
      </Text>
    </Button>
  );
};