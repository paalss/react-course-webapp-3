import Card from "../UI/Card";
import styles from "./Form.module.css"
import { useState } from "react";

const Form = ({ onAddUser }) => {
  // bruke state slik at man kan bestemme om verdien skal resettes eller ikke
  const [enteredText, setEnteredText] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const updateTextStateHandler = (event) => {
    const enteredText = event.target.value;
    setEnteredText(enteredText);
  };

  const updateAgeStateHandler = (event) => {
    const enteredAge = event.target.value;
    setEnteredAge(enteredAge);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    // deklareringer som kan brukes om vi ikke bruker state
    // const enteredText = event.target[0].value
    // const enteredAge = event.target[1].value

    if (enteredText.trim() === "") {
      alert('please enter name')
    }
    else if (enteredAge < 0) {
      alert('age must be over 0')
    }
    else {
      // validering input
      onAddUser(enteredText, enteredAge);
      setEnteredText("");
      setEnteredAge("");
    }
  };

  return (
    <Card>
      <form onSubmit={formSubmitHandler}>
        <div>
          <label>Username</label> <br />
          <input
            type="text"
            name="username"
            value={enteredText}
            onChange={updateTextStateHandler}
          />{" "}
          <br />
          <label>Age (Years)</label> <br />
          <input
            type="number"
            name="age"
            value={enteredAge}
            onChange={updateAgeStateHandler}
          />
        </div>
        <button type="submit">Add user</button>
      </form>
    </Card>
  );
};

export default Form;
