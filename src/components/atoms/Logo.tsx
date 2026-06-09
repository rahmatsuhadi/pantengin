"use client"
import {motion} from "framer-motion"
import Link from "next/link";

export default function BrandLogo(){
    return(
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
    )
}