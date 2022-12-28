import { useState } from "react";
import QuestionCard from "./QuestionCard";

const QuestionCreation = (props) => {
  const [number, setNumber] = useState(1);
  const [anstype, setAnstype] = useState("");

  const formSubmit = (event) => {
    event.preventDefault();
    const target = event.target;
    const reset = () => {
      target[0].value = "";
      target[1].value = "";
      target[5].value = "";
    };
    const result = {
      questionNumber: `Question ${number - 1}`,
      file: target[0].value,
      question: target[1].value,
      answertype: anstype,
      answer: target[5].value,
    };
    props.questionList.push(result);
    console.log(props.questionList);
    reset();
  };
  // useEffect(() => {}, [questionList]);

  return (
    <div className="App">
      <h1>Question Creation</h1>
      <form onSubmitCapture={formSubmit}>
        <QuestionCard
          anstype={anstype}
          setAnstype={setAnstype}
          title={"Question " + number}
        ></QuestionCard>
        <button
          className="btn"
          onClick={() => setNumber(number + 1)}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default QuestionCreation;
