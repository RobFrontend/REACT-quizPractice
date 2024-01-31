import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
function PageNav() {
  return (
    <nav className={styles.nav}>
      <NavLink to="/">
        <p>Home</p>
      </NavLink>
      <NavLink to="/info">
        <p>About project</p>
      </NavLink>
    </nav>
  );
}

export default PageNav;
