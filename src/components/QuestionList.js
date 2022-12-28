import "./QuestionList.css";
const QuestionList = (props) => {
  if (props.questionList.length) {
    return props.questionList.map((val) => {
      return (
        <div className="questionDiv">
          <h1>{val.questionNumber}</h1>
          <h3></h3>
        </div>
      );
    });
  } else {
    return (
      <div>
        <h1>There are no question available!!</h1>
      </div>
    );
  }
};
export default QuestionList;
