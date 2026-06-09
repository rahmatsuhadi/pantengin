"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Navbar() {
  const total  =  0

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div
                className="flex items-center justify-center w-9 h-9 rounded-xl bg-accent-primary/20 border border-accent-primary/30"
                whileHover={{ rotate: -10, scale: 1.05 }}
              >
                <svg className="w-5 h-5 text-accent-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 4v16L6 12z" />
                </svg>
              </motion.div>
              <div>
                <span className="font-display font-bold text-text-primary text-lg tracking-tight">
                  Pan<span className="text-accent-primary">tengin</span>
                </span>
                <span className="hidden sm:inline ml-2 text-xs text-text-muted font-medium">
                  Movies
                </span>
              </div>
            </Link>

            <nav className="flex items-center gap-1">
              <Link
                href="/"
                className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors rounded-full hover:bg-bg-surface-2"
              >
                Home
              </Link>
              <Link 
                href="/favorites" 
                className="relative px-4 py-2 text-sm font-medium text-text-secondary hover:text-accent-secondary transition-colors rounded-full hover:bg-bg-surface-2 group"
              >
                Favorites
                <span className="ml-1.5 inline-flex items-center justify-center w-5 h-5 text-xs font-bold rounded-full bg-accent-secondary/20 text-accent-secondary">
                  {total}
                </span>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}