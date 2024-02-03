import { useQuiz } from "../context/QuizContext";

function FinishedScreen() {
  const { dispatch, points, highscore } = useQuiz();
  return (
    <div className="restart">
      <h2>
        Finished with {points} (highscore: {highscore})
      </h2>
      <button
        className="btn btnStart gradientBG"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </div>
  );
}

export default FinishedScreen;
