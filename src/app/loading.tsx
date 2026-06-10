import { Text } from "@/components/atoms/Text";
import { MovieCardSkeleton } from "@/components/molecules/Movie/CardSkeleton";
import { Navbar } from "@/components/molecules/Navbar";
import { SearchBar } from "@/components/molecules/SearchBar";

export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="relative z-30" id="browse">
        <main className="pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-20">
          <div className="mb-12">
            <Text className="text-xs uppercase tracking-[0.2em] text-muted mb-3 text-center font-medium">
              Browse Library

            </Text>
            <SearchBar />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
            {Array.from({ length: 10 }).map((_, i) => (
              <MovieCardSkeleton key={i} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
