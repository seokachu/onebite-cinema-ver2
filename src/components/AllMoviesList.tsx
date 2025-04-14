import { getAllMovies } from "@/lib/api/movies";
import style from "../app/(with-searchbar)/page.module.css";
import MoviesListItem from "./MoviesListItem";
import { delay } from "@/utils/delay";
import type { MovieData } from "@/types";

export default async function AllMoviesList() {
  const movies: MovieData[] = await getAllMovies();
  await delay(1500);

  return (
    <>
      <ul className={style.all_movie_list}>
        {movies.map((item) => (
          <MoviesListItem key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
}
