import PageNav from "../Components/PageNav";
import styles from "./Main.module.css";

function Main({ children }) {
  return (
    <>
      <PageNav />
      <main className={styles.container}>{children}</main>;
    </>
  );
}

export default Main;
