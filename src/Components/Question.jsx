import Options from "./Options";
import styles from "./Question.module.css";

function Question({
  questions,
  question,
  answer,
  index,
  points,
  maxPoints,
  numQuestions,
  dispatch,
}) {
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
      <Options question={question} answer={answer} dispatch={dispatch} />
    </>
  );
}

export default Question;
