import style from "./review.module.css";
import { formattedDate } from "@/utils/date";
import type { ReviewItemProps } from "@/types";
import ReviewItemDeleteButton from "./ReviewItemDeleteButton";

export default function ReviewItem({ item }: ReviewItemProps) {
  const { id, movieId, content, author, createdAt } = item;

  return (
    <li className={style.review_item}>
      <div>
        <h3>{author}</h3>
        <time>{formattedDate(createdAt)} 작성됨</time>
      </div>
      <p>{content}</p>
      <div>
        <ReviewItemDeleteButton movieId={movieId} reviewId={id} />
      </div>
    </li>
  );
}
