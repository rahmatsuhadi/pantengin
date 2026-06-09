type PosterSize =  'w185' | 'w342' |  'w500' |'original';

export const getPosterURL = (path: string | null, size: PosterSize = 'w500') => {
    return path 
        ? `https://image.tmdb.org/t/p/${size}${path}`
        : 'https://placehold.co/300x400?text=No+Image';
};