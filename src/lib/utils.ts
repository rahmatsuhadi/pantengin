export const getPosterURL = (path: string | null) => {
    return path ? `https://image.tmdb.org/t/p/w500${path}`
    : 'https://placehold.co/300X400';
}


