import HeaderDetailMovie from "@/components/molecules/Movie/HeaderDetail";

export default function Loading() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <HeaderDetailMovie />

      
      <div className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] w-full bg-zinc-900 animate-pulse overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-t from-bg-primary via-bg-primary/60 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-r from-bg-primary/40 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-40 sm:-mt-48 lg:-mt-56 z-10 pb-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 animate-pulse">
          
          
          <div className="shrink-0 w-full lg:w-75">
            <div className="relative aspect-2/3 rounded-card bg-bg-surface-2 border border-zinc-800/50 shadow-2xl" />
          </div>

          
          <div className="flex-1 pt-4 lg:pt-16">
            
           
            <div className="flex gap-3 mb-6">
              <div className="w-16 h-6 rounded-full bg-bg-surface-2" />
              <div className="w-16 h-6 rounded-full bg-bg-surface-2" />
              <div className="w-20 h-6 rounded-md bg-bg-surface-2 ml-4" />
            </div>

           
            <div className="w-3/4 h-12 sm:h-16 bg-bg-surface-2 rounded-xl mb-4" />
            <div className="w-1/2 h-6 bg-bg-surface-2 rounded-md mb-8" />

            
            <div className="flex items-center gap-6 mb-10">
              <div className="w-16 h-16 rounded-full bg-bg-surface-2" />
              <div className="w-32 h-6 bg-bg-surface-2 rounded-md" />
            </div>

            
            <div className="mb-10">
              <div className="w-32 h-6 bg-bg-surface-2 rounded-md mb-4" />
              <div className="space-y-3">
                <div className="w-full h-4 bg-bg-surface-2 rounded" />
                <div className="w-full h-4 bg-bg-surface-2 rounded" />
                <div className="w-5/6 h-4 bg-bg-surface-2 rounded" />
              </div>
            </div>

            
            <div className="flex flex-wrap gap-8 mb-12">
              <div className="space-y-2">
                <div className="w-16 h-3 bg-bg-surface-2 rounded" />
                <div className="w-32 h-5 bg-bg-surface-2 rounded" />
              </div>
              <div className="space-y-2">
                <div className="w-16 h-3 bg-bg-surface-2 rounded" />
                <div className="w-24 h-5 bg-bg-surface-2 rounded" />
              </div>
              <div className="space-y-2">
                <div className="w-16 h-3 bg-bg-surface-2 rounded" />
                <div className="w-24 h-5 bg-bg-surface-2 rounded" />
              </div>
            </div>

            
            <div className="flex gap-4">
              <div className="w-40 h-12 bg-bg-surface-2 rounded-full" />
              <div className="w-12 h-12 bg-bg-surface-2 rounded-full" />
            </div>

          </div>
        </div>

        
        <div className="mt-16 pt-12 border-t border-zinc-800/50 animate-pulse">
          <div className="w-48 h-8 bg-bg-surface-2 rounded-md mb-8" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex flex-col items-center p-4 rounded-card bg-bg-surface-1 border border-zinc-800/50">
                <div className="w-24 h-24 rounded-full bg-bg-surface-2 mb-4" />
                <div className="w-24 h-4 bg-bg-surface-2 rounded mb-2" />
                <div className="w-16 h-3 bg-bg-surface-2 rounded" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}