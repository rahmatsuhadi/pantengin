type PosterSize =  'w185' | 'w342' |  'w500' | 'w780' |'original';

export const getPosterURL = (path: string | null, size: PosterSize = 'w500') => {
    return path 
        ? `https://image.tmdb.org/t/p/${size}${path}`
        : '/images/placeholder.jpg';
};

export const formatMoney = (amount?: number) => {
        if (!amount) return null;
        if (amount >= 1000000) return `$${(amount / 1000000).toFixed(1)}M`;
        return `$${amount.toLocaleString()}`;
}