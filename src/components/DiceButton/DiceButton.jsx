import { ReactComponent as IconDice } from "../../assets/images/icon-dice.svg";
import styles from "./DiceButton.module.scss";

export function DiceButton(props) {
  return (
    <button {...props} className={styles.btn} aria-label="get new advice">
      <IconDice aria-hidden="true" />
    </button>
  );
}
