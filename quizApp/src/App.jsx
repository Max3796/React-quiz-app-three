import { BrowserRouter, Route, Routes} from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import QuizComponent from "./components/QuizComponent";
import ResultPage from "./components/ResultPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/Quiz" element={<QuizComponent />} />
        <Route path="/Result" element={<ResultPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;