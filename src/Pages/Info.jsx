import styles from "./Main.module.css";
import PageNav from "../Components/PageNav";

function Info() {
  return (
    <>
      <PageNav />
      <div className={styles.container}>
        <div className={styles.infoBox}>
          <h1>About project</h1>
          <p>
            The project's objective is to reinforce skills in utilizing the
            useReducer hook and React Router.
          </p>
          <p>
            Developed within the Vite framework, the application interfaces with
            an API I created.
          </p>
          <p>
            It functions as a Single Page Application (SPA) with a quiz format,
            where correct answers accumulate points, and completing the quiz
            establishes a high score.
          </p>
        </div>
      </div>
    </>
  );
}

export default Info;
