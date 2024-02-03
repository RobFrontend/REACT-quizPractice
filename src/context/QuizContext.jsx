import { createContext, useContext, useEffect, useReducer } from "react";

const QuizContext = createContext();

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

function QuizProvider({ children }) {
  const [
    { questions, status, index, answer, points, highscore, secondsLeft },
    dispatch,
  ] = useReducer(reducer, initialState);

  const numQuestions = questions.length;
  // const maxPoints = questions.reduce(
  //   (acc, question) => acc + question.points,
  //   0
  // );
  const maxPoints = Array.isArray(questions)
    ? questions.reduce((acc, question) => acc + question.points, 0)
    : 0;
  useEffect(function () {
    async function fetchQuestion() {
      try {
        const res = await fetch(`${BASE_URL}`);
        const data = await res.json();
        dispatch({ type: "dataReceived", payload: data.questions });
      } catch (err) {
        dispatch({ type: "dataFailed" });
      }
    }
    fetchQuestion();
  }, []);

  return (
    <QuizContext.Provider
      value={{
        questions,
        status,
        index,
        answer,
        points,
        highscore,
        secondsLeft,
        dispatch,
        numQuestions,
        maxPoints,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  return context;
}

export { QuizProvider, useQuiz };
