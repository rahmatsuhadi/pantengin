import BrandLogo from "@/components/atoms/Logo";
import Link from "next/link";

export default function HeaderDetailMovie() {
    return (

        <header className="fixed top-0 left-0 right-0 z-50">
            <div className="glass">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <BrandLogo />


                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors rounded-full hover:bg-bg-surface-2"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}