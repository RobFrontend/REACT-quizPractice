import { useQuiz } from "../context/QuizContext";
import styles from "./Options.module.css";
function Options({ question }) {
  const { answer, dispatch } = useQuiz();
  const answered = answer !== null;
  return (
    <div className={styles.options}>
      {question.options.map((option, index) => (
        <button
          className={`${styles.btnAnswer} btn ${
            index === answer ? "answer" : ""
          } ${
            answered
              ? index === question.correctOption
                ? "correct"
                : " wrong"
              : ""
          }`}
          key={option}
          disabled={answered}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
