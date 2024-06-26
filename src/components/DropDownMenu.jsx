import { useCountries } from "../context/CountriesContext";
import styles from "./DropDownMenu.module.css";
import { useSearchParams } from "react-router-dom";

function DropDownMenu() {
  const { regions } = useCountries();
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick(region) {
    if (region === "") {
      searchParams.delete("region");
    } else {
      searchParams.set("region", region);
    }
    setSearchParams(searchParams);
  }

  return (
    <nav className={styles.container}>
      <div className={styles.dropdown}>
        <span>Filter for Region</span>
        <svg
          data-slot="icon"
          fill="none"
          strokeWidth="1.5"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          ></path>
        </svg>
      </div>
      <div className={styles.dropdownMenu}>
        <ul className={styles.submenu}>
          <li onClick={() => handleClick("")}>No Filter</li>
          {regions.map((region) => (
            <li key={region} onClick={() => handleClick(region)}>
              {region}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default DropDownMenu;
