"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/atoms/Button";
import { Text } from "@/components/atoms/Text";
import { Navbar } from "@/components/molecules/Navbar";
import { RefreshCw, TriangleAlert } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application Error:", error);
  }, [error]);

  let displayTitle = ''
  let displayMessage = ''

  switch (error?.message) {
    case "TMDB_RATE_LIMIT":
      displayTitle = 'API Limit Reached'
      displayMessage = 'You have made too many requests in a short period. Please wait a few moments before trying again.'

      
      break;
  
    default:
      displayTitle = 'Server is currently busy'
      displayMessage = 'We are working on fixing this. Please try again in a few moments.'
      break;
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 flex items-center justify-center p-4 relative z-10 pt-28">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="max-w-md w-full bg-surface-1 rounded-2xl p-8 text-center border border-zinc-800/80 shadow-2xl"
        >
          <div className="w-16 h-16 mx-auto bg-red-500/10 rounded-full flex items-center justify-center mb-5">
            <TriangleAlert className="w-8 h-8 text-red-500" />
          </div>

          <Text variant="heading-2" className="mb-2 text-primary">
            {displayTitle}
          </Text>
          <Text className="mb-8 leading-relaxed text-secondary">
            {displayMessage}
          </Text>

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
