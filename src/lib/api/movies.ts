import { MovieData } from "@/types";
import { notFound } from "next/navigation";

//데이터 전부 불러오기
const SERVER_URL = process.env.NEXT_PUBLIC_API_SERVER_URL;

//전체 movie data 불러오기
export const getAllMovies = async () => {
  try {
    const response = await fetch(`${SERVER_URL}/movie`, {
      next: { revalidate: 60 * 60 * 24 },
    });

    if (!response.ok) {
      throw new Error(
        `전체 영화 데이터를 불러오는데 실패했습니다 : ${response.statusText}`
      );
    }

    if (response.status === 404) {
      notFound();
    }

    return response.json();
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
    throw err;
  }
};

//추천 movie data
export const getRecoMovies = async () => {
  try {
    const response = await fetch(`${SERVER_URL}/movie/random`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error(
        `추천 영화를 불러오는데 실패했습니다 : ${response.statusText}`
      );
    }

    if (response.status === 404) {
      notFound();
    }

    return response.json();
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
    throw err;
  }
};

//검색 movie list
export const getSearchMovies = async (q: string) => {
  if (!q) return [];

  try {
    const response = await fetch(`${SERVER_URL}/movie/search?q=${q}`, {
      next: { tags: [`search-${q}`], revalidate: 60 * 60 * 24 },
    });

    if (!response.ok) {
      throw new Error(
        `검색 영화 리스트를 불러오는데 실패했습니다 : ${response.statusText}`
      );
    }

    return response.json();
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
    throw err;
  }
};

//영화 상세 페이지 데이터 불러오기
export const getMovieDetail = async (id: string) => {
  try {
    const response = await fetch(`${SERVER_URL}/movie/${id}`, {
      next: { revalidate: 60 * 60 * 24 },
    });

    if (!response.ok) {
      throw new Error(
        `영화 상세 페이지 데이터를 불러오는데 실패했습니다 : ${response.statusText}`
      );
    }

    if (response.status === 404) {
      notFound();
    }

    return response.json();
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
    throw err;
  }
};

//상세페이지 static build 시점에 불러오기
export const getMovieIds = async () => {
  const movies = await getAllMovies();
  const movie = movies.map((movie: MovieData) => ({
    id: movie.id.toString(),
  }));

  return movie;
};
