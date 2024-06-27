import ModeIcons from "./ModeIcons";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <p>Where in the world?</p>
      <ModeIcons />
    </header>
  );
}

export default Header;
