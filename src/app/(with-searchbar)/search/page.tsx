import MoviesListItem from "@/components/MoviesListItem";
import globalStyle from "../../../styles/common.module.css";
import style from "../page.module.css";
import movies from "@/mock/dummy.json";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;

  const filteredMovies = q
    ? movies.filter((movie) =>
        movie.title.toLowerCase().includes(q.toLowerCase())
      )
    : movies;

  return (
    <div className={globalStyle.container}>
      {filteredMovies.length > 0 ? (
        <ul className={style.recommend_list}>
          {filteredMovies.map((item) => (
            <MoviesListItem key={item.id} item={item} />
          ))}
        </ul>
      ) : (
        <h3 className={globalStyle.empty}>검색 결과가 없습니다.</h3>
      )}
    </div>
  );
}
