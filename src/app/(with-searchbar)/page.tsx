import { Suspense } from "react";
import AllMoviesList from "@/components/AllMoviesList";
import RecommendedMoviesList from "@/components/RecommendedMoviesList";
import globalStyle from "../../styles/common.module.css";
import style from "../(with-searchbar)/page.module.css";
import MovieListSkeleton from "@/components/skeleton/MovieListSkeleton";
import skeletonStyle from "../../components/skeleton/movie-item-skeleton.module.css";

export default function Home() {
  return (
    <>
      <section className={globalStyle.container}>
        <h2 className={style.title}>지금 가장 추천하는 영화</h2>
        <Suspense
          fallback={
            <MovieListSkeleton
              count={3}
              className={skeletonStyle.recommend_list}
            />
          }
        >
          <RecommendedMoviesList />
        </Suspense>
      </section>
      <section className={globalStyle.container}>
        <h2 className={style.title}>등록된 모든 영화</h2>
        <Suspense
          fallback={
            <MovieListSkeleton
              count={10}
              className={skeletonStyle.all_movie_list}
            />
          }
        >
          <AllMoviesList />
        </Suspense>
      </section>
    </>
  );
}
