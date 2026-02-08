import { Skeleton } from "./ui/skeleton";

function Loading() {
  return (
    <main className="w-full m-auto max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="p-6">
            <Skeleton className="w-full md:max-w-80 h-60 bg-gray-300 rounded" />
            <Skeleton className="w-full max-w-20  mt-2 h-3 bg-gray-300 rounded" />
            <Skeleton className="w-full max-w-40  mt-2 h-3 bg-gray-300 rounded" />
          </div>
        ))}
      </div>
    </main>
  );
}

export default Loading;
