import { useState } from "react";
import Card from "../UI/Card";
import classes from "./NewUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const NewUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim().length === 0) {
      setError("Please enter a valid name (non-empty value).");
      console.log(error);
      return;
    }

    if (enteredAge < 1)  {
      setError("Please enter a valid age (> 0).");
      console.log(error);
      return;
    }

    console.log(enteredName, enteredAge);
    const user = {
      name: enteredName,
      age: enteredAge,
      id: Math.random().toString(),
    };
    props.onNewUser(user);
    setEnteredName("");
    setEnteredAge("");
  };

  const confirmErrorHandler = () => {
    setError("");
  }

  return (
    <Card>
      {error.trim().length > 0 && <ErrorModal onConfirm={confirmErrorHandler} message={error} />}
      <form onSubmit={submitHandler}>
        <div className={classes.new_user__controls}>
          <div className={classes.new_user__control}>
            <label>Username</label>
            <input type="text" value={enteredName} onChange={nameChangeHandler} />
          </div>
          <div className={classes.new_user__control}>
            <label>Age (Years)</label>
            <input type="number" value={enteredAge} onChange={ageChangeHandler} />
          </div>
        </div>
        <div className={classes.new_user__actions}>
          <button type="submit">Add User</button>
        </div>
      </form>
    </Card>
  );
};

export default NewUser;
