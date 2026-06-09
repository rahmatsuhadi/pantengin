import { Skeleton } from '@/components/atoms/Skeleton';
import React from 'react';

export const MovieCardSkeleton: React.FC = () => {
  return (
    <div className="w-full rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-sm">
      <Skeleton className="w-full aspect-2/3 rounded-none" />
      <div className="p-4 space-y-3">
        <Skeleton className="h-6 w-3/4 rounded-md" />
        <Skeleton className="h-4 w-1/4 rounded-md" />
      </div>
    </div>
  );
};
