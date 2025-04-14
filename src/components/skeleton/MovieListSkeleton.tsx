import MovieItemSkeleton from "./MovieItemSkeleton";
import type { MovieListSkeletonProps } from "@/types";

export default function MovieListSkeleton({
  count = 1,
  className,
}: MovieListSkeletonProps) {
  return (
    <ul className={className}>
      {Array.from({ length: count }).map((_, index) => (
        <MovieItemSkeleton key={index} />
      ))}
    </ul>
  );
}
