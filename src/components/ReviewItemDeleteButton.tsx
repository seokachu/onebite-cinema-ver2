"use client";

import { useActionState, useEffect, useRef, useTransition } from "react";
import style from "./review.module.css";
import deleteReviewAction, {
  actuallyRevalidate,
} from "@/actions/delete-review.action";
import type { ReviewItemDeleteButtonProps } from "@/types";

export default function ReviewItemDeleteButton({
  movieId,
  reviewId,
}: ReviewItemDeleteButtonProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [, startTransition] = useTransition();
  const [state, formAction, isPending] = useActionState(
    deleteReviewAction,
    null
  );

  useEffect(() => {
    if (!state) return;

    if (!state.status) {
      alert(state.error);
      return;
    }

    if (state.message) {
      alert(state.message);

      startTransition(() => {
        actuallyRevalidate(movieId);
      });
    }
  }, [state]);

  const handleDeleteClick = () => {
    if (confirm("정말로 삭제하시겠습니까?")) {
      formRef.current?.requestSubmit();
    }
  };

  return (
    <form action={formAction} ref={formRef}>
      <input name="movieId" value={movieId} hidden readOnly />
      <input name="reviewId" value={reviewId} hidden readOnly />
      <span onClick={handleDeleteClick} className={style.del_btn}>
        {isPending ? "삭제중..." : "삭제하기"}
      </span>
    </form>
  );
}
