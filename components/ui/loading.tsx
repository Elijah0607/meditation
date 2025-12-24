'use client';

import { Skeleton } from './skeleton';

export function LoadingSpinner({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8',
  };

  return (
    <div
      className={`${sizeClasses[size]} animate-spin rounded-full border-2 border-primary border-t-transparent`}
      role="status"
      aria-label="載入中"
    >
      <span className="sr-only">載入中...</span>
    </div>
  );
}

export function LoadingPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <LoadingSpinner size="lg" />
        <p className="body-small text-muted-foreground">載入中...</p>
      </div>
    </div>
  );
}

export function FeedCardSkeleton() {
  return (
    <div className="mb-6 rounded-lg border bg-card p-6 card-shadow">
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex-1 space-y-2">
            <Skeleton className="h-3 w-16" />
            <Skeleton className="h-6 w-3/4" />
            <div className="flex items-center gap-2">
              <Skeleton className="h-7 w-7 rounded-full" />
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-24" />
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>
        <div className="flex items-center gap-2 pt-4 border-t">
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-8 w-20" />
        </div>
      </div>
    </div>
  );
}

export function EventCardSkeleton() {
  return (
    <div className="mb-6 rounded-lg border bg-card overflow-hidden card-shadow">
      <Skeleton className="h-56 w-full" />
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-6 w-3/4" />
        </div>
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <div className="space-y-2 pt-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-4 w-40" />
        </div>
        <Skeleton className="h-10 w-full mt-4" />
      </div>
    </div>
  );
}

export function ResourceCardSkeleton() {
  return (
    <div className="mb-6 rounded-lg border bg-card p-6 card-shadow">
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2 flex-1">
            <Skeleton className="h-5 w-5" />
            <Skeleton className="h-5 w-3/4" />
          </div>
          <Skeleton className="h-5 w-12" />
        </div>
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <div className="flex gap-2">
          <Skeleton className="h-5 w-16" />
          <Skeleton className="h-5 w-16" />
        </div>
        <Skeleton className="h-9 w-full" />
      </div>
    </div>
  );
}

