import style from "./page.module.css";
import Image from "next/image";

const movie = {
  id: 17,
  title: "백설공주",
  releaseDate: "2025-03-19",
  company: "월트디즈니 컴퍼니 코리아",
  genres: ["판타지", "뮤지컬"],
  subTitle: "동화 그 이상의 마법 같은 이야기",
  description:
    "눈보라가 몰아치던 겨울 밤 태어난 백설공주. 온정이 넘치던 왕국에서 모두의 사랑을 받았지만, 강력한 어둠의 힘으로 왕국을 빼앗은 여왕의 위협에 숲으로 도망친다. 마법의 숲에서 간신히 살아남은 백설공주는 신비로운 일곱 광부들과 만나게 되며 새로운 세상을 마주하고, 마음속 깊이 숨겨진 용기와 선한 힘을 깨닫게 된다. 그리고 마침내, 빼앗긴 왕국을 되찾기 위해 여왕과 맞서 싸우기로 결심하는데…",
  runtime: 109,
  posterImgUrl:
    "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20250319_123%2F1742370056144UwYpI_JPEG%2Fmovie_image.jpg",
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
