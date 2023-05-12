import styles from './UserItem.module.css'

const UserItem = (props) => {
  return (
    <li className={styles.user_item}>
      {props.user.name} ({props.user.age} years old)
    </li>
  );
};

export default UserItem;
