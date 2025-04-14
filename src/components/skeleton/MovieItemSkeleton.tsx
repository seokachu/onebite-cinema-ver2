import style from "./movie-item-skeleton.module.css";

export default function MovieItemSkeleton() {
  return (
    <li>
      <div className={style.image}></div>
      <h2 className={style.title}></h2>
    </li>
  );
}
