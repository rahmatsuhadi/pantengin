

export interface Genre {
  id: number
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


export interface Cast {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
}

export interface MovieDetail extends Movie {
  genres: Genre[];
  runtime: number;
  tagline: string;
  budget?: number;
  revenue?: number;
  original_language?: string;
  credits?: {
    cast: Cast[];
    crew?: {
      id: number;
      name: string;
      job: string;
    }[];
  };
  videos?: {
    results: {
      id: string;
      key: string;
      name: string;
      site: string;
      type: string;
    }[];
  };
}


export interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
