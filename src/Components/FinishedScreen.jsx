function FinishedScreen({ dispatch, points, highscore }) {
  return (
    <div>
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
