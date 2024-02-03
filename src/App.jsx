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
import Footer from "./Components/Footer";
import { useQuiz } from "./context/QuizContext";

// const BASE_URL = "http://localhost:7000/questions";

function App() {
  const { status } = useQuiz();
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
                {status === "ready" && <HomePage />}
                {status === "active" && (
                  <>
                    <Question />
                    <NextButton />
                  </>
                )}
                {status === "finished" && <FinishedScreen />}
              </Main>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
