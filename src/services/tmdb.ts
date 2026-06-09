import { MovieResponse } from "@/types";


export async function getPopularMoviesClient(page = 1): Promise<MovieResponse> {
    const res = await fetch(`/api/movies?page=${page}`);
    if (!res.ok) throw new Error("ERROR: failed get data popular");
    return res.json();
}

export async function searchMoviesClient(query: string, page = 1): Promise<MovieResponse> {
    if (!query.trim()) {
      return { page: 1, results: [], total_pages: 1, total_results: 0 };
    }
    const res = await fetch(`/api/movies/search?query=${encodeURIComponent(query)}&page=${page}`);
    if (!res.ok) throw new Error("ERROR: failed search movie");
    return res.json();
  }