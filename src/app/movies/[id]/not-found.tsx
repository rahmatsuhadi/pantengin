import HeaderDetailMovie from "@/components/molecules/Movie/HeaderDetail";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg-primary flex flex-col">
      <HeaderDetailMovie />

      <main className="flex-1 flex items-center justify-center p-4 relative z-10 pt-20">
        <div className="max-w-md w-full bg-bg-surface-1 rounded-2xl p-8 text-center border border-zinc-800/80 shadow-lg">
          <div className="w-16 h-16 mx-auto bg-yellow-500/10 rounded-full flex items-center justify-center mb-5">
            <svg
              className="w-8 h-8 text-yellow-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
              {/* Slash representing "not found/hidden" */}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 4l16 16"
              />
            </svg>
          </div>

          <h2 className="font-display font-semibold text-xl text-text-primary mb-2">
            Movie Not Found
          </h2>
          <p className="text-text-secondary text-sm mb-8 leading-relaxed">
            We searched everywhere, but we couldn't find the movie you were looking for. 
            It might have been removed or the link could be broken.
          </p>

          <div className="flex justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-accent-primary text-white font-medium hover:bg-accent-primary-hover transition-colors text-sm"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Explore Other Movies
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
