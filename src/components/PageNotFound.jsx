import { Link } from "react-router-dom";
import styles from "./PageNotFound.module.css";

function PageNotFound({ cca3 }) {
  return (
    <div className={styles.error}>
      <p>404</p>
      <p>Unfortunately the page {cca3} you are looking for is not found</p>
      <Link to="/">Home</Link>
    </div>
  );
}

export default PageNotFound;
