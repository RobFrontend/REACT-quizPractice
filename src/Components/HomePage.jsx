import { useQuiz } from "../context/QuizContext";
import styles from "./HomePage.module.css";
function HomePage() {
  const { numQuestions, dispatch } = useQuiz();
  return (
    <div className={styles.home}>
      <h1>The NBA Quiz!</h1>
      <h2>robfrontend</h2>

      <h3>{numQuestions} questions to test your knowledge about NBA</h3>
      <button
        className="btn btnStart gradientBG"
        onClick={() => dispatch({ type: "start" })}
      >
        Start quiz!
      </button>
    </div>
  );
}

export default HomePage;
