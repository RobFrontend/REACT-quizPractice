import styles from "./Footer.module.css";
function Footer() {
  return (
    <footer className={styles.footer}>
      &copy; {new Date().getFullYear()} robfrontend
    </footer>
  );
}

export default Footer;
