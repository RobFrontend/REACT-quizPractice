function NextButton({ answer, index, numQuestions, dispatch }) {
  if (answer === null) return null;
  if (index < numQuestions - 1) {
    return (
      <button
        className="btn  btnStart gradientBG"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  }
  if (index === numQuestions - 1) {
    return (
      <button
        className="btn btnStart gradientBG"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
  }
}

export default NextButton;
