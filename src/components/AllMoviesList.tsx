import { getAllMovies } from "@/lib/api/movies";
import style from "../app/(with-searchbar)/page.module.css";
import MoviesListItem from "./MoviesListItem";
import type { MovieData } from "@/types";

export default async function AllMoviesList() {
  const movies: MovieData[] = await getAllMovies();

  return (
    <>
      <h2 className={style.title}>등록된 모든 영화</h2>
      <ul className={style.all_movie_list}>
        {movies.map((item) => (
          <MoviesListItem key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
}
