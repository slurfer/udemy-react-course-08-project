import styles from "./Backdrop.module.css";

const ErrorContainer = (props) => {
  return <div onClick={props.onConfirm} className={styles.error_container}></div>;
};

export default ErrorContainer;