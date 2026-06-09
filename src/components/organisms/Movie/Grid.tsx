import { MovieCard } from "@/components/molecules/Movie/Card";
import { MovieCardSkeleton } from "@/components/molecules/Movie/CardSkeleton";
import { Movie } from "@/types";

interface MovieGridProps {
  movies: Movie[];
  isFetchingNextPage: boolean;
  skeletonArray: number[];
}

const skeletonArray = Array.from({ length: 10 }, (_, i) => i);

export function MovieGrid({ movies, isFetchingNextPage }: MovieGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5">
      {movies.map((movie) => {
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
      
      {isFetchingNextPage &&
        skeletonArray.map((i) => <MovieCardSkeleton key={`skeleton-next-${i}`} />)}
    </div>
  );
}