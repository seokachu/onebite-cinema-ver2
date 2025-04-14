"use server";
import { createMovieReview } from "@/lib/api/movies";
import { revalidateTag } from "next/cache";
import type { ActionState, ReviewData } from "@/types";

export default async function createReviewAction(
  _: null | ActionState,
  formData: FormData
): Promise<ActionState> {
  const movieId = formData.get("movieId")?.toString();
  const content = formData.get("content")?.toString();
  const author = formData.get("author")?.toString();

  if (!movieId || !content || !author) {
    return {
      status: false,
      error: "리뷰 내용과 작성자를 입력해 주세요.",
    };
  }

  try {
    const reviewData: Pick<ReviewData, "movieId" | "content" | "author"> = {
      movieId: Number(movieId),
      content,
      author,
    };

    await createMovieReview(reviewData);
    revalidateTag(`movie-review-${movieId}`);

    return {
      status: true,
      message: "리뷰가 성공적으로 저장되었습니다.",
      error: "",
    };
  } catch (err) {
    return {
      status: false,
      error: `리뷰 저장에 실패했습니다. ${err}`,
    };
  }
}
