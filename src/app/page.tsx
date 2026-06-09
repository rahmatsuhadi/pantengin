import { Navbar } from "@/components/molecules/Navbar";
import { SearchBar } from "@/components/molecules/SearchBar";
import MovieContainer from "@/components/organisms/MovieContainer";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Pantengin - Discover & Search Movies",
  description: "Browse the most popular movies, search for your favorites, and explore comprehensive movie details with Pantengin.",
};


interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Home({ searchParams }: PageProps) {
  const resolvedParams = await searchParams;
  const q = resolvedParams?.q || '';


  return (
    <div className="min-h-screen bg-bg-primary">
      <Navbar />

      <div className="relative z-30" id="browse">
        <main className="pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-20">

          <div className="mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-text-muted mb-3 text-center font-medium">
              Browse Library
            </p>
            <SearchBar />
          </div>
          <MovieContainer initialQuery={q as string} />
        </main>
      </div>


    </div>
  );
}
