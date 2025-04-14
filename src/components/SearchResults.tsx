import globalStyle from "../styles/common.module.css";
import style from "../app/(with-searchbar)/page.module.css";
import MoviesListItem from "@/components/MoviesListItem";
import { getSearchMovies } from "@/lib/api/movies";
import { delay } from "@/utils/delay";
import type { MovieData } from "@/types";

export default async function SearchResults({ q }: { q: string }) {
  const movie: MovieData[] = await getSearchMovies(q);
  await delay(1000);

  return (
    <div className={globalStyle.container}>
      {movie.length > 0 ? (
        <ul className={style.recommend_list}>
          {movie.map((item) => (
            <MoviesListItem key={item.id} item={item} />
          ))}
        </ul>
      ) : (
        <h3 className={globalStyle.empty}>검색 결과가 없습니다.</h3>
      )}
    </div>
  );
}
