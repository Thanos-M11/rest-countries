import { useState } from "react";
import styles from "./ModeIcons.module.css";

function ModeIcons() {
  const [isDark, setIsDark] = useState(true);

  function handleClick() {
    const root = document.documentElement;

    if (root.classList.contains("light")) {
      root.classList.remove("light");
      root.classList.add("dark");
      setIsDark(false);
    } else if (root.classList.contains("dark")) {
      root.classList.remove("dark");
      root.classList.add("light");
      setIsDark(true);
    }
  }

  return (
    <div className={styles.icons} onClick={handleClick}>
      <svg
        data-slot="icon"
        fill="currentColor"
        strokeWidth="1.5"
        stroke="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
        ></path>
      </svg>
      <span>{isDark ? "Light" : "Dark"} Mode</span>
    </div>
  );
}

export default ModeIcons;
