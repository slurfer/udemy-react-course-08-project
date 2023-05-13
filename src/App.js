import { useState } from 'react';
import NewUser from './Components/Users/NewUser'
import UsersList from './Components/Users/UsersList'


const App = () => {
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
}

export default App;
