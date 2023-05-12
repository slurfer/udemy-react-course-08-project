import styles from "./ErrorContainer.module.css";

const ErrorContainer = (props) => {
  return <div onClick={props.onConfirm} className={styles.error_container}>{props.children}</div>;
};

export default ErrorContainer;
