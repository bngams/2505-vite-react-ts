import { Skeleton } from "@/components/ui/skeleton";

function ProductListSkeleton() {
    return (
        <div className="flex flex-wrap gap-4 justify-center">
             <Skeleton className="h-4 w-[250px]" />
             <Skeleton className="h-4 w-[250px]" />
             <Skeleton className="h-4 w-[250px]" />
        </div>
    );
}
export default ProductListSkeleton;