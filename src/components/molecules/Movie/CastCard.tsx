"use client"
import { Avatar } from "@/components/atoms/Avatar";
import { Text } from "@/components/atoms/Text";
import { getPosterURL } from "@/lib/utils";
import { Cast } from "@/types";
import { motion } from "framer-motion"


interface PropsMovieCast {
    cast: Cast[]
}



export default function MovieCastCard({ cast }: PropsMovieCast) {
    if (!cast || cast.length === 0) return null;
    const topCast = cast.slice(0, 5);

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 pt-12 border-t border-zinc-800/50"
        >

            <Text variant="subheader" className="font-display font-bold text-2xl text-primary mb-6 tracking-tight">
                Cast & Characters

            </Text>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                {topCast.map((actor, idx) => (
                    <motion.div
                        key={actor.name}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05, duration: 0.3 }}
                        className="flex flex-col items-center text-center p-4 rounded-card bg-surface-1 border border-zinc-800/50 hover:border-zinc-700/50 transition-all"
                    >
                        <Avatar src={getPosterURL(actor.profile_path)} alt={actor.name} size="xl" fallback={actor.name} />
                        <Text variant="heading-2" className="mt-3  text-primary leading-tight text-sm  font-semibold">

                            {actor.name}
                        </Text>
                        <Text className="mt-0.5 text-muted text-xs">
                            {actor.character}
                        </Text>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}