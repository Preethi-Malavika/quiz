import "./CustomInput.css";
import { useEffect } from "react";
export let temp;

const Input = (props) => {
  useEffect(() => {
    //    setAnstype("");
  }, []);

  return (
    <div className="inputDiv">
      <input
        autoFocus
        onClick={(event) => {
          if (props.type === "radio") {
            props.setvalData(props.value);
            props.setAnstype(props.value);
            console.log(event.target, "-------");
          }
        }}
        id={props.id}
        name={props.name}
        className="inputField"
        type={props.type}
        placeholder={props.placeholder}
      />
      {props.value ? (
        <label for={props.for} className="label">
          {props.value}
        </label>
      ) : (
        ""
      )}
    </div>
  );
};
export default Input;
