"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/molecules/Navbar";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Favorites Page Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-bg-primary flex flex-col">
      <Navbar />

      <main className="flex-1 flex items-center justify-center p-4 relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="max-w-md w-full bg-bg-surface-1 rounded-2xl p-8 text-center border border-zinc-800/80 shadow-lg"
        >
          <div className="w-16 h-16 mx-auto bg-red-500/10 rounded-full flex items-center justify-center mb-5">
            <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>

          <h2 className="font-display font-semibold text-xl text-text-primary mb-2">
            Something went wrong!
          </h2>
          <p className="text-text-secondary text-sm mb-8 leading-relaxed">
            We encountered an issue while loading your favorite movies.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => reset()}
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-accent-primary text-white font-medium hover:bg-accent-primary-hover transition-colors text-sm"
            >
              Try Again
            </button>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-bg-surface-2 text-text-secondary hover:text-text-primary border border-zinc-800 hover:bg-bg-surface-2/80 transition-colors text-sm"
            >
              Back to Home
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
