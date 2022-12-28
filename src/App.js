import "./App.css";
import QuestionCreation from "./components/QuestionCreation";
import QuestionList from "./components/QuestionList";
import { Route, Link } from "react-router-dom";
import Home from "./components/Home";

function App() {
  const questionList = [];
  return (
    <div>
      <Route exact path="/">
        <Home></Home>
      </Route>

      <Route path="/question_creation">
        <div className="navBar">
          <Link to="/">Home</Link>
          <Link to="/question_creation">Question Creation</Link>
          <Link to="/question_list">Question List</Link>
        </div>
        <QuestionCreation questionList={questionList}></QuestionCreation>
      </Route>
      <Route path="/question_list">
        <div className="navBar">
          <Link to="/">Home</Link>
          <Link to="/question_creation">Question Creation</Link>
          <Link to="/question_list">Question List</Link>
        </div>
        <QuestionList questionList={questionList}></QuestionList>
      </Route>
    </div>
  );
}

export default App;
