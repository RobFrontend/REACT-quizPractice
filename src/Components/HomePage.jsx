import styles from "./HomePage.module.css";
function HomePage({ numQuestions, dispatch }) {
  return (
    <div className={styles.home}>
      <h1>Welcome to the NBA Quiz!</h1>
      <h2>By robfrontend</h2>

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
