import ReviewEditor from "@/components/ReviewEditor";
import ReviewList from "@/components/ReviewList";
import style from "../app/movie/[id]/page.module.css";

export default function ReviewSection({ movieId }: { movieId: string }) {
  return (
    <section className={style.container}>
      <h2 className={style.movie_title}>✏️ 영화 감상 공유하기</h2>
      <ReviewEditor movieId={movieId} />
      <ReviewList movieId={movieId} />
    </section>
  );
}
