import { Info } from "lucide-react";
import { Text } from "./Text";

interface MoviePopularityProps {
  popularity: number;
}

export const MoviePopularity = ({ popularity = 0 }: MoviePopularityProps) => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />

      <Text className="text-secondary">
        {Math.round(popularity)} Popularity Poin
      </Text>

      <div className="relative group cursor-help flex items-center">
        <Info className="w-4 h-4 text-secondary hover:text-accent-primary transition-colors" />

        <div className="absolute bottom-full left-1/2 -translate-x-3/4 sm:-translate-x-1/2 mb-2 w-56 sm:w-64 p-2 bg-zinc-900 text-white text-xs rounded-lg shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 z-50">
          <Text className="leading-relaxed">
            TMDB's internal score based on the number of searches, reviews, and user interactions today.

          </Text>
          <div className="absolute top-full left-3/4 sm:left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-zinc-900" />
        </div>
      </div>
    </div>
  );
};