import { Fragment, useState } from "react";
import Form from "./components/rendering/Form";
import Userlist from "./components/rendering/Userlist";

function App() {
  const [users, setUsers] = useState([
    { id: "id1", username: "bob", age: 17 },
    { id: "id2", username: "siri", age: 21 },
  ]);

  const addUserHandler = (name, age) => {
    setUsers((prevUsers) => {
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift({
        id: Math.random().toString(),
        username: name,
        age: age,
      });
      return updatedUsers;
    });
  };

  return (
    <Fragment>
      <Form onAddUser={addUserHandler} />
      <Userlist result={users} />
    </Fragment>
  );
}

export default App;
