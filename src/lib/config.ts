export const env = {
    apiKey: process.env.TMDB_API_KEY || process.env.API_KEY || "",
    baseUrl: process.env.TMDB_BASE_URL || "https://api.themoviedb.org/3",
};
