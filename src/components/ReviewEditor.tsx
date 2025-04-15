"use client";
import { useActionState, useEffect, useRef } from "react";
import toast from "react-hot-toast";
import style from "./review.module.css";
import createReviewAction from "@/actions/create-review.action";

export default function ReviewEditor({ movieId }: { movieId: string }) {
  const formRef = useRef<HTMLFormElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [state, formAction, isPending] = useActionState(
    createReviewAction,
    null
  );

  useEffect(() => {
    scrollTo({
      top: 0,
      behavior: "instant",
    });
    requestAnimationFrame(() => {
      textareaRef.current?.focus({ preventScroll: true });
    });
  }, []);

  useEffect(() => {
    if (!state) return;

    if (!state.status) {
      toast.error(state.error as string);
      return;
    }

    if (state.message) {
      toast.success(state.message);
      formRef.current?.reset();
      return;
    }
  }, [state]);

  return (
    <form
      action={formAction}
      ref={formRef}
      className={style.review_editor_inner}
    >
      <input name="movieId" value={movieId} hidden readOnly />
      <textarea
        ref={textareaRef}
        placeholder="내용을 입력해 주세요."
        name="content"
        maxLength={200}
        required
      />
      <div className={style.review_editor_input}>
        <input
          type="text"
          name="author"
          placeholder="작성자"
          maxLength={10}
          required
        />
        <button disabled={isPending} type="submit">
          {isPending ? "작성중..." : "작성하기"}
        </button>
      </div>
    </form>
  );
}
