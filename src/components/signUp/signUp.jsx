import styles from "./signUp.module.css";
import { Link } from "react-router-dom";
function signUp() {
  return (
    <main className={styles.signupLayout}>
      <div className={styles.signupContainer}>
        <h1>CORN CHAT</h1>
        <h2>INTER CONNECT</h2>
        <input
          type="text"
          placeholder="FULL NAME"
          className={styles.signupInput}
        />

        <input
          type="password"
          placeholder="PASSWORD"
          className={styles.signupInput}
        />
        <div className={styles.wrapper}>
          <input
            type="email"
            placeholder="EMAIL"
            className={styles.signupInput}
          />
          <button>SEND CODE</button>
        </div>
        <div className={styles.verify}>
          <input
            type="email"
            placeholder="4 DIGIT CODE"
            className={styles.signupInput}
          />
          <button>VERIFY</button>
        </div>

        <Link to="/" className={styles.signupButton}>
          <button>SIGN UP</button>
        </Link>
        <Link to="/">
          <h3>Already have an account</h3>
        </Link>
      </div>
    </main>
  );
}
export default signUp;
