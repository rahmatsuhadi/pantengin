import { Genre, Movie, MovieDetail, MovieResponse } from "@/types";
import { env } from "./config";
import { cache } from 'react';
import { getGenres } from "./tmdb-genres";
import { notFound } from "next/navigation";


export class TMDBService {
    private apiKey: string;
    private baseUrl: string

    constructor() {
        this.apiKey = env.apiKey
        this.baseUrl = env.baseUrl
    }

    private isValidTMDBId(id: string): boolean {
        return /^\d+$/.test(id);
    }

    public async fetchTMDB<T>(endpoint: string, params: Record<string, string> = {}, revalidate = 3600): Promise<T> {
        if (!this.apiKey) {
            throw new Error("TMDB API Key not defined")
        }


        const queryParams = new URLSearchParams({
            api_key: this.apiKey,
            language: 'en-US',
            include_adult: 'false',
            ...params,
        })


        const url = `${this.baseUrl}${endpoint}?${queryParams.toString()}`;

        const res = await fetch(url, {

            next: { revalidate }
        })


        if (res.status === 404) {
            return notFound();
        }

        const response = await res.json()

        if (!res.ok) {
            throw new Error(`TMDB_API_ERROR: ${res.status}`);
        }
        return response
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

    public async getMovieDetailServer(id: string): Promise<MovieDetail> {
        if (!this.isValidTMDBId(id)) {
            return notFound()
        }

        const request = await this.fetchTMDB<MovieDetail>(`/movie/${id}`, {
            append_to_response: 'videos,credits'
        });

        return { ...request, genre_names: request.genres.map((item) => item.name) }

    }


    public async search(query: string, page = 1): Promise<MovieResponse> {
        if (!query.trim()) {
            return { page: 1, results: [], total_pages: 1, total_results: 0 };
        }

        const data = await this.fetchTMDB<MovieResponse>('/search/movie', {
            query,
            page: page.toString()
        })

        const cleanData = await this.formatResults(data.results)

        return { ...data, results: cleanData }

    }

    private async formatResults(results: Movie[]): Promise<Movie[]> {
        const genres = await getGenres()

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