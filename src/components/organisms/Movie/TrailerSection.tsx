"use client";

import { motion } from "framer-motion";
import { Text } from "@/components/atoms/Text";

interface TrailerSectionProps {
    trailerKey: string;
    movieTitle: string;
}

export function TrailerSection({ trailerKey, movieTitle }: TrailerSectionProps) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            id="trailer-section"
            className="mt-16 pt-12 border-t border-zinc-800/50"
        >
            <Text variant="subheader" className="font-display font-bold text-2xl text-primary mb-6 tracking-tight">
                Official Trailer
            </Text>

            <div className="max-w-5xl mx-auto">
                <div className="relative w-full aspect-video rounded-card overflow-hidden bg-surface-1 border border-zinc-800/50">
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&rel=0&modestbranding=1`}
                        title={`${movieTitle} - Official Trailer`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>
        </motion.section>
    );
}
