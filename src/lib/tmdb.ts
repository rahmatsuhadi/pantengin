import { Genre, Movie, MovieResponse } from "@/types";
import { env } from "./config";

export class TMDBService {
    private apiKey: string;
    private baseUrl: string

    constructor() {
        this.apiKey = env.apiKey
        this.baseUrl = env.baseUrl
    }

    public async fetchTMDB<T>(endpoint: string, params: Record<string, string> = {}, revalidate = 3600): Promise<T> {
        if (!this.apiKey) {
            throw new Error("TMDB API Key not defined")
        }

        const queryParams = new URLSearchParams({
            apiKey: this.apiKey,
            language: 'en-US',
            include_adult: 'false',
            ...params,
        })

        const url = `${this.baseUrl}${endpoint}?${queryParams.toString()}`;

        const res = await fetch(url, {
            next: { revalidate }
        })

        if (!res.ok) {
            throw new Error("TMDB ERROR: " + res.status)
        }
        return res.json();

    }

    public async getGenres(): Promise<Genre[]> {
        "cache"
        const data = await this.fetchTMDB<{ genres: Genre[] }>('/genre/mobie/list');
        return data.genres;
    }

    public async getMovie(page = 1) {
        const today = new Date().toISOString().split('T')[0];

        const data = await this.fetchTMDB<MovieResponse>('/discover/movie', {
            'page': page.toString(),
            'sort_by': 'primary_release_date.desc',
            'with_release_type': "2|3",
            'primary_release_date.lte': today,
            'vote_count.gte': '50',
        })
        const cleanData = await this.formatResults(data.results)
        return { ...data, results: cleanData }
    }


    public async search(query: string, page = 1): Promise<MovieResponse> {
        if (!query.trim()) {
            return { page: 1, results: [], total_pages: 1, total_results: 0 };
        }

        const data = await this.fetchTMDB<MovieResponse>('/search/movie',{
            query,
            page: page.toString()
        })

        const cleanData = await this.formatResults(data.results)

        return {...data, results: cleanData}

    }

    private async formatResults(results: Movie[]): Promise<Movie[]> {
        const genres = await this.getGenres();

        return results.map((item) => {
            const hasReleaseDate = item.release_date && item.release_date.trim() !== "";
            const releaseYear = hasReleaseDate ? String(item.release_date.slice(0, 4)) : "N/A";

            const mappedGenres = Array.isArray(item.genre_ids)
                ? item.genre_ids.map((val) => {
                    const foundGenre = genres.find((g) => g.id === Number(val));
                    return foundGenre ? foundGenre.name : String(val);
                })
                : [];

            return {
                ...item,
                year: releaseYear,
                genre_names: mappedGenres,
                vote_average: typeof item.vote_average === 'number' ? item.vote_average : 0,
                popularity: typeof item.popularity === 'number' ? item.popularity : 0,
                poster_path: item.poster_path || null,
                backdrop_path: item.backdrop_path || null,
            };
        });
    }
}

export const tmdbServer = new TMDBService();