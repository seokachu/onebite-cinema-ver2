import Image from "next/image";
import Link from "next/link";
import style from "../app/(with-searchbar)/page.module.css";
import type { MoviesListItemProps } from "@/types";

export default function MoviesListItem({ item }: MoviesListItemProps) {
  const { id, posterImgUrl, title } = item;

  return (
    <li className={style.main_list_item}>
      <Link href={`movie/${id}`}>
        <div>
          <Image src={posterImgUrl} alt={title} width={300} height={450} />
        </div>
        <h3>{item.title}</h3>
      </Link>
    </li>
  );
}
