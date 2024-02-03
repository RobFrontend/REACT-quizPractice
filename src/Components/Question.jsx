import { useQuiz } from "../context/QuizContext";
import Options from "./Options";
import styles from "./Question.module.css";

function Question() {
  const { questions, numQuestions, index, answer, points, maxPoints } =
    useQuiz();

  const question = questions.at(index);
  return (
    <>
      <div className={styles.progress}>
        <progress max={numQuestions} value={index + Number(answer !== null)} />
        <h3>
          Question {index + 1} / {questions.length}
        </h3>

        <p>
          Points: {points}/ {maxPoints}
        </p>
      </div>
      <h2>{question.question}</h2>
      <Options question={question} />
    </>
  );
}

export default Question;
