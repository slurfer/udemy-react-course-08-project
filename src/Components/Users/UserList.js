import UserItem from "./UserItem";
import Card from "../UI/Card";
import styles from "./UserList.module.css";

const UsersList = (props) => {
  return (
    <Card>
      <ul className={styles.user_list}>
        {props.users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
