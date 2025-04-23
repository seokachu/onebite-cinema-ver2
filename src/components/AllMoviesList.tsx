import { getAllMovies } from "@/lib/api/movies";
import style from "../app/(with-searchbar)/page.module.css";
import MoviesListItem from "./MoviesListItem";
import type { MovieData } from "@/types";

export default async function AllMoviesList() {
  const movies: MovieData[] = await getAllMovies();

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
