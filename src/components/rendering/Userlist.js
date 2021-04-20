import Card from "../UI/Card";
import styles from "./Userlist.module.css"

const Userlist = ({ result }) => {
  console.log(result);
  return (
    <Card className={styles.users}>
      <ul>
        {result.map((user) => (
          <li key={user.id}>
            {user.username} ({user.age})
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default Userlist;
