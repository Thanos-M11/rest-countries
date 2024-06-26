import { Outlet } from "react-router-dom";
import Header from "./Header";
import styles from "./Applayout.module.css";

function Applayout() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default Applayout;
