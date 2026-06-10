import { tmdbServer } from '@/lib/tmdb';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import PosterImage from '@/components/molecules/PosterImage';
import { Metadata } from 'next';
import { getPosterURL } from '@/lib/utils';
import { MovieDetail } from '@/types';
import HeaderDetailMovie from '@/components/molecules/Movie/HeaderDetail';
import { DetailContent } from '@/components/organisms/Movie/DetailContent';
import MovieCastCard from '@/components/molecules/Movie/CastCard';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  
  try {
    const movie = await tmdbServer.getMovieDetailServer(id);
    if (!movie) return { title: 'Movie Not Found - Pantengin' };
    
    return {
      title: `${movie.title} (${movie.release_date?.substring(0, 4) || 'N/A'}) - Pantengin`,
      description: movie.overview || `Lihat sinopsis, rating, dan pemeran film ${movie.title} di Pantengin.`,
      openGraph: {
        images: [getPosterURL(movie.poster_path)],
      }
    };
  } catch (error) {
    return { title: 'Movie Details - Pantengin' };
  }
}

export default async function MovieDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  const  movie = await tmdbServer.getMovieDetailServer(id);
  
  return (
    <div>
      <HeaderDetailMovie />
      <div className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] overflow-hidden">
        <Image
          src={getPosterURL(movie.backdrop_path, "w780")}
          alt={movie.title}
          quality={75}
          fill
          className="object-cover object-top"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-r from-background/40 to-transparent" />
      </div>


      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-40 sm:-mt-48 lg:-mt-56 z-10 pb-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

          <PosterImage
            posterPath={getPosterURL(movie.poster_path)}
            title={movie.title}
          />

          <DetailContent movie={movie} />
        </div>

        <MovieCastCard cast={movie.credits?.cast || []} />
      </div>
    </div>
  );
}
