import Image from "next/image";
import style from "./page.module.css";
import { getMovieDetail, getMovieIds } from "@/lib/api/movies";

export async function generateStaticParams() {
  return await getMovieIds();
}

//존재하지 않는 페이지
export const dynamicParams = false;

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const movie = await getMovieDetail(id);

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
