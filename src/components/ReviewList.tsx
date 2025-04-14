import { getMovieReviews } from "@/lib/api/movies";
import ReviewItem from "./ReviewItem";
import style from "./review.module.css";
import type { ReviewData } from "@/types";

export default async function ReviewList({ movieId }: { movieId: string }) {
  const reviews: ReviewData[] = await getMovieReviews(movieId);

  return (
    <ul className={style.review_list}>
      {reviews.length > 0 ? (
        reviews.map((item) => <ReviewItem key={item.id} item={item} />)
      ) : (
        <li>
          <h3 className={style.review_empty}>작성된 리뷰가 없습니다.</h3>
        </li>
      )}
    </ul>
  );
}
