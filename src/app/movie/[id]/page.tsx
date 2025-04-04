import style from "./page.module.css";
import Image from "next/image";

const movie = {
  id: 533535,
  title: "데드풀과 울버린",
  releaseDate: "2024-07-24",
  company:
    "Marvel Studios, Maximum Effort, 21 Laps Entertainment, 20th Century Studios, Kevin Feige Productions, TSG Entertainment",
  genres: ["액션", "코미디", "SF"],
  subTitle: "",
  description:
    "히어로 생활에서 은퇴한 후, 평범한 중고차 딜러로 살아가던 ‘데드풀’이 예상치 못한 거대한 위기를 맞아 모든 면에서 상극인 ‘울버린’을 찾아가게 되며 펼쳐지는 도파민 폭발 액션 블록버스터.",
  runtime: 128,
  posterImgUrl:
    "https://media.themoviedb.org/t/p/w300_and_h450_face/4Zb4Z2HjX1t5zr1qYOTdVoisJKp.jpg",
};

export default function Page() {
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
