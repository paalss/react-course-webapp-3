import { useState } from "react";
import Form from "./components/rendering/Form";
import Userlist from "./components/rendering/Userlist";

function App() {
  const [users, setUsers] = useState([
    { id: "id1", text: "bob", age: 18 },
    { id: "id2", text: "siri", age: 20 },
  ]);

  const addUserHandler = (enteredText, enteredAge) => {
    setUsers((prevUsers) => {
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift({
        id: Math.random().toString(),
        text: enteredText,
        age: enteredAge,
      });
      return updatedUsers;
    });
  };

  return (
    <div>
      <Form onAddUser={addUserHandler} />
      <Userlist result={users} />
    </div>
  );
}

export default App;
