
"use client";

import { motion } from "framer-motion";
import { Rating } from "@/components/molecules/Rating";
import { GenreTags } from "@/components/molecules/GenreTags";
import { Badge } from "@/components/atoms/Badge";
import { FavoriteButton } from "@/components/molecules/FavoriteButton";
import { MovieDetail } from "@/types";
import { MoviePopularity } from "@/components/atoms/MoviePopularity";

interface DetailContentProps {
    movie: MovieDetail;
}
export function DetailContent({ movie }: DetailContentProps) {
    const staggerDelay = 0.08;

    const year = movie.release_date ? movie.release_date.substring(0, 4) : movie.year || 'N/A';
    const duration = movie.runtime ? `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m` : '';
    const genres = movie.genres?.map(g => g.name) || movie.genre_names || [];
    const language = movie.original_language ? movie.original_language.toUpperCase() : 'EN';
    
    const director = movie.credits?.crew?.find(c => c.job === 'Director')?.name;
    const formatMoney = (amount?: number) => {
        if (!amount) return null;
        if (amount >= 1000000) return `$${(amount / 1000000).toFixed(1)}M`;
        return `$${amount.toLocaleString()}`;
    };
    const budget = formatMoney(movie.budget);
    const revenue = formatMoney(movie.revenue);
    
    const trailer = movie.videos?.results?.find(v => v.type === 'Trailer' && v.site === 'YouTube');
    const trailerUrl = trailer ? `https://www.youtube.com/watch?v=${trailer.key}` : null;


    return (
        <div className="flex-1 pt-4 lg:pt-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: staggerDelay, duration: 0.4 }}
            >
                <div className="flex flex-wrap items-center gap-3 mb-3">
                    <GenreTags genres={genres} variant="primary" />
                    <span className="text-text-muted text-sm">•</span>
                    <span className="text-text-secondary text-sm font-medium">{year}</span>
                    {duration && (
                        <>
                            <span className="text-text-muted text-sm">•</span>
                            <span className="text-text-secondary text-sm font-medium">{duration}</span>
                        </>
                    )}
                </div>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: staggerDelay * 2, duration: 0.4 }}
                className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-text-primary tracking-tight mb-2"
            >
                {movie.title}
            </motion.h1>

            {movie.tagline && (
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: staggerDelay * 3, duration: 0.4 }}
                    className="text-lg text-text-secondary italic mb-6 font-body"
                >
                    &ldquo;{movie.tagline}&rdquo;
                </motion.p>
            )}

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: staggerDelay * 4, duration: 0.4 }}
                className="flex flex-wrap items-center gap-6 mb-8"
            >
                <Rating value={movie.vote_average} size="lg" />

                {movie.popularity && (
                    <MoviePopularity popularity={movie.popularity}/>
                )}

                {language && (
                    <Badge variant="default" size="sm">
                        {language}
                    </Badge>
                )}
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: staggerDelay * 5, duration: 0.4 }}
                className="mb-8"
            >
                <h3 className="font-display font-semibold text-lg text-text-primary mb-3">Overview</h3>
                <p className="text-text-secondary text-base leading-relaxed max-w-3xl font-body">
                    {movie.overview}
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: staggerDelay * 6, duration: 0.4 }}
                className="flex flex-wrap gap-x-8 gap-y-3 mb-10"
            >
                {director && (
                    <div>
                        <span className="text-xs uppercase tracking-wider text-text-muted font-medium">Director</span>
                        <p className="text-text-primary font-medium">{director}</p>
                    </div>
                )}
                {budget && (
                    <div>
                        <span className="text-xs uppercase tracking-wider text-text-muted font-medium">Budget</span>
                        <p className="text-text-primary font-medium">{budget}</p>
                    </div>
                )}
                {revenue && (
                    <div>
                        <span className="text-xs uppercase tracking-wider text-text-muted font-medium">Revenue</span>
                        <p className="text-text-primary font-medium">{revenue}</p>
                    </div>
                )}
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: staggerDelay * 8, duration: 0.4 }}
                className="flex flex-col sm:flex-row flex-wrap gap-3 w-full"
            >
                {trailerUrl && (
                    <a
                        href={trailerUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex whitespace-nowrap items-center justify-center gap-2 px-6 py-3 rounded-full bg-accent-primary text-white font-medium hover:bg-accent-primary-hover transition-all shadow-glow hover:shadow-lg hover:shadow-blue-500/30 w-full sm:w-auto"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                        Watch Trailer
                    </a>
                )}
                <FavoriteButton movie={movie} fullWidth />
            </motion.div>
        </div>
    );
}

