import style from "./review.module.css";
import { formattedDate } from "@/utils/date";
import type { ReviewItemProps } from "@/types";

export default function ReviewItem({ item }: ReviewItemProps) {
  const { content, author, createdAt } = item;

  return (
    <li className={style.review_item}>
      <div>
        <h3>{author}</h3>
        <time>{formattedDate(createdAt)} 작성됨</time>
      </div>
      <p>{content}</p>
      <div>
        <span className={style.del_btn}>삭제하기</span>
      </div>
    </li>
  );
}
