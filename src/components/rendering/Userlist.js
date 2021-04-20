import Card from "../UI/Card";
import styles from "./Userlist.module.css"

const Userlist = ({ result }) => {
  return (
    <Card>
      <ul>
        {result.map((user) => (
          <li key={user.id}>
            {user.text} ({user.age})
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default Userlist;
