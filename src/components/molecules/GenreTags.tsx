"use client";

import { Badge } from "@/components/atoms/Badge";

interface GenreTagsProps {
  genres: string[];
  limit?: number;
  variant?: "default" | "primary" | "secondary";
}

export function GenreTags({ genres, limit, variant = "primary" }: GenreTagsProps) {
  const displayGenres = limit ? genres.slice(0, limit) : genres;

  return (
    <div className="flex flex-wrap gap-1.5">
      {displayGenres.map((genre, i) => (
        <Badge key={i} variant={variant} size="sm">
          {genre}
        </Badge>
      ))}
      {limit && genres.length > limit && (
        <Badge variant="default" size="sm">
          +{genres.length - limit}
        </Badge>
      )}
    </div>
  );
}