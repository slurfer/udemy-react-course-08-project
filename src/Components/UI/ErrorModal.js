import styles from "./ErrorModal.module.css";
import Backdrop from "./Backdrop";
import Card from "./Card";

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
          <button
            onClick={props.onConfirm}
            className={styles.invalid_input__button}
          >
            Okay
          </button>
        </div>
      </div>
    </>
  );
};

export default ErrorModal;
