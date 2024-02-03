import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import { useQuiz } from "../context/QuizContext";
function PageNav() {
  const { dispatch } = useQuiz();
  return (
    <nav className={styles.nav}>
      <NavLink to="/">
        <p>Home</p>
      </NavLink>
      <NavLink to="/info" onClick={() => dispatch({ type: "restart" })}>
        <p>About project</p>
      </NavLink>
    </nav>
  );
}

export default PageNav;
