import MoviesListItem from "./MoviesListItem";
import style from "../app/(with-searchbar)/page.module.css";
import { getRecoMovies } from "@/lib/api/movies";
import { delay } from "@/utils/delay";
import type { MovieData } from "@/types";

export default async function RecommendedMoviesList() {
  const recoMovies: MovieData[] = await getRecoMovies();
  await delay(1000);

  return (
    <>
      <ul className={`${style.recommend_list} ${style.main_page_list}`}>
        {recoMovies.map((item) => (
          <MoviesListItem key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
}
