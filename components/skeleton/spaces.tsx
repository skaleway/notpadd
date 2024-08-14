import { Skeleton } from "../ui/skeleton";

export function SpaceSkeleton() {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
      {Array.from({ length: 8 }).map((_, index) => (
        <Skeleton
          key={index}
          className="cursor-pointer bg-muted p-3 rounded-lg border relative h-[142.246px] flex flex-col items-center justify-center"
        />
      ))}
    </div>
  );
}
