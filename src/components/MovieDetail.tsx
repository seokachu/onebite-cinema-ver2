import Image from "next/image";
import style from "../app/movie/[id]/page.module.css";
import { getMovieDetail } from "@/lib/api/movies";

export default async function MovieDetail({ movieId }: { movieId: string }) {
  const movie = await getMovieDetail(movieId);

  const {
    posterImgUrl,
    title,
    releaseDate,
    genres,
    runtime,
    company,
    subTitle,
    description,
  } = movie;

  return (
    <section className={style.container}>
      <div
        className={style.img_inner}
        style={{ backgroundImage: `url('${posterImgUrl}')` }}
      >
        <Image src={posterImgUrl} alt={title} width={300} height={450} />
      </div>
      <div className={style.movie_info}>
        <h2 className={style.title}>{title}</h2>
        <ul className={style.info_list}>
          <li>{releaseDate}</li>
          <li>{genres.join(", ")}</li>
          <li>{runtime}분</li>
        </ul>
        <p className={style.company}>{company}</p>
      </div>
      <div className={style.movie_description}>
        {subTitle && <h3>&ldquo;{subTitle}&rdquo;</h3>}
        <p>{description}</p>
      </div>
    </section>
  );
}
