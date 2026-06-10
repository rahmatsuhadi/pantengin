import { Button } from "@/components/atoms/Button";
import BrandLogo from "@/components/atoms/Logo";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function HeaderDetailMovie() {
    return (

        <header className="fixed top-0 left-0 right-0 z-50">
            <div className="glass">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <BrandLogo />
                            <Button 
                            as={Link}
                             href="/"
                             size="sm"
                             variant="ghost"
                            >
                                <ArrowLeft/>
                            Back
                            </Button>

                        
                    </div>
                </div>
            </div>
        </header>
    );
}