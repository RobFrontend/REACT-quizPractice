import { useEffect, useReducer } from "react";
import HomePage from "./Components/HomePage";
import Loader from "./Components/Loader";
import Error from "./Components/Error";
import Main from "./Pages/Main";
import Question from "./Components/Question";
import NextButton from "./Components/NextButton";
import FinishedScreen from "./Components/FinishedScreen";
import Info from "./Pages/Info";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./Pages/PageNotFound";

// const BASE_URL = "http://localhost:7000/questions";
const BASE_URL =
  "https://robfrontend.github.io/host_api_nba_quiz/questions.json";

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsLeft: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return {
        ...state,
        status: "active",
      };
    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    case "finish":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case "restart":
      return { ...state, status: "ready", index: 0, points: 0, answer: null };
    default:
      throw new Error("Action unknown");
  }
}

function App() {
  const [
    { questions, status, index, answer, points, highscore, secondsLeft },
    dispatch,
  ] = useReducer(reducer, initialState);

  const numQuestions = questions.length;
  const maxPoints = questions.reduce(
    (acc, question) => acc + question.points,
    0
  );
  useEffect(function () {
    async function fetchQuestion() {
      try {
        const res = await fetch(`${BASE_URL}`);
        const data = await res.json();
        console.log(data);
        dispatch({ type: "dataReceived", payload: data.questions });
      } catch (err) {
        dispatch({ type: "dataFailed" });
      }
    }
    fetchQuestion();
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="info" element={<Info />} />
          <Route
            index
            element={
              <Main>
                {status === "loading" && <Loader />}
                {status === "error" && <Error />}
                {status === "ready" && (
                  <HomePage numQuestions={numQuestions} dispatch={dispatch} />
                )}
                {status === "active" && (
                  <>
                    <Question
                      questions={questions}
                      question={questions[index]}
                      index={index}
                      points={points}
                      answer={answer}
                      dispatch={dispatch}
                      maxPoints={maxPoints}
                      numQuestions={numQuestions}
                    />
                    <NextButton
                      answer={answer}
                      index={index}
                      numQuestions={numQuestions}
                      dispatch={dispatch}
                    />
                  </>
                )}
                {status === "finished" && (
                  <FinishedScreen
                    dispatch={dispatch}
                    points={points}
                    highscore={highscore}
                  />
                )}
              </Main>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
