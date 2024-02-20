import styles from "./styles/Special.module.scss";
import { SpecialType } from "../lib/interfaces";

export function Special_goodreads(props: { data: SpecialType; key: number }) {
  return (
    <div
      className={styles.special_div}
      key={props.key}
    >
      <a href={props.data.url}>
        <h1 className={styles.special_title}>{props.data.title}</h1>
        <p className={styles.special_url}>{props.data.url}</p>
      </a>
      <p className={styles.special_rating}>
        {props.data.rating ? `${props.data.rating} / 5` : ""}
      </p>
      <p className={styles.special_desc}>{props.data.description}</p>
      <div className={styles.special_subs}>
        <p className={styles.special_genre}>Genres:</p>
        <p className={styles.special_genres}>{props.data.genres.join(", ")}</p>
      </div>
      <a href={props.data.url}>
        <p className={styles.special_link}>Goodreads</p>
      </a>
    </div>
  );
}

export function Special_wiki(props: { data: SpecialType; key: number }) {
  return (
    <div
      className={styles.special_div}
      key={props.key}
    >
      <a href={props.data.url}>
        <h1 className={styles.special_title}>{props.data.title}</h1>
        <p className={styles.special_url}>{props.data.url}</p>
      </a>
      <p className={styles.special_desc}>{props.data.description}</p>
      <div className={styles.special_subs}>
        <ul>
          {props.data.subsections
            ? props.data.subsections.map((element: string) => {
                let underscore = element.replace(/ /g, "_");
                return (
                  <li>
                    <a href={`${props.data.url}#${underscore}`}>{element}</a>
                  </li>
                );
              })
            : ""}
        </ul>
      </div>
      <a href={props.data.url}>
        <p className={styles.special_link}>Wikipedia</p>
      </a>
    </div>
  );
}
