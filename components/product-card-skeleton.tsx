import { Skeleton } from "@/components/ui/skeleton"

export default function ProductCardSkeleton() {
  return (
    <div className="w-full mx-auto">
      <div className="rounded-md p-2 bg-white shadow-sm">
        {/* Image skeleton */}
        <Skeleton className="h-52 w-full rounded-md" />

        <div className="pt-2">
          {/* Title and heart icon */}
          <div className="flex justify-between mb-2">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-6 w-6 rounded-full" />
          </div>

          {/* Description */}
          <Skeleton className="h-4 w-full mb-1" />
          <Skeleton className="h-4 w-5/6 mb-3" />

          {/* Price and color options */}
          <div className="flex justify-between py-1 mb-3">
            <Skeleton className="h-6 w-20" />
            <div className="flex gap-2">
              <Skeleton className="h-6 w-6 rounded-full" />
              <Skeleton className="h-6 w-6 rounded-full" />
              <Skeleton className="h-6 w-6 rounded-full" />
            </div>
          </div>

          {/* Button */}
          <Skeleton className="h-10 w-full rounded-md" />
        </div>
      </div>
    </div>
  )
}
