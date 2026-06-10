"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import BrandLogo from "../atoms/Logo";
import { useFavorites } from "@/hooks/useFavorites";
import { Text } from "../atoms/Text";
import { Button } from "../atoms/Button";

export function Navbar() {

  const { favorites } = useFavorites()
  const total = favorites?.length || 0

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <BrandLogo />

            <nav className="flex items-center gap-1">
              <Button
                size="sm"
                as={Link}
                variant="ghost"
                href={"/"}>
                Home
              </Button>
              <Link
                href="/favorites"
                className="relative px-4 py-2 text-sm font-medium text-secondary hover:text-accent-secondary transition-colors rounded-full hover:bg-surface-2 group"
              >
                Favorites
                <Text variant="caption" className="ml-1.5 inline-flex items-center justify-center w-5 h-5 text-xs font-bold rounded-full bg-accent-secondary/20 text-accent-secondary">
                  {total}
                </Text>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}