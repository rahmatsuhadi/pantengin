import { getPopularMoviesClient, searchMoviesClient } from '@/services/tmdb';
import { useInfiniteQuery } from '@tanstack/react-query';

export function useMovieSearch(debouncedQuery: string) {
  return useInfiniteQuery({
    queryKey: ['movies', debouncedQuery],    
    queryFn: async ({ pageParam = 1 }) => {
      if (debouncedQuery.trim() !== '') {
        return searchMoviesClient(debouncedQuery, pageParam);
      }
      return getPopularMoviesClient(pageParam);
    },
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      }
      return undefined;
    },
    initialPageParam: 1, 
  });
}
