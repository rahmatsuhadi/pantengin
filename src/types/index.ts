

export interface Genre{
  id:number
    name: string
}

export interface Movie {
  id: number;
  title: string;
  year: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  popularity: number;
  overview: string;
  genre_ids?: number[];
  genre_names: string[]
}


export interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
