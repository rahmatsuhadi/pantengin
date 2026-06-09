import { MovieCardSkeleton } from "@/components/molecules/Movie/CardSkeleton";
const SKELETON_ARRAY = Array.from({ length: 10 }, (_, i) => i);

export default function MovieGridSkleton() {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5 mt-6">
            {SKELETON_ARRAY.map((i) => <MovieCardSkeleton key={`suspense-fallback-${i}`} />)}
        </div>
    );
}