import ModeIcons from "./ModeIcons";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <p>Where in the world?</p>
      <ModeIcons />
    </div>
  );
}

export default Header;
