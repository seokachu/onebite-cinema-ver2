import SearchResults from "@/components/SearchResults";
import MovieListSkeleton from "@/components/skeleton/MovieListSkeleton";
import style from "../../../components/skeleton/movie-item-skeleton.module.css";
import { Suspense } from "react";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) {
  const { q } = await searchParams;

  return (
    <Suspense
      fallback={
        <MovieListSkeleton
          count={3}
          className={`${style.recommend_list} ${style.search_inner}`}
        />
      }
    >
      <SearchResults q={q} />
    </Suspense>
  );
}
