"use client";
import { getPosterURL } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Rating } from "../Rating";
import { GenreTags } from "../GenreTags";

interface MovieCardProps {
    id: number;
    title: string;
    posterPath: string;
    backdropPath?: string;
    year: string;
    rating: number;
    genres: string[]
    overview?: string;
    index?: number;
}

export function MovieCard({
    id,
    title,
    posterPath,
    year,
    rating,
    genres,
    overview,
    index = 0,
}: MovieCardProps) {

    return (
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="h-full"
        >
            <Link href={`/movies/${id}`} className="group block h-full">
                <div
                    className="relative overflow-hidden rounded-card bg-bg-surface-1 border border-zinc-800/50
                     transition-all duration-300 movie-card-hover
                     group-hover:border-accent-primary/30 h-full flex flex-col"
                >
                    <div className="relative aspect-2/3 overflow-hidden shrink-0">
                        <Image
                            src={getPosterURL(posterPath, "original")}
                            alt={title}
                            quality={50}
                            fill
                            className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            priority={index < 10}
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-bg-primary/90 via-transparent to-transparent" />

                        <div className="absolute top-3 right-3">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                            >
                                <Rating value={rating} size="sm" showValue={false} />
                            </motion.div>
                        </div>

                        <div className="absolute top-3 left-3">
                            <span className="inline-flex px-2 py-1 text-xs font-medium rounded-badge bg-bg-primary/60 backdrop-blur-sm text-text-secondary border border-zinc-700/50">
                                {year || "N/A"}
                            </span>
                        </div>
                    </div>

                    <div className="p-4 grow flex flex-col">
                        <h3 className="font-display font-semibold text-text-primary text-base leading-tight mb-2 line-clamp-2 group-hover:text-accent-primary transition-colors">
                            {title}
                        </h3>
                        <GenreTags genres={genres} limit={2} variant="default" />
                        {overview && (
                            <p className="mt-auto pt-2 text-sm text-text-secondary line-clamp-2 leading-relaxed">
                                {overview}
                            </p>
                        )}
                    </div>

                    <div
                        className="absolute inset-0 rounded-card ring-1 ring-inset ring-white/5 group-hover:ring-accent-primary/20
                       transition-all duration-300 pointer-events-none"
                    />
                </div>
            </Link>
        </motion.div>
    );
}