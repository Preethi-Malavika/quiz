import "./QuestionCard.css";
import CustomInput from "./CustomInput";
import { useState } from "react";

function answerType(value) {
  if (value === "Input Field") {
    return (
      <div>
        <input autoFocus className="input" type="text"></input>
      </div>
    );
  } else if (value === "Text Area") {
    return <textarea autoFocus className="textarea"></textarea>;
  } else {
    return (
      <select className="options" name="answers">
        <option value="Option1">Option 1</option>
        <option value="Option2">Option 2</option>
        <option value="Option3">Option 3</option>
        <option value="Option4">Option 4</option>
      </select>
    );
  }
}
function QuestionCard(props) {
  const [type, setType] = useState("");
  return (
    <div className="card">
      <h1 className="title">{props.title}</h1>
      <CustomInput type="file"></CustomInput>
      <h3>OR</h3>
      <CustomInput
        type="Type"
        placeholder="Type the Question here..."
      ></CustomInput>
      <div className="answerTypeDiv">
        <CustomInput
          type="radio"
          name="answerType"
          value="Input Field"
          id="input1"
          for="input1"
          valData={type}
          setvalData={setType}
          anstype={props.anstype}
          setAnstype={props.setAnstype}
        ></CustomInput>
        <CustomInput
          type="radio"
          name="answerType"
          value="Text Area"
          id="input2"
          for="input2"
          valData={type}
          setvalData={setType}
          anstype={props.anstype}
          setAnstype={props.setAnstype}
        ></CustomInput>
        <CustomInput
          type="radio"
          name="answerType"
          value="Options"
          id="input3"
          for="input3"
          valData={type}
          setvalData={setType}
          anstype={props.anstype}
          setAnstype={props.setAnstype}
        ></CustomInput>
      </div>
      {answerType(type)}
    </div>
  );
}

export default QuestionCard;
