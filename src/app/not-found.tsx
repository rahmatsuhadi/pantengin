import { Button } from "@/components/atoms/Button";
import { Text } from "@/components/atoms/Text";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  const title = "Page Not Found";
  const message =
    "Oops, the page you're looking for doesn't exist. Maybe the link was mistyped, or the film has been removed.";

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-zinc-900/50 backdrop-blur-md rounded-2xl p-8 text-center border border-zinc-800/80 shadow-2xl">
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 4l16 16" />
          </svg>
        </div>

        <Text variant="heading-2" className="mb-2  text-primary">
          {title}
        </Text>
        <Text className="mb-8 leading-relaxed text-secondary">{message}</Text>



        <div className="flex justify-center">
          <Button
              as={Link}
              href="/"
            >
              <ArrowLeft 
                className="w-4 h-4 mr-2"/>              
              Explore Other Movies
            </Button>
        </div>
      </div>
    </div>
  );
}
