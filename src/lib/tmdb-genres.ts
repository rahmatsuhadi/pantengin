import { tmdbServer } from "./tmdb"
import { Genre } from "@/types"

export async function getGenres(): Promise<Genre[]> {
    'use cache'
    console.log("GET GENRES")

    const data = await tmdbServer.fetchTMDB<{ genres: Genre[] }>(
        '/genre/movie/list',
    );

    return data.genres;
}