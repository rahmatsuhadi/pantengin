import { Button } from "@/components/atoms/Button";
import { Text } from "@/components/atoms/Text";
import HeaderDetailMovie from "@/components/molecules/Movie/HeaderDetail";
import { ArrowLeft, EyeOff } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <HeaderDetailMovie />
      <main className="flex-1 flex items-center justify-center p-4 relative z-10 pt-20">
        <div className="max-w-md w-full bg-surface-1 rounded-2xl p-8 text-center border border-zinc-800/80 shadow-lg">
          <div className="w-16 h-16 mx-auto bg-yellow-500/10 rounded-full flex items-center justify-center mb-5">
            <EyeOff className="w-8 h-8 text-yellow-500"/>
          </div>
          <Text variant="heading-2" className="mb-2  text-primary">
            Movie Not Found
          </Text>
          <Text className="mb-8 leading-relaxed text-secondary"> We searched everywhere, but we couldn't find the movie you were looking for.
            It might have been removed or the link could be broken.</Text>
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
      </main>
    </div>
  );
}
