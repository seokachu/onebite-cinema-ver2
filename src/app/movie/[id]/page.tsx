import { getMovieIds } from "@/lib/api/movies";
import MovieDetail from "@/components/MovieDetail";
import ReviewSection from "@/components/ReviewSection";
import { generateMetadata } from "@/metadata/movie";
import type { PageProps } from "@/types";

export { generateMetadata };

export async function generateStaticParams() {
  return await getMovieIds();
}

//존재하지 않는 페이지
export const dynamicParams = false;

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  return (
    <>
      <MovieDetail movieId={id} />
      <ReviewSection movieId={id} />
    </>
  );
}
