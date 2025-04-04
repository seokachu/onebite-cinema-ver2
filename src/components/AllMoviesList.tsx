import style from "../app/(with-searchbar)/page.module.css";
import MoviesListItem from "./MoviesListItem";
import movies from "@/mock/dummy.json";

export default function AllMoviesList() {
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
