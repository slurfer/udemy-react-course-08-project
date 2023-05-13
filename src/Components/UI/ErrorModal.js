import styles from "./ErrorModal.module.css";
import Backdrop from "./Backdrop";
import Button from "./Button";

const ErrorModal = (props) => {
  return (
    <>
      <Backdrop onConfirm={props.onConfirm} />
      <div className={styles.invalid_input}>
        <div className={styles.invalid_input__headding}>
          <h2>Invalid Input</h2>
        </div>
        <div className={styles.invalid_input__content}>
          <p>{props.message}</p>
          <Button className={styles.invalid_input__button} onClick={props.onConfirm}>Okay</Button>
        </div>
      </div>
    </>
  );
};

export default ErrorModal;
