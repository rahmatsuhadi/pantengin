import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Favorites - Pantengin",
  description: "View and manage your personal collection of favorite movies on Pantengin.",
};

export default function FavoritesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
