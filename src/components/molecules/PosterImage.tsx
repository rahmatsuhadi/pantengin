"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface PosterImageProps {
  posterPath: string;
  title: string;
}

export default function PosterImage({ posterPath, title }: PosterImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="shrink-0 w-full lg:w-75"
    >
      <div className="relative aspect-2/3 rounded-card overflow-hidden shadow-2xl border border-zinc-800/50">
        <Image
          quality={50}
          src={posterPath}
          alt={title}
          fill
          className="object-cover"
          sizes="300px"
          priority
        />
      </div>
    </motion.div>
  );
}