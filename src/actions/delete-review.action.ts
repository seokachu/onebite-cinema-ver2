"use server";
import { deleteMovieReview } from "@/lib/api/movies";
import { revalidateTag } from "next/cache";
import type { ActionState } from "@/types";

export async function actuallyRevalidate(movieId: number) {
  "use server";
  revalidateTag(`movie-review-${movieId}`);
}

export default async function deleteReviewAction(
  _: null | ActionState,
  formData: FormData
): Promise<ActionState> {
  const reviewId = formData.get("reviewId")?.toString();

  if (!reviewId) {
    return {
      status: false,
      error: "리뷰 삭제에 실패했습니다.",
    };
  }

  try {
    await deleteMovieReview(reviewId);

    return {
      status: true,
      message: "리뷰가 성공적으로 삭제되었습니다.",
      error: "",
    };
  } catch (err) {
    return {
      status: false,
      error: `리뷰 삭제에 실패했습니다. ${err}`,
    };
  }
}
