import { useSearchParams } from "react-router-dom";
import styles from "./SearchBar.module.css";

function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams({});

  function handleChange(e) {
    if (e.target.value === "") {
      searchParams.delete("search");
    } else {
      searchParams.set("search", e.target.value);
    }
    setSearchParams(searchParams);
  }

  return (
    <div className={styles.searchContainer}>
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
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        ></path>
      </svg>

      <input
        className={styles.input}
        type="search"
        value={searchParams.get("search") || ""}
        onChange={handleChange}
        placeholder="Search for a country..."
      />
    </div>
  );
}

export default SearchBar;
