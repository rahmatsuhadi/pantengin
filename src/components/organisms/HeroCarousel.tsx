"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Rating } from "@/components/molecules/Rating";
import { GenreTags } from "@/components/molecules/GenreTags";
import { FavoriteButton } from "../molecules/FavoriteButton";
import { Movie } from "@/types";
import { getPosterURL } from "@/lib/utils";
import { Text } from "../atoms/Text";
import { Button } from "../atoms/Button";


export default function HeroCarousel({ movies }: { movies: Movie[] }) {


  if (!movies || movies.length === 0) {
    return (
      <section className="flex h-[50vh] items-center justify-center bg-background text-secondary">
        <Text>No featured Upcoming movies available at the moment.</Text>
      </section>
    );
  }

  const [[current, direction], setPage] = useState([0, 0]);

  const paginate = useCallback(
    (newDirection: number) => {
      setPage(([prev]) => {
        const next = prev + newDirection;
        if (next < 0) return [movies.length - 1, -1];
        if (next >= movies.length) return [0, 1];
        return [next, newDirection];
      });
    },
    [movies.length]
  );

  const isPaginatingRef = useRef(false);

  const paginateDebounced = useCallback(
    (newDirection: number) => {
      if (isPaginatingRef.current) return;
      isPaginatingRef.current = true;
      paginate(newDirection);
      setTimeout(() => {
        isPaginatingRef.current = false;
      }, 600);
    },
    [paginate]
  );

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 10000);
    return () => clearInterval(timer);
  }, [paginate]);

  const goTo = (idx: number) => {
    setPage(([prev]) => [idx, idx > prev ? 1 : -1]);
  };

  const slide = movies[current];

  const posterUrl = getPosterURL(slide.backdrop_path, "original") 


  return (
    <section className="group relative w-full h-screen  overflow-hidden">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={current}
          custom={direction}
          variants={{
            enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
            center: { x: 0, opacity: 1 },
            exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={posterUrl}
            alt={slide.title}
            quality={80}
            fill
            className="object-cover object-top"
            priority
            sizes="100vw"
          />

          <div className="absolute inset-0 bg-linear-to-l from-blue-950/50 via-background/65 to-background" />
          <div className="absolute inset-0 bg-linear-to-b from-background/20 via-transparent to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(59,130,246,0.12),transparent_60%)]" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-xl lg:max-w-2xl">
          <motion.div
            key={`content-${current}`}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.45, ease: "easeOut" }}
          >
            <div className="mb-4">
              <GenreTags genres={slide.genre_names} variant="primary" />
            </div>

            <Text variant="heading-1" className="font-extrabold sm:text-5xl lg:text-7xl text-primary tracking-tight mb-3 leading-tight drop-shadow-sm">
              {slide.title}

            </Text>

            <div className="flex items-center gap-4 mb-4">
              <Rating value={slide.vote_average || 0} size="md" />
              <span className="text-text-secondary text-sm font-medium">{slide.year}</span>
            </div>

            <Text className="text-secondary text-base sm:text-lg leading-relaxed mb-8 line-clamp-3 max-w-xl">
              {slide.overview}
            </Text>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 w-full">
              <Button
              href={`/movie/${slide.id}`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent-primary text-white font-semibold text-base hover:bg-accent-primary-hover transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02]"
              as={Link}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                View Details

              </Button>
              <FavoriteButton movie={slide} />

            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {movies.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className="group relative h-1.5 rounded-full transition-all duration-300"
            style={{ width: idx === current ? 40 : 16 }}
            aria-label={`Go to slide ${idx + 1}`}
          >
            <span
              className={`absolute inset-0 rounded-full transition-all duration-300 ${idx === current
                ? "bg-accent-primary shadow-md shadow-blue-500/40"
                : "bg-white/30 group-hover:bg-white/50"
                }`}
            />
          </button>
        ))}
      </div>

      <button
        onClick={() => paginateDebounced(-1)}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full glass items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all opacity-0 group-hover:opacity-100"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={() => paginateDebounced(1)}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full glass items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all opacity-0 group-hover:opacity-100"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent z-10 pointer-events-none" />
    </section>
  );
}