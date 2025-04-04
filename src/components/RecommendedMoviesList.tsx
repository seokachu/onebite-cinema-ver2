import MoviesListItem from "./MoviesListItem";
import style from "../app/(with-searchbar)/page.module.css";
import movies from "@/mock/dummy.json";

export default function RecommendedMoviesList() {
  const movie = movies.slice(0, 3);
  return (
    <>
      <h2 className={style.title}>지금 가장 추천하는 영화</h2>
      <ul className={`${style.recommend_list} ${style.main_page_list}`}>
        {movie.map((item) => (
          <MoviesListItem key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
}
