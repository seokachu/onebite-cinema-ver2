import AllMoviesList from "@/components/AllMoviesList";
import RecommendedMoviesList from "@/components/RecommendedMoviesList";
import style from "../../styles/common.module.css";

export default function Home() {
  return (
    <>
      <section className={style.container}>
        <RecommendedMoviesList />
      </section>
      <section className={style.container}>
        <AllMoviesList />
      </section>
    </>
  );
}
