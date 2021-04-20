import styles from "./Button.module.css";

const Button = ({ type, onClick, children }) => {
  // type button er fallback
  return (
    <button className={styles.button} type={type || "button"} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
