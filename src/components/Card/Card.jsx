import styles from "./Card.module.scss";

export function Card(props) {
  return <div className={styles.card}>{props.children}</div>;
}
