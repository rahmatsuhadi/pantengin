import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import QueryProvider from "@/providers/QueryProvider";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pantengin - Smart Movie Search App",
  description: "Aplikasi pencarian film pintar dengan performa tinggi dan UI/UX premium.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col  bg-bg-primary text-text-primary font-sans" suppressHydrationWarning>
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
