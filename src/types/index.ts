export interface MovieData {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  releaseDate: string;
  company: string;
  genres: string[];
  runtime: number;
  posterImgUrl: string;
}

export interface MoviesListItemProps {
  item: MovieData;
}

export interface MoviesListProps {
  movies: MovieData[];
}

export interface MovieListSkeletonProps {
  count: number;
  className?: string;
}

export interface ReviewData {
  id: number;
  content: string;
  author: string;
  createdAt: string;
  movieId: number;
}

export interface ReviewItemProps {
  item: ReviewData;
}

export type ActionState = {
  status: boolean;
  error?: string;
  message?: string;
};

export interface ReviewItemDeleteButtonProps {
  movieId: number;
  reviewId: number;
}

export type PageProps = {
  params: Promise<{ id: string }>;
};
