import NewUser from "../NewUser/NewUser";
import UsersList from "./UsersList";
import { useState } from "react";

const Users = () => {
  const dummy_users = [
    { name: "Martin", age: "19", id: "1" },
    { name: "Adam", age: "18", id: "2" },
  ];

  const [users, setUsers] = useState(dummy_users);

    const addUserHandler = (user) => {
        setUsers((prevUsers) => {
            return [user, ...prevUsers]
        })
    }

  return (
    <div>
      <NewUser onNewUser={addUserHandler} />
      <UsersList users={users} />
    </div>
  );
};

export default Users;
