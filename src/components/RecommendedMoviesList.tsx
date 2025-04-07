import MoviesListItem from "./MoviesListItem";
import style from "../app/(with-searchbar)/page.module.css";
import { getRecoMovies } from "@/lib/api/movies";
import type { MovieData } from "@/types";

export default async function RecommendedMoviesList() {
  const recoMovies: MovieData[] = await getRecoMovies();

  return (
    <>
      <h2 className={style.title}>지금 가장 추천하는 영화</h2>
      <ul className={`${style.recommend_list} ${style.main_page_list}`}>
        {recoMovies.map((item) => (
          <MoviesListItem key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
}
