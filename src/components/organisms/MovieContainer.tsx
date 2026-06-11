
"use client";

import { motion } from "framer-motion";
import { useMemo, useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import ErrorState from "../molecules/ErrorState";
import EmptyState from "../molecules/EmptyState";
import { useMovieSearchStore } from "@/store/search";
import MovieGridSkleton from "./Movie/GridSkeleton";
import { MovieGrid } from "./Movie/Grid";
import { useMovieSearch } from "@/hooks/useMovieSearch";
import { useDebounce } from "@/hooks/useDebounce";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Text } from "../atoms/Text";

interface MovieContainerProps {
    initialQuery?: string
}
const SKELETON_ARRAY = Array.from({ length: 10 }, (_, i) => i);


export default function MovieContainer({ initialQuery = '' }: MovieContainerProps) {


    const router = useRouter();
    const pathname = usePathname();

    const searchTerm = useMovieSearchStore((state) => state.searchTerm);
    const setSearchTerm = useMovieSearchStore((state) => state.setSearchTerm);

    const [isMounted, setIsMounted] = useState(false);


    useEffect(() => {
        if (!isMounted) {
            if (initialQuery && !searchTerm) {
                setSearchTerm(initialQuery);
            }
            setIsMounted(true);
        }
    }, [initialQuery, isMounted, searchTerm, setSearchTerm]);

    const currentSearch = isMounted ? searchTerm : initialQuery;
    const debouncedSearch = useDebounce(currentSearch, 500);

    useEffect(() => {
        if (!isMounted) return;
        const params = new URLSearchParams(window.location.search);
        if (debouncedSearch) {
            params.set("q", debouncedSearch);
        } else {
            params.delete("q");
        }
        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }, [debouncedSearch, pathname, router, isMounted]);

    const isSearching = debouncedSearch.trim() !== "";

    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, isError, error } =
        useMovieSearch(debouncedSearch);

    const movies = useMemo(() => {
        const allMovies = data?.pages.flatMap((page) => page.results) || [];
        // Deduplikasi berdasarkan id film
        return Array.from(new Map(allMovies.map(m => [m.id, m])).values());
    }, [data]);

    const loadMoreRef = useIntersectionObserver({
        onIntersect: fetchNextPage,
        enabled: !!hasNextPage && !isFetchingNextPage,
    });


    return (
        <>
            <motion.div
                key="movie-grid-container"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
            >
                {isLoading ? (
                    <MovieGridSkleton />
                ) : isError ? (
                    <ErrorState error={error} />
                ) : movies.length === 0 ? (
                    <EmptyState isSearching={isSearching} query={debouncedSearch} />
                ) : (
                    <>
                        {isSearching && (
                            <Text className="text-muted mb-6 font-medium">
                                Found {movies.length} movie{movies.length !== 1 ? "s" : ""} for &ldquo;{debouncedSearch}&rdquo;
                            </Text>
                        )}

                        <MovieGrid
                            movies={movies}
                            isFetchingNextPage={isFetchingNextPage}
                            skeletonArray={SKELETON_ARRAY}
                        />
                        {hasNextPage && <div ref={loadMoreRef} className="h-10 w-full mt-4" />}
                    </>
                )}

                <div className="flex justify-center items-center w-full mt-10">
                    {!hasNextPage && !!data && <Text>No more movies to show</Text>}
                </div>

            </motion.div>
        </>

    )
}

