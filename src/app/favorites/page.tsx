"use client";

import { useFavorites } from "@/hooks/useFavorites";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/molecules/Navbar";
import { MovieCardSkeleton } from "@/components/molecules/Movie/CardSkeleton";
import { MovieCard } from "@/components/molecules/Movie/Card";
import { Text } from "@/components/atoms/Text";
import { Button } from "@/components/atoms/Button";

export default function FavoritesPage() {
  const { favorites, isMounted } = useFavorites();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-28">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <Text variant="heading-1" className=" text-primary mb-2">
            My Favorites
          </Text>
          <Text className="text-secondary">Your personal collection of must-watch movies.</Text>
        </motion.div>

        {!isMounted ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5">
            {Array.from({ length: 10 }).map((_, i) => (
              <MovieCardSkeleton key={`fav-skel-${i}`} />
            ))}
          </div>
        ) : favorites.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-24 text-center bg-surface-1 rounded-3xl border border-zinc-800/50 border-dashed"
          >
            <div className="w-20 h-20 bg-surface-2 rounded-full flex items-center justify-center mb-6">
              <svg className="w-10 h-10 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <Text variant="heading-2" className="font-semibold text-xl text-primary mb-2">
          No Favorites Yet
            </Text>
            <Text className="text-secondary max-w-sm mb-8">
              You haven't added any movies to your favorites. Start exploring and save the ones you love!
            </Text>
            <Button
            as={Link}
            href={"/"}
            >
Explore Movies
            </Button>
          </motion.div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5">
            {favorites.map((movie) => {
              const genres = movie?.genre_names || movie.genre_ids?.map(String) || [];
              return (
                <MovieCard
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  posterPath={movie.poster_path || ""}
                  year={movie.release_date?.substring(0, 4) || movie.year || ""}
                  rating={movie.vote_average}
                  genres={genres}
                  overview={movie.overview}
                />
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
