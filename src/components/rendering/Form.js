import Card from "../UI/Card";
import styles from "./Form.module.css";
import ErrorModal from "../UI/ErrorModal";
import Button from "../UI/Button";
import { Fragment, useState, useRef } from "react";

const Form = ({ onAddUser }) => {
  const usernameInputRef = useRef();
  const ageInputRef = useRef();

  // bruke state slik at man kan bestemme om verdien skal resettes eller ikke
  const [validatedInput, setValidatedInput] = useState({
    isInputCorrect: true,
    title: "",
    message: "",
  });

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const enteredUsername = usernameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setValidatedInput({
        isInputCorrect: false,
        title: "invalid input",
        message: "please enter name and age",
      });
    } else if (+enteredAge < 1) {
      // +enteredAge = parseInt(enteredAge)
      setValidatedInput({
        isInputCorrect: false,
        title: "invalid input",
        message: "age must be over 0",
      });
    } else {
      onAddUser(enteredUsername, enteredAge);
      // egentlig ikke anbefalt å bruke refs variabler til å manipulere dom.
      usernameInputRef.current.value = ''
      ageInputRef.current.value = ''
    }
  };

  const closeErrorHandler = () => {
    setValidatedInput({ isInputCorrect: true, message: "" });
  };

  if (validatedInput.isInputCorrect === false) {
    var errorPlaceHolder = (
      <ErrorModal
        title={validatedInput.message}
        message={validatedInput.message}
        onConfirm={closeErrorHandler}
      />
    );
  }

  return (
    <Fragment>
      {errorPlaceHolder}
      <Card className={styles.input}>
        <form onSubmit={formSubmitHandler}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              name="username"
              ref={usernameInputRef}
            />
            <label htmlFor="age">Age (Years)</label>
            <input
              id="age"
              type="number"
              name="age"
              ref={ageInputRef}
            />
          </div>
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default Form;
