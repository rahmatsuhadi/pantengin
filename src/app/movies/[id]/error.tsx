"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import HeaderDetailMovie from "@/components/molecules/Movie/HeaderDetail";
import { Button } from "@/components/atoms/Button";
import { Text } from "@/components/atoms/Text";
import { RefreshCw, TriangleAlert } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Error Detail Page:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <HeaderDetailMovie />

      <main className="flex-1 flex items-center justify-center p-4 relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="max-w-md w-full bg-surface-1 rounded-2xl p-8 text-center border border-zinc-800/80 shadow-lg"
        >
          <div className="w-16 h-16 mx-auto bg-red-500/10 rounded-full flex items-center justify-center mb-5">
            <TriangleAlert
              className="w-8 h-8 text-red-500" />
          </div>

          <Text variant="heading-2" className="mb-2  text-primary">
            Server is currently busy
          </Text>
          <Text className="mb-8 leading-relaxed text-secondary">We are working on fixing this. Please try again in a few moments.</Text>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={() => reset()}
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Try Again
            </Button>
            <Button
              as={Link}
              href="/"
              variant="secondary"
            >
              Back to Home
            </Button>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
