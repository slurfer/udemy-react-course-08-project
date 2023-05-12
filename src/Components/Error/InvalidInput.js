import Card from "../UI/Card";
import ErrorContainer from "./ErrorContainer";
import styles from "./InvalidInput.module.css";

const InvalidInput = (props) => {
  return (
    <ErrorContainer onConfirm={props.onConfirm}>
      <div className={styles.invalid_input}>
        <div className={styles.invalid_input__headding}>
          <h2>Invalid Input</h2>
        </div>
        <div className={styles.invalid_input__content}>
          {/* <p>Please enter a valid name and age (non-empty values).</p> */}
          <p>{props.message}</p>
          <button onClick={props.onConfirm} className={styles.invalid_input__button}>Okay</button>
        </div>
      </div>
    </ErrorContainer>
  );
};

export default InvalidInput;
