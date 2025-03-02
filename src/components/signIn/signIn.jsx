import styles from "./signIn.module.css";
import { Link } from "react-router-dom";
function signIn() {
  return (
    <main className={styles.signinLayout}>
      <div className={styles.title}>
        <h1 className={styles.firstTitle}>CORN</h1>
        <h1 className={styles.secondTitle}>CHAT</h1>
      </div>

      <div className={styles.signInContainer}>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <Link to="cornChat">
          <button>SIGN IN</button>
        </Link>
        <Link className={styles.create} to="/signUp">
          <h1>SIGN UP</h1>
        </Link>
      </div>
    </main>
  );
}
export default signIn;
