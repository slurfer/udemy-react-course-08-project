import styles from "./Container.module.css";
import Users from "../Users/Users";
import InvalidInput from "../Error/InvalidInput";
import ErrorContainer from "../Error/ErrorContainer";

const Container = () => {
  return (
    <div className={styles.main}>
      <Users />
    </div>
  );
};

export default Container;
