import { getMovieDetail } from "@/lib/api/movies";
import type { PageProps } from "@/types";

export const generateMetadata = async ({ params }: PageProps) => {
  const { id } = await params;
  const movie = await getMovieDetail(id);

  if (!movie) {
    return {
      title: "영화 상세 정보",
      description: "영화 상세 정보 페이지 입니다.",
      openGraph: {
        title: "영화 상세 정보",
        description: "영화 상세 정보 페이지 입니다.",
        images: ["/thumbnail.png"],
      },
    };
  }

  return {
    title: `${movie.title} : 영화 상세`,
    description: movie.description,
    openGraph: {
      title: `${movie.title} : 영화 상세`,
      description: movie.description,
      images: [movie.posterImgUrl],
    },
  };
};
