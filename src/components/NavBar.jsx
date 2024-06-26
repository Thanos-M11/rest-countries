import DropDownMenu from "./DropDownMenu";
import SearchBar from "./SearchBar";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={styles.navbar}>
      <SearchBar />
      <DropDownMenu />
    </div>
  );
}

export default NavBar;
