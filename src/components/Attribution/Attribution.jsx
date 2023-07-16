import styles from "./Attribution.module.scss";

export function Attribution() {
  return (
    <footer className={styles.attribution}>
      Challenge by{" "}
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </a>
      . Coded by <a href="https://github.com/semperprimum">Bogdan Kim</a>.
    </footer>
  );
}
