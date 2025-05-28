import { Skeleton } from "@/components/ui/skeleton"
 
export function AppSkeleton() {
  return (
    <div className="w-full flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
      </div>
    </div>
  )
}

export default AppSkeleton;